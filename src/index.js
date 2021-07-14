import './index.css'

console.log('hello webpack');
var content = document.createElement('h1')
content.appendChild(document.createTextNode('hello webpack'))
console.log(content);
document.body.insertBefore(content, document.getElementById('app'))