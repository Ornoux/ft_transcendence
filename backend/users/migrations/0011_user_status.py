# Generated by Django 4.2.3 on 2024-09-07 10:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0010_rename_friends_user_friendslist'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='status',
            field=models.CharField(default=False, max_length=15),
        ),
    ]
