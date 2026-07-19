from django.contrib import admin
from django.urls import reverse
from django.utils.html import format_html

from .models import CandidateApplication


@admin.register(CandidateApplication)
class CandidateApplicationAdmin(admin.ModelAdmin):
    readonly_fields = ("resume_download",)

    def resume_download(self, obj):
        if obj and obj.resume:
            return format_html(
                '<a href="{}">⬇ Download Resume</a>',
                reverse("download_resume", args=[obj.pk]),
            )
        return "-"

    resume_download.short_description = "Resume"