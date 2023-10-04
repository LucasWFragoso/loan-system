from rest_framework import serializers
from .models import Installment, Cliente


class InstallmentSerializer(serializers.Serializer):
    installments = serializers.IntegerField()
    installment_interest = serializers.FloatField()
    installment_value = serializers.FloatField()
    full_value = serializers.FloatField()
    comission = serializers.FloatField()

    def create(self, validated_data):
        return Installment.objects.create(**validated_data)


class ClienteSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    phone = serializers.CharField(max_length=15)
    cpf = serializers.CharField(max_length=11)
    bank_label = serializers.CharField(max_length=50)
    account_type_label = serializers.CharField(max_length=20)
    account_number = serializers.CharField(max_length=20)

    def create(self, validated_data):
        return Cliente.objects.create(**validated_data)
