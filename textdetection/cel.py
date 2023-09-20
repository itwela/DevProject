import pyautogui as py
import time
import keyboard as ky
import sys

#brings up the excel window
py.hotkey("alt", "esc")

# 1 revolution of duplicating a cell and moves to the next 1 - start
py.hotkey("ctrl", "d")
py.hotkey("down")
time.sleep(0.15)
py.hotkey("down")
time.sleep(0.15)
# 1 revolution of duplicating a cell and moves to the next 1 - end
py.hotkey("ctrl", "d")
py.hotkey("down")
time.sleep(0.15)
py.hotkey("down")
time.sleep(0.15)
# 1 revolution of duplicating a cell and moves to the next 1 - start
py.hotkey("ctrl", "d")
py.hotkey("down")
time.sleep(0.15)
py.hotkey("down")
time.sleep(0.15)
# 1 revolution of duplicating a cell and moves to the next 1 - end
