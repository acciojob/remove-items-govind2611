
const colorSelect = document.getElementById('colorSelect');
  const removeButton = document.querySelector('input[type="button"]');

  removeButton.addEventListener('click', () => {
	  colorSelect.remove(colorSelect.selectedIndex);
    
  });