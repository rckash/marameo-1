let navContainer = document.getElementsByClassName("search-modal")[0];
let mobileNavDropdown = document.getElementsByClassName("mobile-nav-dropdowns__container")[0];

function showSearchModal() {
    navContainer.style.display = "block";
}

function hideSearchModal() {
    navContainer.style.display = "none";
}

function showMobileNavDropdown() {
    mobileNavDropdown.style.display = "block";
}

function hideMobileNavDropdown() {
    mobileNavDropdown.style.display = "none";
}