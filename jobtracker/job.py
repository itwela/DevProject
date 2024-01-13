# imports ------------------------------------------------
import re
import os
import openai
import pandas as pd
import time
from datetime import datetime
import streamlit as st
import pandasql as psql
from streamlit_extras.stateful_button import button 
from streamlit_extras.streaming_write import write
from streamlit_extras.dataframe_explorer import dataframe_explorer
from streamlit_extras.grid import grid
from streamlit_gsheets import GSheetsConnection
import gspread

today_date = datetime.now().strftime("%m/%d/%y")

#  -------------------------------------------------------
# SIDEBAR -----------------------------------#  -------------------------------------------------------
with st.sidebar:
        grid10 = grid(2, 2, vertical_align="bottom", gap='large')    
        grid10.subheader("Job Resources:")
        st.write('Ripplematch - https://app.ripplematch.com/v2/student/recommendations/role/c7d28bdf')
        st.write('Github 2024 SWE List - https://github.com/etkhdaniel/Summer2024-Internships')
        st.write('Simplify - https://simplify.jobs/dashboard')

        with st.expander(":green[Other Important Stuuff:]"): 
    
            '''
                Forage (Jp Morgan Experience) - https://www.theforage.com
            ''' 
        with st.expander("Application Details"):

             '''
                Linkedin - https://www.linkedin.com/in/itwela/
             '''
             '''
                Personal Website - https://itwela.vercel.app/
             '''
             '''
                Github - https://github.com/itwela
             '''
        grid10.subheader(today_date)

                # st.write(df)


    # 

mtitle = ('''## Itwela's JobPlanner.''')
def jPlan():
    for word in mtitle.split():
        yield word + " "
        time.sleep(0.23)  
write(jPlan)

st.write("",
        """
        Fill out the required fields and then press "Add to sheet"
        to watch the magic happen. 
    """,)


conn = st.experimental_connection("gsheets", type=GSheetsConnection)
data = conn.read(worksheet='Sheet1', usecols=list(range(9)), ttl=4)
data = data.dropna(how='all')

# # ---------------------------------------

# # START OF CODE REALLY IS HERE -----------
def add_data_to_df():
    return pd.DataFrame({
         'Job Title': job_title, 
         'Company': company, 
         'Date Applied': date_applied, 
         'Status': status, 
         'Link': link, 
         'Referral': referral, 
         'Referral Name': referral_name, 
         'Referral Contact': referral_contact,
         'Resume Used': resume_used
        },
    index=[0]  
    )

# Define variables to hold the values from the first column
job_title = None
company = None
date_applied = None
status = None
link = None
referral = None
referral_name = None
referral_contact = None
resume_used = None


col1, col2 = st.columns((2,2))

with col1:
    grid1 = grid(3, 2, vertical_align="bottom", gap='small')    
    job_title = grid1.text_input("Job title") 
    company = grid1.text_input("Company") 
    date_applied = grid1.text_input("Date applied:") 
with col2:
    grid2 = grid(2, 2, vertical_align="bottom", gap='small')
    status = grid2.selectbox("Status:",
    ('Applied','1st Interview','Multiple Interviews','Ghosted','Rejected')) 
    link = grid2.text_input("Link") 
grid3 = grid(4, vertical_align='bottom', gap='small')
referral = grid3.selectbox("Referral:",("Yes", "No")) 
referral_name = grid3.text_input('Referral Name:')
referral_contact = grid3.text_input('Referral Contact:')
resume_used = grid3.selectbox('Resume Used:',['''ITWELA_IBOMU_RESUME.PDF'''])

grid4 = grid(1, vertical_align="bottom", gap='small')



upd_data = add_data_to_df()
both_datas = pd.concat([data, upd_data], ignore_index=True)


if grid4.button(label="Add to Sheet ➕", use_container_width=True):        
        conn.update(worksheet='Sheet1',data=both_datas)
        st.success("Job Status Updated! ✅")


# if grid4.button(label="Clear Sheet ❌", use_container_width=True, key='button3'):
#         conn.update(worksheet='Sheet1', data=data.iloc[:0])
#         st.success("Worksheet Cleared! 💨")
# Display our Spreadsheet as str.dataframe
st.dataframe(data.head(10))


st.divider()


# DOWNLOAD FINISHED FILE ---------

@st.cache_data
def convert_df(both_datas):
   return both_datas.to_csv(index=False).encode('ISO-8859-1')

csv = convert_df(both_datas)

grid6 = grid(1, vertical_align="bottom", gap='large')

grid6.write("Download Your Jobs Here:")
if grid6.button("Finished? ✅", key="button1"):
    st.download_button("Download Updated Sheet", csv, "test.csv", "text/csv",key='download-csv')


# 
   
#

# 
    


