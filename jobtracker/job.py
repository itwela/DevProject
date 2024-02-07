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
import pytz 
import gspread
from dotenv import load_dotenv

# 
load_dotenv()
api_key = os.getenv("2OPENAI_API_KEY")
if api_key is None:
    raise Exception("API key not found in .env file")
openai.api_key = api_key

def chat_with_gpt3_5(prompt):
    openai.api_key = api_key

    gpt3response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        temperature=0,
        messages=[
            {
        "role": "system",
        "content": '''You are my personal assistant for writing the perfect introduction message to recruiters and hiring managers. You are an expert at
         taking simple keywords and information about a job and return a short to the point introduction message. Im
         trying to use these answers you provide in a small introductory linkedin message or email, so while I want you to think very hard
          I would appreciate it if you kept the thought process to yourself and 
           provided the answer in the format he needs. Also, the Im is using a function to grab the integers and keywords
            in your answer to pass that along.
            so please make the numbers you provide in a format that will fit this.
            Every answer you give is in the following format, no exceptions:  
            Hi, I'm Itwela and I recently applied to your job posting for the role at _____ . With my years of experience in ________ and _______ and ____ , I think that I would be a great fit for this role, Could you kindly review my resume or consider a referral? Thanks!
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

# 

# Set the timezone to Eastern Standard Time (EST)
est_timezone = pytz.timezone('US/Eastern')
# Get the current date and time in EST
current_datetime_est = datetime.now(est_timezone)
# Format the date as "%m/%d/%y"
today_date = current_datetime_est.strftime("%m/%d/%y")
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
response_date = None
keywords = None
response = None

#  -------------------------------------------------------
# SIDEBAR -----------------------------------#  -------------------------------------------------------
with st.sidebar:
        grid10 = grid(2, 2, vertical_align="bottom", gap='large')    
        grid10.subheader("Job Resources:")
        grid10.subheader(today_date)
        
        with st.expander('Job Boards:'):
            st.write('Ripplematch - https://app.ripplematch.com/v2/student/recommendations/role/c7d28bdf')
            st.write('Github 2024 SWE List - https://github.com/etkhdaniel/Summer2024-Internships')
            st.write('Simplify - https://simplify.jobs/dashboard')
            st.write('100+ Remote Job Boards - https://cinneah.notion.site/cinneah/100-TOP-JOB-BOARDS-FOR-HIGH-PAYING-JOBS-IN-2024-a9f85017fdf145ecb723ec1af499970d')
        with st.expander("Application Details"):

             '''
                Linkedin - https://www.linkedin.com/in/itwela/
             '''
             '''
                Personal Website - https://itwela.dev/
             '''
             '''
                Github - https://github.com/itwela
             '''
        with st.expander('More Resources:'):
             
             '''
                Free Cover Letter Writer - https://earnbetter.com
             '''
             
             '''
                Resume Guide & Tips - https://www.reddit.com/r/EngineeringResumes/s/QAk6Vck2ws
             '''
             '''
                10+ Open Source Projects - https://www.geeksforgeeks.org/best-open-source-programs-for-students-to-participate/
             '''
        with st.expander(":green[Other Experience To add:]"): 
            '''
                Forage (Jp Morgan Experience) - https://www.theforage.com ✅
            ''' 


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
data = conn.read(worksheet='Sheet1', usecols=list(range(11)), ttl=4)
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
         'Resume Used': resume_used,
         "Response Date": response_date,
         "Keywords": keywords,
         "Introduction:": response,
        },
    index=[0]  
    )


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
grid3 = grid(5, vertical_align='bottom', gap='small')
referral = grid3.selectbox("Referral:",["Yes", "No"]) 
referral_name = grid3.text_input('Referral Name:')
referral_contact = grid3.text_input('Referral Contact:')
resume_used = grid3.text_input('Resume Used:')
response_date = grid3.text_input("Response Date:")
grid4 = grid(1, vertical_align="bottom", gap='small')
keywords = grid4.text_input("Keywords:")


prompt = f'''I need to write an introduction to job recruiters and hiring managers. I want to have the keywords in the introduction and of course the name of the position and recruiter. Im gong to give you all of this information and an example.
Hi {referral_name}, I'm Itwela and I recently applied for your job posting for the {job_title} role at {company} . With my years of experience in {keywords}, I think that I would be a great fit for this role, Could you kindly review my resume or consider a referral? Thanks!
please always write in this format.
'''

if st.button(label="Add to Sheet ➕", use_container_width=True):        
        response = chat_with_gpt3_5(prompt)
        upd_data = add_data_to_df()
        both_datas = pd.concat([data, upd_data], ignore_index=True)
        st.write(response)
        conn.update(worksheet='Sheet1',data=both_datas)
        st.success("Job Status Updated! Your Introduction is above! ✅")


# if grid4.button(label="Clear Sheet ❌", use_container_width=True, key='button3'):
#         conn.update(worksheet='Sheet1', data=data.iloc[:0])
#         st.success("Worksheet Cleared! 💨")
# Display our Spreadsheet as str.dataframe
st.dataframe(data)

st.divider()




# # DOWNLOAD FINISHED FILE ---------

# @st.cache_data
# def convert_df(both_datas):
#    return both_datas.to_csv(index=False).encode('ISO-8859-1')

# csv = convert_df(both_datas)

# grid6 = grid(1, vertical_align="bottom", gap='large')

# grid6.write("Download Your Jobs Here:")
# if grid6.button("Finished? ✅", key="button1"):
#     st.download_button("Download Updated Sheet", csv, "test.csv", "text/csv",key='download-csv')


    


