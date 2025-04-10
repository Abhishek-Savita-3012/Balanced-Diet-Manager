const userId = "123"; // Replace with session user in production

async function logFood() {
  const food = document.getElementById("foodItem").value;
  const quantity = document.getElementById("quantity").value;

  const res = await fetch("/log-meal", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, food, quantity }),
  });

  const data = await res.json();
  alert(data.message);
  renderChart();
}

async function saveGoals() {
  const goals = {
    calories: +document.getElementById("goalCalories").value,
    protein: +document.getElementById("goalProtein").value,
    carbs: +document.getElementById("goalCarbs").value,
    fat: +document.getElementById("goalFat").value,
    fiber: +document.getElementById("goalFiber").value,
  };

  const res = await fetch("/set-goals", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, goals }),
  });

  const data = await res.json();
  alert(data.message);
  renderChart();
}

function setReminder() {
  const time = document.getElementById("reminderTime").value;
  const now = new Date();
  const [h, m] = time.split(":");
  const reminderTime = new Date();
  reminderTime.setHours(h);
  reminderTime.setMinutes(m);
  reminderTime.setSeconds(0);

  const delay = reminderTime.getTime() - now.getTime();

  if (delay > 0) {
    setTimeout(() => {
      alert("⏰ Reminder: Time to log your food!");
    }, delay);
    alert("Reminder set!");
  } else {
    alert("Please set a future time.");
  }
}

async function renderChart() {
  const res = await fetch(`/user-summary?userId=${userId}`);
  const data = await res.json();

  const ctx = document.getElementById("nutrientChart").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Calories", "Protein", "Carbs", "Fat", "Fiber"],
      datasets: [
        {
          label: "Consumed",
          data: [data.calories, data.protein, data.carbs, data.fat, data.fiber],
          backgroundColor: "rgba(75, 192, 192, 0.6)",
        },
        {
          label: "Goal",
          data: [data.goals.calories, data.goals.protein, data.goals.carbs, data.goals.fat, data.goals.fiber],
          backgroundColor: "rgba(255, 99, 132, 0.6)",
        },
      ],
    },
  });
}

window.onload = renderChart;
