import { header, nav, main,footer} from "./components";
import * as state from "./store";
import  Navigo  from 'navigo';

const router = new Navigo(window.location.origin);

router
  .on({
    ":page": params => render(state[params.page]),
    "/": () => render(state.home)
  })
  .resolve();

function  render(st=state.home) {
  document.querySelector("#root").innerHTML = `
  ${header()}
  ${nav(state.links)}
  ${main(st)}
  ${footer()}
  `;
  
  router.updatePageLinks(); 
  addNavListeners(st);
  };

function addNavListeners() { 
  document.querySelectorAll("nav > ul").forEach(el => {
     el.addEventListener("click", event => {
      event.preventDefault();
      let page = event.target.textContent;
      render(state[page]);
    });
});
}