from rest_framework import routers
import home.views as views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'userData', views.UserDataViewSet, 'userdata')