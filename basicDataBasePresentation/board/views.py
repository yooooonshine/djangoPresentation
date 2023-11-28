from django.shortcuts import render
from django.http import JsonResponse


# Create your views here.

def main(request):
    return render(request, 'board/main.html')


def get(request):
    print('get value:' + request.GET['getValue'])
    return render(request, 'board/main.html')


def post(request):
    print('post value: ' + request.POST['postValue'])
    return render(request, 'board/main.html')


def ajax(request):
    value = request.POST.get('value')
    print('ajax value: ' + value)
    return JsonResponse({'returnValue': value + '잘 받았어!'})
