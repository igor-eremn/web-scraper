from bs4 import BeautifulSoup
import requests

url = "https://apple.com"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

#title
#print(soup.title.text)

#text
#print(soup.get_text())

#tags
#print(soup.find('h'))

#all sections
section_titles = []

for header in soup.find_all(['h2', 'h3']):
    section_titles.append(header.get_text(strip=True))

for title in section_titles:
    print(title)