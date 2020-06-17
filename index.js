import { header, nav, main,footer} from "./components";
import * as state from "./store";
import  Navigo  from 'navigo';
import { capitalize } from "lodash";

const router = new Navigo(window.location.origin);

router
  .on({
    ":page": params => render(state[capitalize(params.page)]),
    "/": () => render(state.home)
  })
  .resolve();

function  render(st=state.home) {
  console.log(st);
  document.querySelector("#root").innerHTML = `
  ${header()}
  ${nav()}
  ${main(st)}
  ${footer()}
  `;
  router.updatePageLinks(); 
  addNavListeners(st);
  };

function addNavListeners() { 
  document.querySelectorAll("nav > ul").forEach(el => {
    console.log('el', el);
    el.addEventListener("click", event => {
      console.log("clicked");
      event.preventDefault();
      let page = event.target.textContent;
      render(state[page]);
    });
});
}