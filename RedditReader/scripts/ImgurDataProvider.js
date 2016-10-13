(function (window) {

    if (typeof (window.page) == "undefined") window.page = {};
    page.ImgurDataProvider = (function (options) {
        var self = this;
        var datastore = undefined;
        self.priv = {};
        self.getGallery = function (page, section, sort, callback) {

            //if we have datastore items use that.
            if (page > 1) {
                callback({ data: datastore[page - 1] });
                return;
            }
            var rel = "http://api.imgur.com/3/gallery/" + section + "/" + sort + "/" + page;
            $.getJSON(rel, function (json) {
                if (page == 1 && typeof (json.data) !== "undefined") {
                    datastore = self.priv.chunkarr(json.data);
                    callback({ data: datastore[page - 1] });
                    return;
                }
                callback(json);
            });
        };

        self.priv.chunkarr = function (someArray) {
            var groupSize = 50;
            var groups = _.map(someArray, function (item, index) {
                return index % groupSize === 0 ? someArray.slice(index, index + groupSize) : null;
            })
            .filter(function (item) {
                return item;
            });
            return groups;
        };
    });

})(window, Handlebars);