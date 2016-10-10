(function (window) {

    if (typeof (window.page) == "undefined") window.page = {};

    page.RedditTextScreen = (function (options) {
        var self = this;
        var target = $(options.target);
        var template = (typeof (options.customTemplate) !== "undefined")
            ? options.customTemplate
            : page.templates.RedditItem;
        var dataProvider = page.RedditDataProvider;
        var name = options.name;
        var itemType = options.itemType;

        self.el = {
            target: target,
            template: template,
            options: options,
            dataProvider
        }

        self.render = function () {
            var limit = 50;
            var after = undefined;
            var dp = new page.RedditDataProvider();
            dp.get(name, itemType, limit, after, function (json) {
                var data = json.data;
                if (!_.isUndefined(data) && !_.isUndefined(data.children)) {
                    var x = new page.RedditView({ target: content });
                    x.render(data);
                }
            });
        }

        self.dispose = function () {
            self.el.target.html("");
        };        
    });

})(window, Handlebars);