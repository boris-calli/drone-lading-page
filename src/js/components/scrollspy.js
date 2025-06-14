// import ScrollSpy from "./../../../node_modules/bootstrap/js/dist/scrollspy.js";
import ScrollSpy from "bootstrap/js/dist/scrollspy";

export function setupScrollSpy() {
  const scrollElement = document.body;

  // ScrollSpy para el top-bar
  new ScrollSpy(scrollElement, {
    target: "#navigation-top-bar",
    offset: 100, // ajusta según altura sticky header
  });

  // ScrollSpy para el side-bar
  new ScrollSpy(scrollElement, {
    target: "#navigation-side-bar",
    offset: 100,
  });
}
