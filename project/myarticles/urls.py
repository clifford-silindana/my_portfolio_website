from django.urls import path
from . import views

urlpatterns = [
    path("articles/", views.show_articles, name = "show_articles")
]