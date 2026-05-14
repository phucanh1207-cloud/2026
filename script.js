const video = document.getElementById("bgVideo");

window.addEventListener("scroll", () => {
  video.currentTime = video.duration * (window.scrollY / 1000);
});

const revealSection =
  document.getElementById("reveal-section");

const revealImage =
  document.getElementById("reveal-image");

window.addEventListener("scroll", () => {

  const rect =
    revealSection.getBoundingClientRect();

  const windowHeight = window.innerHeight;

  const progress =
    Math.min(
      Math.max(
        (windowHeight - rect.top) /
        (windowHeight + rect.height),
        0
      ),
      1
    );

  // hiện ảnh theo scroll
  const revealAmount = 100 - (progress * 100);

  revealImage.style.clipPath =
    `inset(${revealAmount}% 0 0 0)`;

});


