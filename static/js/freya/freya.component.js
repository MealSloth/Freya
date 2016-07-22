/**
 * Created by michael on 2/29/16.
 */

"use strict";

Freya.Component = {};

(function(freya) {
    /** Main Component **/
    freya.AppComponent =
        ng.core.Component({
            selector: "msfy-main",
            templateUrl: "/static/html/component/main.html",
            directives: [
                Freya.Component.UI.Title,
                Freya.Component.UI.Tab,
                Freya.Component.Interaction.Interaction,
                Freya.Component.Interaction.InteractionList,
                Freya.Component.User.UserInfo
            ]
        })
            .Class({
                constructor: function() {}
            });
})(window.freya || (window.freya = {}));