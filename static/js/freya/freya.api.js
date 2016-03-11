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

var APIInteraction = function(interaction_id) {
    var request = {};
    request["interaction_id"] = interaction_id;
    ajaxPrepare();
    console.log(request);
    $.ajax({
        url: "/interaction/",
        type: "POST",
        data: JSON.stringify(request),
        dataType: "json",
        contentType: "application/json",
        success: function (response, status, jqXHR) {
            console.log(response);
            return response;
        },
        error: function (jqXHR, status, error) {
            console.log(error);
        }
    })
};

var APIInteractionCreate = function(user_id) {
    var request = {};
    request["user_id"] = user_id;
    ajaxPrepare();
    console.log(request);
    $.ajax({
        url: "/interaction/create/",
        type: "POST",
        data: JSON.stringify(request),
        dataType: "json",
        contentType: "application/json",
        success: function (response, status, jqXHR) {
            console.log(response);
            return response;
        },
        error: function (jqXHR, status, error) {
            console.log(error);
            return error;
        }
    })
};

var APIInteractionEdit = function(interaction_id) {
    var request = {};
    request["interaction_id"] = interaction_id;
    ajaxPrepare();
    console.log(request);
    $.ajax({
        url: "/interaction/edit/",
        type: "POST",
        data: JSON.stringify(request),
        dataType: "json",
        contentType: "application/json",
        success: function (response, status, jqXHR) {
            console.log(response);
            return response;
        },
        error: function (jqXHR, status, error) {
            console.log(error);
            return error;
        }
    })
};

var APIInteractionDelete = function(interaction_id) {
    var request = {};
    request["interaction_id"] = interaction_id;
    ajaxPrepare();
    console.log(request);
    $.ajax({
        url: "/interaction/delete/",
        type: "POST",
        data: JSON.stringify(request),
        dataType: "json",
        contentType: "application/json",
        success: function (response, status, jqXHR) {
            console.log(response);
            return response;
        },
        error: function (jqXHR, status, error) {
            console.log(error);
            return error;
        }
    })
};