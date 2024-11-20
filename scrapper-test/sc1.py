from bs4 import BeautifulSoup
import requests

url = "https://apple.com"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

print(soup.title.text)