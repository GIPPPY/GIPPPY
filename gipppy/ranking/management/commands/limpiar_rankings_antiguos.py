from django.core.management.base import BaseCommand
from ranking.models import Ranking
from datetime import date, datetime


class Command(BaseCommand):
    help = 'Mantener unicamente los rankings de los ultimos 3 meses de la base de datos'

    def handle(self, *args, **options):
        fecha_borrar = date.today() - datetime.timedelta(days=90)
        ranking_antiguos = Ranking.objects.filter(fecha_creacion__lt=fecha_borrar)
        ranking_antiguos.delete()
        self.stdout.write(self.style.SUCCESS('Se eliminaron los rankings anteriores a 3 meses'))
