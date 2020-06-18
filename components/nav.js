export default st => `
<nav>
    <ul>
    ${
      st.reduce(
      (html, link) =>
        html +
        `<li><a href="/${link.title !== "home" ? link.title : ""}" title="${
          link.title
        }" data-navigo>${link.text}</a></li>`,
      ``
    )}
    </ul>
    </nav>
`;

/* <li><a href="./home">home</a></li>
<li><a href="./about">about</a></li>
<li><a href="./products">products</a></li>
<li><a href="./docs">docs</a></li> */