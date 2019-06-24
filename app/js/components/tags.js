console.log("Load: Tags");

// Define required className/icon pairs
const tagTypes = [
  {
    className: "error",
    iconName: "glyphicon-remove"
  },
  {
    className: "success",
    iconName: "glyphicon-ok"
  },
  {
    className: "warn",
    iconName: "glyphicon-warning-sign"
  },
  {
    className: "info",
    iconName: "glyphicon-info-sign"
  }
];

(function setupTags(arr) {
  // Map over arr, and forEach className found add corresponding iconName as innerHTML
  arr.map(type => {
    document.querySelectorAll(`.tags__item--${type.className} .tags__item-icon`).forEach(eachItem => {
      eachItem.innerHTML = `<i class="glyphicon ${type.iconName}"></i>`;
    });
  });
})(tagTypes); // IIFE
