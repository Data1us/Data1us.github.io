(function (window) {

    if (typeof (window.page) == "undefined") window.page = {};
    page.RedditDataProvider = (function (options) {
        var self = this;    
        self.get = function (name, type, limit, after, callback) {                                  
            var rel = "http://www.reddit.com/r/" + name + "/" + type + "/.json?limit=" + limit;
            if (!_.isUndefined(after)) rel = rel + "&after=" + after;
            $.getJSON(rel + "&jsonp=?", function (json) {
                callback(json);
            });
        }       
    });

})(window, Handlebars);