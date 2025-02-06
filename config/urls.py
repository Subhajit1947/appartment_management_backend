
from django.contrib import admin
from django.conf import settings
from django.urls import path,include

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
    path("api/v1/auth/",include("djoser.urls")),
    path("api/v1/auth/",include("core_apps.users.urls")),
    path("api/v1/profiles/",include("core_apps.profiles.urls")),
    path("api/v1/apartments/",include("core_apps.apartments.urls")),
    path("api/v1/issues/",include("core_apps.issues.urls")),
    path("api/v1/reports/",include("core_apps.reports.urls")),
    
]

admin.site.site_header="Alpha Apartments Admin"
admin.site.site_title="Alpha Apartments Admin Portal"
admin.site.index_title="Wellcome to Alpha Apartments Admin Portal"




