from PIL import Image
import pytesseract
import cv2
import pyautogui as pa



# This converts image text to a string (its decent)
# pytesseract.pytesseract.tesseract_cmd = r'C:\\Program Files\\Tesseract-OCR\\tesseract.exe'

# img = cv2.imread("rtext.png")

# img2char = pytesseract.image_to_string(img)

# print(img2char)

nobimage = pa.locateCenterOnScreen("2nobuy.png")
nosimage = pa.locateCenterOnScreen("4nosell.png")

# opens tradingview window
pa.hotkey("alt", "esc")

# Function to buy once i get a better image identifier.
if nobimage:
#         opens buy panel guarenteed
    pa.hotkey("shift", "b")
#         locks in trade
    pa.hotkey("enter")
else:
    pa.hotkey("alt", "esc")

# if nosimage:
# #         opens buy panel guarenteed
#     pa.hotkey("shift", "s")
# #         locks in trade
#     pa.hotkey("enter")
# else:
#     pa.hotkey("alt", "esc")

# confidence is a pyautogui parameter that helps with the confidence meter of identifying something
# image = pa.locateCenterOnScreen("bflag.png", confidence=0.68)
