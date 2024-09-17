document.addEventListener('DOMContentLoaded', function() {
    const weightInput = document.getElementById('weight-input');
    const weightUnitSelect = document.getElementById('weight-unit');
    const weighInDateInput = document.getElementById('weighin-date');
    const saveWeightBtn = document.getElementById('save-weight-btn');
    const weightList = document.getElementById('weight-list');

    let savedWeights = JSON.parse(localStorage.getItem('savedWeights')) || [];

    function updateWeightList() {
        weightList.innerHTML = '';  // Clear the list

        savedWeights.forEach((weightObj, index) => {
            const weightEntry = document.createElement('div');
            weightEntry.className = 'weight-entry';

            // Create a display for the weight and unit
            const weightDisplay = document.createElement('div');
            weightDisplay.className = 'weight-display';
            weightDisplay.innerText = `${weightObj.weight} ${weightObj.unit}`;

            // Create a delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.innerText = 'Delete';
            deleteBtn.setAttribute('data-index', index);

            // Create a display for the date
            const dateDisplay = document.createElement('div');
            dateDisplay.className = 'date-display';
            const formattedDate = new Date(weightObj.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            dateDisplay.innerText = `Weighed in on: ${formattedDate}`;

            // Append elements in order: weight -> delete button -> date
            weightEntry.appendChild(weightDisplay);
            weightEntry.appendChild(deleteBtn);  // Insert delete button between weight and date
            weightEntry.appendChild(dateDisplay);

            // Append the entry to the weight list
            weightList.appendChild(weightEntry);
        });

        // Add event listeners to all delete buttons
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                savedWeights.splice(index, 1);  // Remove the selected weight
                localStorage.setItem('savedWeights', JSON.stringify(savedWeights));  // Update localStorage
                updateWeightList();  // Refresh the list
            });
        });
    }

    saveWeightBtn.addEventListener('click', function() {
        const weight = weightInput.value;
        const unit = weightUnitSelect.value;
        const weighInDate = weighInDateInput.value;

        if (weight && weighInDate) {
            savedWeights.push({
                weight: parseFloat(weight),
                unit: unit,
                date: weighInDate
            });

            localStorage.setItem('savedWeights', JSON.stringify(savedWeights));
            updateWeightList();

            weightInput.value = '';
            weighInDateInput.value = '';
        } else {
            alert('Please enter both weight and date.');
        }
    });

    // Initial display of saved weights
    updateWeightList();
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