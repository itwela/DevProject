import pyautogui as pa

pa.hotkey("alt", "esc")

# estimate of region for extry and exit controller
iml = pa.screenshot(region=(1250,140,300,350))
iml.save("yo.png")

pa.hotkey("alt", "esc")
