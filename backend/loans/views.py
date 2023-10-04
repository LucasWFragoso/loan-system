from django.shortcuts import render
from rest_framework.views import APIView, Response
from .models import Cliente, TabelaTaxas, SolicitacaoEmprestimo, Installment
from .serializers import InstallmentSerializer


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

        tabela_taxas = TabelaTaxas.objects.all()
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
            }

            installments_data.append(installment_data)

        serializer = InstallmentSerializer(data=installments_data, many=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        else:
            return Response(serializer.errors, status=500)