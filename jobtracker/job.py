# imports ------------------------------------------------
import streamlit as st
import re
import os
import openai
import pandas as pd
import time
from streamlit_extras.streaming_write import write
from streamlit_extras.dataframe_explorer import dataframe_explorer
from streamlit_extras.grid import grid
#  -------------------------------------------------------
# session state ---------------------

#  -------------------------------------------------------
# SIDEBAR -----------------------------------#  -------------------------------------------------------
with st.sidebar:
        st.title("Tips for success:")
        st.write("",
            """ 
            - Be as descriptive as you can in the
            Description section so that the Ai can
            get a clear picture on what the item is.
        """,)
        st.write("",
            """
            - Double click Add to Sheet and you will see: 
             ( 'Your entries are being added now......' )
            and a progress bar.
        """,)

        with st.expander(":green[Reminder:]"): 
    
            '''
                When you are done, please press the "Finished ✅" button and download your new file.
                This is so that just in case you dont finish, you can upload your sheet back to google drive and 
                just continue from where you left off.
                    ''' 
      
                # st.write(df)


    # 

mtitle = ('## JobPlaner ')
def jPlan():
    for word in mtitle.split():
        yield word + " "
        time.sleep(0.23)  
write(jPlan)

st.write("",
        """
        Welcome to SimplClaim. To use, Fill out the required fields and then press "Add to sheet"
        to watch the magic happen. 
    """,)

# FILE UPLOAD -----------------------------
df = pd.read_csv('https://docs.google.com/spreadsheets/d/' +'1uYXY5J0etuFEzghV-dvhxsVS003z6oG-t7HGMSB6AKw/' +'export?format=csv&gid=' +'783998185')

st.divider()

# ---------------------------------------

# START OF CODE REALLY IS HERE -----------
# function to add data to
def add_data_to_df(df, data_dict):
    new_data = pd.DataFrame(data_dict)
    updated_df = pd.concat([df, new_data])
    return updated_df


# Define variables to hold the values from the first column
item_number = None
quantity = None
room = None
brand = None
condition = None
item_description = None
age_in_years = None
age_in_months = None

st.header("Add what you know here:")



col1, col2 = st.columns((2,2))

with col1:
    grid1 = grid(2, 2, vertical_align="bottom", gap='small')    
    item_number = grid1.number_input("Item #?", min_value=1, step=1) 
    quantity = grid1.selectbox("Quantity Owned:",
    ('1','2','3','4','5','6','7','8','9','10','11','12'
    '13','14','15','16','17','18','19','20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', 
    '30', '31', '32', '33', '34', '35', '36', '37', '38', 
    '39', '40')) 
with col2:
    grid2 = grid(2, 2, vertical_align="bottom", gap='small')
    age_in_years = grid2.selectbox("Age (Years):",
    ('1','2','3','4','5','6','7','8','9','10','11','12'
    '13','14','15','16','17','18','19','20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', 
    '30', '31', '32', '33', '34', '35', '36', '37', '38', 
    '39', '40', '41','42','43','44','45','46','47','48','49', '50')) 
    age_in_months = grid2.selectbox("Age (Months):",
    ('1','2','3','4','5','6','7','8','9','10','11','12')) 

grid5 = grid(3, vertical_align='bottom', gap='small')
room = grid5.selectbox("Location in the House:",
    ('Master Bedroom','Master Bathroom','Downstairs Bathroom',
     'Laundry Room','Living Room', 'Kitchen', 'Den', 'Dining Room',
     'Foyer','Upstairs bathroom','Upstairs bedroom 1',
     'Upstairs bedroom 2','Upstairs bedroom 3','Basement'))
brand = grid5.text_input("Brand/Manufacturer:") 
condition = grid5.selectbox(
'Condition:',
('New', 'Used'))

grid3 = grid(2, vertical_align="bottom", gap='small')
item_description = grid3.text_input("Description:")
add_data = grid3.button(label="Add to Sheet ➕", use_container_width=True)
      
st.divider()


st.title("Your sheet:")


st.write(df)

df.to_csv('https://docs.google.com/spreadsheets/d/' +'1uYXY5J0etuFEzghV-dvhxsVS003z6oG-t7HGMSB6AKw/' +'export?format=csv&gid=' +'783998185')

# df.to_csv(uploaded_file, index=False)
# DOWNLOAD FINISHED FILE ---------

@st.cache_data
def convert_df(df):
   return df.to_csv(index=False).encode('ISO-8859-1')

csv = convert_df(df)

grid6 = grid(1, vertical_align='bottom', gap='small')

if grid6.button("Finished? ✅", key="button1"):
    st.download_button(
    "Download Updated Sheet",
    csv,
    "baba-test.csv",
    "text/csv",
    key='download-csv'
    )