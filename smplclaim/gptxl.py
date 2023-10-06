import pandas as pd

# Provide the full path to the CSV file
file_dir = r'C:\Users\Judy Sanders\Desktop\code\DevProject\smplclaim'
file_path = 'baba-test.csv'
filepath = f'{file_dir}/{file_path}'  # Replace this with the actual path to your file

# Read the CSV file
df = pd.read_csv(filepath)

# Replace NaN values with an empty string
df = df.fillna('')

# Convert the DataFrame to a dictionary
data_dict = df.to_dict()

# Filter out the empty cells
filtered_data_dict = {key: {k: v for k, v in data_dict[key].items() if v != ''} for key in data_dict}

# Print the filtered dictionary
print(filtered_data_dict)
