from django.shortcuts import get_object_or_404, render, redirect
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_POST
from .models import Pessoa

@login_required
def home(request):
    pessoas = Pessoa.objects.all()
    return render(request, 'index.html', {'pessoas': pessoas})

@login_required
@require_POST
def salvar(request):
    nome = request.POST.get('nome', '')
    Pessoa.objects.create(nome=nome)
    return redirect('home')

@login_required
def editar(request, id):
    pessoa = get_object_or_404(Pessoa, id=id)
    return render(request, 'update.html', {'pessoa': pessoa})

@login_required
@require_POST
def update(request, id):
    pessoa = get_object_or_404(Pessoa, id=id)
    nome = request.POST.get('nome', '')
    pessoa.nome = nome
    pessoa.save()
    return redirect('home')


@login_required
@require_POST
def excluir(request, id):
    pessoa = get_object_or_404(Pessoa, id=id)
    pessoa.delete()
    return redirect('home')
