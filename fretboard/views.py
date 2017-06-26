from django.shortcuts import render
from django.http import HttpResponse
from django.template.defaulttags import register

import json

import sys
sys.path.append("C:/Users/Rob/Django-Projects/mysite/panmusic/")
from Scale import *
from Note import *
from Chord import *
from Note import *
from Fretboard import Fretboard
# Create your views here.

#put this in scale
def as_dict(scale):
	scale_dict = {}

	scale_dict["root"] = scale.root.__str__()
	scale_dict["notes"] = list(map(str,scale.notes))
	scale_dict["intervals"] = list(map(str, scale.intervals))
	scale_dict["interval_dict"] = scale.interval_dict()
	#scale_dict["intervals"] = list(map(int, scale.intervals))

	print("\n \n \n ", scale_dict)
	print(list(map(str,scale.notes)))
	#print("\n \n \t ", scale_dict)

	return scale_dict


def index(request):
    scl = Scale.factory("Phrygian", Note.E)
    return render(request, 'fretboard/index.html',{'content': scl.notes,'scale_name': scl.name, 'scale' : scl, 'the_triads': scl.triads })

def scale(request, scale_type, root):
	root = Note.from_string(root)
	scl = Scale.factory(scale_type, root)




	#a list of the notes?
	t_notes = []

	for note in scl.notes:
		t_notes.append(note.__str__())

	print(t_notes)

	t_notes = {'notes': t_notes}

	json_notes = json.dumps(t_notes)




	#fretboard in standard tuning
	fretboard = Fretboard()

	#fretboard = fretboard.json()
	#convert fretboard to json for javascript
	fretboard =  json.dumps(fretboard, default=lambda o: o.__dict__, 
            sort_keys=True, indent=4)



	#json scale object
	scale_json = as_dict(scl)
	print("SNE EFEFE-------", scale_json)




	return render(request, 'fretboard/fretboard.html',{'content': scl.notes, 'text_notes' : json_notes, 'scale_name': scl.name, 'scale' : scl, 'the_triads': scl.triads, 'seven_chords': scl.tetrads, 'fretboard': fretboard, 'scale_object': scale_json })

