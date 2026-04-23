from django.db import models

class Plano_de_saude(models.Model):
   nome = models.CharField(
      unique=True,
      choices=[
         ('vip', 'Vip'),
         ('comum', 'Comum')
      ]
   )

   def __str__(self):
      return self.nome


class Paciente(models.Model):
   nome = models.CharField(max_length=30)
   nascimento = models.DateField()
   cidade = models.CharField(max_length=25)
   telefone = models.CharField(max_length=16)
   email = models.EmailField()
   sexo = models.CharField(
      choices=[
         ('masculino', 'Masculino'),
         ('feminino', 'Feminino')
      ]
   )
   plano_de_saude = models.ForeignKey(Plano_de_saude, on_delete=models.CASCADE)

   def __str__(self):
        return self.nome

class Medico(models.Model):
   nome = models.CharField(max_length=30)
   sexo = models.CharField(
      choices=[
         ('masculino', 'Masculino'),
         ('feminino', 'Feminino')
      ]
   )
   especialidade = models.CharField(max_length=30)
   foto = models.CharField(max_length=200)

   def __str__(self):
        return self.nome

class Consulta(models.Model):
   motivo_da_consulta = models.CharField(max_length=20)
   id_paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
   id_medico = models.ForeignKey(Medico, on_delete=models.CASCADE)
   data_consulta = models.DateTimeField(auto_now_add=True)

   def __str__(self):
        return self.nome


