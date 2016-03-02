/**
 * Created by michael on 2/29/16.
 */

(function(freya) {
    /** Child components **/
    var tab =
        ng.core.Component({
            selector: "msfy-tab",
            templateUrl: "/static/html/component/fragment/tab.html"
        })
            .Class({
                constructor: function() {}
            })
    var title =
        ng.core.Component({
            selector: "msfy-title",
            templateUrl: "/static/html/component/fragment/title.html",
            directives: [tab]
        })
            .Class({
                constructor: function()
                {
                    "use strict";
                    this.count = 0;
                    this.tabs = [];
                },
                addTab: function()
                {
                    "use strict";
                    this.count = this.count + 1;
                    this.tabs.push(this.count);
                }
            });
    /** Main Component **/
    freya.AppComponent =
        ng.core.Component({
            selector: "msfy-main",
            templateUrl: "/static/html/component/main.html",
            directives: [title, tab]
        })
            .Class({
                constructor: function() {}
            });
})(window.freya || (window.freya = {}));