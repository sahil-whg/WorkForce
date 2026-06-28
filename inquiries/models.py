from django.db import models


class ClientInquiry(models.Model):

    company_name = models.CharField(
        max_length=200
    )

    hiring_requirement = models.TextField()

    language_needed = models.CharField(
        max_length=200
    )

    job_role = models.CharField(
        max_length=200
    )

    hiring_volume = models.PositiveIntegerField()

    work_location = models.CharField(
        max_length=200
    )

    budget_range = models.CharField(
        max_length=100
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.company_name