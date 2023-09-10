from django.contrib.auth.models import User
from .models import *
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import UserSerializer, UserDataSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class UserDataViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = UserData.objects.all()
    serializer_class = UserDataSerializer
    # permission_classes = [permissions.IsAuthenticated]
