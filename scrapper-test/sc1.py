from bs4 import BeautifulSoup
import requests

url = "https://webscraper.io/test-sites/e-commerce/allinone"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

section_titles = []

for header in soup.find_all(['h2', 'h3']):
    section_titles.append(header.get_text(strip=True))

for title in section_titles:
    print(title)

print('-' * 50)
section_header = soup.find('h3', string="Top items being scraped right now")

if section_header:
    parent_section = section_header.find_parent()

    row_section = parent_section.find('div', class_='row')

    if row_section:
        product_cards = row_section.find_all('div', class_='col-md-4 col-xl-4 col-lg-4')

        for product in product_cards:
            title_tag = product.find('a', class_='title')
            price_tag = product.find('h4', class_='price')
            description_tag = product.find('p', class_='description')
            image_tag = product.find('img', class_='img-fluid')

            title = title_tag.get_text(strip=True) if title_tag else "No title"
            price = price_tag.get_text(strip=True) if price_tag else "No price"
            description = description_tag.get_text(strip=True) if description_tag else "No description"
            image_url = image_tag['src'] if image_tag else "No image"

            print(f"Product: {title}")
            print(f"Price: {price}")
            print(f"Description: {description}")
            print(f"Image URL: https://webscraper.io{image_url}")
            print('-' * 50)
    else:
        print("Row section not found.")
else:
    print("Section header not found.")