var header = document.querySelector(".main-header");
var images = {
  about: "./images/blueberry-pic.jpg",
  history: "./images/tomato-pic.jpg",
  clients: "./images/lavendar-pic.jpg",
  contact: "./images/orange-pic.jpg"
};

var bannerBox = document.querySelector(".fixed-banner__image");

var spy = new Gumshoe(".nav-list a", {
  reflow: true,
  offset: function() {
    return header.getBoundingClientRect().height;
  }
});

function setBannerImage(attribute) {
  let imageLink = images[attribute];
  return imageLink;
}

document.addEventListener(
  "gumshoeActivate",
  function(event) {
    // The list item
    var listItemData = event.target.getAttribute("data-link");
    var image = setBannerImage(listItemData);
    bannerBox.style.backgroundImage = `url('${image}')`;
  },
  false
);
