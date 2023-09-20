import streamlit as st
import os
import openai
from dotenv import load_dotenv

# OpenAI API key setup start----

load_dotenv()

api_key = os.getenv("2OPENAI_API_KEY")

if api_key is None:
    raise Exception("API key not found in .env file")

openai.api_key = api_key
# OpenAI API key setup finish----

# Function to communicate with ChatGPT
def chat_with_gpt(prompt):
    openai.api_key = api_key
    response = openai.ChatCompletion.create(
        model="gpt-4",
        temperature=0,
        messages=[
            {
        "role": "system",
        "content": "You are my personal assistant. Think Jarvis but for a 22 year old college student. Your name is Yinsen. You are great at explaining and helping me and love what you do."
            },
            {
        "role": "user",
        "content": prompt
            }
            ],  
        max_tokens=1000  # Adjust the max_tokens as needed
    )

    return response['choices'][0]['message']['content']



st.title("Recipe Maker Chatbot")

# Choose input type
with st.sidebar:
    st.header("Instructions")
    st.write("Please choose an input type below and provide the corresponding input in the provided text field. Then click 'Cook me a meal!' to generate your recipe.")
    input_type = st.selectbox("Choose input type:", ["Ingredients", "Recipe Name"])

# Get user input
if input_type == "Ingredients":
    ingredients = st.text_input("Enter ingredients separated by commas:")
    prompt = f"Create a recipe using the following ingredients: {ingredients}. Provide a recipe name, ingredients and detailed steps. Add calories for the recipe as well"
else:
    recipe_name = st.text_input("Enter the recipe name:")
    prompt = f"Provide ingredients and detailed steps for the following recipe: {recipe_name}.Add calories for the recipe as well."

recipe_response = ""

# Send query to the chatbot
if st.button("Cook me a meal!"):
    recipe_response = chat_with_gpt(prompt)
    
    # Split the response into lines and find the recipe name
    lines = recipe_response.split('\n')
    recipe_name = ""
    ingredients_and_steps = ""
    for line in lines:
        if "recipe name" in line.lower():
            recipe_name = line.strip()
        else:
            ingredients_and_steps += line.strip() + "\n"

    # Output
    with st.container():
        st.markdown(f"## {recipe_name}")
        st.markdown(ingredients_and_steps)

# Share on WhatsApp
import urllib

# Inside the if condition
if st.button("Share on WhatsApp"):
    share_text = f"Check out this recipe I found using Recipe Maker Chatbot: {recipe_response}"
    share_text = urllib.parse.quote(share_text)
    st.markdown(f"<a href='https://api.whatsapp.com/send?text={share_text}' target='_blank'>Share on WhatsApp</a>", unsafe_allow_html=True)