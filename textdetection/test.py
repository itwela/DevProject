import sys
from pyautogui import *
import pyautogui as pa
import time
import streamlit as st
from datetime import date
from prophet import Prophet


# =======================================================
# initialization
pa.hotkey("alt", "esc")
pa.hotkey("alt", "esc")
# =======================================================

# =======================================================
# Welcome Message
print("Welcome to the SFX Algo. Watch the magic happen now...and to quit for any reason, press ctrl + c in the terminal.")
# =======================================================

# Variables
# one buy was open
bo1 = False
# one sell is open
so1 = False 

# Loop that watches screen to detect if trades are being opened/closed
while True:
    if pa.locateOnScreen("openbuy.png", region=(1300,120,300,400), confidence=0.9) != None and bo1 != True:
        print("Im entering a buy")
        # opens buy
        bo1 = True
        pa.hotkey("fn", "f9")
        time.sleep(0.5)
        x1,y1 = pa.locateCenterOnScreen('mt4buy.png', confidence=0.90)
        pa.click(x1, y1)
    if pa.locateOnScreen("flatbuy.png", region=(1300,120,300,400), confidence=0.9) != None and bo1 != False:
        bo1 = False
        print("Im closing this buy")
        x,y = pa.locateCenterOnScreen('close.png', confidence=0.90)
        pa.rightClick(x, y)
        cx,cy = pa.locateCenterOnScreen('closit.png', confidence=0.90)
        pa.leftClick(cx, cy)
    if pa.locateOnScreen("opensell.png", region=(1300,120,300,400), confidence=0.9) != None and so1 != True:
        so1 = True
        print("Im entering a sell")
        pa.hotkey("fn", "f9")
        x2,y2 = pa.locateCenterOnScreen('mt4sell.png', confidence=0.90)
        pa.click(x2, y2)
    if pa.locateOnScreen("flatsell.png", region=(1300,120,300,400), confidence=0.96) != None and so1 != False:
        print("Im closing this sell")
        so1 = False
        x,y = pa.locateCenterOnScreen('close.png', confidence=0.90)
        pa.rightClick(x, y)
        cx,cy = pa.locateCenterOnScreen('closit.png', confidence=0.90)
        pa.leftClick(cx, cy)
    else:
        print("Looking" + ".....", end="\r")
        time.sleep(0.1)
        sys.stdout.flush()
    # this keeps your screen on. presses alt every minute.



# ========================================================
