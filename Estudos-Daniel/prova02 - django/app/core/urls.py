from . import views
from django.contrib.auth import views as auth_views
from django.urls import path

urlpatterns = [
    path('', views.home, name='home'),
    path('usuarios/', views.lista_usuarios, name='lista_usuarios'),
    path('login/',auth_views.LoginView.as_view(template_name='login.html'),name='login'),
    path('logout/',auth_views.LogoutView.as_view(),name='logout'),
    path('cadastro/', views.cadastro_usuario, name='cadastro'),
    path('cadastrar_livro/',views.cadastro_livro,name='cadastrar_livro'),
    path('editar/<int:livro_id>/', views.editar, name='editar'),
    path('deletar/<int:livro_id>/', views.deletar, name='deletar'),
    path('editar_usuario/<int:usuario_id>/',views.editar_usuario,name='editar_usuario'),
    path('deletar_usuario/<int:usuario_id>/',views.deletar_usuario,name='deletar_usuario',),
]