var animate = anime({
  targets: "#title path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 5000,
  delay: function (el, i) {
    return i * 200;
  },
  direction: "alternate",
  loop: false,
  autoplay: true,
});

// $("#title").on("click", t);

// let play = false;
// function t() {
//   if (!play) {
//     $("#title").on("click", (animation.loop = true));
//   } else {
//     $("#title").on("click", (animation.loop = false));
//   }
//   play = !play;
// }

function init() {
  console.log(animate.loop);
}

$("#mainCard").on("click",console.log("potato"));
