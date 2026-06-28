from django.urls import path
from .views import (
    CandidateApplicationAPIView
)

urlpatterns = [
    path(
        'apply/',
        CandidateApplicationAPIView.as_view()
    )
]