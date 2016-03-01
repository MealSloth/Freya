/**
 * Created by michael on 2/29/16.
 */

(function(freya) {
    freya.AppComponent =
        ng.core.Component({
            selector: 'msfy-main',
            template: '<h1>Angular {{test}}</h1>'
        })
            .Class({
                constructor: function()
                {
                    "use strict";
                    this.test = "test";
                }
            });
})(window.freya || (window.freya = {}));