const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};

// const customRender = (reactElement, mainContainer) => {
//   let element = document.createElement(reactElement.type);
//   element.innerHTML = reactElement.children;
//   element.setAttribute("href", reactElement.props.href);
//   element.setAttribute("target", reactElement.props.target);
//   mainContainer.appendChild(element);
// };

const customRender = (reactElement, mainContainer) => {
  let element = document.createElement(reactElement.type);
  element.innerHTML = reactElement.children;
  for (let prop in reactElement.props) {
    element.setAttribute(prop, reactElement.props[prop]);
  }
  mainContainer.appendChild(element)
};

const MainContainer = document.querySelector("#root");
customRender(reactElement, MainContainer);
