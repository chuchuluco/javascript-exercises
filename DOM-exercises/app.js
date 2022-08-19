const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
// Red <p> text
const textP = document.createElement("p")
textP.textContent = `Hey I'm red!`
textP.setAttribute('style', "color: red;")
// Blue <h3> text
const title3 = document.createElement("h3")
title3.textContent = `I'm a blue h3!`;
title3.setAttribute("style", "color: blue;")
// Black div
const blackDiv = document.createElement('div');
blackDiv.setAttribute("style", "background-color: pink; border: 2px black solid");

const blackDivTitle = document.createElement("h1")
blackDivTitle.textContent = `I'm in a div`

const textPDiv = document.createElement("p")
textPDiv.textContent = `ME TOO!`

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
  
container.appendChild(content);
container.appendChild(textP);
container.appendChild(title3);
container.appendChild(blackDiv);
blackDiv.appendChild(blackDivTitle);
blackDiv.appendChild(textPDiv);