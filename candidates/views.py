from rest_framework.generics import CreateAPIView
from .models import CandidateApplication
from .serializers import (
    CandidateApplicationSerializer
)


class CandidateApplicationAPIView(
    CreateAPIView
):
    queryset = CandidateApplication.objects.all()
    serializer_class = (
        CandidateApplicationSerializer
    )
    