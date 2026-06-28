from rest_framework import serializers
from .models import CandidateApplication


class CandidateApplicationSerializer(
    serializers.ModelSerializer
):
    class Meta:
        model = CandidateApplication
        fields = '__all__'
        