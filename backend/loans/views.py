from django.shortcuts import render
from rest_framework.views import APIView, Response
from rest_framework import generics
from .models import Client, TableTax, LoanSolicitation, Installment
from .serializers import (
    InstallmentSerializer,
    ClienteSerializer,
    LoanSolicitationSerializer,
    TableTaxSerializer,
)


class TableTaxAPIView(generics.ListCreateAPIView):
    queryset = TableTax.objects.all()
    serializer_class = TableTaxSerializer


class InstallmentAPIView(APIView):
    queryset = Installment.objects.all()

    def post(self, request, *args, **kwargs):
        value = request.data.get("value")
        print(type(value))
        if not value:
            return Response({"error": "Value is required"}, status=400)

        if value < 300 or value > 10000:
            return Response(
                {"error": "Value must be between 300 and 10,000"}, status=400
            )

        tabela_taxas = TableTax.objects.all()
        if not tabela_taxas:
            return Response({"error": "No tabela taxas found"}, status=500)

        installments_data = []

        for taxa in tabela_taxas:
            installments = taxa.numberInstallments
            installment_interest = taxa.interestRates
            installment_value = (value / installments) + (
                installment_interest / 100
            ) * value
            full_value = installment_value * installments
            comission = 0.05 * full_value

            installment_data = {
                "installments": installments,
                "installment_interest": installment_interest,
                "installment_value": installment_value,
                "full_value": full_value,
                "comission": comission,
                "tableTax": taxa.id,
            }

            installments_data.append(installment_data)

        serializer = InstallmentSerializer(data=installments_data, many=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        else:
            return Response(serializer.errors, status=500)


class ClienteAPIView(generics.ListCreateAPIView):
    queryset = Client.objects.all()
    serializer_class = ClienteSerializer


class ClienteSearchAPIView(APIView):
    def get(self, request, *args, **kwargs):
        cpf = request.query_params.get("cpf")
        if not cpf:
            return Response({"error": "CPF is required"}, status=400)

        try:
            cliente = Client.objects.get(cpf=cpf)
        except Client.DoesNotExist:
            return Response({"error": "Client not found"}, status=404)

        serializer = ClienteSerializer(cliente)
        return Response(serializer.data, status=200)


class SolicitacaoEmprestimoAPIView(APIView):
    def post(self, request, *args, **kwargs):
        card_number = request.data.get("card_number")
        card_name = request.data.get("card_name")
        valid_date = request.data.get("valid_date")
        card_cvc = request.data.get("card_cvc")
        client_id = request.data.get("client_id")
        installment_id = request.data.get("installment_id")

        if not card_number:
            return Response({"error": "Card number is required"}, status=400)

        if not card_name:
            return Response({"error": "Card name is required"}, status=400)

        if not valid_date:
            return Response({"error": "Valid date is required"}, status=400)

        if not card_cvc:
            return Response({"error": "Card CVC is required"}, status=400)

        if not client_id:
            return Response({"error": "Client ID is required"}, status=400)

        if not installment_id:
            return Response({"error": "Installment ID is required"}, status=400)

        try:
            cliente = Client.objects.get(id=client_id)
            print(cliente)
        except Client.DoesNotExist:
            return Response({"error": "Client not found"}, status=404)

        try:
            installment = Installment.objects.get(id=installment_id)
        except Installment.DoesNotExist:
            return Response({"error": "Installment not found"}, status=404)

        solicitacao_emprestimo = LoanSolicitation.objects.create(
            card_number=card_number,
            card_name=card_name,
            valid_date=valid_date,
            card_cvc=card_cvc,
            client=cliente,
            installment=installment,
        )

        serializer = LoanSolicitationSerializer(solicitacao_emprestimo)
        return Response(serializer.data, status=200)
