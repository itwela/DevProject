import pandas as pd
import string
import sys

def read_house(fileName: str):
    # get open og txt file for reading text file
    txt_file = open(fileName, "r")

    # get column titles
    column_names = txt_file.readline().strip().split("\t")
    politicians = list()
    lines = txt_file.readlines()

    for line in lines:
        politician = list()
    
        if line[0].isspace():
            politician.append("-")
        politician.extend(line.strip().split("\t"))
        # print(politician)


        politicians.append(politician)

    return pd.DataFrame(politicians, columns=column_names)

    # print(df)



    # free memory aquired
    txt_file.close()

if __name__ == "__main__":
    file_name = sys.argv[1]
    df = read_house(fileName=file_name)
    df["FilingDate"] = pd.to_datetime(df["FilingDate"])
    
    if ( len(sys.argv) == 3 ):
        # get politician by last name
        lastName = sys.argv[2]
        #this is the name of the custom database
        politician_filings = df.loc[df["Last"] == lastName]
        output_text = politician_filings.to_string(index=False, justify='left')
        print(output_text)
        politician_filings.to_csv("politician_filings.txt", sep="\t", index=False)
        sys.exit(1)

    sort_by_dates = df.sort_values(by=["FilingDate"])
    output_text = sort_by_dates.to_string(index=False, justify='right')

    print(output_text)

    # Save the output text to a file




