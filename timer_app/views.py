from django.shortcuts import render

def index(request):
    return render(request, 'timer_app/index.html')
