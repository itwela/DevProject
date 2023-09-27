import streamlit as st
import os
import openai
import pandas as pd
import time
from PIL import Image 
from streamlit_extras.stoggle import stoggle
from streamlit_extras.streaming_write import write
from dotenv import load_dotenv

# OpenAI API key setup start----

load_dotenv()

api_key = os.getenv("2OPENAI_API_KEY")

if api_key is None:
    raise Exception("API key not found in .env file")

openai.api_key = api_key
# OpenAI API key setup finish----

# -----------------------------------


# Function to communicate with ChatGPT
def chat_with_gpt3_5(prompt):
    openai.api_key = api_key

    gpt4response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        temperature=0,
        messages=[
            {
        "role": "system",
        "content": "You are my personal assistant. Your name is MealMaster. You are great at explaining and helping me and love what you do."
            },
            {
        "role": "user",
        "content": prompt
            }
            ],  
        max_tokens=1000  # Adjust the max_tokens as needed
    )
            

    return gpt4response['choices'][0]['message']['content']


def chat_with_gpt3(prompt):
    openai.api_key = api_key
    response = openai.Completion.create(
        engine="text-babbage-001",
        prompt=prompt,
        max_tokens=1000,
        n=1,
        stop=None
    )

    return response.choices[0].text.strip()

#  ------------------------------------------------------------



col1, col2 = st.columns((2,1))
with col1:
    mtitle = ('## Simpl Claim!')
    def sclaim():
        for word in mtitle.split():
            yield word + " "
            time.sleep(0.23)  
    write(sclaim)
    st.divider()
 

with st.expander("Expander:"):
        st.write('''
           - Once you subscribe to MealMaster, you will see a thank you message on your screen with your password.
            This is the password you will enter in the password field below.
        ''')

# 48fnsl489dj
# https://buy.stripe.com/cN2eVu4CG0rg8Lu4gg
# 4b3a9z

# password = "4b3a9z"

# with col2:
#     image = Image.open('cutlery-knife-svgrepo-com.png')
#     st.image(image)

df = pd.read_csv('baba-test.csv', encoding='ISO-8859-1')
st.write(df)


st.header("Add what you know here:")

opt_form = st.form("Add data")   
quantity = opt_form.number_input("Quantity?", min_value=0.00, step=1.00) 
room = opt_form.text_input("Room")
brand = opt_form.text_input("Brand") 
add_data = opt_form.form_submit_button()
if add_data:
    new_data = pd.DataFrame({ 'Room': [room], 'Brand or Manufacturer': [brand], "Quantity Lost": [int(quantity)] })
    df = pd.concat([new_data, new_data], ignore_index=True)
    # df.to_csv('baba-test.csv', index=False)

st.dataframe(df)
#  ----------------------------------------------------


st.title("Simpl Claim:")
stoggle(
"Instructions:",
"""
For Ingredients mode: Provide what ingredients you would like a recipe with in the text field.
For the Dish mode: Provide a name of a dish you would like to make MealMaker will come up with a recipe for you. If you have any allergies, dont forget to put them in the allergy text field. Then click 'Cook me a meal!' to generate your recipe.
""",
) 
st.divider()         

# Send query to the chatbot
if st.button("Generate"):
    pbtext = ("Please wait, your recipe will load shortly......")
    prg = st.progress(0, text=pbtext)

    recipe_response = chat_with_gpt3_5(prompt)
            
    # Split the response into lines and find the recipe name
    lines = recipe_response.split('\n')
    recipe_name = ""
    ingredients_and_steps = ""
    for line in lines:
        if "recipe name" in line.lower():
            recipe_name = line.strip()
        else:
            ingredients_and_steps += line.strip() + "\n"
            
    for i in range(99):
        time.sleep(0.2)
        prg.progress(i+1, text=pbtext)
    
    for i in range(1):
        time.sleep(0.2)
        prg.progress(100, text="All done!")

        # Output
    with st.container():
        st.markdown(f"## {recipe_name}")
        st.markdown(ingredients_and_steps)

    #  ----------------------------------------

