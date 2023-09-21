import streamlit as st
import pandas as pd
import altair as alt
from annotated_text import annotated_text as anotxt

# Define the CSS style for transforming the title
st.title("SFX ALGO RESEARCH")
# Display the text
st.write("Here you will discover with me how Im learning many things, from c++ which is what I built this algorithim with, to pandas, streamlit, and much more. I'll also just be putting my thought process on here. ")


data = pd.read_csv('StrategyTester.csv')
longdata = pd.read_csv('long.csv')
bdfbal = pd.DataFrame(data,columns=['#', 'Profit', 'Balance'])
# ------------------------------------
col1, col2 = st.columns(2)
col1.write("The Good Stuff:")
col2.write("Raw Data:")
col1.write(bdfbal)
col2.write(data)
# ------------------------------------




# ------------------------------------


with st.expander("See more information on how I created the table above:"):
    st.write('''
        The chart above shows the results of the SFX algo for a 4 month time span.
        I have the algo buying and selling here with decent results. Almost a 30%
        profit! 
             
        Now about this table. I was having an issue with my excel sheet where I had these blank 
        spaces on my balance colum and because of that, the chart would not print. See below the "issue":
             ''')
    st.image("pbtablepic.png")
    st.write('''
        To fix this, I tried alot of things but ended up writing a python script to edit the excel sheet.
        There probably are alot of ways but I was sure I could fix the problem and it only took afew lines of code
        to start. See below:    
            ''')
    code = '''import pyautogui as py
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
        time.sleep(0.15)'''
    st.code(code, language='python')
    
    st.write('''
        I just copied and pasted the hotkey "loop" a lot of times and ran the script.
        Problem solved. I tried writing a loop that functioned the same way but I don't know how to make a loop only 
        run for a certain amount of time yet so this was a workaround.
             
        Once I ran this, My problem was solved and you can now see the chart! 
             
        Below is an example of what the code ended up doing for me:
            ''')
    st.image("pbupdatetablepic.png")

# ------------------------------------
col1, col2 = st.columns(2)
# ------------------------------------

with col1:
    st.title("Balance of above test run:")

    bdfbal = pd.DataFrame(data,columns=['Balance', '#'])
    bdfbchart = alt.Chart(bdfbal).mark_line().encode(
        alt.Y('Balance').scale(zero=False),
        x='#',
        ).properties(
        width=300,
        height=400
        )
    st.altair_chart(bdfbchart)

    st.subheader("We ended with $12,458.77 Balance!")

# ------------------------------------
with col2:
        
    st.title("Price of US30 during test run:")

    bdfprice = pd.DataFrame(data,columns=['Price', '#'])
    bdfpchart = alt.Chart(bdfprice).mark_line().encode(
        alt.Y('Price').scale(zero=False),
        x='#',
        ).properties(
        width=300,
        height=400,
        ).configure_mark(
        color='chartreuse'
        )
    st.altair_chart(bdfpchart)

    # ------------------------------------
st.divider()
st.title("Discovery")
st.subheader("So from plotting this data in this way, I  made a few realizations:")


anotxt(
    "1. The ",
    ("Balance", "!"),
    " of my account and the ",
    ("Price", "!"),
    ''' of Us30 dont look THAT different. Or they look a 
         lot more similar than I thought 
         going into this ''',
)

anotxt(
    '''2. Based on this data, I theorized
    that I would make more money just placing 
    ''',
    ("Long", "!!"),
    " trades. ",
    "So to test this theory, I reran the algorithm to only long and here are the results:"
)


col1, col2 = st.columns(2)
# ------------------------------------

with col1:
    st.title("Balance of the first test run:")
    bdfbal = pd.DataFrame(data,columns=['Balance', '#'])
    bdfbchart = alt.Chart(bdfbal).mark_line().encode(
        alt.Y('Balance').scale(zero=False),
        x='#',
        ).properties(
        width=300,
        height=400,
        )
    st.altair_chart(bdfbchart)

    st.subheader("We ended with a $12,458.77 balance at the end of the first test run..")

# ------------------------------------

with col2:
    st.title("Balance of the long test run:")
    bdfprice = pd.DataFrame(longdata,columns=['Balance', '#'])
    bdfpchart = alt.Chart(bdfprice).mark_line().encode(
        alt.Y('Balance').scale(zero=False),
        x='#',
        ).properties(
        width=300,
        height=400,
        ).configure_mark(
        color='orange'
        )
    st.altair_chart(bdfpchart)

    st.subheader("But in the long only simulation, We ended with $14892.47!")

st.title("This is a 17.79% increase in profits we've discovered just from analyzing the data we have so far.")

st.write("I've learned alot so far about so many things and I plan to dive deeper into improving my algo.")

# ------------------------------------



st.divider()

