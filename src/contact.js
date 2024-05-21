export default function (){

  const content = document.getElementById('content');

  const title = document.createElement('h1');
  title.innerHTML = 'Contact';
  content.append(title);

  const paragraph = document.createElement('p');
  paragraph.innerHTML = 'Phone: (246) 135- 7890';
  content.append(paragraph);
}