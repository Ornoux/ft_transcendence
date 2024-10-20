# Generated by Django 4.2.3 on 2024-10-16 11:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0025_alter_message_options_message_date'),
    ]

    operations = [
        migrations.CreateModel(
            name='RelationsBlocked',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userBlocked', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='userBlocked', to=settings.AUTH_USER_MODEL)),
                ('userWhoBlocks', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='userWhoBlocks', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]