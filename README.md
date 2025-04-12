🥗 Balanced Diet Manager
A full-stack web application that allows users to track their daily nutritional intake and receive AI-generated personalized dietary suggestions. Built with the MERN stack principles using Express.js, MongoDB, and a simple HTML/CSS/JS frontend.

Team Members 
•	Abhishek Savita (https://github.com/Abhishek-Savita-3012)
•	Ayush Pandey (https://github.com/Ayushjssj)
•	Arsh Agarwal (https://github.com/AgarwalArsh11)
•	Deewakar Singh (https://github.com/deewakar001)

📌 Features
🧾 Food Logging
•	Add food items along with quantity.
•	Automatically calculates and stores nutritional values (calories, proteins, fats, carbs).
•	Data saved per user for daily logs.

🧠 AI-Powered Diet Suggestions
Uses Google Generative AI to analyze your daily food intake.
Provides:
•	Personalized suggestions.
•	Nutritional warnings (e.g., excessive fat or low protein).
•	Healthy food alternatives.

📊 Summary & Visualization
•	Dynamic daily summary presented after logging food.
•	Shows nutrient-wise breakdown with advice.
•	Highlights discrepancies in your diet with action-oriented feedback.

🔐 Authentication
•	Secure sign-up and login system.
•	User credentials and session maintained.
•	Ensures only the logged-in user can view or edit their own data.

🔗 Nutrition API Integration
•	Real-time nutrition data fetched using a custom utility module (nutritionAPI.js).
•	Handles food names and converts them into accurate nutritional values.

⚙️ Modular Backend Architecture
•	Routes, controllers, models are cleanly separated.
•	AI logic isolated in aiController.js for maintainability.
•	MongoDB schema models: User.js and FoodEntry.js.

💻 Tech Stack
Frontend	HTML, CSS, JavaScript
Backend	Node.js, Express.js
Database	MongoDB
AI Service	Google Generative AI (via API integration)
Nutrition	External Nutrition API (modular and swappable)
Auth	               Custom auth with hashed password, JWT or session (as implemented)

📁 Project Structure
BalancedDietManager/
│
├── backend/
│   ├── config/                        # DB connection
│   │   └── db.js
│   ├── controllers/               # All route logic
│   │   ├── aiController.js      # Handles AI responses
│   │   ├── authController.js
│   │   ├── foodController.js
│   │   └── summaryController.js
│   ├── models/                    # MongoDB schemas
│   │   ├── FoodEntry.js
│   │   └── User.js
│   ├── routes/                    # API routes
│   │   ├── authRoutes.js
│   │   ├── foodRoutes.js
│   │   └── summaryRoutes.js
│   ├── utils/                       # External API handler
│   │   └── nutritionAPI.js
│   └── app.js                       # Entry point for backend
│
├── frontend/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── api.js
│   │   ├── auth.js
│   │   ├── foodLogger.js
│   │   └── summary.js
│   ├── index.html                # Landing/login/signup page
│   └── dashboard.html         # Food log + summary interface
│
├── .env                                 # Stores API keys and secrets (gitignored)

🛠️ Setup Instructions
Clone the repository
git clone https://github.com/Abhishek-Savita-3012/Balanced-Diet-Manager
cd Balanced-Diet-Manager

Install dependencies
For backend:
cd backend
npm install
Configure .env

Create a  .env file in backend/ and add:
MONGO_URI=your_mongo_db_connection_string
AI_API_KEY=your_google_gen_ai_key

Run backend server
node app.js
Open frontend Open index.html in your browser directly or serve via Live Server.

🔮 Future Improvements
User-specific goals (e.g., weight loss, gain, maintain).
Weekly and monthly analysis dashboard.
Dark mode for the UI.
Integration with fitness trackers or apps.

📌 Usage
•	Input Daily Intake: Enter the amounts of calories, proteins, fats, and carbohydrates consumed.
•	Receive Feedback: The application analyzes the input and provides suggestions to balance your diet.
•	Implement Recommendations: Adjust your dietary habits based on the feedback to achieve a balanced nutrition.

🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

📄 License
This project is licensed under the MIT License.
