from django.urls import path
from .views import (
    InstallmentAPIView,
    ClienteAPIView,
    ClienteSearchAPIView,
    SolicitacaoEmprestimoAPIView,
    TableTaxAPIView,
)

urlpatterns = [
    path("installment/", InstallmentAPIView.as_view()),
    path("cliente-generic/", ClienteAPIView.as_view()),
    path("cliente/", ClienteSearchAPIView.as_view()),
    path("solicitacao-emprestimo/", SolicitacaoEmprestimoAPIView.as_view()),
    path("table-tax/", TableTaxAPIView.as_view()),
]
