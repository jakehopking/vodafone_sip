console.log("Load: Tabs");

(function setupTabs() {
  document.querySelectorAll(".tabs__nav-item").forEach(tabNav => {
    tabNav.addEventListener("click", e => {
      e.preventDefault();
      const tabsNav = tabNav.parentElement,
        tabsContainer = tabsNav.parentElement,
        tabId = tabNav.dataset.forTab,
        tabPaneToActivate = tabsContainer.querySelector(`.tabs__pane[data-tab="${tabId}"]`);

      // Test
      // console.log(tabsNav);
      // console.log(tabsContainer);
      // console.log(tabId);
      // console.log(tabPaneToActivate);

      // Remove active classes
      // From tab nav items
      tabsContainer.querySelectorAll(".tabs__nav-item--active").forEach(tabNav => {
        tabNav.classList.remove("tabs__nav-item--active");
      });
      // From tab pane items
      tabsContainer.querySelectorAll(".tabs__pane--active").forEach(tabPane => {
        tabPane.classList.remove("tabs__pane--active");
      });

      // Add active class to selected tab__nav and tab__pane based on clicked id
      tabNav.classList.add("tabs__nav-item--active");
      tabPaneToActivate.classList.add("tabs__pane--active");
    });
  });

  // Add active class to first nav and first pane of every instance of .tabs.
  document.querySelectorAll(".tabs").forEach(tabNav => {
    document.querySelector(".tabs__nav-item").click();
  });
})(); // IIFE
