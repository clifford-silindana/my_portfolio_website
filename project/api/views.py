from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from myprojects.models import Project
from myarticles.models import Article
from .serializers import ProjectSerializer, ArticleSerializer


#------------- PROJECTS ---------------------#
@api_view(["POST"])
def create_project(request):
    serialized_data = ProjectSerializer(data = request.data)

    if serialized_data.is_valid():
        serialized_data.save()
    return Response(serialized_data.data)

    

@api_view(["GET"])
def show_projects(request):
    data = Project.objects.all()
    serialized_data = ProjectSerializer(data, many = True)
    return Response(serialized_data.data)
   

@api_view(["GET"])
def project_details(request, id):
    data = Project.objects.get(pk = id)
    serialized_data = ProjectSerializer(data)
    return Response(serialized_data.data)
    

@api_view(["PUT"])
def edit_project(request, id):
    project = Project.objects.get(id = id)
    data = Project.objects.get(id = id)
    serialized_data = ProjectSerializer(instance = project, data = request.data)

    if serialized_data.is_valid():
        serialized_data.save()
    return Response(serialized_data.data)


@api_view(["DELETE"])
def delete_project(request, id):
    data = Project.objects.get(pk = id)
    data.delete()
    return HttpResponse("Project deleted")


@api_view(["GET"])
def show_web2_projects(request):
    projects = Project.objects.filter(category = "web 2.0")
    serialized_data = ProjectSerializer(projects, many = True)

    return Response(serialized_data.data)

@api_view(["GET"])
def show_web3_projects(request):
    projects = Project.objects.filter(category = "web 3.0")
    serialized_data = ProjectSerializer(projects, many = True)

    return Response(serialized_data.data)

@api_view(["GET"])
def show_data_science(request):
    projects = Project.objects.filter(category = "data science")
    serialized_data = ProjectSerializer(projects, many = True)

    return Response(serialized_data.data)



#------------ ARTICLES --------------------------#
@api_view(["GET"])
def show_articles(request):
    data = Article.objects.all()
    serialized_data = ArticleSerializer(data, many = True)
    return Response(serialized_data.data)

@api_view(["POST"])
def create_article(request):
    data = request.data 
    serialized_data = ArticleSerializer(data = data, many = False)

    if serialized_data.is_valid():
        serialized_data.save()   
    return HttpResponse("Please check your data.") 
        

@api_view(["GET"])
def article_details(request, id):
    data = Article.objects.get(pk = id)
    serialized_data = ArticleSerializer(data)
    return Response(serialized_data.data)

@api_view(["PUT"])
def edit_article(request, id):
    article = Article.objects.get(id = id)
    data = request.data 
    serialized_data = ArticleSerializer(instance = article, data = data)

    if serialized_data.is_valid():
        serialized_data.save()
    return HttpResponse("Article updated")
    

@api_view(["DELETE"])
def delete_article(request, id):
    data = Article.objects.get(pk = id)
    data.delete()

@api_view(["GET"])
def show_SD_articles(request):
    articles = Article.objects.filter(category = "software development")
    serialized_data = ArticleSerializer(articles, many =True)

    return Response(serialized_data.data)

@api_view(["GET"])
def show_business_articles(request):
    articles = Article.objects.filter(category = "business")
    serialized_data = ArticleSerializer(articles, many =True)

    return Response(serialized_data.data)

@api_view(["GET"])
def show_investments_articles(request):
    articles = Article.objects.filter(category = "investments")
    serialized_data = ArticleSerializer(articles, many =True)

    return Response(serialized_data.data)
