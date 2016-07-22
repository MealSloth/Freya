/**
 * Created by michael on 7/22/16.
 */

"use strict";

Freya.Component.UI = {
    Tab: ng.core.Component({
            selector: "msfy-tab",
            templateUrl: "/static/html/component/fragment/tab.html",
            inputs: ["tabTitle", "tabs"]
        })
            .Class({
                constructor: function() {},
                ngOnInit: function() {
                    if (this.tabs != null) {
                        this.tabTitle = this.tabs[this.tabs.length - 1];
                    }
                    else {
                        this.tabTitle = "";
                    }
                },
                removeSelf: function() {
                    var index = this.tabs.indexOf(this.tabTitle);
                    this.tabs.splice(index, 1);
                }
            }),
    Title: ng.core.Component({
            selector: "msfy-title",
            templateUrl: "/static/html/component/fragment/title.html",
            directives: [Freya.Component.UI.Tab]
        })
            .Class({
                constructor: function() {
                    this.count = 0;
                    this.tabs = [];
                },
                addTab: function() {
                    ++this.count;
                    this.tabs.push(this.count);
                }
            })
};