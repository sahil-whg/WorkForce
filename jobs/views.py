from rest_framework.generics import ListAPIView
from .models import Job
from .serializers import JobSerializer


class JobListAPIView(ListAPIView):
    serializer_class = JobSerializer

    def get_queryset(self):
        return Job.objects.filter(
            is_active=True
        ).order_by('-created_at')