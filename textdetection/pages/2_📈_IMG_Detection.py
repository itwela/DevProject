import sys
from pyautogui import *
import pyautogui as pa
import time
import streamlit as st
from datetime import date
from prophet import Prophet


# Define the CSS style for transforming the title
st.title(" SFX INSPECTOR ")
st.subheader("IMAGE DETECTION APPLICATION")

# Display the text
st.write("This app monitors the screen for opened and closed trades.")


def main():
    bo1 = False
    so1 = False
    pa.hotkey("alt", "esc")
    pa.hotkey("alt", "esc")

    while True:
        if pa.locateOnScreen("openbuy.png", region=(1300,120,300,400), confidence=0.9) != None and bo1 != True:
            st.text('''I'm entering a buy''')
            # opens buy
            bo1 = True
            # -----------
            #  ----------
            pa.hotkey("shift", "b")
            time.sleep(1)
            pa.hotkey("enter")
        if pa.locateOnScreen("flatbuy.png", region=(1300,120,300,400), confidence=0.80) != None and bo1 != False:
            bo1 = False
            st.text('', ''' 
                         "I'm closing this buy"
                         ''')
            x4,y4 = pa.locateCenterOnScreen("flat.png", confidence=0.90)
            pa.moveTo(x4,y4)
            pa.click(x4,y4)
            pa.hotkey("enter")
        if pa.locateOnScreen("opensell.png", region=(1300,120,300,400), confidence=0.9) != None and so1 != True:
            so1 = True
            st.write("I'm entering a sell")
            pa.hotkey("shift", "s")
            pa.hotkey("enter")
        if pa.locateOnScreen("flatsell.png", region=(1300,120,300,400), confidence=0.96) != None and so1 != False:
            st.text("I'm closing this sell")
            so1 = False
            x4,y4 = pa.locateCenterOnScreen("flat.png", confidence=0.90)
            pa.moveTo(x4,y4)
            pa.click(x4,y4)
            pa.hotkey("enter")
        else:
            # st.write("Looking" + ".....", end="\r")
            time.sleep(0.1)
        # this keeps your screen on. presses alt every minute.

st.button(label="Start", on_click=main)

