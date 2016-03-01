/**
 * Created by michael on 2/29/16.
 */

(function(freya) {
    document.addEventListener('DOMContentLoaded', function()
    {
        ng.platform.browser.bootstrap(freya.AppComponent);
    });
})(window.freya || (window.freya = {}));