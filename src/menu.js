export default function (){

  const content = document.getElementById('content');

  const title = document.createElement('h1');
  title.innerHTML = 'Menu';
  content.append(title);

  const paragraph = document.createElement('p');
  paragraph.innerHTML = 'Spaghetti: $20 <br> Cabinet: $45';
  content.append(paragraph);
}