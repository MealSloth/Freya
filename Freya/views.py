from _include.Chimera.Chimera.view.interaction import view_interaction, view_interaction_create
from _include.Chimera.Chimera.view.interaction import view_interaction_edit, view_interaction_delete
from _include.Chimera.Chimera.view.user import view_user
from view.auth import view_auth_user_add, view_login, view_logout
from django.views.decorators.csrf import ensure_csrf_cookie
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.shortcuts import render


@login_required
@ensure_csrf_cookie
def index(request):
    response = render(request, 'index.html')
    return HttpResponse(response)


@login_required
def auth_user_add(request):
    return view_auth_user_add.auth_user_add(request)


def login(request):
    return view_login.login(request)


def logout(request):
    return view_logout.logout(request)


# API

def interaction(request):
    return view_interaction.interaction(request)


def interaction_create(request):
    return view_interaction_create.interaction_create(request)


def interaction_edit(request):
    return view_interaction_edit.interaction_edit(request)


def user(request):
    return view_user.user(request)
