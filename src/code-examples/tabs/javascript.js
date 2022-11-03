const javascript = `
    let tabsList = Array.from(document.querySelectorAll("[role=tab]"));
    let tabPanels = Array.from(document.querySelectorAll("[role=tabpanel]"));
    
    // Shows the selected tab
    const togglePanel = (tabPanel) => {
      resetHiddenTabPanels();
      tabPanel.classList.remove("is-hidden");
    };
    
    // Add click event to tab buttons
    tabsList.forEach((tab) => {
      tab.addEventListener("click", () => {
        let tabPanel = document.getElementById(
          \`\${tab.getAttribute("aria-controls")}\`\
        );
        resetActiveTabs();
        resetTabIndex(tab);
        togglePanel(tabPanel);
        tab.setAttribute("aria-selected", true);
      });
    });
    
    // Adds hidden class to previously active tabpanel
    const resetHiddenTabPanels = () => {
      tabPanels.forEach((tabPanel) => {
        if (!tabPanel.classList.contains("is-hidden")) {
          tabPanel.classList.add("is-hidden");
        }
      });
    };
    
    // Removes border from previously active tab
    const resetActiveTabs = () => {
      tabsList.forEach((tab) => {
        if (tab.getAttribute("aria-selected") === "true") {
          tab.setAttribute("aria-selected", false);
        }
      });
    };
    
    const resetTabIndex = (selectedTab) => {
      tabsList.forEach((tab) => {
        tab.setAttribute("tabIndex", "-1");
      });
      selectedTab.removeAttribute("tabIndex");
    };
    
    const getActiveTab = () => {
      let selectedTab;
      tabsList.forEach((tab) => {
        if (tab.getAttribute("aria-selected") === "true") selectedTab = tab;
      });
      return selectedTab;
    };
    
    /* ====================== */
    /* = HANDLE KEY PRESSES = */
    /* ====================== */
    
    // Select tab to the right
    const selectRightTab = () => {
      let newTab;
      if (tabsList.indexOf(getActiveTab()) + 1 === tabsList.length) {
        newTab = tabsList[0];
      } else {
        newTab = tabsList[tabsList.indexOf(getActiveTab()) + 1];
      }
      const oldTab = tabsList[tabsList.indexOf(getActiveTab())];
      oldTab.setAttribute("aria-selected", false);
      let tabPanel = document.getElementById(
        \`\${newTab.getAttribute("aria-controls")}\`\
      );
      resetActiveTabs();
      resetTabIndex(newTab);
      togglePanel(tabPanel);
      newTab.setAttribute("aria-selected", true);
    };
    
    // Select tab to the left
    const selectLeftTab = () => {
      let newTab;
      if (tabsList.indexOf(getActiveTab()) - 1 < 0) {
        newTab = tabsList[tabsList.length - 1];
      } else {
        newTab = tabsList[tabsList.indexOf(getActiveTab()) - 1];
      }
      const oldTab = tabsList[tabsList.indexOf(getActiveTab())];
      oldTab.setAttribute("aria-selected", false);
      let tabPanel = document.getElementById(
        \`\${newTab.getAttribute("aria-controls")}\`\
      );
      resetActiveTabs();
      resetTabIndex(newTab);
      togglePanel(tabPanel);
      newTab.setAttribute("aria-selected", true);
    };
    
    // Select first tab
    const selectFirstTab = () => {
      const newTab = tabsList[0];
      let tabPanel = document.getElementById(
        \`\${newTab.getAttribute("aria-controls")}\`\
      );
      resetActiveTabs();
      resetTabIndex(newTab);  
      togglePanel(tabPanel);
      newTab.setAttribute("aria-selected", true);
    };
    
    // Select last tab
    const selectLastTab = () => {
      const newTab = tabsList[tabsList.length - 1];
      let tabPanel = document.getElementById(
        \`\${newTab.getAttribute("aria-controls")}\`\
      );
      resetActiveTabs();
      resetTabIndex(newTab);
      togglePanel(tabPanel);
      newTab.setAttribute("aria-selected", true);
    };
    
    // Detects key presses
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowRight":
          selectRightTab();
          break;
        case "ArrowLeft":
          selectLeftTab();
          break;
        case "Home":
          selectFirstTab();
          break;
        case "End":
          selectLastTab();
          break;
        default:
          break;
      }
    });
  `;

export default javascript;
