const items = []; // Empty array to hold items
let points = 0;
var input = document.getElementById("guess");

input.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
      checkGuess();
    }
});

function pauseForOneSecond() {
  return new Promise(resolve => setTimeout(resolve, 3000));
}

function startGame() {
  fetchItems() // Call to fetch items before starting the game
    .then(data => {
      currentItem = chooseRandomItem(data); // Use fetched data
      document.getElementById("description").textContent = currentItem.commDesc;
      document.getElementById("guess").value = "";
      document.getElementById("result").textContent = "";
    });
}

function hintGiven() {
  fetchItems() // Call to fetch items before starting the game
    .then(data => {
      document.getElementById("description").textContent = currentItem.commDesc;
      document.getElementById("guess").value = "";
    });
}

async function checkGuess() {
  const guess = document.getElementById("guess").value.toLowerCase().trim();
  if (guess.toLowerCase() === "more") {
    document.getElementById("result").textContent = "It starts with " + currentItem.name.trim().charAt(0).toUpperCase();
    points -= 0.5;
    hintGiven();
    return;
  } else if (guess.toLowerCase().trim() === currentItem.name.toLowerCase().trim()) {
    document.getElementById("result").textContent = "Good Job!";
    points++;
  } else {
    document.getElementById("result").textContent = "You got it wrong. It was " + currentItem.name.trim() + ".";
    document.getElementById("result").textContent += "\nYou guessed " + guess + ".";
    document.getElementById("result").textContent += "\nYou got " + points + " points!";
    points = 0; // Reset points for a new round
  }
  for (let i = 0; i < 10; i++) { // Adjust loop iterations for desired pause duration
    await new Promise(resolve => setTimeout(resolve, 200)); // Short delay in each iteration
  }
  startGame(); // Start a new round after each guess
}

async function fetchItems() {
  const response = await fetch("items.txt"); // Replace with your data source URL
  const data = await response.text();
  // Parse the data similar to your Python code and populate the "items" array
  const processedData = parseItemData(data); // Function to parse data (explained later)
  items.push(...processedData); // Add parsed data to "items" array
  return items; // Return the populated "items" array
}

function parseItemData(data) {
  const processedItems = [];
  const lines = data.split("\n"); // Split data into lines

  for (const line of lines) {
    const temp = line.replace(/\([^)]*\)/g, ''); // Remove parenthesis content
    const tempArray = temp.split("\t");

    if (tempArray.length > 0) { // Check if line has data
      let newDict = {};
      for (let i = 0; i < tempArray.length; i++) {
        if (i % 6 === 0) {
          newDict["name"] = tempArray[i];
        } else if (i % 6 === 1) {
          newDict["id"] = tempArray[i];
        } else if (i % 6 === 3) {
          newDict["desc"] = tempArray[i];
        } else if (i % 6 === 4) {
          newDict["commDesc"] = tempArray[i];
        }
      }
      processedItems.push(newDict); // Add parsed item to processedItems
    }
  }
  return processedItems;
}

function chooseRandomItem(data) {
  // Use the populated "items" array from the "fetchItems" function
  return data[Math.floor(Math.random() * data.length)];
}

// Call startGame to begin the game
startGame();