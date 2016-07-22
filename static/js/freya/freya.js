/**
 * Created by michael on 2/29/16.
 */

Freya = {};

(function(freya) {
    document.addEventListener("DOMContentLoaded", function() {
        ng.platform.browser.bootstrap(freya.AppComponent);
    });
})(window.freya || (window.freya = {}));