/**
 * Created by michael on 2/29/16.
 */

"use strict";

(function (Freya) {
    Freya.AppComponent =
        ng.core
            .Component({
                selector: "msfy-main",
                templateUrl: "/static/html/component/main.html",
                directives: [
                    Freya.Component.UI.Title,
                    Freya.Component.Interaction.Interaction,
                    Freya.Component.Interaction.InteractionList,
                    Freya.Component.User.UserInfo
                ]
            })
            .Class({
                constructor: function () {
                    console.log("Freya");
                }
            });
})(window.Freya || (window.Freya = {}));