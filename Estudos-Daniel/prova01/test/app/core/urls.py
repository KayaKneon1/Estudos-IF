from django.urls import path
from django.contrib.auth import views as auth_views
from .views import home, salvar, editar, excluir, update

urlpatterns = [
    path('', home, name='home'),
    path('salvar/', salvar, name='salvar'),
    path('editar/<int:id>/', editar, name='editar'),
    path('update/<int:id>/', update, name='update'),
    path('excluir/<int:id>/', excluir, name='excluir'),
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
]