from django.db import models

# Create your models here.

class Article(models.Model):
    title = models.CharField(max_length = 100)
    author = models.CharField(max_length = 100)
    category = models.CharField(max_length = 100)
    date_created = models.DateTimeField(auto_now_add=True)
    reading_time = models.IntegerField()
    body = models.TextField(null = True)

    def __str__(self):
        return self.title + ", " + self.author
    


