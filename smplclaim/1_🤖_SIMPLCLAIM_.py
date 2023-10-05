import streamlit as st
import os
import openai
import pandas as pd
import time
from PIL import Image 
from streamlit_extras.stoggle import stoggle
from streamlit_extras.streaming_write import write
from streamlit_extras.dataframe_explorer import dataframe_explorer
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

    stoggle(
    "Instructions:",
    """
    For Ingredients mode: Provide what ingredients you would like a recipe with in the text field.
    For the Dish mode: Provide a name of a dish you would like to make MealMaker will come up with a recipe for you. If you have any allergies, dont forget to put them in the allergy text field. Then click 'Cook me a meal!' to generate your recipe.
    """,
    ) 

    st.divider()
 

with st.expander(""):
        st.write('''
           - This is the actual excel sheet. Once you press submit
                 below, your changes will show here in real-time. This is how you
                 can basically confirm that your changes are being saved.
        ''')
        st.divider()
        df = pd.read_csv('baba-test.csv', encoding='ISO-8859-1')
        st.write(df)

# function to add data to
def add_data_to_df(df, data_dict):
    new_data = pd.DataFrame(data_dict)
    updated_df = pd.concat([df, new_data])
    return updated_df

st.header("Add what you know here:")


col1, col2 = st.columns((2,2))
with col1:
    opt_form = st.form("Add data")   
    item_number = opt_form.number_input("Item #?", min_value=1, step=1) 
    quantity = opt_form.number_input("Quantity?", min_value=1, step=1) 
    room = opt_form.text_input("Room")
    brand = opt_form.text_input("Brand") 
    add_data = opt_form.form_submit_button() 
    if add_data:
        # Check if the item number already exists in the DataFrame
        if item_number in df['Item #'].values:
            # If it does, update the row
            if room:  # Check if room input is not empty
                df.loc[df['Item #'] == item_number, 'Room'] = room
            if brand:  # Check if brand input is not empty
                df.loc[df['Item #'] == item_number, 'Brand or Manufacturer'] = brand
            if quantity:  # Check if quantity input is not empty
                df.loc[df['Item #'] == item_number, 'Quantity Lost'] = int(quantity)
        else:
            # If it doesn't, add a new row
            new_data = {
                'Item #': [int(item_number)],
                'Room': [room],
                'Brand or Manufacturer': [brand],
                'Quantity Lost': [int(quantity)]
            }
            df = add_data_to_df(df, new_data)

        # Sort the DataFrame by 'Item #' column
        df = df.sort_values('Item #')
        st.divider()
        df.to_csv('baba-test.csv', index=False)
with col2:
    st.title("Updates")
    filtered_df = dataframe_explorer(df, case=False)
    st.dataframe(filtered_df, use_container_width=True)



#  ----------------------------------------------------

st.divider()         

# # Send query to the chatbot
# if st.button("Generate"):
#     pbtext = ("Please wait, your recipe will load shortly......")
#     prg = st.progress(0, text=pbtext)

#     recipe_response = chat_with_gpt3_5(prompt)
            
#     # Split the response into lines and find the recipe name
#     lines = recipe_response.split('\n')
#     recipe_name = ""
#     ingredients_and_steps = ""
#     for line in lines:
#         if "recipe name" in line.lower():
#             recipe_name = line.strip()
#         else:
#             ingredients_and_steps += line.strip() + "\n"
            
#     for i in range(99):
#         time.sleep(0.2)
#         prg.progress(i+1, text=pbtext)
    
#     for i in range(1):
#         time.sleep(0.2)
#         prg.progress(100, text="All done!")

#         # Output
#     with st.container():
#         st.markdown(f"## {recipe_name}")
#         st.markdown(ingredients_and_steps)

#     #  ----------------------------------------

