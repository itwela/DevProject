from pyautogui import *
import pyautogui as pa
import time
import streamlit as st


# Define the CSS style for transforming the title
st.title(" SFX INSPECTOR ")
st.subheader("IMAGE DETECTION APPLICATION")

# Display the text
st.write("This app monitors my screen for opened and closed trades.")
st.caption("It specifically watches tradingview for a table I coded to update based on if a trade was opened or closed:")


def main():
    bo1 = False
    so1 = False
    pa.hotkey("alt", "esc")
    pa.hotkey("alt", "esc")

    while True:
        if pa.locateOnScreen("openbuy.png", region=(1300,120,300,400), confidence=0.9) != None and bo1 != True:
            st.text('''I'm entering a buy''')
            # opens buy
            bo1 = True
            # -----------
            #  ----------
            # pa.hotkey("shift", "b")
            # time.sleep(1)
            # pa.hotkey("enter")
        if pa.locateOnScreen("flatbuy.png", region=(1300,120,300,400), confidence=0.80) != None and bo1 != False:
            bo1 = False
            st.write('', ''' 
                         "I'm closing this buy"
                         ''')
            # x4,y4 = pa.locateCenterOnScreen("flat.png", confidence=0.90)
            # pa.moveTo(x4,y4)
            # pa.click(x4,y4)
            # pa.hotkey("enter")
        if pa.locateOnScreen("opensell.png", region=(1300,120,300,400), confidence=0.9) != None and so1 != True:
            so1 = True
            st.write("I'm entering a sell")
            # pa.hotkey("shift", "s")
            # pa.hotkey("enter")
        if pa.locateOnScreen("flatsell.png", region=(1300,120,300,400), confidence=0.96) != None and so1 != False:
            st.write("I'm closing this sell")
            so1 = False
            # x4,y4 = pa.locateCenterOnScreen("flat.png", confidence=0.90)
            # pa.moveTo(x4,y4)
            # pa.click(x4,y4)
            # pa.hotkey("enter")
        else:
            # st.write("Looking" + ".....", end="\r")
            time.sleep(0.1)
        # this keeps your screen on. presses alt every minute.

st.button(label="Start", on_click=main)

multi = '''If you press start and nothing happens, its because your screen doesnt have what the inspector is looking for.   
            This is more for me to do in-person demos of the product without having to open an ide. The full documentation for this project is here:   
            - https://topaz-mink-ddd.notion.site/Text-Detection-Trading-Project-Documentation-Itwela-6922ee8d67924190aa7ad0747e3d21bd?pvs=4
            
    '''

st.markdown(multi)

multi1 = '''To stop the script, just refresh the page.   
    '''
st.markdown(multi1)


