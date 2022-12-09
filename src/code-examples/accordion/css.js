const css = `/* Styles for panel visibility */
.collapsed ~ .tab-panel {
  display: none;
}

.tab-panel {
  display: block;
}

/* Styles for a rotating svg icon */
button[aria-expanded="false"] > .dropdown-arrow {
  pointer-events: none;
}

button[aria-expanded="true"] > .dropdown-arrow {
  rotate: -180deg;
  pointer-events: none;
}

/* OPTIONAL styles for demo clarity */
h3 {
  padding: 0;
  margin: 0;
}

.accordion {
  border: solid gray 0.2rem;
  border-radius: 0.4rem;
  max-width: 20rem;
  margin: auto;
}

.accordion-section button {
  width: 100%;
  display: flex;
  margin: none;
  padding: none;
  justify-content: space-between;
}

.accordion-section .tab-panel {
  margin: 0.3rem;
}
/* end of optional styles */
`;

export default css;
