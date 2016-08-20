/**
 * Created by michael on 3/12/16.
 */

"use strict";

(function (Freya) {
    Freya.Enum = {};

    Freya.Enum.UserGenderEnum = Object.freeze({
        0: "Male",
        1: "Female",
        2: "Other"
    });
    Freya.Enum.InteractionTypeEnum = Object.freeze({
        0: "Outgoing Task",
        1: "Customer Help Call",
        2: "Order Dispute",
        3: "Compliment",
        4: "Complaint"
    });
})(window.Freya || (window.Freya = {}));