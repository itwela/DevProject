from PIL import Image
import sys
from pyautogui import *
import pyautogui as pa
import time
import keyboard
import random
import win32api, win32con

time.sleep(2)

flag = False

#  ====================
    
# check if buys or sells are opened or closed.
while True:
    if pa.locateOnScreen("openbuy.png", region=(1300,130,250,400), confidence=0.9) != None:
        if not flag:
            print("I can see a buy")
            flag = True
            time.sleep(0.5)

    # else:
    #     print("Im legally blind")
    #     time.sleep(0.5)

    if pa.locateOnScreen("opensell.png", region=(1300,130,250,400), confidence=0.9) != None:
        if not flag:
            print("I can see a sell")
            flag = True
            time.sleep(0.5)

    # else:
    #     print("Im legally blind")
    #     time.sleep(0.5)

    if pa.locateOnScreen("flat.png", region=(1300,130,250,400), confidence=0.9) != None:
        print("we gone")
        time.sleep(0.5)
    
    if keyboard.is_pressed('q'):
        sys.exit()

