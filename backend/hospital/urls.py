from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ConsultaViewSet, Plano_de_saudeViewSet, PacienteViewSet, MedicoViewSet, enviar_cupom

router= DefaultRouter()
router.register(r'consulta', ConsultaViewSet)
router.register(r'planosaude', Plano_de_saudeViewSet)
router.register(r'paciente', PacienteViewSet)
router.register(r'medico', MedicoViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('cupom/', enviar_cupom)
]