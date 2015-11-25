(function(window) {
	
	if (typeof(window.page) == "undefined") window.page = {};
	if (typeof(window.page.widgets) == "undefined") window.page.widgets = {};
	
	
	page.chatwidget = (function(options){
		var target = $(options.target);		
		var source   = '<iframe src="{{url}}" class="chat-iframe"></iframe>';
		var template = Handlebars.compile(source);
		var el = {
			target:target
		}
		
		var render = function(){
			var forceRender = typeof(options.forceRender) != "undefined" ? options.forceRender : false;
			if (!forceRender && target.find("iframe").length !== 0) return;
			target.html(template({url:options.url}));		
		}
		
		return {
			el: el,
			render: render
		}
	})
	
})(window, Handlebars);