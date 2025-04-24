# 🧑‍💻 About Me Site

Welcome to my personal **About Me** site — a living digital resume, timeline, and hobby tracker built with **Node.js**, **Express**, and **EJS**. This project is part dev portfolio, part life journal, and part nerdy WoW dashboard 🛡️.

Whether I’m tracking **milestones at Turing**, slaying bosses in **World of Warcraft**, or logging real-life wins (like getting married or earning my CAPM certification), this site grows with me.

---

## 🚀 Features

- 📆 **Dynamic Timeline** – Displays personal, professional, and gaming milestones in reverse chronological order with color-coded tags.
- 🎮 **Hobbies Tracker** – Includes my current interests like WoW progress, cooking, and board games.
- 💻 **Project Showcase** – View the full-stack applications and experiments I’m working on.
- 🎯 **Goals List** – Tracks personal development objectives and focus areas.
- ⚙️ **JSON-Driven** – All data is loaded from JSON files to keep logic clean and modular.

---

## 🧠 Tech Stack

- **Node.js** – Server-side JavaScript runtime
- **Express.js** – Routing and server framework
- **EJS** – Embedded JavaScript templates for dynamic rendering
- **HTML/CSS** – Clean, responsive static styling
- **JSON** – Used for storing and loading dynamic data (goals, milestones, projects)

---

## 📁 Project Structure

about-me-site/ ├── data/ # JSON files for milestones, goals, hobbies, and projects │ ├── goals.json │ ├── hobbies.json │ ├── milestones.json │ └── projects.json ├── public/ # Static assets like CSS │ └── style.css ├── views/ # EJS templates │ ├── about.ejs │ ├── hobbies.ejs │ ├── index.ejs │ ├── projects.ejs │ └── timeline.ejs ├── .gitignore ├── index.js # Main Express server ├── package.json └── README.md