const images = document.querySelectorAll("img");

function slideImages() {

  //bunlar scroll yaptikca degisiyor
  const windowTop = window.scrollY;
  const windowBottom = window.scrollY + window.innerHeight;

  images.forEach(function (image) {
    // bunlar hep sabit
    const imageTop = image.offsetTop;
    const imageBottom = image.offsetTop + image.height;
    const imageMiddle = (imageTop + imageBottom) / 2;
  
    if (imageMiddle >= windowTop && imageMiddle <= windowBottom) {
      image.style.transform = "translateX(0)";
    }

    if (imageBottom < windowTop || imageTop > windowBottom) {
      window.getComputedStyle(image).float === "right"
        ? (image.style.transform = "translateX(150%)")
        : (image.style.transform = "translateX(-150%)");
    }
  });
}

document.addEventListener("scroll", slideImages);
