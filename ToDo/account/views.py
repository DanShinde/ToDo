from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import LoginSerializer
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response

class LoginAPI(APIView):

    def post(self, request):
        # sourcery skip: remove-unnecessary-else, remove-unreachable-code, swap-if-else-branches
        try:
            data = request.data
            serializer = LoginSerializer(data=data)
            if serializer.is_valid():
                username = serializer.data['username']
                password = serializer.data['password']
                user = authenticate(username= username, password=password)

                if user is None:
                    return Response({
                        'status': 400,
                        'message': 'Invalid username or password',
                        'data': {}
                    })

                refresh = RefreshToken.for_user(user)
                return Response({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                })
            else:
                return Response({
                    'status': 400,
                    'message': 'Invalid data',
                    'data': serializer.errors
                })
            print("Form is not valid")
            
        except Exception as e:
            print(e)
            return Response({
                'status': 500,
                'message': 'Internal Server Error',
                'data': {}
            })
