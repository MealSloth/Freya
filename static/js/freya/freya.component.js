/**
 * Created by michael on 2/29/16.
 */

"use strict";

(function(freya) {
    /** Child components **/
    var Interaction =
        ng.core.Component({
            selector: "msfy-interaction",
            templateUrl: "/static/html/component/fragment/interaction.html",
            inputs: ['data']
        })
            .Class({
                constructor: function() {},
                getCookie: function(name) {
                    var cookieValue = null;
                    if (document.cookie && document.cookie != '') {
                        var cookies = document.cookie.split(';');
                        for (var i = 0; i < cookies.length; i++) {
                            var cookie = jQuery.trim(cookies[i]);
                            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                                break;
                            }
                        }
                    }
                    return cookieValue;
                },
                getData: function() {
                    var request = {};
                    var csrftoken = this.getCookie('csrftoken');
                    request["interaction_id"] = "19cf9f4d-4dbb-4737-9332-6453b32f9988";
                    $.ajaxSetup({
                        beforeSend: function (xhr) {
                            xhr.setRequestHeader("X-CSRFToken", csrftoken);
                        }
                    });
                    console.log(request);
                    $.ajax({
                        url: "/interaction/",
                        type: "POST",
                        data: JSON.stringify(request),
                        dataType: "json",
                        contentType: "application/json; charset=utf-8",
                        success: function(response, status, jqXHR) {
                            console.log(response);
                            return response;
                        },
                        error: function(jqXHR, status, error) {
                            console.log(error);
                        }
                    })
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
            directives: [Title, Tab, Interaction]
        })
            .Class({
                constructor: function() {}
            });
})(window.freya || (window.freya = {}));