/**
 * Created by michael on 8/16/16.
 */

"use strict";

(function (Freya) {
    Freya.AppModule =
        ng.core
            .NgModule({
                imports: [
                    ng.platformBrowser.BrowserModule
                ],
                declarations: [
                    Freya.Component.User.UserInfo,
                    Freya.AppComponent
                ],
                bootstrap: [
                    Freya.AppComponent
                ]
            })
            .Class({
                constructor: function () {}
            });
})(window.Freya || (window.Freya = {}));