const javascript = `const button = document.querySelector("#disclosure-button");
button.addEventListener("click", (event) => {
    //aria-controls attribute is used to select desired element to show/hide
    let disclosureTarget = document.querySelector(
      "#" + event.target.getAttribute("aria-controls")
    );
    console.log(disclosureTarget);


    // If no matching element is found, return.
    if (!disclosureTarget) return;

    // Is target currently expanded?
    const isExpanded = event.target.getAttribute("aria-expanded") === "true";

    //Toggles target button element.
    event.target.setAttribute("aria-expanded", !isExpanded);
    //Toggles element to show or hide (text).
    disclosureTarget.classList.toggle("is-hidden");
});
`;

export default javascript;
