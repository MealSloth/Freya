/**
 * Created by michael on 2/29/16.
 */

"use strict";

(function(freya) {
    /** Child components **/
    var InteractionList =
        ng.core.Component({
            selector: "msfy-interaction-list",
            templateUrl: "/static/html/component/fragment/interaction-list.html",
        })
            .Class({
                constructor: function() {
                    this.getData();
                },
                getData: function() {
                    APIInteractions(this);
                }
            });
    var Interaction =
        ng.core.Component({
            selector: "msfy-interaction",
            templateUrl: "/static/html/component/fragment/interaction.html",
        })
            .Class({
                constructor: function()
                {
                    this.getData("19cf9f4d-4dbb-4737-9332-6453b32f9988");
                },
                getData: function(interaction_id) {
                    APIInteraction(interaction_id, this);
                }
            });
    var Tab =
        ng.core.Component({
            selector: "msfy-tab",
            templateUrl: "/static/html/component/fragment/tab.html",
            inputs: ['tabTitle', 'tabs']
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
            });
    var Title =
        ng.core.Component({
            selector: "msfy-title",
            templateUrl: "/static/html/component/fragment/title.html",
            directives: [Tab]
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
            });
    /** Main Component **/
    freya.AppComponent =
        ng.core.Component({
            selector: "msfy-main",
            templateUrl: "/static/html/component/main.html",
            directives: [Title, Tab, Interaction, InteractionList]
        })
            .Class({
                constructor: function() {}
            });
})(window.freya || (window.freya = {}));