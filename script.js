// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// active links
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // sticky navbar

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar after clicking navbar link

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroller reveal

ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .extras-box, .contact form, .about-content h3",
  { origin: "bottom" }
);
ScrollReveal().reveal(
  ".home-content h1, .about-img, .contact-container .textform",
  { origin: "left" }
);
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// type text effect
const typed = new Typed(".multiple-text", {
  strings: [
    "Graphics Artist",
    "Technician",
    "UI/UX Web Designer",
    "Youtuber",
    "Blogger",
  ],
  typeSpeed: 50,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

var swiper = new Swiper(".webdevelopment-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 3,
      centeredSlides: true,
    },
  },
});

swiper.on("slideChange", function () {
  swiper.autoplay.stop(); // Stop autoplay when the user interacts with the slider
  swiper.autoplay.disableOnInteraction = false; // Re-enable autoplay after interaction
  swiper.autoplay.start(); // Start autoplay again
});

//  google search
function redirectToGoogle() {
  var query = document.querySelector(".query").value;
  if (query) {
    var searchUrl =
      "https://www.google.com/search?q=" + encodeURIComponent(query);
    window.open(searchUrl, "_blank");
  }
}

function handleKeyDown(event) {
  if (event.key === "Enter") {
    redirectToGoogle();
  }
}

function toggleIcon() {
  var queryInput = document.querySelector(".query");
  var xIcon = document.querySelector(".bx-x-circle");

  if (queryInput.value === "") {
    xIcon.style.display = "none";
  } else {
    xIcon.style.display = "inline-block";
  }
}

function clearSearch() {
  var queryInput = document.querySelector(".query");
  var xIcon = document.querySelector(".bx-x-circle");

  queryInput.value = "";
  xIcon.style.display = "none";
}

var queryInput = document.querySelector(".query");
var searchBtn = document.querySelector(".searchBtn");

searchBtn.addEventListener("click", redirectToGoogle);
queryInput.addEventListener("keydown", handleKeyDown);
toggleIcon();
