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


def chat_with_gpt(prompt):
    openai.api_key = "your-api-key"
    response = openai.Completion.create(
        engine="text-babbage-001",
        prompt=prompt,
        max_tokens=1000,
        n=1,
        stop=None,
        temperature=0.5,
    )
    return response.choices[0].text.strip()