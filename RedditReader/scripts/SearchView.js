(function (window) {

    if (typeof (window.page) == "undefined") window.page = {};

    page.SearchView = (function (options) {
        var self = this;
        var target = $(options.target);
        var screens = options.screens;

        self.el = {
            target: target,
            screens: screens
        }


        self.render = function () {
           
            self.attachEvents();            
        }

        self.attachEvents = function () {

            self.el.target.find("#SubreditSearchBtn").click(function (e) {
                e.preventDefault();                
                var searchText = self.el.target.find("input.search-text").val();
                var type = self.el.target.find(".search-type.active").attr("data-type");
                if (typeof (window.currentScreen) != "undefined") window.currentScreen.dispose();

                var method = page.RedditTextScreen;
                if (type == "image") method = page.RedditImageScreen;
                var x = new method({
                    target: window.content,
                    name: searchText,
                    itemType: "new",
                    location: searchText
                });                
                window.currentScreen = x;
                x.render();
            });

            
        }

        self.dispose = function () {
            
        };


        self.priv = {};
        
    });

})(window, Handlebars);