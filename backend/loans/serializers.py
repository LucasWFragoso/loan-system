from rest_framework import serializers
from .models import Installment, Cliente, TabelaTaxas


class InstallmentSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    installments = serializers.IntegerField()
    installment_interest = serializers.FloatField()
    installment_value = serializers.FloatField()
    full_value = serializers.FloatField()
    comission = serializers.FloatField()
    tabelaTaxas = serializers.PrimaryKeyRelatedField(queryset=TabelaTaxas.objects.all())

    class Meta:
        model = Installment
        fields = [
            "id",
            "installments",
            "installment_interest",
            "installment_value",
            "full_value",
            "comission",
            "tabelaTaxas",
        ]

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
