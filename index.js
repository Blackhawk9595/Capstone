import { header, nav, main,footer} from "./components";

const render () => {
document.querySelector("#root").innerHTML = `
${header()}
${nav()}
${main()}
${footer()}


`;
};

render ();