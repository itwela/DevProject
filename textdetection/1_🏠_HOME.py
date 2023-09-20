import streamlit as st
from decouple import Config
from decouple import config
from PIL import Image
import annotated_text as anotxt


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

st.code(f"""
import streamlit as st

st.markdown('''{md}''')
""")

st.markdown(md)

st.markdown('## Chat with Tyrion Lannister ⚔️')
col1, col2 = st.columns((2,1))
with col1:
    st.markdown(
        f"""
        Chat with Tyrion Lannister to advise you on:
        - Office Politics
        - War Strategy
        - The Targaryens


        #### [Sign Up Now 🤘🏻]({config('https://buy.stripe.com/cN2eVu4CG0rg8Lu4gg')})
        """
    )

# https://buy.stripe.com/cN2eVu4CG0rg8Lu4gg
# 4b3a9z

with col2:
    image = Image.open('tv.png')
    st.image(image)


st.markdown('### Already have an Account? Login Below👇🏻')
with st.form("login_form"):
    st.write("Login")
    email = st.text_input('Enter Your Email')
    password = st.text_input('Enter Your Password')
    submitted = st.form_submit_button("Login")

good_password = ("4b3a9z")


if submitted:
    if password == config('SECRET_PASSWORD'):
        st.session_state['logged_in'] = True
        st.text('Succesfully Logged In!')
    else:
        st.text('Incorrect, login credentials.')
        st.session_state['logged_in'] = False


if 'logged_in' in st.session_state.keys():
    if st.session_state['logged_in']:
        st.markdown('## Ask Me Anything')
        question = st.text_input('Ask your question')
        if question != '':
            st.write('I drink and I know things.')
