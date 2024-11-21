const burgerBtn = document.querySelector("#burger-btn");
const burgerMenu = document.querySelector(".header-nav");

burgerBtn.addEventListener("click", (event) => {
  event.stopPropagation();
    if (burgerMenu.classList.contains("open")) {
      burgerClose();
    }
    else { 
      burgerOpen();

      document.addEventListener("click", burgerClose);
    }
  });

  function burgerOpen() {
    burgerMenu.classList.add("open");
    burgerBtn.classList.add("active")

    burgerMenu.addEventListener("click", (e) => e.stopPropagation());
  }
  function burgerClose() {
    burgerMenu.classList.remove("open");
    burgerBtn.classList.remove("active");

    document.removeEventListener("click",burgerClose);
  }
