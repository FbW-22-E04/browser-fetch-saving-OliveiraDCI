import View from "./View.js";
import Client from "./Client.js";

const input = document.querySelector("#input");
const btnSave = document.querySelector(".btn-save");
const btnReset = document.querySelector(".btn-reset");

const client = new Client();
const view = new View();

let moviesArr = [];

//

input.addEventListener("change", async function () {
  if (moviesArr.includes(`${input.value}`))
    return alert(`${input.value} is  already in your list.`);

  let response = await client.getMovieData(input.value);
  let data = view.displayMovieOnPage(response);

  moviesArr.push(response);

  // clear input
  input.value = "";
});

//

btnSave.addEventListener("click", function () {
  localStorage.setItem("movies", JSON.stringify(moviesArr));
});

loadMovies();
function loadMovies() {
  const localItems = localStorage.getItem("movies");
  let parsed = JSON.parse(localItems);

  if (localItems) {
    moviesArr.push(...parsed);

    moviesArr.forEach((el) => {
      view.displayMovieOnPage(el);
    });
  }
}
//

btnReset.addEventListener("click", () => {
  view.removeDisplay();
  localStorage.removeItem("movies");
  moviesArr.splice(0);
});
