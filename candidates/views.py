from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.generics import CreateAPIView
from .models import CandidateApplication
from .serializers import (
    CandidateApplicationSerializer
)
from rest_framework.permissions import AllowAny


@method_decorator(csrf_exempt, name='dispatch')
class CandidateApplicationAPIView(
    CreateAPIView
):
    permission_classes = [AllowAny]
    queryset = CandidateApplication.objects.all()
    serializer_class = (
        CandidateApplicationSerializer
    )
    