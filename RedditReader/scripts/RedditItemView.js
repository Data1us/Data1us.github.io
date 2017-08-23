(function (window) {

    if (typeof (window.page) == "undefined") window.page = {};

    page.RedditItemView = (function (options) {
        var self = this;
        var target = $(options.target);
        var template = (typeof (options.customTemplate) !== "undefined")
            ? options.customTemplate
            : page.templates.RedditFullItem;

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



            var item = data[0];
            var comments = data[1];

            var itteration = 0;
            var drawComments = function (str, com) {
                itteration = itteration+1;
                if (com.kind == "Listing") {
                    _.each(com.data.children, function (child) {

                        //str = str + "<ul>"
                        str = str + drawComments("", child);
                        //str = str + "</ul>"
                    });
                }
                else if (com.kind == "t1") {

                    str = str + '<div class="panel-group" id="accordion'+itteration+'" role="tablist" aria-multiselectable="true">';
                    str = str + '  <div class="panel panel-default">';
                    str = str + '    <div class="panel-heading" role="tab" id="heading'+itteration+'">';
                    str = str + '      <span class="panel-title">';
                    str = str + '        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse' + itteration + '" aria-expanded="true" aria-controls="collapse' + itteration + '">';
                    //str = str + '<div class="col-sm-10">' + com.data.body + '</div><div class="col-sm-2">'+(!_.isUndefined(data.replies) ? com.data.replies.data.children.length : "")+'</div>';
                    str = str + com.data.body
                    str = str + '        </a>';
                    str = str + '      </span>';
                    str = str + '    </div>';
                    if (com.data.replies !== "") {
                        str = str + '    <div id="collapse' + itteration + '" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading' + itteration + '">';
                        str = str + '      <div class="panel-body">';


                        str = str + drawComments("", com.data.replies);


                        str = str + '      </div>';
                        str = str + '    </div>';
                    }
                    str = str + '  </div>  ';
                    str = str + '  </div>';
                    str = str + '</div>';                    

                }
                return str;
            };


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

                
            //var markup = $(self.el.template(itemModel).replace(/\ufeff/, ''));

            str = drawComments("",comments);
            self.el.target.append(str);

                              
           

                
        }

        var destroyMe = function () {
            var self = this;
            self.el().target.html("");
        };        
    });

})(window, Handlebars);