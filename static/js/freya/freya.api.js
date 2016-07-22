/**
 * Created by michael on 3/11/16.
 */

API = {
    Interaction: {
        Get: function (interaction_id, context) {
            var request = {};
            request["interaction_id"] = interaction_id;
            CookieHelper.AjaxAppendCSRFHeader();
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
                    context.time = interaction["time"].substring(0, 10) + " " + interaction["time"].substring(11, 16);
                },
                error: function (jqXHR, status, error) {
                    return error;
                }
            });
        },
        GetAll: function (context) {
            var request = {"foo": "bar"};
            CookieHelper.AjaxAppendCSRFHeader();
            $.ajax({
                url: "/interaction/",
                type: "POST",
                data: JSON.stringify(request),
                dataType: "json",
                contentType: "application/json",
                success: function (response, status, jqXHR) {
                    context.interactions = response["interactions"];
                },
                error: function (jqXHR, status, error) {
                    return error;
                }
            })
        },
        Create: function (user_id) {
            var request = {};
            request["user_id"] = user_id;
            CookieHelper.AjaxAppendCSRFHeader();
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
        },
        Edit: function (interaction_id) {
            var request = {};
            request["interaction_id"] = interaction_id;
            CookieHelper.AjaxAppendCSRFHeader();
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
        },
        Delete: function (interaction_id) {
            var request = {};
            request["interaction_id"] = interaction_id;
            CookieHelper.AjaxAppendCSRFHeader();
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
        }
    },
    User: {
        Get: function (user_id, context) {
            var request = {};
            request["user_id"] = user_id;
            CookieHelper.AjaxAppendCSRFHeader();
            $.ajax({
                url: "/user/",
                type: "POST",
                data: JSON.stringify(request),
                dataType: "json",
                contentType: "application/json",
                success: function (response, status, jqXHR) {
                    var user = response["user"];
                    context.userID = user["id"];
                    context.email = user["email"];
                    context.firstName = user["first_name"];
                    context.lastName = user["last_name"];
                    context.phoneNumber = user["phone_number"];
                    context.dateOfBirth = user["date_of_birth"].substring(0, 10);
                    context.gender = UserGenderEnum[user["gender"]];
                    context.joinDate = user["join_date"].substring(0, 10) + " " + user["join_date"].substring(11, 16);
                },
                error: function (jqXHR, status, error) {
                    return error;
                }
            })
        }
    }
};