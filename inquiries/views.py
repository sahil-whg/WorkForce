from rest_framework.generics import (
    CreateAPIView
)

from .models import ClientInquiry
from .serializers import (
    ClientInquirySerializer
)


class ClientInquiryAPIView(
    CreateAPIView
):
    queryset = (
        ClientInquiry.objects.all()
    )

    serializer_class = (
        ClientInquirySerializer
    )
    