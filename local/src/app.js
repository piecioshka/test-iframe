(function () {
    'use strict';

    var getIframe = function () {
        return document.getElementById('iframe');
    };

    var getImage = function (place) {
        return place.getElementById('doodle');
    };

    window.addEventListener('load', function () {
        var iframe = getIframe();
        console.log(iframe);
        var image = getImage(iframe.contentWindow.document);
        console.log(image);
    });

}());
