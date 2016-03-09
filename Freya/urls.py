from django.conf.urls import patterns, url
import views


urlpatterns = patterns(
    '',
    url(r'^$', views.index, name='index'),
    url(r'^login/', views.login, name='login'),
    url(r'^logout/', views.logout, name='logout'),
    url(r'^auth-user-add/', views.auth_user_add, name='auth-user-add'),
)
