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
  // jQuery END

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

  const fourthLis = document.querySelectorAll(".fourth li");
  const fourthLinks = document.querySelectorAll(".fourth .music-link");
  const fourthHps = document.querySelectorAll(".fourth img");
  const fourthIframes = document.querySelectorAll(".fourth-album iframe");
  for (let i = 0; i < fourthLinks.length; i++) {
    fourthLinks[i].addEventListener("click", () => {
      clearAllDark(fourthHps, fourthLis, fourthLinks, fourthIframes);
      addDarkTarget(i, fourthHps, fourthLis, fourthLinks, fourthIframes);
    });
  }

  const secondLis = document.querySelectorAll(".second li");
  const secondLinks = document.querySelectorAll(".second .music-link");
  const secondHps = document.querySelectorAll(".second img");
  const secondIframes = document.querySelectorAll(".second-album iframe");
  for (let i = 0; i < secondLinks.length; i++) {
    secondLinks[i].addEventListener("click", () => {
      clearAllWhite(secondHps, secondLis, secondLinks, secondIframes);
      addWhiteTarget(i, secondHps, secondLis, secondLinks, secondIframes);
    });
  }

  const firstLis = document.querySelectorAll(".first li");
  const firstLinks = document.querySelectorAll(".first .music-link");
  const firstHps = document.querySelectorAll(".first img");
  const firstIframes = document.querySelectorAll(".first-album iframe");
  for (let i = 0; i < firstLinks.length; i++) {
    firstLinks[i].addEventListener("click", () => {
      clearAllDark(firstHps, firstLis, firstLinks, firstIframes);
      addDarkTarget(i, firstHps, firstLis, firstLinks, firstIframes);
    });
  }

  function clearAllDark(hps, lis, links, iframes) {
    for (let i = 0; i < hps.length; i++) {
      hps[i].src = "pics/headphones_dark.png";
      lis[i].classList.remove("active");
      links[i].classList.remove("active");
      iframes[i % 2].style.display = "none";
    }
  }

  function clearAllWhite(hps, lis, links, iframes) {
    for (let i = 0; i < hps.length; i++) {
      hps[i].src = "pics/headphones_white.png";
      lis[i].classList.remove("active");
      links[i].classList.remove("active");
      iframes[i % 2].style.display = "none";
    }
  }

  function addDarkTarget(i, hps, lis, links, iframes) {
    hps[i].src = hps[i].src.replace("_dark", "");
    lis[i].classList.add("active");
    links[i].classList.add("active");
    iframes[i % 2].style.display = "block";
  }

  function addWhiteTarget(i, hps, lis, links, iframes) {
    hps[i].src = hps[i].src.replace("_white", "_pink");
    lis[i].classList.add("active");
    links[i].classList.add("active");
    iframes[i % 2].style.display = "block";
  }

  // JS END
};
