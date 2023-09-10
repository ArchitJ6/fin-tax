import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
data = pd.read_csv("userDataset.csv",encoding='latin1')
data = data.drop(columns=['name','listInvestments'])
data['new_col'] = pd.concat([data['sec80C'], data['sec80CCC'], data['sec80CCD(1B)'],data['sec80GG'],data['sec80E'],data['sec80D']], ignore_index=True)
x = data.iloc[:,0:24]
y = data.iloc[:,-1:]
from sklearn.model_selection import train_test_split
x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.25,random_state=42)
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
scaler=StandardScaler()
x_train=pd.DataFrame(scaler.fit_transform(x_train),columns=x_train.columns)
x_test=pd.DataFrame(scaler.transform(x_test),columns=x_test.columns)
classifier =  LogisticRegression()
classifier.fit(x_train,y_train)
y_pred=classifier.predict(x_test)
from sklearn.metrics import accuracy_score
ac_lr=accuracy_score(y_test,y_pred)
ac_lr
