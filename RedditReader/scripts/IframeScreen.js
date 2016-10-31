(function (window) {

    if (typeof (window.page) == "undefined") window.page = {};

    page.IframeScreen = (function (options) {
        var self = this;
        var target = $(options.target);
        var template = (typeof (options.customTemplate) !== "undefined")
            ? options.customTemplate
            : '<img class="loaderimg" src="./Content/loading.gif"/><div class="iframe-screen"><iframe src="{{url}}" class="hidden"></iframe></div>';
        
        self.el = {
            target: target,
            template: template,
            options: options        
        }


        self.render = function () {
            var compiledTemplate = Handlebars.compile(self.el.template);
            self.el.target.html(compiledTemplate({ url: self.el.options.itemType }));

            setTimeout(function () {
                self.el.target.find(".loaderimg").addClass("hidden");
                self.el.target.find("iframe").removeClass("hidden");
            }, 2000);
        }

        self.attachEvents = function () {

            
        }

        self.dispose = function () {
            self.el.target.html("");            
        };


        self.priv = {};
        
    });

})(window, Handlebars);