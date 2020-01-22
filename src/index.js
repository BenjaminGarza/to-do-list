

let projects = ['hello', 'world'];

testDiv = document.querySelector('.test');

projects.map(index => {testDiv.innerHTML =`<h1>${index}</h1>`});
