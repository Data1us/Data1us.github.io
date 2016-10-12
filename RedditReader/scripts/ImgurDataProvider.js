(function (window) {

    if (typeof (window.page) == "undefined") window.page = {};
    page.ImgurDataProvider = (function (options) {
        var self = this;
        self.getGallery = function (section, sort, callback) {
            var rel = "http://api.imgur.com/3/gallery/"+section+"/"+sort+"/0.json";            
            $.getJSON(rel, function (json) {
                callback(json);
            });
        }
    });

})(window, Handlebars);