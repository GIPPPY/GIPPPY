from django.db import models


class Ranking(models.Model):
    fecha_creacion = models.DateTimeField()
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField()
    nivel_superado = models.IntegerField()
