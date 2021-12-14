const jokeShow = document.querySelector("#jokeShow");
const nextJoke = document.querySelector("#joke");

const genarateJokes = () => {
    const setHeader ={
        headers:{
            Accept: 'application/json'
        }
    };
  fetch('https://icanhazdadjoke.com/', setHeader)
    .then((res) => res.json())
    .then((data) => {
      jokeShow.innerHTML = data.joke;
    })
    .catch((err) => {
      console.log(err);
    });
};

nextJoke.addEventListener("click", genarateJokes);
genarateJokes();
