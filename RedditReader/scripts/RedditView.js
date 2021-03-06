﻿(function (window) {

    if (typeof (window.page) == "undefined") window.page = {};

    page.RedditView = (function (options) {
        var self = this;
        var target = $(options.target);
        var template = (typeof (options.customTemplate) !== "undefined")
            ? options.customTemplate
            : page.templates.RedditItem;

        //really nasty is image function.
        var isImage = function(input){
        	if (input.indexOf(".jpg") > 0) return true;
        	if (input.indexOf(".gif") > 0 && input.indexOf(".gifv") == -1) return true;
        	return false;
        };

        var getThumbnail = function(input) {
        	if (input.indexOf("nsfw") > -1) return "/Content/nsfw.png";
        	return input;
        }

        self.el = {
            target: target,
            template: template,
            options: options
        }

        self.render = function (data) {

            _.each(data.children, function (item) {
                var itemModel = {
                    title: item.data.title,
                    author: item.data.author,
                    content: item.data.selftext || item.data.selftext_html,
                    permalink: item.data.permalink,
                    name: item.data.name,
                    subreddit: item.data.subreddit
                };
                if (!_.isUndefined(item.data.num_comments)) itemModel.commentCount = item.data.num_comments;
                if (!_.isUndefined(item.data.thumbnail) && item.data.thumbnail != "" && item.data.thumbnail != "self" && item.data.thumbnail != "default") itemModel.thumbnail = getThumbnail(item.data.thumbnail);
                if (!_.isUndefined(item.data.url) && item.data.url != "" && isImage(item.data.url)) {
                    itemModel.isLink = true;
                    itemModel.link = item.data.url;
                    itemModel.linkShort = (item.data.url.length > 50) ? item.data.url.substring(0, 50) + "...." : item.data.url;
                }
                if ((typeof (item.data.media) != "undefined" && item.data.media !== null) && typeof (item.data.media.oembed) != "undefined") {
                    itemModel.hasEmbed = true;
                    itemModel.mediaType = item.data.media.type;
                    itemModel.embedMarkup = item.data.media.oembed.html;
                }

                if (!_.isUndefined(item.data.post_hint) && item.data.post_hint == "image") {
                    itemModel.hasEmbed = true;
                    itemModel.mediaType = item.data.url;
                    itemModel.embedMarkup = $('<div/>').text('<img src="' + item.data.url + '" style="max-width:80%; max-height:600px;"/>').html();
                }

                if (!_.isUndefined(item.data.url) && item.data.url.endsWith(".gifv")) {
                    itemModel.hasEmbed = true;
                    itemModel.mediaType = item.data.url;
                    itemModel.embedMarkup = $('<div/>').text('<img src="' + item.data.url.replace(".gifv", ".gif") + '" style="max-width:80%; max-height:600px;"/>').html();
                }

                if (!itemModel.hasEmbed && !_.isUndefined(item.data.url) && item.data.url.indexOf("imgur.com") &&
                    typeof (item.data.preview) != "undefined" && !_.isUndefined(item.data.preview.images) && item.data.preview.images.length > 0) {
                
                    if (!_.isUndefined(item.data.preview.images[0].source)) {
                        itemModel.hasEmbed = true;                        
                        itemModel.mediaType = item.data.url;
                        itemModel.embedMarkup = $('<div/>').text('<img src="' + item.data.preview.images[0].source.url + '" style="max-width:80%; max-height:600px;"/>').html();
                    }
                    

                }

                
                var markup = $(self.el.template(itemModel).replace(/\ufeff/, ''));
                self.el.target.append(markup);
                markup.find(".show-media").click(function (e) {                    
                    var embedContainer = $(this).closest(".reddit-item");
                    var embedMarkup = embedContainer.find(".embed-src").attr("data-src");
                    var htmlLoc = embedContainer.find(".embed-container");
                    if (htmlLoc.html().length > 0) {                        
                        htmlLoc.find("iframe, img").hide();
                        setTimeout(function () {
                            htmlLoc.html("");
                        }, 2000);
                    }
                    else {
                        htmlLoc.html($('<div/>').html(embedMarkup).text());
                    }                    
                });

                markup.find(".show-comments").click(function (e) {
                    var embedContainer = $(this).closest(".reddit-item");                    
                    var htmlLoc = embedContainer.find(".comment-section");
                    if (htmlLoc.html().length > 0) {                        
                        htmlLoc.html("");
                        htmlLoc.removeClass("show");
                    }
                    else {
                        new page.RedditItemDataProvider("http://www.reddit.com" + itemModel.permalink)
                            .get(function (daJson) {
                                console.log(daJson);
                                htmlLoc.addClass("show");
                                var view = new page.RedditItemView({ target: htmlLoc });
                                view.render(daJson);

                            });
                    }
                });
                              
            });

                
        }

        var destroyMe = function () {
            var self = this;
            self.el().target.html("");
        };        
    });

})(window, Handlebars);