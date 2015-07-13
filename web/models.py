from django.db import models

# Create your models here.

class Room(models.Model):
    no = models.IntegerField(default=0)
    size = models.IntegerField(default=0)
    price = models.IntegerField(default=0)
    location = models.CharField(max_length=100)
    desc = models.CharField(max_length=2048)


class News(models.Model):
    pub_date = models.DateField()
    title = models.CharField(max_length=100)
    text = models.CharField(max_length=2048)
