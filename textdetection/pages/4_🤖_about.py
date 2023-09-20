import sys
from pyautogui import *
import pyautogui as pa
import time
import streamlit as st
from datetime import date
from prophet import Prophet
import matplotlib.pyplot as plt
import numpy as np


col1, col2 = st.columns(2)
col1.write('Column 1')
col2.write('Column 2')

# Three columns with different widths
col1, col2 = st.columns([1,1])
# col1 is wider

# Using 'with' notation:
with col1:
    st.write('This is column 1')
    arr = np.random.normal(6, 13, size=400)
    fig, ax = plt.subplots()
    ax.scatter(x=arr,y=arr)
    st.pyplot(fig)
with col2:
    st.write('This is column 1')
    arr = np.random.normal(1, 1, size=100)
    fig, ax = plt.subplots()
    ax.hist(arr, bins=20)
    st.pyplot(fig)



