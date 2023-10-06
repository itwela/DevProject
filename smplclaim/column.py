# for i in range(1, 201):
#     print(str(i) + ',,,,,,,,,,,')

original_list = ('1','2','3','4','5','6','7','8','9','10','11','12',
 '13','14','15','16','17','18','19','20')

# Convert the string to a list of integers and add 20 to each element
original_list = [str(int(x) + 20) for x in original_list]

# Create an empty list to store the repeated elements
repeated_list = []

# Use a for loop to repeat the elements
for _ in range(5):  # Repeat 5 times for 21, 22, 23, 24, 25
    repeated_list.extend(original_list)

# Print the repeated list
print(repeated_list)