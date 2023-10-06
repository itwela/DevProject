# imports ------------------------------------------------
import streamlit as st
import re
import os
import openai
import pandas as pd
import time
from PIL import Image 
from streamlit_extras.stoggle import stoggle
from streamlit_extras.streaming_write import write
from streamlit_extras.dataframe_explorer import dataframe_explorer
from streamlit_extras.grid import grid
from dotenv import load_dotenv
#  -------------------------------------------------------

# OpenAI API key setup start -----------------------------
load_dotenv()
api_key = os.getenv("2OPENAI_API_KEY")
if api_key is None:
    raise Exception("API key not found in .env file")
openai.api_key = api_key
# OpenAI API key setup finish ----------------------------

# Function to communicate with ChatGPT -------------------
def chat_with_gpt3_5(prompt):
    openai.api_key = api_key

    gpt3response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        temperature=0,
        messages=[
            {
        "role": "system",
        "content": '''You are my personal assistant for cost estimation. You are an expert at
         taking simple descriptions of an item and guess a price of the item. Im
         trying to use these answers you provide in an excel sheet, so while I want you to think very hard
          I would appreciate it if you kept the thought process to yourself and 
           provided the answer in the format he needs. Also, the Im is using a function to grab the integers
            in your answer to pass that along.
            so please make the numbers you provide in a format that will fit this.
            Every answer you give is in the following format, no exceptions:  
            Cost - , Total - 
        .'''
            },
            {
        "role": "user",
        "content": prompt
            }
            ],  
        max_tokens=1000  # Adjust the max_tokens as needed
    )
            

    return gpt3response['choices'][0]['message']['content']

#  -------------------------------------------------------
# defining colums here -----------------------------------
col1, col2 = st.columns((2,1))
#  -------------------------------------------------------

# grid setup -----------------------------


# ---------------------------------------

# 
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

# Define variables to hold the values from the first column
item_number = None
quantity = None
room = None
brand = None
condition = None
item_description = None


col1, col2 = st.columns((2,2))
with col1:    
    item_number = st.number_input("Item #?", min_value=1, step=1) 
    quantity = st.selectbox("Quantity ?",
    ('1','2','3','4','5','6','7','8','9','10','11','12'
     '13','14','15','16','17','18','19','20',
     '21', '22', '23', '24', '25', '26', '27', '28', '29', 
     '30', '31', '32', '33', '34', '35', '36', '37', '38', 
     '39', '40')) 
    room = st.text_input("Room")
    brand = st.text_input("Brand/Original Vendor") 
with col2:
    condition = st.selectbox(
    'New or Used?',
    ('New', 'Used'))
    item_description = st.text_input("Item Description")
    grid1 = grid(2, vertical_align="bottom", gap='small')
    add_data = grid1.button(label="Submit", use_container_width=True)

    # when submit button is clicked
    if add_data:
        pbtext = ("Your entries are being added now......")
        prg = st.progress(0, text=pbtext)

        # Check if the item number already exists in the DataFrame
        if item_number in df['Item #'].values:
                # If it does, update the row
            if room:  # Check if room input is not empty
                df.loc[df['Item #'] == item_number, 'Room'] = room
            if brand:  # Check if brand input is not empty
                df.loc[df['Item #'] == item_number, 'Brand or Manufacturer'] = brand
                df.loc[df['Item #'] == item_number, 'Original Vendor'] = brand
            if quantity:  # Check if quantity input is not empty
                df.loc[df['Item #'] == item_number, 'Quantity Lost'] = quantity
            if condition:
                df.loc[df['Item #'] == item_number, 'Condition'] = condition  
            if item_description:  # Check if quantity input is not empty
                df.loc[df['Item #'] == item_number, 'Item Description'] = item_description
            else:
            # If it doesn't, add a new row
                new_data = {
                    'Item #': [int(item_number)],
                    'Room': [room],
                    'Brand or Manufacturer': [brand],
                    'Quantity Lost': [int(quantity)],
                    'Condition': [condition],
                    'Item Description': [item_description],
                    'Original Vendor': [brand],
                    }
                df = add_data_to_df(df, new_data)

            for i in range(99):
                time.sleep(0.02)
                prg.progress(i+1, text=pbtext)
                    
            for i in range(1):
                time.sleep(0.02)
                prg.progress(100, text=":green[All done!]")

                    # Sort the DataFrame by 'Item #' column
    df = df.sort_values('Item #')
    df = df.fillna('')
    # Convert the DataFrame to a dictionary
    data_dict = df.to_dict()
        # Filter out the empty cells
    filtered_data_dict = {key: {k: v for k, v in data_dict[key].items() if v != ''} for key in data_dict}
    prompt = f'''I have this excel sheet that i need you to estimate
    some things for me. im going to give you some information out of the
    sheet and i want you to estimate the Cost to replace pretax and the Total cost of the {item_description} item thats on row number: {item_number}.
    The quantity of item(s) is {quantity} and the item is from {brand}. 
    Use the format you were provided to give me your answer.
    Use the item description to come up with your estimates if all else fails. 
    based on your knowledge. If the quantity for an item is more than one, please do the neccesary
    multiplication to find the Total cost.
    '''
    st.write(prompt)

    pass
        #  ----------------------------------------    
    estimate = grid1.button(label="Estimate", use_container_width=True) 
    #  when estimate button is clicked
    if estimate:
        pbtext = ("Please wait, your estimate will load shortly......")
        prg = st.progress(0, text=pbtext)

        response = chat_with_gpt3_5(prompt)
                            
        # Split the response into lines and find the recipe name
                            
        for i in range(99):
            time.sleep(0.04)
            prg.progress(i+1, text=pbtext)
                    
        for i in range(1):
            time.sleep(0.02)
            prg.progress(100, text="All done!")

        # Use regular expressions to extract numbers from the response
        cost_to_replace_each = None  # Initialize the variables
        total_cost_value = None

        # Modify the regular expressions to match any number of non-digit characters between the phrases and the numbers
        cost_to_replace_match = re.search(r'Cost - \D*(\d+)', response)
        total_cost_match = re.search(r'Total\D*(\d+)', response)

        lines = response.split('\n')

        if cost_to_replace_match:
            cost_to_replace_each = int(cost_to_replace_match.group(1))

        if total_cost_match:
            total_cost_value = int(total_cost_match.group(1))
            # If it doesn't, add a new row
        new_data = {
            'Cost to Replace Pre-Tax (each)': [cost_to_replace_each],
            'Total Cost': [total_cost_value],
            }
        df = add_data_to_df(df, new_data)
        # Output
        with st.container():
            st.title("Estimates:")
            st.markdown("Cost per item: $" + str(cost_to_replace_each))
            st.markdown("Total cost: $" + str(total_cost_value))

        #  ----------------------------------------
            
st.divider()
        # 
#  ----------------------------------------------------
st.title("Your sheet:")
# filtered_df = dataframe_explorer(df)
st.dataframe(df)
df.to_csv('baba-test.csv', index=False)
# Send query to the chatbot
    

