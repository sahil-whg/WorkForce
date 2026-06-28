from django.urls import path
from .views import (
    ClientInquiryAPIView
)

urlpatterns = [
    path(
        '',
        ClientInquiryAPIView.as_view()
    )
]