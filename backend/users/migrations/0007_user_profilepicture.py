# Generated by Django 4.2.3 on 2024-08-30 07:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_remove_user_friendslist'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='profilePicture',
            field=models.CharField(default=None, max_length=250),
        ),
    ]