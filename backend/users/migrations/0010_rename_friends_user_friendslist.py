# Generated by Django 4.2.3 on 2024-09-07 07:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0009_user_friends'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='friends',
            new_name='friendsList',
        ),
    ]