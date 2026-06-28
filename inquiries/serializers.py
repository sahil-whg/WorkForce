from rest_framework import serializers
from .models import ClientInquiry


class ClientInquirySerializer(
    serializers.ModelSerializer
):
    class Meta:
        model = ClientInquiry
        fields = '__all__'