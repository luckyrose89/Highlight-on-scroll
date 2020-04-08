const header = document.querySelector(".main-header");
const bannerBox = document.querySelector(".fixed-banner__image");
const bannerText = document.querySelector(".fixed-banner__text");

const images = {
  about: "./images/blueberry-pic.jpg",
  history: "./images/tomato-pic.jpg",
  clients: "./images/lavendar-pic.jpg",
  contact: "./images/orange-pic.jpg"
};

// initialize a new instance of gumshoe
const spy = new Gumshoe(".nav-list a", {
  reflow: true,
  offset: function() {
    return header.getBoundingClientRect().height;
  }
});

// select the link with active class and set banner image for section
let activeLink = document.querySelector(".active");
setBanner(activeLink.getAttribute("data-link"));

function setBanner(attribute) {
  let imageLink = images[attribute];
  bannerBox.style.backgroundImage = `url('${imageLink}')`;
  bannerText.textContent = attribute;
}

document.addEventListener(
  "gumshoeActivate",
  function(event) {
    // The list item
    setTimeout(function() {
      var listItemData = event.target.getAttribute("data-link");
      setBanner(listItemData);
    }, 600);
  },
  false
);
