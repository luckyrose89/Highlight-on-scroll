var header = document.querySelector(".main-header");
var images = [
  "./images/blueberry-pic.jpg",
  "./images/tomato-pic.jpg",
  "./images/lavendar-pic.jpg",
  "./images/orange-pic.jpg"
];
var bannerBox = document.querySelector(".fixed-banner__image");
bannerBox.style.backgroundImage = `url('${images[0]}')`;
var spy = new Gumshoe(".nav-list a", {
  reflow: true,
  offset: function() {
    return header.getBoundingClientRect().height;
  }
});

document.addEventListener(
  "gumshoeActivate",
  function(event) {
    // The list item
    var li = event.target;

    // The link
    var link = event.detail.link;
    console.log(link);
    // The content
    var content = event.detail.content;
    console.log(content);

    console.log(li);
  },
  false
);
