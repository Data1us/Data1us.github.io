(function (window) {

    if (typeof (window.page) == "undefined") window.page = {};

    page.RedditImageScreen = (function (options) {
        var self = this;
        var target = $(options.target);
        var template = (typeof (options.customTemplate) !== "undefined")
            ? options.customTemplate
            : page.templates.RedditImage;
        var dataProvider = new page.RedditDataProvider();
        var name = options.name;
        var location = options.location;
        var itemType = options.itemType;
        var loadInterval = undefined;
        var loading = true;
        var loadAfter = undefined;

        self.el = {
            target: target,
            template: template,
            options: options,
            dataProvider: dataProvider
        }


        self.render = function () {
            loadAfter = undefined;
            self.el.target.html(page.templates.RedditImageScreen());
            self.priv.renderItems(undefined);
            self.attachEvents();            
        }

        self.attachEvents = function () {

            //screen-loader            
            loadInterval = setInterval(function(e) {
                if ($(self.el.target.find(".screen-loader")).isOnScreen() && !loading) {
                    loading = true;
            	    //var after = self.el.target.find(".screen-items .reddit-item").last().find("input").val();
                    self.priv.renderItems(loadAfter);
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
            self.priv.loader.show();
            //now lets get the reddit items.
            var limit = 25;
            self.el.dataProvider.get(location, itemType, limit, after, function (json) {
                var data = json.data;
                if (!_.isUndefined(data) && !_.isUndefined(data.children)) {

                    //lets render all the items.
                    var x = new page.RedditImageView({ target: self.el.target.find(".screen-items") });
                    x.render(data);

                    if (typeof (data.after) == "undefined" || data.after == null) clearInterval(loadInterval); //if this happens there are no more results to load.  Stop loading.
                    loadAfter = data.after;

                }
                else {
                    //we got no results, leave this thing as loading, and return
                    self.priv.loader.hide();
                    loading = true;
                    return;
                }
                loading = false;
                self.priv.loader.hide();
            });
        }
        self.priv.loader = {
            show: function () { self.el.target.find(".loader-icon").show(); },
            hide: function () { self.el.target.find(".loader-icon").hide(); },

        }
    });

})(window, Handlebars);