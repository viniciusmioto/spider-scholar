from bs4 import BeautifulSoup

# Step 1: Open and read the HTML file
with open("../data/faculty.html", "r", encoding="utf-8") as file:
    content = file.read()

# Step 2: Parse the HTML content
soup = BeautifulSoup(content, "html.parser")

# Step 3: Initialize a dictionary to store faculty data
faculty_data = {}

# Step 4: Find all faculty members
faculty_members = soup.find_all("div", class_="faculty-member")

# Step 5: Extract names and research interests
for member in faculty_members:
    name = member.find("h2").get_text(strip=True)
    interests = member.find("p").get_text(strip=True).replace("Research Interests: ", "")
    faculty_data[name] = interests

# Step 6: Print the extracted data
print("Extracted Faculty Data:\n")
for name, interests in faculty_data.items():
    print(f"{name}: {interests}\n")
