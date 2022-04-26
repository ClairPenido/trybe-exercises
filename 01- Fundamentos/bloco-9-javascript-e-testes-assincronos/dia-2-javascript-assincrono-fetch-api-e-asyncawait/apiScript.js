// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';


const fetchJoke = () => {
  const myObject = {
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => document.getElementById('jokeContainer').innerText = data.joke); // nao posso pegar o document antes
};

window.onload = () => fetchJoke();