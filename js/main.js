// Save checkbox state to localStorage
function saveCheckboxState(checkbox) {
    localStorage.setItem(checkbox.id, checkbox.checked);
  }
  
  // Toggle dark mode and store preference
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
  }
  
  // Restore states on page load
  window.onload = function () {
    // Restore dark mode
    if (localStorage.getItem("darkMode") === "true") {
      document.body.classList.add("dark-mode");
    }
  
    // Restore checkbox states
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      const saved = localStorage.getItem(checkbox.id);
      if (saved !== null) checkbox.checked = (saved === 'true');
    });
  };
  