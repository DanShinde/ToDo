# Generated by Django 4.1.7 on 2023-04-02 13:10

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('main', '0002_rename_description_todo_description_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='todo',
            new_name='todoModel',
        ),
    ]
