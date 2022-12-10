function update() {
    var element = document.getElementById("myprogressBar");   
    var width = 100;
    var identity = setInterval(scene, 100);
    function scene() {
      if (width <= 0) {
        clearInterval(identity);
      } else {
        width--; 
        element.style.width = width + '%'; 
      }
    }
  }

  update()