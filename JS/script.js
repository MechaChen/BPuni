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
  const mv = document.querySelector(".mv");
  const mvLink = document.querySelector(".mv-link");

  mvLink.onclick = playVideo;
  mv.onclick = turnOffVideo;

  function playVideo(e) {
    e.stopPropagation();
    mv.classList.add("active");
  }

  function turnOffVideo() {
    let iframe = document.querySelector(".youtube iframe");
    let mvSrc = iframe.src;
    iframe.src = mvSrc;
    mv.classList.remove("active");
  }

  const concertBg = document.querySelector(".concert");

  if (window.innerWidth >= 1500) {
    window.addEventListener("scroll", () => {
      let offset = window.pageYOffset;
      concertBg.style.backgroundPositionY = -190 + offset * 0.1 + "px";
    });
  } else if (window.innerWidth >= 1200) {
    window.addEventListener("scroll", () => {
      let offset = window.pageYOffset;
      concertBg.style.backgroundPositionY = -10 + offset * 0.02 + "px";
    });
  } else if (window.innerWidth >= 768) {
    window.addEventListener("scroll", () => {
      let offset = window.pageYOffset;
      concertBg.style.backgroundPositionY = -30 + offset * 0.05 + "px";
    });
  } else if (window.innerWidth <= 768) {
    window.addEventListener("scroll", () => {
      let offset = window.pageYOffset;
      concertBg.style.backgroundPositionY = -200 + offset * 0.3 + "px";
    });
  }
  window.addEventListener("resize", function() {
    if (window.innerWidth >= 1500) {
      window.addEventListener("scroll", () => {
        let offset = window.pageYOffset;
        concertBg.style.backgroundPositionY = -190 + offset * 0.1 + "px";
      });
    } else if (window.innerWidth >= 1200) {
      window.addEventListener("scroll", () => {
        let offset = window.pageYOffset;
        concertBg.style.backgroundPositionY = -10 + offset * 0.02 + "px";
      });
    } else if (window.innerWidth >= 768) {
      window.addEventListener("scroll", () => {
        let offset = window.pageYOffset;
        concertBg.style.backgroundPositionY = -30 + offset * 0.05 + "px";
      });
    } else if (window.innerWidth <= 768) {
      window.addEventListener("scroll", () => {
        let offset = window.pageYOffset;
        concertBg.style.backgroundPositionY = -200 + offset * 0.3 + "px";
      });
    }
  });

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

  const musicLis = document.querySelectorAll(".music-services li");
  const musicLinks = document.getElementsByClassName("music-link");
  const hps = document.querySelectorAll(".music-link img");
  const iframes = document.querySelectorAll(".music_players iframe");
  for (let i = 0; i < musicLinks.length; i++) {
    musicLinks[i].addEventListener("click", () => {
      clearAllLinks();
      addTargetLink(i);
    });
  }

  function clearAllLinks() {
    for (let i = 0; i < hps.length; i++) {
      hps[i].src = "pics/headphones_dark.png";
      musicLis[i].classList.remove("active");
      musicLinks[i].classList.remove("active");
      iframes[i % 2].style.display = "none";
    }
  }

  function addTargetLink(i) {
    hps[i].src = hps[i].src.replace("_dark", "");
    musicLis[i].classList.add("active");
    musicLinks[i].classList.add("active");
    iframes[i % 2].style.display = "block";
  }

  // JS END
};
