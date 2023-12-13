# # authentication/urls.py

# from django.urls import path
# #from .views import CustomAuthToken, UserInfoView
# from .views import SignupView

# urlpatterns = [
#     # path('api-token-auth/', CustomAuthToken.as_view(), name='api_token_auth'),
#     # path('user-info/', UserInfoView.as_view(), name='user_info'),
#     path('SignUp/', SignupView.as_view(), name='SignUp'),
# ]
# urls.py
from django.urls import path
from .views import LoginView

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    # Add other URL patterns as needed
]
