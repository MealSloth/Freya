from view.auth import view_auth_user_add, view_login, view_logout
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.shortcuts import render


@login_required
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
