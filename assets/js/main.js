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
