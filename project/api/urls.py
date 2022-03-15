from django.urls import path
from . import views

urlpatterns = [
    path("projects/", views.show_projects, name = "show_projects"),
    path("projects/details/<int:id>/", views.project_details, name = "project_details"),
    path("projects/edit/<int:id>/", views.edit_project, name = "edit_project"),
    path("projects/delete/<int:id>/", views.delete_project, name = "delete_project"),
    path("articles/", views.show_articles, name = "show_articles"),
    path("articles/details/<int:id>/", views.article_details, name = "article_details"),
    path("articles/edit/<int:id>/", views.edit_article, name = "edit_article"),
    path("articles/delete/<int:id>/", views.delete_article, name = "delete_article")
]