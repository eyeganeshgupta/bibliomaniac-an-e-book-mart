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
