from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import redirect, render
# Create your views here.


def home(request):
    return render (request,'home.html')
def services(request):
    return render (request,'services.html')
def languages(request):
    return render (request,'languages.html')
def contact(request):
    return render (request,'contact.html')