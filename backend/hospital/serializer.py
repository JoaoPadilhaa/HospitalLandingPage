from .models import Plano_de_saude, Paciente, Medico, Consulta
from rest_framework import serializers

class Plano_de_saudeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plano_de_saude
        fields= '__all__'

    
class PacienteSerializer(serializers.ModelSerializer):
    plano_de_saude = serializers.SlugRelatedField( #com essa linha django entende que recebeu uma string e vai buscar na tabela um registro
        queryset=Plano_de_saude.objects.all(),     #que tenha o nome igual e usar o id dele, logo podemos digitar o nome do plano de saude, ao inves do id
        slug_field='nome'
    )
    class Meta:
        model = Paciente
        fields = '__all__'

class MedicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medico
        fields = '__all__'

    
class ConsultaSerializer(serializers.ModelSerializer):
    id_medico = serializers.SlugRelatedField(
        queryset=Medico.objects.all(),
        slug_field = 'nome'
    )
    id_paciente = serializers.SlugRelatedField(
        queryset=Paciente.objects.all(),
        slug_field = 'nome'
    )
    
    class Meta:
        model=Consulta
        fields = '__all__'