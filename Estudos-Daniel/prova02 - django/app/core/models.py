from django.db import models

class usuarios(models.Model):
    nome = models.CharField(max_length=100)
    email = models.EmailField()
    senha = models.CharField(max_length=100)

    def __str__(self):
        return self.nome

class livros(models.Model):
    titulo = models.CharField(max_length=200)
    Autor = models.CharField(max_length=100)
    Ano = models.IntegerField()
    Data = models.DateField()
    usuario = models.ForeignKey(usuarios, on_delete=models.CASCADE)

    def __str__(self):
        return self.titulo
    