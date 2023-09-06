const cards = document.querySelectorAll(".cards-item__img");

function zoom(e) {
  const scale = e.currentTarget;

  scale.style.scale = "1.2";
}

function reduce(e) {
  const scale = e.currentTarget;

  scale.style.scale = "1";
}

cards.forEach((i) => {
  i.addEventListener("mousemove", zoom);
  i.addEventListener("mouseleave", reduce);
});
