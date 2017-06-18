from django.conf.urls import url
from . import views

urlpatterns = [
    #url(r'^$', views.index, name='index')
    url(r'^$', views.test, name='test'),
    url(r'^(scale)/(?P<scale_type>[\w|\W]+)/(?P<root>[\w|\W]+)/', views.scale, name = 'scale'),
    url(r'^(chord)/(triad)/(?P<triad_type>[\w|\W]+)/(?P<root>[\w|\W]+)/(?P<sub_chord>[\w|\W]+)/', views.subchord, name = 'subchord'),
    url(r'^(chord)/(triad)/(?P<triad_type>[\w|\W]+)/(?P<root>[\w|\W]+)/', views.triad, name = 'triad'),
    #url(r'^(?P<scale_type>[\w|\W]+)/', views.index, name = 'index'),
    #url(r'^(?P<scale_type>[\w|\W]+)/', views.scale, name = 'scale')
]