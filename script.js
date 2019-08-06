window.onload = function() {
  // jQuery
  const nav = $("nav");
  const hb = $(".hb");

  hb.on("click", () => nav.slideToggle(300));
  // jQuery END

  // JS
  const concertBg = document.querySelector(".concert");

  window.addEventListener("scroll", () => {
    let offset = window.pageYOffset;
    concertBg.style.backgroundPositionY = -300 + offset * 0.3 + "px";
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
  const iframes = document.querySelectorAll("iframe");
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
