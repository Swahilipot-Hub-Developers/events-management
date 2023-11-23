
# events/urls.py
from django.urls import path
from .views import EventCreationView

urlpatterns = [
    path('api/create-event/', EventCreationView.as_view(), name='create-event'),
    # Other URL patterns for your app
]
