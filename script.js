const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchHistoryList = document.getElementById('searchHistoryList');
const clearHistoryButton = document.getElementById('clearHistoryButton');

let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

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

function handleSearch() {
  const query = searchInput.value.trim();
  
  if (query !== '') {
    searchHistory.push(query);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    
    searchInput.value = '';
    renderSearchHistory();
  }
}

function clearHistory() {
  searchHistory = [];
  localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  renderSearchHistory();
}

searchButton.addEventListener('click', handleSearch);
clearHistoryButton.addEventListener('click', clearHistory);

renderSearchHistory();
