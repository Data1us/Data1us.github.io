(function (window) {

    if (typeof (window.page) == "undefined") window.page = {};

    page.RedditTextScreen = (function (options) {
        var self = this;
        var target = $(options.target);
        var template = (typeof (options.customTemplate) !== "undefined")
            ? options.customTemplate
            : page.templates.RedditItem;
        var dataProvider = new page.RedditDataProvider();
        var name = options.name;
        var location = options.location;
        var itemType = options.itemType;
        var loadInterval = undefined;
        var loading = false;

        self.el = {
            target: target,
            template: template,
            options: options,
            dataProvider: dataProvider
        }


        self.render = function () {            
            self.el.target.html(page.templates.RedditTextScreen());
            self.priv.renderItems(undefined);
            self.attachEvents();            
        }

        self.attachEvents = function () {

            //screen-loader            
            loadInterval = setInterval(function(e) {
                if ($(self.el.target.find(".screen-loader")).isOnScreen() && !loading) {
                    loading = true;
            	    var after = self.el.target.find(".screen-items .reddit-item").last().find("input").val();
            	    self.priv.renderItems(after);            		
            	}
            }, 100);

        }

        self.dispose = function () {
            self.el.target.html("");
            clearInterval(loadInterval);
        };


        self.priv = {};
        self.priv.renderItems = function (after) {
            loading = true;
            //now lets get the reddit items.
            var limit = 50;
            self.el.dataProvider.get(name, itemType, limit, after, function (json) {
                var data = json.data;
                if (!_.isUndefined(data) && !_.isUndefined(data.children)) {

                    //lets render all the items.
                    var x = new page.RedditView({ target: self.el.target.find(".screen-items") });
                    x.render(data);

                }
                loading = false;
            });
        }
    });

})(window, Handlebars);