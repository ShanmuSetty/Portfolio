
const upArrow = document.getElementById("arrow");
upArrow.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const options = {
  threshold: 0.5,
};

const intersectionCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll(".fade").forEach((element) => {
        element.classList.add("fade-in");
      });
      entry.target.querySelectorAll(".slide").forEach((element) => {
        element.classList.add("slide-in");
      });
      observer.unobserve(entry.target);
    }
  });
};

const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  const observer = new IntersectionObserver(intersectionCallback, options);
  observer.observe(section);
});

const fades = document.querySelectorAll(".fade");
fades.forEach((element, index) => {
  if (index >= 3 && index <= 9) {
    element.style.transitionDelay = `${index * 0.1}s`;
  }
  if (index >= 13) {
    element.style.transitionDelay = `${(index % 10) * 0.1}s`;
  }
});
const contact = document.getElementById("Contact");
const drp = document.getElementById("drpcon");
contact.onclick = function toggleContact() {
  drp.classList.toggle("open");
};
window.onclick = function (event) {
  if (!event.target.matches("#Contact") && !event.target.closest("#drpcon")) {
    drp.classList.remove("open");
  }
};
