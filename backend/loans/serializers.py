from rest_framework import serializers
from .models import Installment


class InstallmentSerializer(serializers.Serializer):
    installments = serializers.IntegerField()
    installment_interest = serializers.FloatField()
    installment_value = serializers.FloatField()
    full_value = serializers.FloatField()
    comission = serializers.FloatField()

    def create(self, validated_data):
        return Installment.objects.create(**validated_data)
