# from django.shortcuts import render

# # Create your views here.
# # authentication/views.py

# from rest_framework.authtoken.views import ObtainAuthToken
# from rest_framework.authtoken.models import Token
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from rest_framework.permissions import IsAuthenticated

# class CustomAuthToken(ObtainAuthToken):
#     def post(self, request, *args, **kwargs):
#         serializer = self.serializer_class(data=request.data, context={'request': request})
#         serializer.is_valid(raise_exception=True)
#         user = serializer.validated_data['user']
#         token, created = Token.objects.get_or_create(user=user)
#         return Response({'token': token.key, 'user_id': user.pk})


# class UserInfoView(APIView):
#     permission_classes = [IsAuthenticated]

#     def get(self, request):
#         return Response({'user_id': request.user.pk, 'username': request.user.username})
# authentication/views.py

from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer

class SignupView(generics.CreateAPIView):
    serializer_class = UserSerializer
