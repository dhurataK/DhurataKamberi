# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-01-14 15:02
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login_reg_app', '0002_remove_user_confirm_pw'),
        ('course_apps', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='users',
            field=models.ManyToManyField(related_name='courses', to='login_reg_app.User'),
        ),
    ]
