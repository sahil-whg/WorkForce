from django.db import models


class CandidateApplication(models.Model):

    full_name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=20)

    languages_known = models.CharField(
        max_length=300
    )

    years_of_experience = models.PositiveIntegerField()

    preferred_location = models.CharField(
        max_length=200
    )

    current_salary = models.DecimalField(
        max_digits=12,
        decimal_places=2
    )

    expected_salary = models.DecimalField(
        max_digits=12,
        decimal_places=2
    )

    resume = models.FileField(
        upload_to='resumes/'
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.full_name
