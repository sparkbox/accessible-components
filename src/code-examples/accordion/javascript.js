const javascript = `
// Return NodeList of all buttons in the Accordion
const getAccordionButtons = () => {
  const accordion = document.querySelector(".accordion");
  return accordion.querySelectorAll("button");
}

// Return NodeList of all collapsable h3 tags in the Accordion
const getAccordionHeaders = () => {
  const accordion = document.querySelector(".accordion");
  return accordion.querySelectorAll("h3"); // specific enough?
}

// Set accordion's aria-expanded attributes & classes to collapsed values
const collapseAll = () => {
  getAccordionHeaders().forEach((header) => {
    header.classList.add("collapsed");
  });
  getAccordionButtons().forEach((button) => {
    button.setAttribute("aria-expanded", "false");
  });
}

/* Alternative Behavior
 *  If you would like your accordion to have more than one panel
 *  open at a time, remove the collapseAll() call and uncomment
 *  the else block in this function.
 */
// Shows or hides panel of clicked accordion tab.
const handleAccordionClick = (e) => {
  const panelWasClosed = e.target.getAttribute("aria-expanded") === "false";
  collapseAll();

  if (panelWasClosed) {
    e.target.setAttribute("aria-expanded", "true");
    e.target.parentElement.classList.remove("collapsed");
  }
  // else {
  //   e.target.setAttribute("aria-expanded", "false");
  //   e.target.parentElement.classList.add("collapsed");
  // }
}

// Adds listeners on accordion buttons that open/close panels
const addButtonListeners = () => {
  getAccordionButtons().forEach((button) =>
    button.addEventListener("click", handleAccordionClick)
  );
}

addButtonListeners();
`;

export default javascript;
