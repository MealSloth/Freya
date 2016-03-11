/**
 * Created by michael on 3/11/16.
 */

"use strict";

(function(freya) {
    var APIInteraction = function(interaction_id) {
        var data = {};
        data["interaction_id"] = interaction_id;
        $.getJSON("/interaction/", function(data) {
            return data;
        });
    }
})(window.freya || (window.freya = {}));