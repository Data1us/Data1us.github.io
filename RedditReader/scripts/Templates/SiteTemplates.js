(function() {
  var template = Handlebars.template, templates = page.templates = page.templates || {};
templates['ImgurEmbedView'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "﻿<iframe allowfullscreen=\"true\" \r\nmozallowfullscreen=\"true\" \r\nwebkitallowfullscreen=\"true\" \r\nclass=\"imgur-embed-iframe-pub imgur-embed-iframe-pub-a-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "-true-518\" \r\nscrolling=\"no\" \r\nsrc=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "/embed?pub=true&amp;ref=https%3A%2F%2Fblog.imgur.com%2F2015%2F04%2F07%2Fembed-your-post-anywhere%2F&amp;w=518\" \r\nid=\"imgur-embed-iframe-pub-a-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" \r\nstyle=\"height: 500px; width: 518px; margin: 10px 0px; padding: 0px;\">\r\n</iframe>";
},"useData":true});
templates['ImgurItem'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "﻿<div class=\"custom-img-padding col-xl-1 col-lg-2 col-md-3 col-xs-6 thumb\">    \r\n   <!-- <span>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>-->\r\n    <img class=\"img-gallery img-responsive\" src=\""
    + alias4(((helper = (helper = helpers.thumb || (depth0 != null ? depth0.thumb : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumb","hash":{},"data":data}) : helper)))
    + "\" alt=\"Banana\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" data-link=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\" data-gifv=\""
    + alias4(((helper = (helper = helpers.gifv || (depth0 != null ? depth0.gifv : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gifv","hash":{},"data":data}) : helper)))
    + ", data-id=\"id\">\r\n</div>";
},"useData":true});
templates['ImgurScreen'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "﻿<div class=\"imgur-screen\">\r\n    <div class=\"row screen-items\">\r\n       \r\n    </div>\r\n    <div class=\"row screen-loader\">\r\n        <div class=\"col-xs-12 loader-checker\">x</div>\r\n        <div class=\"col-xs-12 loader-icon text-center\">\r\n            <img src=\"./Content/loading.gif\" class=\"img-circle\" />\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
templates['LeftMenuItem'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "﻿<li>\r\n    <a id=\""
    + alias4(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data}) : helper)))
    + "\" href=\"\" rel=\""
    + alias4(((helper = (helper = helpers.Location || (depth0 != null ? depth0.Location : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Location","hash":{},"data":data}) : helper)))
    + "\" class=\"left-menu-item\">\r\n        <!--<i class=\"fa fa-dashboard\"></i> -->\r\n        <span>"
    + alias4(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data}) : helper)))
    + "</span>\r\n    </a>\r\n</li>";
},"useData":true});
templates['LeftMenuItemNew'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "﻿<li>\r\n    <a data-name=\""
    + alias4(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data}) : helper)))
    + "\" href=\"\" data-location=\""
    + alias4(((helper = (helper = helpers.Location || (depth0 != null ? depth0.Location : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Location","hash":{},"data":data}) : helper)))
    + "\" class=\"left-menu-item-new\" data-screen=\""
    + alias4(((helper = (helper = helpers.Screen || (depth0 != null ? depth0.Screen : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Screen","hash":{},"data":data}) : helper)))
    + "\" data-type=\""
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\">\r\n        <!--<i class=\"fa fa-dashboard\"></i> -->\r\n        <span>"
    + alias4(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data}) : helper)))
    + "</span>\r\n    </a>\r\n</li>";
},"useData":true});
templates['RedditImage'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "﻿<div class=\"custom-img-padding col-xl-1 col-lg-2 col-md-3 col-xs-6 thumb\">\r\n    <a href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" rel=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"reddit-image-link\" data-gallery>\r\n        <img class=\"img-gallery img-responsive\" src=\""
    + alias4(((helper = (helper = helpers.thumbnail || (depth0 != null ? depth0.thumbnail : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbnail","hash":{},"data":data}) : helper)))
    + "\" alt=\"Banana\">\r\n    </a>    \r\n</div>";
},"useData":true});
templates['RedditImageScreen'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "﻿<div class=\"reddit-image-screen\">\r\n    <div class=\"row screen-items\">\r\n        <div id=\"image-section\">\r\n            <div id=\"links\"></div>            \r\n        </div>\r\n    </div>\r\n    <div class=\"row screen-loader\">\r\n        <div class=\"col-xs-12 loader-checker\">x</div>\r\n        <div class=\"col-xs-12 loader-icon text-center\">\r\n            <img src=\"./Content/loading.gif\" class=\"img-circle\" />\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
templates['RedditItem'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <div class=\"redit-item-thumbnail img-thumbnail\"><img src=\""
    + container.escapeExpression(((helper = (helper = helpers.thumbnail || (depth0 != null ? depth0.thumbnail : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"thumbnail","hash":{},"data":data}) : helper)))
    + "\" /></div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <div class=\"reddit-item-link\"><a target=\"_blank\" href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.linkShort || (depth0 != null ? depth0.linkShort : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkShort","hash":{},"data":data}) : helper)))
    + "</a></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "﻿<div class=\"reddit-item row\">\r\n\r\n    <div class=\"col-sm-12 col-md-3 col-lg-2\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.thumbnail : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n\r\n    <div class=\"col-sm-12 col-md-9 col-lg-10\">\r\n\r\n        <h3 class=\"reddit-item-heading\">\r\n            "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\r\n            <input type=\"hidden\" value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" />\r\n\r\n            <div class=\"redit-item-content wordwrap\">"
    + alias4(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper)))
    + "</div>\r\n\r\n            <div class=\"redit-item-controls\">\r\n                <div class=\"redit-item-author\"><span>Submitted By: </span>"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "</div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isLink : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                <div class=\"reddit-item-comments\"><a target=\"_blank\" href=\"http://www.reddit.com"
    + alias4(((helper = (helper = helpers.permalink || (depth0 != null ? depth0.permalink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"permalink","hash":{},"data":data}) : helper)))
    + "\">View Comments "
    + alias4(((helper = (helper = helpers.commentCount || (depth0 != null ? depth0.commentCount : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"commentCount","hash":{},"data":data}) : helper)))
    + "</a></div>\r\n            </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n<hr />";
},"useData":true});
templates['RedditTextScreen'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "﻿<div class=\"reddit-text-screen\">\r\n    <div class=\"row screen-items\"></div>\r\n    <div class=\"row screen-loader\">\r\n        <div class=\"col-xs-12 loader-checker\">x</div>\r\n        <div class=\"col-xs-12 loader-icon text-center\">\r\n            <img src=\"./Content/loading.gif\" class=\"img-circle\" />\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});
})();