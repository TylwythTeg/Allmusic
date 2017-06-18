from django.shortcuts import render
from django.http import HttpResponse
from django.template.defaulttags import register

import sys
sys.path.append("C:/Users/Rob/Django-Projects/mysite/panmusic/")
from Scale import *
from Note import *
from Chord import *
from Note import *

#def index(request):
    #return render(request, 'blog/scale_a.html')
def index(request, scale_type):
    print(scale_type)
    scl = Scale.factory(scale_type, Note.E)

    return render(request, 'blog/scale_a.html',{'content': scl.notes,'scale_name': scl.name, 'scale' : scl, 'the_triads': scl.triads })

def scale(request, scale_type, root):
    root = Note.from_string(root)
    scl = Scale.factory(scale_type, root)

    #scl = Scale.create
    #print("SDFDFSDFSDFSDFSF------------!!!!!!!!!!")

    return render(request, 'blog/scale_b.html',{
        'content': scl.notes,
        'scale_name': scl.name, 
        'scale' : scl, 
        'the_triads': scl.triads, 
        'seven_chords': scl.tetrads }
        )

def test(request):
    chord = Chord.create("Dominant Seventh", Note.FSHARP, triad="Minor")
    interval_string = Interval.MINOR_SIXTH.__str__()
    return render(request, 'blog/test.html', {'chord': chord, 'interval': interval_string})

def triad(request, triad_type, root):
    root = Note.from_string(root)
    triad = Triad.create(triad = triad_type, root = root)
    return render(request, 'blog/triad.html', {'triad': triad})

def subchord(request, triad_type, root, sub_chord):
    chord = Chord.create(tetrad = sub_chord, root = Note.from_string(root), triad = triad_type)
    print(chord)

    #print("Is it major (class)?:", chord.is_major())

    #ch = Chord(notes = [Note.A, Note.C, Note.E, Note.GSHARP])
    #print("Is it major (new()))?:", ch.is_major())

    return render(request, 'blog/test.html', {'chord': chord})

