(function(window) {
	
	if (typeof(window.page) == "undefined") window.page = {};
	if (typeof(window.page.widgets) == "undefined") window.page.widgets = {};


    page.chatwidget = (function(options) {
        var target = $(options.target);
        var source = (typeof (options.customTemplate) !== "undefined")
            ? options.customTemplate
            : '<img class="loaderimg" src="/img/hex-loader2.gif"/><iframe src="{{url}}" class="chat-iframe hidden"></iframe>';
        var template = Handlebars.compile(source);
        var el = {
            target: target,
            options: options
        }

        var render = function() {
            var self = this;
            var forceRender = typeof(options.forceRender) != "undefined" ? options.forceRender : false;
            if (!forceRender && target.find("iframe").length !== 0) return;
            target.html(template({ url: options.url }));
            var loadTime = typeof (self.el().options.loadTime) !== "undefined"
                ? self.el().options.loadTime
                : 1000;
            setTimeout(function() {
                self.el().target.find(".loaderimg").addClass("hidden");
                self.el().target.find("iframe").removeClass("hidden");
            },loadTime);
            
        }

        var destroyMe = function() {
            var self = this;
            self.el().target.html("");
        };

        return {
            el: function() { return el; },
            render: render,
            destroyMe: destroyMe
        }
    });

})(window, Handlebars);