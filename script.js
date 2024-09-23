// Select elements from the DOM
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchHistoryList = document.getElementById('searchHistoryList');
const clearHistoryButton = document.getElementById('clearHistoryButton');

// Retrieve search history from localStorage or initialize empty array
let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

// Function to render the search history
function renderSearchHistory() {
  searchHistoryList.innerHTML = '';

  if (searchHistory.length === 0) {
    searchHistoryList.innerHTML = '<li>No searches yet</li>';
  } else {
    searchHistory.forEach(search => {
      const li = document.createElement('li');
      li.textContent = search;
      searchHistoryList.appendChild(li);
    });
  }
}

// Function to handle search action
function handleSearch() {
  const query = searchInput.value.trim();
  
  if (query !== '') {
    searchHistory.push(query); // Add the search term to the history array
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory)); // Save updated history to localStorage
    
    searchInput.value = ''; // Clear the input field
    renderSearchHistory(); // Update the displayed history
  }
}

// Function to handle clearing the history
function clearHistory() {
  searchHistory = []; // Clear the search history array
  localStorage.setItem('searchHistory', JSON.stringify(searchHistory)); // Clear history from localStorage
  renderSearchHistory(); // Update the displayed history
}

// Attach event listeners
searchButton.addEventListener('click', handleSearch);
clearHistoryButton.addEventListener('click', clearHistory);

// Initial rendering of search history
renderSearchHistory();
