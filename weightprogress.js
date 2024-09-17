const starGrid = document.querySelector('.star-grid');
const submitGoalBtn = document.getElementById('submit-goal');
const resetBtn = document.getElementById('reset-progress');

// Function to generate the stars dynamically
function createStars(count) {
    starGrid.innerHTML = ''; // Clear existing stars

    for (let i = 1; i <= count; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.textContent = '★'; // Star symbol
        star.setAttribute('data-id', i);

        // Click event to toggle 'filled' class
        star.addEventListener('click', function () {
            this.classList.toggle('filled');
        });

        starGrid.appendChild(star);
    }
}

// Handle the goal submission
submitGoalBtn.addEventListener('click', function () {
    const goalWeight = document.getElementById('goal-weight').value;
    const weightUnit = document.getElementById('weight-unit').value;
    
    if (goalWeight && goalWeight > 0) {
        createStars(goalWeight); // Generate the number of stars based on goal

        // Display the chosen unit (pounds or kilograms)
        alert(`Your goal is to lose ${goalWeight} ${weightUnit}`);
    } else {
        alert('Please enter a valid weight goal.');
    }
});

// Reset button functionality
resetBtn.addEventListener('click', function () {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.classList.remove('filled');
    });
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