from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from .views import (
    CandidateApplicationAPIView
)

urlpatterns = [
    path(
        'apply/',
        csrf_exempt(CandidateApplicationAPIView.as_view())
    )
]