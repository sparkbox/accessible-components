const javascript = `const openDialogButton = document.querySelector(".js-open-modal");
const closeDialogButton = document.querySelector(".js-close-modal");

if (openDialogButton) {
  const dialogId = openDialogButton.getAttribute("aria-controls");
  const dialog = document.getElementById(dialogId);
  const cancelDialogButton = document.querySelector(".js-cancel-modal");
  // These attributes were hard-coded in the HTML to ensure the dialog would be visible to users who do not have JavaScript enabled. We can reset them now because if the script has gotten to this point, JS has been enabled.
  openDialogButton.setAttribute("aria-expanded", "false");
  dialog.setAttribute("aria-hidden", "true");

  const openDialog = () => {
    dialog.setAttribute("aria-hidden", "false");
    openDialogButton.setAttribute("aria-expanded", "true");
    // set the focus to the close button (especially to keep the beginning of content visible for long modals)
    const firstTabElementOfDialog = document.getElementById("close-dialog");
    firstTabElementOfDialog.focus();
  }
  
  const closeDialog = () => {
    dialog.setAttribute("aria-hidden", "true");
    openDialogButton.setAttribute("aria-expanded", "false");
    closeDialogButton.setAttribute("aria-expanded", "false");
    openDialogButton.focus();
    openDialogButton.style.pointerEvents = "auto";
  }
    
  openDialogButton.addEventListener("click", () => {
    openDialog();
  });
  
  closeDialogButton.addEventListener("click", () => {
    closeDialog();
  });
  
  cancelDialogButton.addEventListener("click", () => {
    closeDialog();
  });
  
  document.addEventListener("keydown", (e) => {
    if (e.keyCode == 27) {
      closeDialog();
    }
  });
  
  document.addEventListener("click", (e) => {
    if(dialog.getAttribute("aria-hidden") === "false" &&
      !e.target.closest("#dialog-content") &&
      e.target !== openDialogButton) {
      openDialogButton.style.pointerEvents = "none";
      closeDialog();
    }
  });
  
  dialog.addEventListener("keydown", (e) => {
    if(e.key !== "Tab" || e.keyCode !== 9) return;
    
    const focusableElements = dialog.querySelectorAll("button", "a");
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey && document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus(); 
      e.preventDefault();
    
    } else if (!e.shiftKey && document.activeElement === lastFocusableElement) { 
      firstFocusableElement.focus(); 
      e.preventDefault();
    }
  });
}`;

export default javascript;
