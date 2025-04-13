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

async function showDietSuggestions(data) {
  try {
    const res = await fetch('http://localhost:5000/api/summary/ai-suggestions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    if (result.suggestions) {
      document.getElementById('dietSuggestion').innerHTML = `
        <div class="ai-suggestion">${result.suggestions}</div>
      `;
    } else {
      document.getElementById('dietSuggestion').textContent = 'No suggestions available.';
    }

  } catch (err) {
    console.error('Error getting AI suggestions:', err);
    document.getElementById('dietSuggestion').textContent = 'Failed to load suggestions.';
  }
}

