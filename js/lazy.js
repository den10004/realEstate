let observedElements = document.querySelectorAll(".card");
const options = {
  threshold: 0.1,
};

const inViewCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      child = entry.target.querySelector(".realState");
      child.style.display = "block";
    }
  });
};
let observer = new IntersectionObserver(inViewCallback, options);

observedElements.forEach((element) => {
  observer.observe(element);
});
