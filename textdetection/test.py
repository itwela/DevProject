import sys
from pyautogui import *
import pyautogui as pa
import time
import keyboard
import customtkinter
import tkinter as tk


# =======================================================
# initialization
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
    if pa.locateOnScreen("openbuy.png", region=(1250,140,300,350), confidence=0.9) != None and bo1 != True:
        print("I can see a buy")
        bo1 = True
        # opens buy
        pa.hotkey("shift", "b")
#       # presses enter
        pa.hotkey("enter")
    if pa.locateOnScreen("flatbuy.png", region=(1250,140,300,350), confidence=0.96) != None and bo1 != False:
        print("A buy was closed")
        bo1 = False
        # closes buy
        pa.hotkey("shift", "s")
#       # presses enter
        pa.hotkey("enter")
    if pa.locateOnScreen("opensell.png", region=(1250,140,300,350), confidence=0.9) != None and so1 != True:
        print("I can see a sell")
        so1 = True
        # opens sell
        pa.hotkey("shift", "s")
#       # presses enter
        pa.hotkey("enter")
    if pa.locateOnScreen("flatsell.png", region=(1250,140,300,350), confidence=0.96) != None and so1 != False:
        print("A sell was closed")
        so1 = False
        # closes sell
        pa.hotkey("shift", "b")
#       # presses enter
        pa.hotkey("enter")
    # this keeps your screen on. presses alt every minute.
    else:
        pa.hotkey('alt')
        time.sleep(60)
# ========================================================
