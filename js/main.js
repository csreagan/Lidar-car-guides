// Save checkbox state to localStorage
function saveCheckboxState(checkbox) {
    localStorage.setItem(checkbox.id, checkbox.checked);
  }
  
  // Load checkbox states on page load
  window.onload = function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      const saved = localStorage.getItem(checkbox.id);
      if (saved !== null) {
        checkbox.checked = (saved === 'true');
      }
    });
  };
  