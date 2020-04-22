from django.urls import path, register_converter
from . import views, converters

# register converter from gridshape string (x,x) to tuple
register_converter(converters.gridShapeConverter, 'int,int')


urlpatterns = [
    path('heterogeneous-cluster', views.heterogeneousCluster,
         name='heterogeneous-cluster'),
    path('predict', views.predict, name='predict'),
    path('evaluate', views.evaluate, name='evaluate'),
    path('stats', views.stats, name='stats')
]
