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

        self.el = {
            target: target,
            template: template,
            options: options,
            dataProvider: dataProvider
        }


        self.render = function () {            
            self.el.target.html(template());
            self.priv.renderItems(undefined);            
        }

        self.attachEvents = function () {            
        };

        self.dispose = function () {
            self.el.target.html("");            
        };


        self.priv = {};
        self.priv.renderItems = function () {            
            dataProvider.getGallery(section, sort, function (json) {
                _.each(json.data, function (item) {
                    var thumb = (item.is_album)
                        ? "//i.imgur.com/" + item.cover + "b.jpg"
                        : "//i.imgur.com/" + item.id + "b.jpg"
                    var model = {
                        title: item.title,
                        thumb: thumb
                    }

                    //TODO: Make a view....
                    target.find(".screen-items").append(page.templates.ImgurItem(model));
                    self.el.target.find('[data-toggle="tooltip"]').tooltip();
                });
            });
        }
        
    });

})(window, Handlebars);