from django.urls import path
from .views import InstallmentAPIView, ClienteAPIView, ClienteSearchAPIView

urlpatterns = [
    path("installment/", InstallmentAPIView.as_view()),
    # path("cliente/", ClienteAPIView.as_view()),
    path("cliente/", ClienteSearchAPIView.as_view()),
]
