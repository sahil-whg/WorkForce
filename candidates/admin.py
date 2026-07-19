from django.contrib import admin
from django.urls import reverse
from django.utils.html import format_html

from .models import CandidateApplication


@admin.register(CandidateApplication)
class CandidateApplicationAdmin(admin.ModelAdmin):

    readonly_fields = ("resume_download",)

    fields = (
        "first_name",
        "last_name",
        "email",
        "phone",
        "resume_download",
    )

    def resume_download(self, obj):
        if not obj.resume:
            return "-"

        return format_html(
            '<a href="{}">⬇ Download Resume</a>',
            reverse("download_resume", args=[obj.pk]),
        )

    resume_download.short_description = "Resume"