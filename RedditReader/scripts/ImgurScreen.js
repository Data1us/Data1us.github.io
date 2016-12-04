(function (window) {

    if (typeof (window.page) == "undefined") window.page = {};

    page.ImgurScreen = (function (options) {
        var self = this;
        var target = $(options.target);
        var template = (typeof (options.customTemplate) !== "undefined")
            ? options.customTemplate
            : page.templates.ImgurScreen //TODO:Make the template for the screen.
        var dataProvider = new page.ImgurDataProvider();
        var name = options.name;
        var section = options.location;
        var sort = options.itemType;
        var thePage = 0;
        var loadInterval = undefined;
        var loading = true;
        var loadAfter = undefined;

        self.el = {
            target: target,
            template: template,
            options: options,
            dataProvider: dataProvider
        };


        self.render = function () {
            self.el.target.html(template());
            self.priv.renderItems(undefined);
            self.attachEvents();
        };

        self.attachEvents = function () {

            //screen-loader            
            loadInterval = setInterval(function (e) {
                if ($(self.el.target.find(".screen-loader")).isOnScreen() && !loading) {
                    self.priv.renderItems();
                }
            }, 100);

        };

        self.dispose = function () {
            clearInterval(loadInterval);
            self.el.target.html("");
        };


        self.priv = {};
        self.priv.renderItems = function () {
            loading = true;
            self.priv.loader.show();            
            dataProvider.getGallery(thePage, section, sort, function (json) {
                
                //we got no results.  stop doing anything.
                if (_.isUndefined(json) || _.isUndefined(json.data) || json.data.length === 0) {
                    clearInterval(loadInterval);
                    loading = true;
                    self.priv.loader.hide();
                    return;
                }

                thePage = thePage + 1;
                _.each(json.data, function (item) {                    
                    var thumb = (item.is_album)
                        ? "//i.imgur.com/" + item.cover + "b.jpg"
                        : "//i.imgur.com/" + item.id + "b.jpg"
                    var model = {
                        title: item.title,
                        thumb: thumb,
                        link: typeof (item.gifv) !== "undefined" && item.gifv.length > 0 && !item.is_album ? item.gifv : item.link,
                        gifv: typeof (item.gifv) !== "undefined" && item.gifv.length > 0 && !item.is_album ? true : false,
						id:item.id
                    }

                    if (model.gifv) return;

                    //TODO: Make a view....
                    var markup = page.templates.ImgurItem(model);

                    target.find(".screen-items").append(page.templates.ImgurItem(model));
                    self.el.target.find('[data-toggle="tooltip"]').tooltip();

                    loading = false;
                    self.priv.loader.hide();
                });

                self.el.target.find("img").unbind("click").click(function (e) {
                    e.preventDefault();
                    var item = $(this);
                    var link = item.attr("data-link");
					var id = item.attr("data-id");
                    var title = item.attr("title");
                    var fallbackTitle = item.attr("data-original-title");
                    if (title.length == 0) title = fallbackTitle;
                    var gifv = item.attr("data-gifv");					
                    var message = (gifv === "true") 
                        ? '<iframe src="' + link + '" style="width:800px; height:800px;" ></iframe>'
                        : page.templates.ImgurEmbedView({ id: id, link: link.replace("http", "https") });
                    var dialog = bootbox.dialog({
                        title: title,
                        message: message,
						size:"large",
                        onEscape: function () { }
                    });
                });
            });
        };

        self.priv.loader = {
            show: function () { self.el.target.find(".loader-icon").show(); },
            hide: function () { self.el.target.find(".loader-icon").hide(); }
        };
        
    });

})(window, Handlebars);