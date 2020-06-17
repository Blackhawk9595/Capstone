import { header, nav, main,footer} from "./components";
import * as state from "./store";
import { docs } from "./components/views";
import  Navigo  from 'navigo';

const router = new Navigo(window.location.origin);

const render = (st=state.home) => {
  document.querySelector("#root").innerHTML = `
  ${header()}
  ${nav()}
  ${main(st)}
  ${footer()}
  `;
  
  router.updatePageLinks(); 
  addNavListeners();
  };
  
router
  .on({
    ":page": params => render(state[capitalize(params.page)]),
    "/": () => render(state.Home)
  })
  .resolve();

render();

function addNavListeners() { document.querySelectorAll("nav a").forEach(el => {
    el.addEventListener("click", event => {
        event.preventDefault();
        let page = event.target.textContent;
        render(state[page]);
    });
});
}