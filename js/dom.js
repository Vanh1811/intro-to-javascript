const container = document.querySelector('#container');
// selects the #container div (don't worry about the syntax, we'll get there)

console.dir(container.firstElementChild);
// selects the first child of #container => .display

const controls = document.querySelector('.controls');
// selects the .controls div

console.dir(controls.previousElementSibling);
// selects the prior sibling => .display

const div = document.createElement('div');
// creates a new div referenced in the variable 'div'

div.style.color = 'blue';
// adds the indicated style rule

div.style.cssText = 'color: blue; background: white;';
// adds several style rules

div.setAttribute('style', 'color: blue; background: white;');
// adds several style rules

div.style.background-color // doesn't work - attempts to subtract color from div.style.background
div.style.backgroundColor // accesses the div's background-color style
div.style['background-color'] // also works
div.style.cssText = "background-color: white;" // sets the div's background-color by assigning a CSS string

div.setAttribute('id', 'theDiv');
// if id exists, update it to 'theDiv', else create an id
// with value "theDiv"

div.getAttribute('id');
// returns value of specified attribute, in this case
// "theDiv"

div.removeAttribute('id');
// removes specified attribute

div.classList.add('new');
// adds class "new" to your new div

div.classList.remove('new');
// removes "new" class from div

div.classList.toggle('active');
// if div doesn't have class "active" then add it, or if
// it does, then remove it