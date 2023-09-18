import sys
import pyautogui as pa


x,y = pa.locateCenterOnScreen("hugo.png", confidence=0.90)
pa.moveTo(x, y)
pa.click()
