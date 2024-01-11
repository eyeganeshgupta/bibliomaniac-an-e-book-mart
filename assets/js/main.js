/*=============== SEARCH ===============*/
const searchButton = document.getElementById("search-button");
const searchClose = document.getElementById("search-close");
const searchContent = document.getElementById("search-content");

/*=============== Show search ===============*/
// ! Validate if constant exists
if (searchButton) {
  searchButton.addEventListener("click", () => {
    searchContent.classList.add("show-search");
  });
}

/*=============== Hide search ===============*/
// ! Validate if constant exists
if (searchClose) {
  searchClose.addEventListener("click", () => {
    searchContent.classList.remove("show-search");
  });
}

/*=============== LOGIN ===============*/
const loginButton = document.getElementById("login-button");
const loginClose = document.getElementById("login-close");
const loginContent = document.getElementById("login-content");

/*=============== Show login ===============*/
// ! Validate if constant exists
if (loginButton) {
  loginButton.addEventListener("click", () => {
    loginContent.classList.add("show-login");
  });
}

/*=============== Hide login ===============*/
// ! Validate if constant exists
if (loginClose) {
  loginClose.addEventListener("click", () => {
    loginContent.classList.remove("show-login");
  });
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scroll >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};

window.addEventListener("scroll", shadowHeader);

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper(".home-swiper", {
  loop: true,
  spaceBetween: -24,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1220: {
      spaceBetween: -32,
    },
  },

  /*
  // ! Optional Parameters
  direction: "vertical",
  loop: true,

  // ! if we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // ! navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // ! And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  */
});

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper(".featured-swiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
  // ! navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1150: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
});

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper(".new-swiper", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: "auto",
  breakpoints: {
    1150: {
      slidesPerView: 3,
    },
  },
});

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper(".testimonial-swiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
  breakpoints: {
    1150: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    const sectionClass = document.querySelector(
      ".nav-menu a[href *=" + sectionId + "]"
    );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("change-theme");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// ! Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// ! We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => {
  return document.body.classList.contains(darkTheme) ? "dark" : "light";
};

const getCurrentIcon = () => {
  return themeButton.classList.contains(iconTheme)
    ? "ri-moon-line"
    : "ri-sun-line";
};

// ! We validate if the user previously choose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// TODO: Activate / Deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // ! Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // ! We save the theme and the current icon that user chooses
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true,
});

sr.reveal(
  `.home-data, .featured-container, .new-container, .join-data, .testimonial-container, .footer`
);
sr.reveal(`.home-images`, { delay: 600 });
sr.reveal(`.services-card`, { interval: 150 });
sr.reveal(`.discount-data`, { origin: "left" });
sr.reveal(`.discount-images`, { origin: "right" });
