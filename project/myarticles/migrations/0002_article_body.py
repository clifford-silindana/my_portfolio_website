# Generated by Django 4.0.3 on 2022-04-15 14:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myarticles', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='body',
            field=models.TextField(null=True),
        ),
    ]
