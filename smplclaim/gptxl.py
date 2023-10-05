import openai
import pandas as pd

# Set up your OpenAI API key
# openai.api_key = "YOUR_API_KEY"

# Load your Excel file
df = pd.read_csv('smplclaim/baba-2.csv', encoding='ISO-8859-1')
sheet = df

# function to add data to sheet
def add_data_to_df(df, data_dict):
    new_data = pd.DataFrame(data_dict)
    updated_df = pd.concat([df, new_data])
    return updated_df

# Define a function to interact with GPT-3
def update_excel(prompt):
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        max_tokens=50,  # Adjust based on your needs
    )
    return response.choices[0].text.strip()

# Example prompt to update a specific cell
prompt = "Update the value in cell A1 to 42."
updated_value = add_data_to_df(prompt, df)

# Update the Excel sheet with the generated value
sheet["A1"] = updated_value

# Save the updated Excel file
df.to_csv('smplclaim/baba-2.csv', index=False)
