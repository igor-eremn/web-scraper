from bs4 import BeautifulSoup
import requests

url = "https://webscraper.io/test-sites/e-commerce/allinone"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

#all sections
section_titles = []

for header in soup.find_all(['h2', 'h3']):
    section_titles.append(header.get_text(strip=True))

for title in section_titles:
    print(title)

section_header = soup.find('h3', string=lambda text: text and 'Top items being scraped right now' in text)

if section_header:
    parent_section = section_header.find_parent()
    text_under_section = parent_section.get_text(strip=True)

    print(text_under_section)
else:
    print("Section header not found.")