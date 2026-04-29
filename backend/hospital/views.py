import random
import string
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
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

def gerar_cupom():
    letras = ''.join(random.choices(string.ascii_uppercase, k=5))
    numeros= ''.join(random.choices(string.digits, k=2))

    return f"{letras}{numeros}"

@api_view(["POST"])
def enviar_cupom(request):
    email = request.data.get('email')

    if not email:
        return Response(
            {'Erro': 'Email obrigatório'},
            status=400
        )
    
    cupom= gerar_cupom()

    send_mail(
        'Seu cupom médico',
        f'Seu cupom é: {cupom}',
        'joaohnpadilha@gmail.com',
        [email],
        fail_silently=False,
    )

    return Response({
        "mensagem": "Cupom enviado com sucesso"
    })