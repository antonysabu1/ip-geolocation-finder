# IP Geolocation Finder 🌍

A simple Flask web app that fetches and displays geolocation data (IP, City, Country, Latitude, Longitude) for a given IP address, complete with a map powered by Leaflet.js.

## 🚀 Features

- Input any IP and get its geolocation
- Displays a dynamic Leaflet map with a pin on the location
- Keeps track of your search history
- Clean and dark-themed UI

## 🛠️ Tech Stack

- Python + Flask
- HTML/CSS
- Leaflet.js
- IP Geolocation API

## 📂 Project Structure
```
IP-Geolocation-Finder/
├── app.py
├── static/
│   ├── style.css
│   └── js/
│       └── map.js
├── templates/
│   ├── index.html
│   ├── result.html
│   └── history.html
├── .gitignore
└── README.md
```
## ▶️ How to Run

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/IP-Geolocation-Finder.git
   cd IP-Geolocation-Finder
   ```

2. **Create and activate a virtual environment (optional but recommended)**
   ```bash
   python -m venv venv
   ```

   - **For Windows**
     ```bash
     venv\Scripts\activate
     ```

   - **For macOS/Linux**
     ```bash
     source venv/bin/activate
     ```

3. **Install dependencies**
   ```bash
   pip install flask
   ```

4. **Run the app**
   ```bash
   python app.py
   ```

5. **Open in your browser**
   ```
   http://127.0.0.1:5000
   ```

## screenshot of the project


![image](https://github.com/user-attachments/assets/78c9ae31-6954-4f92-81e1-089a845cd341)

📄 License
This project is licensed under the MIT License.
Feel free to use, modify, and share it for personal or commercial purposes!


---
