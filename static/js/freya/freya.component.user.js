/**
 * Created by michael on 7/22/16.
 */

"use strict";

Freya.Component.User = {
    UserInfo: ng.core.Component({
            selector: "msfy-user-info",
            templateUrl: "/static/html/component/fragment/user-info.html"
        })
            .Class({
                constructor: function() {
                    this.getData("57a8e6c8-dc7e-461d-9854-8a96bd88e4b7");
                },
                getData: function(userID) {
                    API.User.Get(userID, this);
                }
            })
};