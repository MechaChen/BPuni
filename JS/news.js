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

  $(".latest").owlCarousel({
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 1
      }
    },
    animateOut: "fadeOut",
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
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
  // jQuery END

  const newsPieces = document.getElementsByClassName("news-piece");
  window.addEventListener("scroll", () => {
    if (window.innerWidth <= 767) {
      for (let i = 0; i < newsPieces.length; i++) {
        if (
          window.pageYOffset + 300 >= newsPieces[i].offsetTop &&
          window.pageYOffset + 300 <=
            newsPieces[i].offsetTop + newsPieces[i].offsetHeight
        ) {
          newsPieces[i].classList.add("active");
        } else {
          newsPieces[i].classList.remove("active");
        }
      }
    }
  });
};
