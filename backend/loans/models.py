from django.db import models


class Client(models.Model):
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
    tableTax = models.ForeignKey("TableTax", on_delete=models.CASCADE, default=1)


class TableTax(models.Model):
    numberInstallments = models.PositiveIntegerField(default=1)
    interestRates = models.FloatField(default=0)


class LoanSolicitation(models.Model):
    card_number = models.CharField(max_length=16, default="")
    card_name = models.CharField(max_length=255, default="")
    valid_date = models.CharField(max_length=5, default="00/00")
    card_cvc = models.CharField(max_length=3, default="")
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    installment = models.ForeignKey(Installment, on_delete=models.CASCADE)
