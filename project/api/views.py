from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from myprojects.models import Project
from myarticles.models import Article
from .serializers import ProjectSerializer, ArticleSerializer


#------------- PROJECTS ---------------------#
@api_view(["GET", "POST"])
def show_projects(request):
    if request.method == "POST":
        serialized_data = ProjectSerializer(data = request.data)

        if serialized_data.is_valid():
            serialized_data.save()
        else:
            return HttpResponse("Please check your data")
    else:
        data = Project.objects.all()
        serialized_data = ProjectSerializer( data = data, many = True)
    return Response(serialized_data.data)
   

@api_view(["GET"])
def project_details(request, id):
    data = Project.objects.get(pk = id)
    serialized_data = ProjectSerializer(data)
    return Response(serialized_data.data)
    

@api_view(["PUT"])
def edit_project(request, id):
    return HttpResponse("Edit project " + str(id))

@api_view(["DELETE"])
def delete_project(request, id):
    data = Project.objects.get(pk = id)
    data.delete()



#------------ ARTICLES --------------------------#
@api_view(["GET", "POST"])
def show_articles(request):
    if request.method == "POST":
        serilized_data = ArticleSerializer(data = request.data, many = False)
        if serialized_data.is_valid():
            serialized_data.save()
    else:
        data = Article.objects.all()
        serialized_data = ArticleSerializer(data, many = True)
    return Response(serialized_data.data)
        
        

@api_view(["GET"])
def article_details(request, id):
    data = Article.objects.get(pk = id)
    serialized_data = ArticleSerializer(data)
    return Response(serialized_data.data)


def edit_article(request, id):
    return HttpResponse("Edit article", str(id))

@api_view(["DELETE"])
def delete_article(request, id):
    data = Article.objects.get(pk = id)
    data.save()
