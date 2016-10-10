(function (window) {

    if (typeof (window.page) == "undefined") window.page = {};

    page.RedditImageView = (function (options) {
        var self = this;
        var target = $(options.target);
        var template = (typeof (options.customTemplate) !== "undefined")
            ? options.customTemplate
            : page.templates.RedditImage;

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
                    name: item.data.name
                };
                if (!_.isUndefined(item.data.num_comments)) itemModel.commentCount = item.data.num_comments;
                if (!_.isUndefined(item.data.thumbnail) && item.data.thumbnail != "" && item.data.thumbnail != "self" && item.data.thumbnail != "default") itemModel.thumbnail = item.data.thumbnail;
                if (!_.isUndefined(item.data.url) && item.data.url != "" && item.data.url.indexOf("reddit.com") == -1) {
                    itemModel.isLink = true;
                    itemModel.link = item.data.url;
                    itemModel.linkShort = (item.data.url.length > 50) ? item.data.url.substring(0, 50) + "...." : item.data.url;
                }
                if (!_.isUndefined(itemModel.thumbnail) && !_.isUndefined(itemModel.link)) {
                    self.el.target.append(self.el.template(itemModel).replace(/\ufeff/, ''));
                }

            }); 
        }

        var destroyMe = function () {
            var self = this;
            self.el().target.html("");
        };        
    });

})(window, Handlebars);