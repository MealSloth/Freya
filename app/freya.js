/**
 * Created by michael on 2/29/16.
 */

(function(app) {
    document.addEventListener('DOMContentLoaded', function()
    {
        ng.platform.browser.bootstrap(app.AppComponent);
    });
})(window.app || (window.app = {}));