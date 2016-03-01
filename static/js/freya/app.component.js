/**
 * Created by michael on 2/29/16.
 */

(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            template: '<h1>Angular</h1>'
        })
            .Class({
                constructor: function() {}
            });
})(window.app || (window.app = {}));