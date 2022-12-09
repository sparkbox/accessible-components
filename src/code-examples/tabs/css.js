const css = `.is-hidden {
  display: none;
}

/* ================ */
/* = EXTRA STYLES = */
/* ================ */

[role="tab"] {
  border: none;
  padding: 0.35rem;
  font-size: 1.4rem;
  color: black;
  cursor: pointer;
  transition: all ease-in-out 100ms;
  border: 2px solid white;
  border-bottom: none;
}

[role="tab"]:focus,
[role="tab"]:hover {
  border: 2px solid black;
  border-bottom: none;
}

[aria-selected="true"] {
  border: 2px solid black;
  border-bottom: none;
}

[role="tabpanel"] {
  color: black;
  padding: 0 1rem 1rem 1rem;
  max-width: 30rem;
  border: 1px solid black;
}
`;

export default css;
