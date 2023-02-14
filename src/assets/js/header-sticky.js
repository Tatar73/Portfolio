let previousScroll = window.pageYOffset;

window.onscroll = function() {
  const header = document.querySelector("header");
  const currentScroll = window.pageYOffset;
  
  if (previousScroll > currentScroll) {
    header.classList.remove("hidden");
  } else {
    header.classList.add("hidden");
  }
  
  previousScroll = currentScroll;
};


