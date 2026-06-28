from django.db import models


class Job(models.Model):

    EMPLOYMENT_TYPES = [
        ('FULL_TIME', 'Full Time'),
        ('CONTRACT', 'Contract'),
        ('REMOTE', 'Remote'),
    ]

    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    location = models.CharField(max_length=200)

    employment_type = models.CharField(
        max_length=20,
        choices=EMPLOYMENT_TYPES
    )

    experience = models.CharField(max_length=100)

    description = models.TextField()

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.title