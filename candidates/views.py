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

from django.http import FileResponse, Http404
from django.contrib.admin.views.decorators import staff_member_required

from .models import CandidateApplication


@staff_member_required
def download_resume(request, pk):
    try:
        application = CandidateApplication.objects.get(pk=pk)
    except CandidateApplication.DoesNotExist:
        raise Http404("Application not found")

    if not application.resume:
        raise Http404("Resume not found")

    return FileResponse(
        application.resume.open("rb"),
        as_attachment=True,
        filename=application.resume.name.split("/")[-1],
    )