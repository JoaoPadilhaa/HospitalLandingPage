from rest_framework.viewsets import ModelViewSet
from .models import Consulta, Plano_de_saude, Paciente, Medico
from .serializer import ConsultaSerializer, Plano_de_saudeSerializer, PacienteSerializer, MedicoSerializer

class ConsultaViewSet(ModelViewSet):
    queryset = Consulta.objects.all()
    serializer_class = ConsultaSerializer

class Plano_de_saudeViewSet(ModelViewSet):
    queryset= Plano_de_saude.objects.all()
    serializer_class = Plano_de_saudeSerializer

class PacienteViewSet(ModelViewSet):
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer

class MedicoViewSet(ModelViewSet):
    queryset = Medico.objects.all()
    serializer_class = MedicoSerializer