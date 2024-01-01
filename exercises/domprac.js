const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.style.color = 'red';
para.textContent = 'Hey I’m red!';

const head3 = document.createElement('h3');
head3.style.color = 'blue';
head3.textContent = 'I’m a blue h3!';

const div = document.createElement('div');
div.style.border = 'black';
div.style.backgroundColor = 'pink';

const head1 = document.createElement('h1');
head1.textContent = 'I’m in a div';

const para2 = document.createElement('p');
para2.textContent = 'ME TOO!';

div.appendChild(head1);
div.appendChild(para2);

container.appendChild(para);
container.appendChild(head3);
container.appendChild(div);


