# events/models.py
from django.db import models

class Event(models.Model):
    name = models.CharField(max_length=255)
    date = models.DateField()
    description = models.TextField()
    venue = models.CharField(max_length=255)
    organizer = models.CharField(max_length=255)
    banner = models.ImageField(upload_to='event_banners/', default='default_banner.jpg')



    def __str__(self):
        return self.name
