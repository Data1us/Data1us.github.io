(function (window) {

    if (typeof (window.page) == "undefined") window.page = {};

    page.ImgurScreen = (function (options) {
        var self = this;
        var target = $(options.target);
        var template = (typeof (options.customTemplate) !== "undefined")
            ? options.customTemplate
            : Handlebars.compile('<div class="imgur-screen"></div>'); //TODO:Make the template for the screen.
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


        self.dispose = function () {
            self.el.target.html("");            
        };


        self.priv = {};
        self.priv.renderItems = function () {            
            dataProvider.getGallery(section, sort, function (json) {
                _.each(json.data, function (item) {
                    target.find(".imgur-screen").append(item.title +"</br>")
                });
            });
        }
        
    });

})(window, Handlebars);