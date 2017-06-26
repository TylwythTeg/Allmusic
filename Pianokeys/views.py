from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

import sys
sys.path.append("C:/Users/Rob/Django-Projects/mysite/panmusic/")
from Scale import *
from Note import *
from Chord import *
from Note import *
from Fretboard import Fretboard


def index(request):
    return HttpResponse("hey")


def scale(request, scale_type, root):
    root = Note.from_string(root)
    scl = Scale.factory(scale_type, root)


    #return HttpResponse("scale")
    return render(request, "pianokeys/pianokeys.html", {'scale_name': scl.name})