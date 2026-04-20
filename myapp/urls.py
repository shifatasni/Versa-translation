from django.urls import path
from .import views

urlpatterns = [
    path('',views.index,name='index'),
    path('services',views.services,name='services'),
    path('languages',views.languages,name='languages'),
    path('contact',views.contact,name='contact'),
]