from django.views.generic.base import TemplateView
from rest_framework import viewsets

from serializers import RoomSerializer
from serializers import NewsSerializer

from models import Room
from models import News

# Create your views here.

class RoomViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class NewsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer


class IndexView(TemplateView):
    template_name = "index.html"

    def dispatch(self, *args, **kwargs):
        return super(IndexView, self).dispatch(*args, **kwargs)

