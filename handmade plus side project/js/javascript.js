function toggleMenu() {
  		var menuBox = document.getElementById('menu-display');    
  			if(menuBox.style.display == "block") {
    			menuBox.style.display = "none";
  			}
  		else { 
    	menuBox.style.display = "block";
  	}
}

	function closeMenu(){
	var menuBox = document.getElementById('menu-display');
		menuBox.style.display = "none";
}