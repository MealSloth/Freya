/**
 * Created by michael on 2/29/16.
 */

"use strict";

(function (Freya) {
    document.addEventListener("DOMContentLoaded", function() {
        ng.platformBrowserDynamic
            .platformBrowserDynamic()
            .bootstrapModule(Freya.AppModule);
    });
})(window.Freya || (window.Freya = {}));