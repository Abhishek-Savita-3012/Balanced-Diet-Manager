const SUMMARY_API = 'http://localhost:5000/api/summary';
let nutritionChart; // Declare globally

async function getDailySummary() {
  const userId = localStorage.getItem('userId');
  const date = new Date().toISOString().slice(0, 10);

  try {
    const res = await fetch(`${SUMMARY_API}/${userId}/${date}`);
    const summary = await res.json();

    if (summary.error) {
      alert(summary.error);
      return;
    }

    // Display summary on page
    document.getElementById('calories').textContent = summary.totalCalories.toFixed(1);
    document.getElementById('protein').textContent = summary.totalProtein.toFixed(1) + ' g';
    document.getElementById('carbs').textContent = summary.totalCarbs.toFixed(1) + ' g';
    document.getElementById('fats').textContent = summary.totalFats.toFixed(1) + ' g';

    // ⬇️ Only draw chart if summary is valid
    drawNutritionChart(summary);
    showDietSuggestions(summary);

  } catch (err) {
    console.error('Error fetching summary:', err);
    alert('Failed to get summary');
  }
}

function drawNutritionChart(data) {
  const ctx = document.getElementById("nutritionChart").getContext("2d");

  if (nutritionChart) {
    nutritionChart.destroy();
  }

  nutritionChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Calories', 'Protein (g)', 'Carbs (g)', 'Fats (g)'],
      datasets: [{
        label: 'Your Daily Intake',
        data: [
          data.totalCalories,
          data.totalProtein,
          data.totalCarbs,
          data.totalFats
        ],
        backgroundColor: [
          '#FFB347', // Calories
          '#6CC24A', // Protein
          '#4FC3F7', // Carbs
          '#FF7F7F'  // Fats
        ],
        borderColor: '#ccc',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: context => `${context.parsed.y.toFixed(2)}`
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Amount'
          }
        }
      }
    }
  });
}

function showDietSuggestions(data) {
  const suggestions = [];

  const rec = {
    calories: 2000,
    protein: 50,
    carbs: 275,
    fats: 70
  };

  if (data.totalCalories < rec.calories - 200) {
    suggestions.push('<span class="warning">• Your calorie intake is low. Consider eating more energy-dense foods.</span>');
  } else if (data.totalCalories > rec.calories + 200) {
    suggestions.push('<span class="warning">• You consumed too many calories. Try reducing high-calorie snacks.</span>');
  } else {
    suggestions.push('<span class="good">• Your calorie intake is within a healthy range.</span>');
  }

  if (data.totalProtein < rec.protein) {
    suggestions.push('<span class="warning">• Increase protein intake with lentils, eggs, or lean meats.</span>');
  } else {
    suggestions.push('<span class="good">• Your protein intake is good.</span>');
  }

  if (data.totalCarbs < rec.carbs - 50) {
    suggestions.push('<span class="neutral">• Consider adding more whole grains or fruits for carbohydrates.</span>');
  } else if (data.totalCarbs > rec.carbs + 50) {
    suggestions.push('<span class="warning">• Carbohydrate intake is high. Cut down on sugars and refined carbs.</span>');
  } else {
    suggestions.push('<span class="good">• Your carbohydrate intake is balanced.</span>');
  }

  if (data.totalFats < rec.fats - 20) {
    suggestions.push('<span class="neutral">• Add healthy fats like nuts, seeds, or olive oil.</span>');
  } else if (data.totalFats > rec.fats + 20) {
    suggestions.push('<span class="warning">• Too much fat consumed. Avoid fried foods and butter.</span>');
  } else {
    suggestions.push('<span class="good">• Fat intake is in a good range.</span>');
  }

  document.getElementById('dietSuggestion').innerHTML = suggestions.join('<br>');
}


