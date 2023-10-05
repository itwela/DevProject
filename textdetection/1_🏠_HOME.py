import streamlit as st
from PIL import Image
from streamlit_extras.keyboard_url import keyboard_to_url
from annotated_text import annotated_text as anotxt

# Define the CSS style for transforming the title
st.title("Welcome!")
st.caption(" -- Brought to you by Itwela Ibomu")
# Display the text
anotxt(
    "Here is a", 
    ("collection of reseacrh", "!"), 
    "that I do on", 
    ("algorithmic trading.", "!!"), 
    "There are many apps to try on this site and",
    ("research", "!"), 
    "to explore so please....."
)

md = ("Enjoy! :balloon:")

