window.onload = function() {
  // jQuery
  const nav = $("nav");
  const hb = $(".hb");
  const menuControl = $("#menu_control");

  hb.on("click", () => {
    if (menuControl.is(":checked")) {
      nav.slideUp(300);
    } else {
      nav.slideDown(300);
    }
  });

  var nowTop = 0;
  $(window).on("scroll", function() {
    if (window.pageYOffset > 0) {
      $("header").toggleClass("hide", $(window).scrollTop() > nowTop);
      nowTop = $(window).scrollTop();
      if (window.pageYOffset >= 300) {
        $("header").addClass("clearify");
        $("nav a").addClass("clearify");
      } else {
        $("header").removeClass("clearify");
        $("nav a").removeClass("clearify");
      }
    }
  });
  // jQuery End

  // JS
  function showNavbar() {
    const navbar = document.querySelector("nav");
    const navbarContent = document.querySelector("nav div");
    if (window.innerWidth >= 768) {
      navbar.style.display = "block";
      navbarContent.classList.remove("left-slide");
    } else {
      navbar.style.display = "none";
      navbarContent.classList.add("left-slide");
    }
  }
  window.addEventListener("resize", showNavbar);

  const productItems = document.querySelectorAll(".products .item");
  console.log(productItems);
  window.addEventListener("scroll", () => {
    if (window.innerWidth <= 767) {
      for (let i = 0; i < productItems.length; i++) {
        if (
          window.pageYOffset + 300 >= productItems[i].offsetTop &&
          window.pageYOffset + 300 <=
            productItems[i].offsetTop + productItems[i].offsetHeight
        ) {
          productItems[i].classList.add("active");
        } else {
          productItems[i].classList.remove("active");
        }
      }
    }
  });
  // JS End
};
