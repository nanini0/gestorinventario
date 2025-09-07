from rest_framework import viewsets
from producto.models import Producto
from .serializers import ProductoSerializer


class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all() #conjunto de datos a utilizar
    serializer_class = ProductoSerializer # serializador a utilizar para convertir los datos a JSON
    #permission_classes = [IsAuthenticated]  # Asegura que solo usuarios autenticados puedan acceder
