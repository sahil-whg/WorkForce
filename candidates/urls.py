from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from .views import (
    CandidateApplicationAPIView, download_resume
)

urlpatterns = [
    path(
        'apply/',
        csrf_exempt(CandidateApplicationAPIView.as_view())
    ),
    path(
        "download-resume/<int:pk>/",
        download_resume,
        name="download_resume",
    ),
]