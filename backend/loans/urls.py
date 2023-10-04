from django.urls import path
from .views import InstallmentAPIView

urlpatterns = [
    path("installment/", InstallmentAPIView.as_view()),
]
