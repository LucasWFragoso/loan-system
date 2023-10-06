from rest_framework import serializers
from .models import Installment, Client, TableTax, LoanSolicitation


class TableTaxSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    numberInstallments = serializers.IntegerField()
    interestRates = serializers.FloatField()

    class Meta:
        model = TableTax
        fields = ["id", "numberInstallments", "interestRates"]

    def create(self, validated_data):
        return TableTax.objects.create(**validated_data)


class InstallmentSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    installments = serializers.IntegerField()
    installment_interest = serializers.FloatField()
    installment_value = serializers.FloatField()
    full_value = serializers.FloatField()
    comission = serializers.FloatField()
    tableTax = serializers.PrimaryKeyRelatedField(queryset=TableTax.objects.all())

    class Meta:
        model = Installment
        fields = [
            "id",
            "installments",
            "installment_interest",
            "installment_value",
            "full_value",
            "comission",
            "tableTax",
        ]

    def create(self, validated_data):
        return Installment.objects.create(**validated_data)


class ClienteSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)
    phone = serializers.CharField(max_length=15)
    cpf = serializers.CharField(max_length=11)
    bank_label = serializers.CharField(max_length=50)
    account_type_label = serializers.CharField(max_length=20)
    account_number = serializers.CharField(max_length=20)

    def create(self, validated_data):
        return Client.objects.create(**validated_data)


class LoanSolicitationSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    card_number = serializers.CharField(max_length=16, default="")
    card_name = serializers.CharField(max_length=255, default="")
    valid_date = serializers.CharField(max_length=5, default="00/00")
    card_cvc = serializers.CharField(max_length=3, default="")
    client = ClienteSerializer()
    installment = InstallmentSerializer()

    def create(self, validated_data):
        return LoanSolicitation.objects.create(**validated_data)
