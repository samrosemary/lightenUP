// Ensure DOM is fully loaded before running script
document.addEventListener('DOMContentLoaded', function () {
    // Load saved box count or default to 30
    const savedBoxCount = localStorage.getItem('boxCount') || 30;
    document.getElementById('box-count').value = savedBoxCount;

    // Load saved square and tick colors or use default colors
    const savedSquareColor = localStorage.getItem('squareColor') || '#008080'; // Teal as default
    const savedTickColor = localStorage.getItem('tickColor') || '#FF6F61'; // Coral as default
    document.getElementById('square-color').value = savedSquareColor;
    document.getElementById('tick-color').value = savedTickColor;

    // Generate the grid with saved preferences
    generateGrid();
});

function generateGrid() {
    const boxCount = document.getElementById('box-count').value;
    const squareColor = document.getElementById('square-color').value;
    const tickColor = document.getElementById('tick-color').value;

    // Save box count, square color, and tick color to localStorage
    localStorage.setItem('boxCount', boxCount);
    localStorage.setItem('squareColor', squareColor);
    localStorage.setItem('tickColor', tickColor);

    const grid = document.getElementById('tracker-grid');
    
    // Clear existing grid
    grid.innerHTML = '';

    // Create new grid based on the selected box count
    for (let i = 1; i <= boxCount; i++) {
        const box = document.createElement('div');
        box.className = 'day-box';
        box.setAttribute('data-day', i);

        // Apply the square color to the box
        box.style.backgroundColor = squareColor;

        // Check if the box is marked as completed
        if (localStorage.getItem(`day-${i}`) === 'completed') {
            box.classList.add('completed');
            box.innerHTML = '<span>✔</span>'; // Add the tick mark
            box.style.backgroundColor = tickColor; // Use tick color for completed boxes
        } else {
            box.innerHTML = `<span>${i}</span>`; // Show the day number if not completed
        }

        // Add a click event to toggle the completion status
        box.addEventListener('click', function () {
            box.classList.toggle('completed');
            const completed = box.classList.contains('completed');

            // Update the box color and content based on completion status
            if (completed) {
                box.innerHTML = '<span>✔</span>'; // Add tick when completed
                box.style.backgroundColor = tickColor; // Change to tick color when completed
            } else {
                box.innerHTML = `<span>${i}</span>`; // Revert to day number when unchecked
                box.style.backgroundColor = squareColor; // Revert to square color
            }

            // Save the completion status to localStorage
            localStorage.setItem(`day-${i}`, completed ? 'completed' : '');
        });

        // Append box to grid
        grid.appendChild(box);
    }
}

// Add event listeners to update the grid when the user changes the color
document.getElementById('square-color').addEventListener('input', generateGrid);
document.getElementById('tick-color').addEventListener('input', generateGrid);




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