import pyautogui
from PIL import Image
import tkinter as tk
import customtkinter
import time
import keyboard

app = customtkinter.CTk()
app.geometry('200x200')
app.title('ColorPickerToo')
tfont = customtkinter.CTkFont(family='Arial', size=20, weight='bold')

output_var = tk.StringVar()
_output = customtkinter.CTkTextbox(app, font=tfont, width=110, height=100, wrap='word')
_output.place(relx=0.5, rely=0.63, anchor="center")



def rgb_to_hex(rgb):
    return '#%02x%02x%02x' % rgb

def get_color():
    x, y = pyautogui.position()
    screenshot = pyautogui.screenshot()
    pixel = screenshot.getpixel((x, y))
    return rgb_to_hex(pixel)

def check_keys():
    if keyboard.is_pressed('ctrl'):
        color = get_color()
        print(color)
        _output.insert(index="0.0", text=color, tags=None)
    elif keyboard.is_pressed('shift') and keyboard.is_pressed('alt') and keyboard.is_pressed('q'):
        app.quit()
    app.after(100, check_keys)  # Check again after 100ms

print("After 5 seconds, click on the screen to get the color's hex code.")
time.sleep(5)

check_keys()  # Start the loop
app.mainloop()