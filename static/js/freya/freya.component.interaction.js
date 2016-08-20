/**
 * Created by michael on 7/22/16.
 */

"use strict";

(function (Freya) {
    (Freya.Component || (Freya.Component = {}));

    Freya.Component.Interaction = {};

    Freya.Component.Interaction.Interaction =
        ng.core
            .Component({
                selector: "msfy-interaction",
                templateUrl: "/static/html/component/fragment/interaction.html"
            })
            .Class({
                constructor: function () {
                    console.log("Interaction");
                    this.getData("19cf9f4d-4dbb-4737-9332-6453b32f9988");
                },
                getData: function (interactionID) {
                    Freya.API.Interaction.Get(interactionID, this);
                }
            });

    Freya.Component.Interaction.InteractionList =
        ng.core
            .Component({
                selector: "msfy-interaction-list",
                templateUrl: "/static/html/component/fragment/interaction-list.html"
            })
            .Class({
                constructor: function () {
                    console.log("InteractionList");
                    this.getData();
                },
                getData: function () {
                    Freya.API.Interaction.GetAll(this);
                }
            });
})(window.Freya || (window.Freya = {}));