from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from ranking.views import ranking_view, insert_view, gipppy_view

urlpatterns = [
    path('gipppy/ranking/', ranking_view, name='ranking-view'),
    path('gipppy/ranking', ranking_view, name='ranking-view'),
    path('gipppy/nuevo/', insert_view, name='insert-view'),
    path('gipppy/nuevo', insert_view, name='insert-view'),
    path('gipppy/', gipppy_view, name='gipppy-view'),
    path('gipppy', gipppy_view, name='gipppy-view'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
