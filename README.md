# 👥 Random Users App

A modern React application that displays random users with pagination. Built using React, Axios, and Tailwind CSS, this app fetches user data from a public API and presents it in a clean card-based UI.

---

## 🚀 Features

* 🔄 Fetch random users from API
* 📄 Pagination (Next / Previous)
* 🎨 Responsive UI with Tailwind CSS
* ⏳ Loading state handling
* 📱 Fully responsive (mobile, tablet, desktop)

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Styling:** Tailwind CSS
* **HTTP Client:** Axios
* **API:** Free Public Random Users API

---

## 📦 Installation & Setup

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/ajaykumar1298/random-user-app.git

# Navigate to project folder
cd random-users-app

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🌐 API Endpoint

```
https://api.freeapi.app/api/v1/public/randomusers?page=1
```

---

## 📁 Project Structure

```
src/
│
├── App.jsx        # Main component
├── main.jsx       # Entry point
└── index.css      # Tailwind styles
```

---

## ⚙️ Functionality Explained

* **Pagination:**
  Uses `page` state to fetch new users when page changes.

* **API Call:**
  Axios is used inside `fetchUsers()` to get data.

* **State Management:**

  * `users` → stores API response
  * `page` → current page number
  * `loading` → loader state

* **useEffect Hook:**
  Triggers API call whenever `page` changes.

---


## 🧠 Future Improvements

* 🔍 Search functionality
* 🎯 Filter users by country
* ⭐ Favorite users feature
* 📊 Add user details modal

---

## 🙌 Author

**Ajay Kumar**

---

⭐ Support
If you like this project, give it a ⭐ on GitHub!