document.addEventListener('DOMContentLoaded', function() {
    const foodList = document.getElementById('food-list');
    const totalCaloriesSpan = document.getElementById('total-calories');
    const goalDisplay = document.getElementById('goal-display');
    const caloriesLeftDisplay = document.getElementById('calories-left');
    const savedDaysList = document.getElementById('saved-days-list');

    let calorieGoal = 0;
    let totalCalories = 0;
    let foods = [];
    let savedDays = JSON.parse(localStorage.getItem('savedDays')) || [];

    // Update saved days on load
    updateSavedDaysList();

    document.getElementById('add-food-btn').addEventListener('click', function() {
        const foodName = document.getElementById('food-name').value;
        const foodCalories = parseInt(document.getElementById('food-calories').value);

        if (foodName && foodCalories) {
            const food = { name: foodName, calories: foodCalories };
            foods.push(food);
            totalCalories += foodCalories;
            updateFoodList();
            updateCaloriesLeft();
        }

        // Clear inputs
        document.getElementById('food-name').value = '';
        document.getElementById('food-calories').value = '';
    });

    document.getElementById('set-goal-btn').addEventListener('click', function() {
        calorieGoal = parseInt(document.getElementById('calorie-goal').value);
        if (calorieGoal) {
            goalDisplay.textContent = calorieGoal;
            updateCaloriesLeft();
        }
    });
    
    
    
    
     

    document.getElementById('save-day-btn').addEventListener('click', function() {
        const today = new Date().toLocaleDateString();
        const dayData = { date: today, goal: calorieGoal, total: totalCalories, foods: foods };
        savedDays.push(dayData);
        localStorage.setItem('savedDays', JSON.stringify(savedDays));
        updateSavedDaysList();

        // Clear current day's data
        foods = [];
        totalCalories = 0;
        calorieGoal = 0;
        updateFoodList();
        goalDisplay.textContent = "Not Set";
        caloriesLeftDisplay.textContent = "Not Set";
        document.getElementById('calorie-goal').value = '';
    });

    function updateFoodList() {
        foodList.innerHTML = '';
        foods.forEach((food, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="food-item">${food.name} - ${food.calories} calories</span>
                <button class="edit-btn" onclick="editFood(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteFood(${index})">Delete</button>
            `;
            foodList.appendChild(li);
        });
        totalCaloriesSpan.textContent = totalCalories;
    }

    window.editFood = function(index) {
        const food = foods[index];
        document.getElementById('food-name').value = food.name;
        document.getElementById('food-calories').value = food.calories;
        deleteFood(index);
    };

    window.deleteFood = function(index) {
        totalCalories -= foods[index].calories;
        foods.splice(index, 1);
        updateFoodList();
        updateCaloriesLeft();
    };

    function updateCaloriesLeft() {
        const caloriesLeft = calorieGoal - totalCalories;
        caloriesLeftDisplay.textContent = caloriesLeft >= 0 ? caloriesLeft : 0;
    }

    function updateSavedDaysList() {
        savedDaysList.innerHTML = '';
        savedDays.forEach((day, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${day.date}: Goal ${day.goal}, Consumed ${day.total} calories
                <button class="delete-day-btn" onclick="deleteSavedDay(${index})">Delete</button>
            `;
            savedDaysList.appendChild(li);
        });
    }

    window.deleteSavedDay = function(index) {
        savedDays.splice(index, 1);
        localStorage.setItem('savedDays', JSON.stringify(savedDays));
        updateSavedDaysList();
    };
});



function setThemeBasedOnMonth() {
  const month = new Date().getMonth(); // 0 for January, 1 for February, etc.
  const themes = ['freshstart', 'love', 'spring', 'rain', 'floral', 'summer', 'freedom', 'adventure', 'autumn', 'halloween', 'fireworks', 'christmas'];
  document.body.className = themes[month];
}
setThemeBasedOnMonth();

// Get today's month (0 for January, 1 for February, etc.)
const currentMonth = new Date().getMonth();

// Select the elements
const h2Element = document.getElementById('month-text');
const imageLeft = document.getElementById('image-left');
const imageRight = document.getElementById('image-right');

// Define content for each month
const monthContent = [
    { text: "Start Strong, Stay Strong!", leftImage: "janicon.png", rightImage: "janname.png" },
    { text: "Love Your Health!", leftImage: "febicon.png", rightImage: "febname.png" },
    { text: "Bloom Into a Healthier You!", leftImage: "marchicon.png", rightImage: "marchname.png" },
    { text: "Refresh Your Routine!", leftImage: "aprilicon.png", rightImage: "aprilname.png" },
    { text: "Flourish With Every Step!", leftImage: "mayicon.png", rightImage: "mayname.png" },
    { text: "Sizzle Into Shape!", leftImage: "juneicon.png", rightImage: "junename.png" },
    { text: "Freedom To Move!", leftImage: "julyicon.png", rightImage: "julyname.png" },
    { text: "Make The Most Of Summer!", leftImage: "augusticon.png", rightImage: "augustname.png" },
    { text: "Fall into Fitness!", leftImage: "autumnicon.png", rightImage: "autumnname.png" },
    { text: "Get Fit, No Tricks!", leftImage: "octobericon.png", rightImage: "octobername.png" },
    { text: "Celebrate Every Step!", leftImage: "novembericon.png", rightImage: "novembername.png" },
    { text: "Tis The Season To Be Fit!", leftImage: "decembericon.png", rightImage: "decembername.png" }
];

// Set the text and images based on the current month
h2Element.textContent = monthContent[currentMonth].text;
imageLeft.src = monthContent[currentMonth].leftImage;
imageRight.src = monthContent[currentMonth].rightImage;