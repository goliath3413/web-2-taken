const select = document.querySelector('select');
  const html = document.querySelector('html');
  document.body.style.padding = '10px';

  function updateBackgroundColor(bgColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
  }
  function updateTextColor(textColor){
    html.style.color = textColor;}

  select.onchange = function () {
    console.log('huidige waarde van de select / dropdown:', select.value);
    if (select.value === 'black') {
        updateBackgroundColor('black');
      } else if (select.value === 'white') {
        updateBackgroundColor('white');
      }
      else if (select.value === 'red') {
        updateBackgroundColor('red');
      }
      else if (select.value === 'magenta') {
        updateBackgroundColor('magenta');
      }
      else if (select.value === 'brown'){
        updateBackgroundColor('brown');
      }
      else if (select.value === 'pink') {
        updateBackgroundColor('pink');
      }
    // NIETS VERANDEREN AAN CODE HIERBOVEN
    // voeg hier code toe, zodat afhankelijk van de waarde, de kleur word aangepast

  }


 select.onchange = function (textColor){
     
     if (select.value === 'black') {
         updateTextColor('black');}
         else if (select.value === 'white'){
             updateTextColor('white');
         }
         else if (select.value === 'red'){
             updateTextColor('red');
         }
     
 }

