import api from "./helpers/wp_api.js";
import { ajax } from "./helpers/ajax.js";

export function App() {
  const main = document.querySelector("#root");
  main.innerHTML = `<h1>Bienvenidos a mi primer SPA con Vanilla JS<h1>`;
  ajax({
    url: api.POSTS,
    options: {},
    success: (posts) => console.log(posts),
  });
  ajax({
    url: api.CATEGORIES,
    options: {},
    success: (posts) => console.log(posts),
  });
}
