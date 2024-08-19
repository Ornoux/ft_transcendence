from django.db import models

class User(models.Model):
	username = models.CharField(max_length=20)
	email = models.CharField(max_length=80)
	password = models.CharField(max_length=80)
	subscription_data = models.DateField()
	last_connection = models.DateField()
	id = models.IntegerField()

