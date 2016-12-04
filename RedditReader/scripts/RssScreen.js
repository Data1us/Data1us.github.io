(function (window) {

    if (typeof (window.page) == "undefined") window.page = {};

    page.RssScreen = (function (options) {
        var self = this;
        var target = $(options.target);
        var template = (typeof (options.customTemplate) !== "undefined")
            ? options.customTemplate
            : '<style>.rss-screen img{max-width:95%;}</style><div class="rss-screen">{{#each items}}<h1><a href="{{link}}" target="_blank">{{title}}</a></h1>{{{content}}}<hr><br><br>{{/each}}</div>';
        
        self.el = {
            target: target,
            template: template,
            options: options        
        }


        self.render = function () {		
			$.ajax({ 
				url: "https://api.rss2json.com/v1/api.json?rss_url="+options.itemType, 
				success:function(json) {				
					var compiledTemplate = Handlebars.compile(self.el.template);
					self.el.target.html(compiledTemplate(json));				
				}
			});
        }

        self.attachEvents = function () { }

        self.dispose = function () {
            self.el.target.html("");            
        };


        self.priv = {};
        
    });

})(window, Handlebars);