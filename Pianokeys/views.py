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
     return render(request, "pianokeys/new_piano.html")


def scale(request, scale_type, root):
    root = Note.from_string(root)
    scl = Scale.factory(scale_type, root)


    '''
    #### test chord relatives
    chord = Chord.create(root = Note.E, tetrad = "Dominant Seven", triad = "Major")
    print("\n \n \n \n \n \n \t work")

    for relative_list in chord.relatives():
        print("\n new fingerprint relation")
        for this_list in relative_list:
            print("\n \t", this_list[0].fingerprint)
            for chord in this_list:
                print("\n \t \t", chord.name)

    first_chord_match = Chord.from_notes(["B", "D", "F", "G#"])

    print("\n \n \n \n \n  \t", first_chord_match.name)

    print("\n \t \t Enharmonic chords:")
    '''




    #chrd = Chord.create(root = Note.E, tetrad = "Dominant Seven", triad = "Suspended Two")
    #scalez = Scale.from_chord(chrd)
    #for scale in scalez:
    #    print("\n \n \n \t sFOUND RELATED SCALE", scale.name)







    #return HttpResponse("scale")
    return render(request, "pianokeys/pianokeys.html", {'scale_name': scl.name, 'scale_object': scl.as_dict()})