// Save checkbox state to localStorage
function saveCheckboxState(checkbox) {
    localStorage.setItem(checkbox.id, checkbox.checked);
  }
  
  // Load checkbox states and dark mode on page load
  window.onload = function () {
    // Restore checkbox states
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      const saved = localStorage.getItem(checkbox.id);
      if (saved !== null) checkbox.checked = (saved === 'true');
    });
  
    // Restore dark mode
    const enabled = localStorage.getItem("darkMode") === "true";
    if (enabled) document.body.classList.add("dark-mode");
  };
  
  // Toggle dark mode on button click
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
  }
  