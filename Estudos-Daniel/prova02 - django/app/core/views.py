from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404, redirect, render

from .models import livros, usuarios


@login_required
def home(request):
    livros_list = livros.objects.all()
    return render(request, 'home.html', {'livros': livros_list})


@login_required
def lista_usuarios(request):
    usuarios_list = usuarios.objects.all()
    return render(request, 'lista_usuarios.html', {'usuarios': usuarios_list})


def cadastro_usuario(request):
    if request.method == 'POST':
        nome = request.POST.get('nome', '')
        email = request.POST.get('email', '')
        senha = request.POST.get('senha', '')

        if not nome or not email or not senha:
            return render(request,'cadastro.html',{'error': 'Preencha todos os campos.'})

        user_model = get_user_model()
        if user_model.objects.filter(username=email).exists():
            return render(request,'cadastro.html',{'error': 'Ja existe esse email'})

        user_model.objects.create_user(
            username=email,
            email=email,
            first_name=nome,
            password=senha,
        )

        if usuario is None:
            usuarios.objects.create(nome=nome, email=email, senha='')
        else:
            usuario.nome = nome
            usuario.senha = ''
            usuario.save()

        return redirect('login')

    return render(request, 'cadastro.html')


@login_required
def cadastro_livro(request):
    if request.method == 'POST':
        usuario = get_object_or_404(usuarios, id=request.POST.get('usuario_id'))
        livros.objects.create(
            titulo=request.POST.get('titulo', ''),
            Autor=request.POST.get('autor', ''),
            Ano=request.POST.get('ano'),
            Data=request.POST.get('data'),
            usuario=usuario,
        )
        return redirect('home')

    usuarios_list = usuarios.objects.all()
    return render(request, 'cadastro_livro.html', {'usuarios': usuarios_list})

@login_required
def editar(request, livro_id):
    livro = get_object_or_404(livros, id=livro_id)
    if request.method == 'POST':
        livro.titulo = request.POST.get('titulo', '')
        livro.Autor = request.POST.get('autor', '')
        livro.Ano = request.POST.get('ano')
        livro.Data = request.POST.get('data')
        livro.save()
        return redirect('home')

    return render(request, 'editar_livro.html', {'livro': livro})

@login_required
def deletar(request, livro_id):
    if request.method == 'POST':
        livro = get_object_or_404(livros, id=livro_id)
        livro.delete()
    return redirect('home')

@login_required
def editar_usuario(request, usuario_id):
    usuario = get_object_or_404(usuarios, id=usuario_id)
    if request.method == 'POST':
        usuario.nome = request.POST.get('nome', '')
        usuario.email = request.POST.get('email', '')
        usuario.save()
        return redirect('home')

    return render(request, 'editar_usuario.html', {'usuario': usuario})


@login_required
def deletar_usuario(request, usuario_id):
    if request.method == 'POST':
        usuario = get_object_or_404(usuarios, id=usuario_id)
        usuario.delete()
    return redirect('home')
