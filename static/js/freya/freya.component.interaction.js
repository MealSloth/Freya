/**
 * Created by michael on 7/22/16.
 */

"use strict";

Freya.Component.Interaction = {
    Interaction: ng.core.Component({
            selector: "msfy-interaction",
            templateUrl: "/static/html/component/fragment/interaction.html"
        })
            .Class({
                constructor: function()
                {
                    this.getData("19cf9f4d-4dbb-4737-9332-6453b32f9988");
                },
                getData: function(interactionID) {
                    API.Interaction.Get(interactionID, this);
                }
            }),
    InteractionList: ng.core.Component({
            selector: "msfy-interaction-list",
            templateUrl: "/static/html/component/fragment/interaction-list.html"
        })
            .Class({
                constructor: function() {
                    this.getData();
                },
                getData: function() {
                    API.Interaction.GetAll(this);
                }
            })
};