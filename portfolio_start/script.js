function copyText() {
      
  /* Copy text into clipboard */
  navigator.clipboard.writeText
      ("geo.tirnovan@gmail.com");
}

function myFunction()
{   
    var colors = ["green", "black","yellow","Blue","Orange"],
    selectedColor = colors[Math.floor(Math.random()*colors.length)]
    $("body").css("background-color", selectedColor);
}