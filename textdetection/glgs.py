from PIL import Image
import sys
import pyautogui as pa



# This converts image text to a string (its decent)
# pytesseract.pytesseract.tesseract_cmd = r'C:\\Program Files\\Tesseract-OCR\\tesseract.exe'

# img = cv2.imread("rtext.png")

# img2char = pytesseract.image_to_string(img)

# print(img2char)
pa.hotkey("alt", "esc")



nosimage = pa.locateCenterOnScreen("opensell.png", confidence=.90)
nobimage = pa.locateCenterOnScreen("openbuy.png", confidence=.90)

def buyfunction():
    if nosimage:
#         opens buy panel guarenteed
        pa.hotkey("shift", "s")
#         locks in trade
        pa.hotkey("enter")

#     if nosimage:
# # #         opens buy panel guarenteed
#         pa.hotkey("shift", "s")
# # #         locks in trade
#         pa.hotkey("enter")
        
buyfunction()
# opens tradingview window





# if nosimage:
# #         opens buy panel guarenteed
#     pa.hotkey("shift", "s")
# #         locks in trade
#     pa.hotkey("enter")
# else:
#     pa.hotkey("alt", "esc")

# confidence is a pyautogui parameter that helps with the confidence meter of identifying something
# image = pa.locateCenterOnScreen("bflag.png", confidence=0.68)
