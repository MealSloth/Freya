/**
 * Created by michael on 3/11/16.
 */

"use strict";

var getCookie = function(name) {
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
};

var ajaxPrepare = function() {
    var csrftoken = getCookie('csrftoken');
    $.ajaxSetup({
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    });
};

var APIInteraction = function(interaction_id, context) {
    var request = {};
    if (interaction_id !== null) {
        request["interaction_id"] = interaction_id;
    }
    ajaxPrepare();
    $.ajax({
        url: "/interaction/",
        type: "POST",
        data: JSON.stringify(request),
        dataType: "json",
        contentType: "application/json",
        success: function (response, status, jqXHR) {
            var interaction = response["interaction"];
            context.interactionID = interaction["id"];
            context.userID = interaction["user_id"];
            context.assigneeID = interaction["assignee_id"];
            context.interactionType = interaction["interaction_type"];
            context.messageTitle = interaction["message_title"];
            context.messageBody = interaction["message_body"];
            context.time = interaction["time"].substring(0,10) + " " + interaction["time"].substring(11,16);
        },
        error: function (jqXHR, status, error) {
            return error;
        }
    });
};

var APIInteractions = function(context) {
    var request = {"foo": "bar"};
    ajaxPrepare();
    $.ajax({
        url: "/interaction/",
        type: "POST",
        data: JSON.stringify(request),
        dataType: "json",
        contentType: "application/json",
        success: function (response, status, jqXHR) {
            console.log(response);
            context.interactions = response["interactions"];
        },
        error: function (jqXHR, status, error) {
            return error;
        }
    })
};

var APIInteractionCreate = function(user_id) {
    var request = {};
    request["user_id"] = user_id;
    ajaxPrepare();
    $.ajax({
        url: "/interaction/create/",
        type: "POST",
        data: JSON.stringify(request),
        dataType: "json",
        contentType: "application/json",
        success: function (response, status, jqXHR) {
            return response;
        },
        error: function (jqXHR, status, error) {
            return error;
        }
    })
};

var APIInteractionEdit = function(interaction_id) {
    var request = {};
    request["interaction_id"] = interaction_id;
    ajaxPrepare();
    $.ajax({
        url: "/interaction/edit/",
        type: "POST",
        data: JSON.stringify(request),
        dataType: "json",
        contentType: "application/json",
        success: function (response, status, jqXHR) {
            return response;
        },
        error: function (jqXHR, status, error) {
            return error;
        }
    })
};

var APIInteractionDelete = function(interaction_id) {
    var request = {};
    request["interaction_id"] = interaction_id;
    ajaxPrepare();
    $.ajax({
        url: "/interaction/delete/",
        type: "POST",
        data: JSON.stringify(request),
        dataType: "json",
        contentType: "application/json",
        success: function (response, status, jqXHR) {
            return response;
        },
        error: function (jqXHR, status, error) {
            return error;
        }
    })
};