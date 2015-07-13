from rest_framework import serializers

from web.models import Room
from web.models import News


class RoomSerializer(serializers.ModelSerializer):
    location = serializers.CharField(max_length=100)
    desc = serializers.CharField(max_length=2048)

    class Meta:
        model = Room
        fields = ('no', 'price', 'location', 'desc')



class NewsSerializer(serializers.ModelSerializer):
    title = serializers.CharField(max_length=100)
    text = serializers.CharField(max_length=2048)

    class Meta:
        model = News
        fields = ('pub_date', 'text', 'title')
