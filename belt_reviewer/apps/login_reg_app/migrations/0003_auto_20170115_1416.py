# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-15 13:16
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('login_reg_app', '0002_remove_user_confirm_pw'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='last_name',
            new_name='alias',
        ),
    ]
