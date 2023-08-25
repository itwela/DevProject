import requests
import os
from zipfile import ZipFile

from datetime import datetime, timezone


def download_disclosure_reports(new_file_name: str):
    # check the last time the file was downloaded
    current_dir = os.getcwd()
    file_path = current_dir + "/" + new_file_name
    
    # check if file exists
    if os.path.exists(path=file_path):
        # get file creation time
        file_creation_time = os.path.getctime(new_file_name)
        file_creation_date = datetime.fromtimestamp(file_creation_time, tz=timezone.utc).strftime("%m/%d/%Y, %H:%M:%S")
        
        # get now time
        now = datetime.now().strftime("%m/%d/%Y, %H:%M:%S")
        
        date1 = datetime.strptime(file_creation_date, "%m/%d/%Y, %H:%M:%S")
        date2 = datetime.strptime(now, "%m/%d/%Y, %H:%M:%S")
        
        # get difference
        difference = date2 -  date1
        
        if difference.days > 0:
            # download the new data file
            download_file(new_file_name)
            
        else:
            print("Data is still good")
    else:
        # if file doesn't exist then just download the file
        download_file(new_file_name)
            
def download_file(fileName: str):
    download_url = "https://disclosures-clerk.house.gov/public_disc/financial-pdfs/2023FD.ZIP"
    
     # pull file from site
    r = requests.get(url=download_url)
    
    with open(new_file_name, "wb") as f:
        f.write(r.content)
    f.close()
        
def unzip_disclosure_reports(filename: str):
    cwd = os.getcwd()
    zipfile_path = cwd + "/" + filename
    with ZipFile(zipfile_path, "r") as zObject:
        zObject.extract("2023FD.txt", cwd)
    zObject.close()
        
        


if __name__ == "__main__":
    new_file_name = "2023DamnDaniel.zip"
    
    
    download_disclosure_reports(new_file_name=new_file_name)
    unzip_disclosure_reports(new_file_name)