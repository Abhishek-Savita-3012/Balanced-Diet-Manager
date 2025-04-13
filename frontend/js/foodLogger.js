// public/js/foodLogger.js

const FOOD_API = 'http://localhost:5000/api/food';

async function logFoodEntry(foodName, quantity) {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  const date = new Date().toISOString().slice(0, 10); // format: YYYY-MM-DD

  try {
    const res = await fetch(`${FOOD_API}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`  // Optional if JWT protected
      },
      body: JSON.stringify({ userId, foodName, quantity, date }),
    });

    const data = await res.json();
    alert(data.message || 'Food logged successfully');
  } catch (err) {
    console.error('Error logging food:', err);
    alert('Failed to log food');
  }
}
