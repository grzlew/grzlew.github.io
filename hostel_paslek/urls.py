"""hostel_paslek URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from rest_framework import routers

from web.views import IndexView
from web.views import RoomViewSet
from web.views import NewsViewSet

router = routers.DefaultRouter()
router.register(r'rooms', RoomViewSet)
router.register(r'news', NewsViewSet)


urlpatterns = [
    url(r'^$', IndexView.as_view(), name="index"),
    url(r'^', include(router.urls)),
    url(r'^admin/', include(admin.site.urls)),
]
