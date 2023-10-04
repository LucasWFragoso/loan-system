# Generated by Django 4.2.5 on 2023-10-04 14:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('phone', models.CharField(max_length=15)),
                ('cpf', models.CharField(max_length=11)),
                ('bank_label', models.CharField(max_length=50)),
                ('account_type_label', models.CharField(max_length=20)),
                ('account_number', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Installment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('installments', models.PositiveIntegerField()),
                ('installment_interest', models.FloatField()),
                ('installment_value', models.FloatField()),
                ('full_value', models.FloatField()),
                ('comission', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='TabelaTaxas',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numberInstallments', models.PositiveIntegerField(default=1)),
                ('interestRates', models.FloatField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='SolicitacaoEmprestimo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('card_number', models.CharField(default='', max_length=16)),
                ('card_name', models.CharField(default='', max_length=255)),
                ('valid_date', models.CharField(default='00/00', max_length=5)),
                ('card_cvc', models.CharField(default='', max_length=3)),
                ('client', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='loans.cliente')),
                ('installment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='loans.installment')),
                ('rate_table', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='loans.tabelataxas')),
            ],
        ),
        migrations.AddField(
            model_name='installment',
            name='tabelaTaxas',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='loans.tabelataxas'),
        ),
    ]
