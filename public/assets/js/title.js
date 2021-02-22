var animate = anime({
  targets: "#title path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 3000,
  delay: function (el, i) {
    return i * 100;
  },
  direction: "alternate",
  loop: false,
  autoplay: true,
});
