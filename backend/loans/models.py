from django.db import models


class Cliente(models.Model):
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=15)
    cpf = models.CharField(max_length=11)
    bank_label = models.CharField(max_length=50)
    account_type_label = models.CharField(max_length=20)
    account_number = models.CharField(max_length=20)


class Installment(models.Model):
    installments = models.PositiveIntegerField()
    installment_interest = models.FloatField()
    installment_value = models.FloatField()
    full_value = models.FloatField()
    comission = models.FloatField()


class TabelaTaxas(models.Model):
    numberInstallments = models.PositiveIntegerField(default=1)
    interestRates = models.PositiveIntegerField(default=1)


class SolicitacaoEmprestimo(models.Model):
    client = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    installment_interest = models.FloatField()
    installment_interest_value = models.FloatField()
    comission = models.FloatField()
    comission_value = models.FloatField()
    installment_value = models.FloatField()
    card_number = models.CharField(max_length=16)
    desired_value = models.FloatField()
    total_loan = models.FloatField()
    installment = models.ForeignKey(Installment, on_delete=models.CASCADE)
    rate_table = models.ForeignKey(TabelaTaxas, on_delete=models.CASCADE)
