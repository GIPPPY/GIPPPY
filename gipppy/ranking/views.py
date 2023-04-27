import json

from django.shortcuts import render
from django.http import JsonResponse
from .models import Ranking
from datetime import datetime
from django.db.models.functions import RowNumber
from django.db.models.expressions import Window
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
def gipppy_view(request):
    return render(request, 'index.html')


def ranking_view(request):
    #rankings = Ranking.objects.all().order_by('-nivel_superado', '-fecha_creacion')[:10]
    rankings = Ranking.objects.annotate(
        posicion=Window(
            expression=RowNumber(),
            order_by=('-nivel_superado', '-fecha_creacion')
        )
    ).order_by('posicion')[:10]

    context = {
        'rankings': rankings,
    }
    return render(request, 'ranking.html', context)


@csrf_exempt
def insert_view(request):
    if request.method == 'POST':
        print(request.body)
        data = json.loads(request.body)
        #if data.get('nombre') in None or data.get('nombre') == '':
        #    return JsonResponse({"result": "Nombre no definido"})
        nombre = data['nombre']
        nivel = data['nivel']
        # Consulta a la base de datos para verificar si el usuario y nivel ya existe
        existe_usu_nivel = Ranking.objects.filter(nombre=nombre, nivel_superado__gte=nivel).exists()
        if existe_usu_nivel:
            print('usu y nivel existe')
            return JsonResponse({"result": "El registro existe"})
        else:
            existe_usuario = Ranking.objects.filter(nombre=nombre).exists()
            if existe_usuario:
                print('usu existe')
                actualiza_ranking = Ranking.objects.get(nombre=nombre)
                actualiza_ranking.fecha_creacion = datetime.now()
                actualiza_ranking.descripcion = ''
                actualiza_ranking.nombre = nombre
                actualiza_ranking.nivel_superado = nivel
                actualiza_ranking.save()
                return JsonResponse({"result": "Datos actualizados correctamente"})
            else:
                # Guardar la nueva clasificacion
                nuevo_ranking = Ranking()
                nuevo_ranking.fecha_creacion = datetime.now()
                nuevo_ranking.descripcion = ''
                nuevo_ranking.nombre = nombre
                nuevo_ranking.nivel_superado = nivel
                nuevo_ranking.save()
                return JsonResponse({"result": "Datos insertados correctamente"})
    else:
        return JsonResponse({"result": "Solo se aceptan peticiones POST"})
