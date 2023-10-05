import sys
import tkinter as tk

class IORedirector(object):
    def __init__(self, text_area):
        self.text_area = text_area

class StdoutRedirector(IORedirector):
    def write(self, str):
        self.text_area.insert(tk.END, str)

class GUI(tk.Frame):
    def __init__(self, master=None, **kwargs):
        tk.Frame.__init__(self, master, **kwargs)
        self.text_area = tk.Text(self, wrap='word') # Use a ScrolledText widget if you want a scroll bar
        self.text_area.pack(expand=True, fill='both')
        sys.stdout = StdoutRedirector(self.text_area)

if __name__ == '__main__':
    root = tk.Tk()
    gui = GUI(root)
    gui.pack(expand=True, fill='both')
    root.mainloop()