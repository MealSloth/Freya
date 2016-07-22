/**
 * Created by michael on 7/22/16.
 */

"use strict";

Freya.Helper = {
    CookieHelper: {
        GetCookie: function (name) {
            var cookieValue = null;
            if (document.cookie && document.cookie != "") {
                var cookies = document.cookie.split(";");
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = $.trim(cookies[i]);
                    if (cookie.substring(0, name.length + 1) == (name + "=")) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        },
        AjaxAppendCSRFHeader: function () {
            var csrftoken = Freya.Helper.CookieHelper.GetCookie("csrftoken");
            $.ajaxSetup({
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("X-CSRFToken", csrftoken);
                }
            });
        }
    }
};