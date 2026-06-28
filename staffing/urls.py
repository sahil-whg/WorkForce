from django.urls import path

from . import views

app_name = 'staffing'

urlpatterns = [
    path('health/', views.health, name='health'),
]
