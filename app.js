let button = document.getElementById('btn');

button.addEventListener('click', function(){
    let word = document.getElementById('word').value;
    let count = word.length;
    let outputDiv = document.getElementById('output');
    print("kristian djura")
    outputDiv.innerHTML = `<h1>${count}</h1>`
});
