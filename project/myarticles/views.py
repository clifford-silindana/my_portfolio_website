from this import d
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def show_articles(request):
    return HttpResponse("Welcome to all articles")
