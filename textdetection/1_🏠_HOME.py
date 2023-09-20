import sys
from pyautogui import *
import pyautogui as pa
import time
import streamlit as st
from datetime import date
from prophet import Prophet
from prophet.plot import plot_plotly
import pandas as pd
import plotly as px
import plotly.express as plx
import numpy as np
from streamlit_pandas_profiling import st_profile_report
import csv
import requests
import pygwalker as pyg

# Define the CSS style for transforming the title
st.title("Welcome!")
st.caption(" -- Brought to you by Itwela Ibomu")
# Display the text
st.write("Here is a collection of reseacrh that I do on algorithmic trading. There are many apps to try on this site and research to explore so please, enjoy!")

