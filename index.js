const jokeShow = document.querySelector("#jokeShow");
const nextJoke = document.querySelector("#joke");

// const genarateJokes = () => {
//     const setHeader ={
//         headers:{
//             Accept: 'application/json'
//         }
//     };
//   fetch('https://icanhazdadjoke.com/', setHeader)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeShow.innerHTML = data.joke;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

const genarateJokes = async () => {
  try {
    const setHeader = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await fetch("https://icanhazdadjoke.com/", setHeader);
    const data = await res.json();
    jokeShow.innerHTML = data.joke;
  } catch (err) {
    console.log(err);
  }
};

nextJoke.addEventListener("click", genarateJokes);
genarateJokes();
