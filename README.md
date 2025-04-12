# 🥗 Balanced Diet Manager
A full-stack web application that allows users to track their daily nutritional intake and receive AI-generated personalized dietary suggestions. Built with the MERN stack principles using Express.js, MongoDB, and a simple HTML/CSS/JS frontend.

## 👥 Team Members\n
- [Abhishek Savita](https://github.com/Abhishek-Savita-3012)
- [Ayush Pandey](https://github.com/Ayushjssj)
- [Arsh Agarwal](https://github.com/AgarwalArsh11)
- [Deewakar Singh](https://github.com/deewakar001)

## 📌 Features

### 🧾 Food Logging
- Add food items along with quantity.
- Automatically calculates and stores nutritional values (calories, proteins, fats, carbs).
- Data saved per user for daily logs.

### 🧠 AI-Powered Diet Suggestions
Uses Google Generative AI to analyze your daily food intake.
Provides:
- Personalized suggestions.
- Nutritional warnings (e.g., excessive fat or low protein).
- Healthy food alternatives.

### 📊 Summary & Visualization
- Dynamic daily summary presented after logging food.
- Shows nutrient-wise breakdown with advice.
- Highlights discrepancies in your diet with action-oriented feedback.

### 🔐 Authentication
- Secure sign-up and login system.
- User credentials and session maintained.
- Ensures only the logged-in user can view or edit their own data.

### 🔗 Nutrition API Integration
- Real-time nutrition data fetched using a custom utility module (`nutritionAPI.js`).
- Handles food names and converts them into accurate nutritional values.

### ⚙️ Modular Backend Architecture
- Routes, controllers, models are cleanly separated.
- AI logic isolated in `aiController.js` for maintainability.
- MongoDB schema models: `User.js` and `FoodEntry.js`.

## 💻 Tech Stack\n
| Layer      | Technology                     |\n
|------------|--------------------------------|\n
| Frontend   | HTML, CSS, JavaScript          |\n
| Backend    | Node.js, Express.js            |\n
| Database   | MongoDB                        |\n
| AI Service | Google Generative AI (via API) |\n
| Nutrition  | External Nutrition API         |\n
| Auth       | Custom auth (Hashed + JWT)     |\n

## 📁 Project Structure
```\n
BalancedDietManager/\n
│\n
├── backend/\n
│   ├── config/                # DB connection\n
│   │   └── db.js\n
│   ├── controllers/           # All route logic\n
│   │   ├── aiController.js    # Handles AI responses\n
│   │   ├── authController.js\n
│   │   ├── foodController.js\n
│   │   └── summaryController.js\n
│   ├── models/                # MongoDB schemas\n
│   │   ├── FoodEntry.js\n
│   │   └── User.js\n
│   ├── routes/                # API routes\n
│   │   ├── authRoutes.js\n
│   │   ├── foodRoutes.js\n
│   │   └── summaryRoutes.js\n
│   ├── utils/                 # External API handler\n
│   │   └── nutritionAPI.js\n
│   └── app.js                 # Entry point for backend\n
│\n
├── frontend/\n
│   ├── css/\n
│   │   └── style.css\n
│   ├── js/\n
│   │   ├── api.js\n
│   │   ├── auth.js\n
│   │   ├── foodLogger.js\n
│   │   └── summary.js\n
│   ├── index.html            # Landing/login/signup page\n
│   └── dashboard.html        # Food log + summary interface\n
│\n
├── .env                       # Stores API keys and secrets (gitignored)\n
```\n

## 🛠️ Setup Instructions\n

### 1. Clone the repository\n
```bash\n
git clone https://github.com/Abhishek-Savita-3012/Balanced-Diet-Manager\n
cd Balanced-Diet-Manager\n
```\n

### 2. Install dependencies\n

#### For backend:\n
```bash\n
cd backend\n
npm install\n
```\n

### 3. Configure `.env`\n
Create a `.env` file inside `backend/` and add:\n
```\n
MONGO_URI=your_mongo_db_connection_string\n
AI_API_KEY=your_google_gen_ai_key\n
```\n

### 4. Run backend server\n
```bash\n
node app.js\n
```\n

### 5. Open frontend\n
Open `index.html` in your browser directly or serve via Live Server.\n

## 🔮 Future Improvements\n
- User-specific goals (e.g., weight loss, gain, maintain)\n
- Weekly and monthly analysis dashboard\n
- Dark mode for the UI\n
- Integration with fitness trackers or apps\n

## 📌 Usage\n
- **Input Daily Intake**: Enter the amounts of calories, proteins, fats, and carbohydrates consumed.\n
- **Receive Feedback**: The application analyzes the input and provides suggestions to balance your diet.\n
- **Implement Recommendations**: Adjust your dietary habits based on the feedback to achieve a balanced nutrition.\n

## 🤝 Contributing\n
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.\n

## 📄 License\n
This project is licensed under the MIT License.\n
