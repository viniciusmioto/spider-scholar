from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import pandas as pd

# Configure the WebDriver
service = Service("")  # Replace with your ChromeDriver path
options = webdriver.ChromeOptions()
options.add_argument("--headless")  # Run in headless mode (useful for testing, disable for debugging)
driver = webdriver.Chrome(service=service, options=options)

# URL of the faculty page
url = "https://web.inf.ufpr.br/dinf/?page_id=63"

def scroll_and_load():
    """ Scroll gradually to the bottom to load all dynamic content. """
    last_height = driver.execute_script("return document.body.scrollHeight")
    
    while True:
        # Scroll down a little bit at a time
        driver.execute_script("window.scrollBy(0, 500);")
        time.sleep(1)  # Wait for content to load incrementally
        
        # Calculate new scroll height and compare with the last height
        new_height = driver.execute_script("return document.body.scrollHeight")
        if new_height == last_height:  # If no new content loads, stop scrolling
            break
        last_height = new_height

def get_professor_names():
    # Open the webpage
    driver.get(url)

    # Scroll through the page to ensure all elements are loaded
    scroll_and_load()

    # Wait until at least one element is visible
    WebDriverWait(driver, 10).until(
        EC.presence_of_all_elements_located((By.XPATH, "//h3[@class='staff-member-name']"))
    )

    # Find all professor names
    names = driver.find_elements(By.XPATH, "//h3[@class='staff-member-name']")

    # Debug: Check number of elements found
    print(f"Number of elements found: {len(names)}")

    professor_data = []
    # Print each name
    for name in names:
        print(name.text)
        professor_data.append(name.text)

    return professor_data


# Call the function
professor_names = get_professor_names()

data = pd.DataFrame()

data['professor_name'] = professor_names

data.to_csv('../data/professors.csv', index=False)


# Quit the browser
driver.quit()
