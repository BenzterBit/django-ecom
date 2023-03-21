from django.urls import path
from . import views

urlpatterns = [
    path('',views.getRoutes, name="routes"),
    path('products/',views.getProducts, name='all-products'),
    path('products/<str:pk>/',views.getProduct, name="unique-product"),
]
