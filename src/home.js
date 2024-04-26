import foodIcon from  './images/everything-bagel.png';

export default function (){

  
  const foodImg = document.createElement('img');
  foodImg.src = foodIcon;
  foodImg.height = '75';
  foodImg.width = '75';

  const content = document.getElementById('content');
  content.append(foodImg);

  const paragraph = document.createElement('p');
  paragraph.innerHTML = 'home';
  content.append(paragraph);
}

