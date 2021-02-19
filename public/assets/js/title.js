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