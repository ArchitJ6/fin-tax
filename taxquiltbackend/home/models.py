from django.db import models
from django.contrib.auth.models import User
# Create your models here.




class UserData(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    age = models.PositiveIntegerField()
    total_income = models.DecimalField(max_digits=10, decimal_places=2)
    family_dependent = models.PositiveIntegerField()
    children = models.PositiveIntegerField()
    wife = models.BooleanField()
    parents = models.PositiveIntegerField()
    age_range_a = models.PositiveIntegerField()
    age_range_b = models.PositiveIntegerField()
    girl_child_a = models.BooleanField()
    rent = models.DecimalField(max_digits=10, decimal_places=2)
    education_loan = models.DecimalField(max_digits=10, decimal_places=2)
    education_loan_interest = models.DecimalField(max_digits=10, decimal_places=2)
    medical_insurance = models.DecimalField(max_digits=10, decimal_places=2)
    dis_lvl_a = models.PositiveIntegerField()
    dis_lvl_b = models.PositiveIntegerField()
    exp_med_a = models.DecimalField(max_digits=10, decimal_places=2)
    exp_med_b = models.DecimalField(max_digits=10, decimal_places=2)
    list_investments = models.TextField()
    exp_invest_a = models.DecimalField(max_digits=10, decimal_places=2)
    invest_nps = models.BooleanField()
    exp_invest_nps = models.DecimalField(max_digits=10, decimal_places=2)
    sec_80c = models.BooleanField()
    sec_80ccc = models.BooleanField()
    sec_80ccd_1b = models.BooleanField()
    sec_80gg = models.BooleanField()
    sec_80e = models.BooleanField()
    sec_80d = models.BooleanField()
    sec_80dd = models.BooleanField()
    sec_80ddb = models.BooleanField()
    sec_80u = models.BooleanField()
