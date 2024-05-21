import foodIcon from  './images/everything-bagel.png';

export default function (){

  
  const foodImg = document.createElement('img');
  foodImg.src = foodIcon;
  foodImg.height = '75';
  foodImg.width = '75';

  const title = document.createElement('h1');
  title.innerHTML = "Spaghetti Cabinet";

  const content = document.getElementById('content');
  content.append(foodImg);
  content.append(title);

  const paragraph = document.createElement('p');
  paragraph.innerHTML = 'Welcome to Spaghetti Cabinet <br> the best spaghetti in the world!';
  content.append(paragraph);
}

