# Generated by Django 4.2.3 on 2024-08-23 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('id_number', models.IntegerField(default=0)),
                ('username', models.CharField(max_length=50)),
                ('password', models.CharField(max_length=70)),
                ('email', models.CharField(max_length=150)),
                ('date_subscription', models.DateTimeField()),
                ('date_lastvisit', models.DateTimeField()),
            ],
        ),
    ]