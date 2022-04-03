from django.urls import path
from . import views

urlpatterns = [
    path("projects/", views.show_projects, name = "show_projects"),
    path("projects/create/", views.create_project, name = "create_project"),
    path("projects/details/<int:id>/", views.project_details, name = "project_details"),
    path("projects/edit/<int:id>/", views.edit_project, name = "edit_project"),
    path("projects/delete/<int:id>/", views.delete_project, name = "delete_project"),
    path("projects/web2/", views.show_web2_projects, name = "show_web2"),
    path("projects/web3/", views.show_web3_projects, name = "show_web3"),
    path("projects/data-science/", views.show_data_science, name = "show_data_science"),


    path("articles/", views.show_articles, name = "show_articles"),
    path("articles/create/", views.create_article, name = "cretae_article"),
    path("articles/details/<int:id>/", views.article_details, name = "article_details"),
    path("articles/edit/<int:id>/", views.edit_article, name = "edit_article"),
    path("articles/delete/<int:id>/", views.delete_article, name = "delete_article"),
    path("articles/software-development/", views.show_SD_articles, name = "show_SD_articles"),
    path("articles/business/", views.show_business_articles, name = "show_business"),
    path("articles/investments/", views.show_investments_articles, name = "show_investments"),
]