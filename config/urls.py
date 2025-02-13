
from django.contrib import admin
from django.conf import settings
from django.urls import path

from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions


schema_view=get_schema_view(
    openapi.Info(
        title="Alpha Apartments API",
        default_version="v1",
        description="An Apartment API for Real Estate",
        contact=openapi.Contact(email="subhajit@gmail.com"),
        license=openapi.License(name="MIT License")
    ),
    public=True,
    permission_classes=[permissions.AllowAny]
)

urlpatterns = [
    path("redoc/",schema_view.with_ui("redoc",cache_timeout=0),name="schema-redoc"),
    path(settings.ADMIN_URL, admin.site.urls),
]

admin.site.site_header="Alpha Apartments Admin"
admin.site.site_title="Alpha Apartments Admin Portal"
admin.site.index_title="Wellcome to Alpha Apartments Admin Portal"




