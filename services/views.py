from rest_framework.generics import ListAPIView
from .models import Service
from .serializers import ServiceSerializer


class ServiceListAPIView(ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer