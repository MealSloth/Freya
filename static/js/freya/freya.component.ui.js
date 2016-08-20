/**
 * Created by michael on 7/22/16.
 */

"use strict";

(function (Freya) {
    (Freya.Component || (Freya.Component = {}));

    Freya.Component.UI = {};

    Freya.Component.UI.Tab =
        ng.core
            .Component({
                selector: "msfy-tab",
                templateUrl: "/static/html/component/fragment/tab.html",
                inputs: ["tabTitle", "tabs"]
            })
            .Class({
                constructor: function () {
                    console.log("Tab");
                },
                ngOnInit: function () {
                    if (this.tabs != null) {
                        this.tabTitle = this.tabs[this.tabs.length - 1];
                    }
                    else {
                        this.tabTitle = "";
                    }
                },
                removeSelf: function () {
                    var index = this.tabs.indexOf(this.tabTitle);
                    this.tabs.splice(index, 1);
                }
            });

    Freya.Component.UI.Title =
        ng.core
            .Component({
                selector: "msfy-title",
                templateUrl: "/static/html/component/fragment/title.html",
                directives: [Freya.Component.UI.Tab]
            })
            .Class({
                constructor: function () {
                    console.log("Title");
                    this.count = 0;
                    this.tabs = [];
                },
                addTab: function () {
                    ++this.count;
                    this.tabs.push(this.count);
                }
            });
})(window.Freya || (window.Freya = {}));