import pyautogui as pa

pa.hotkey("alt", "esc")

# estimate of region for extry and exit controller
iml = pa.screenshot(region=(1300,130,250,400))
iml.save("yo.png")

pa.hotkey("alt", "esc")
