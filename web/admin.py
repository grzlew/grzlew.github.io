from django.contrib import admin
from .models import Room
from models import News

# Register your models here.

class RoomAdmin(admin.ModelAdmin):
    fields = ['no', 'size', 'price', 'location', 'desc']



admin.site.register(Room)
admin.site.register(News)
