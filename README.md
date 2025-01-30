# 🎉 BooredApp

BooredApp is a sleek and responsive Angular application that helps you find random activities when boredom strikes! It fetches suggestions from an external API and allows filtering by activity type.

🚀 **Live Demo:** [BooredApp on Netlify](https://alessandrodptbooredapp.netlify.app)

---

## ⚡ Quick Start

### 🔹 1. Clone the Repository
```bash
git clone https://github.com/adptCode/booredApp.git
cd booredApp
```

### 🔹 2. Install Dependencies
```bash
npm install
```

### 🔹 3. Start the Application
Run the project using the custom start script that includes CORS proxy configuration:
```bash
npm start
```
Then, open your browser and navigate to `http://localhost:4200/`.

### 🔹 4. Proxy Configuration
The project uses a proxy to handle CORS issues with the external API. This is automatically configured in the `npm start` script.

---

## 🌍 API Information
BooredApp retrieves activities from the **[Bored API](https://bored-api.appbrewery.com/)**, which provides random and categorized activities.

### 🔗 **API Endpoints**
- **Random Activity:** `https://bored-api.appbrewery.com/random`
- **Filtered Activity by Type:** `https://bored-api.appbrewery.com/filter?type={type}`
  - Example: `https://bored-api.appbrewery.com/filter?type=recreational`

---

## 🛠️ Tech Stack
- **🌐 Frontend:** Angular
- **🎨 Styles:** Bootstrap
- **📜 Language:** TypeScript
- **📦 Package Manager:** npm
- **🔗 API:** [Bored API](https://bored-api.appbrewery.com/)

---

## ⚙️ Useful Scripts
- **Start:** `npm start` - Runs the application with CORS proxy.
- **Build:** `ng build` - Creates the production build.

---

## 📜 License
This project is licensed under the **MIT License**.

Enjoy coding and stay productive! 🚀


