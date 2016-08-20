/**
 * Created by michael on 7/22/16.
 */

"use strict";

(function (Freya) {
    (Freya.Component || (Freya.Component = {}));

    Freya.Component.User = {};

    Freya.Component.User.UserInfo =
        ng.core
            .Component({
                selector: "msfy-user-info",
                templateUrl: "/static/html/component/fragment/user-info.html"
            })
            .Class({
                constructor: function () {
                    console.log("UserInfo");
                    this.getData("57a8e6c8-dc7e-461d-9854-8a96bd88e4b7");
                },
                getData: function (userID) {
                    Freya.API.User.Get(userID, this);
                }
            });
})(window.Freya || (window.Freya = {}));