from django.conf.urls import patterns, url
import views


urlpatterns = patterns(
    '',
    url(r'^$', views.index, name='index'),
    url(r'^login/', views.login, name='login'),
    url(r'^logout/', views.logout, name='logout'),
    url(r'^auth-user-add/', views.auth_user_add, name='auth-user-add'),

    # API
    url(r'^interaction/create/', views.interaction_create, name='interaction/create/'),
    url(r'^interaction/edit/', views.interaction_edit, name='interaction/edit/'),
    url(r'^interaction/', views.interaction, name='interaction/'),
    url(r'^user/', views.user, name='user/'),
)
