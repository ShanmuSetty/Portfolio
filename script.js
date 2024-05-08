const track1 = document.getElementById("image-track1");
const imageWidth = 40;
window.onmousedown = (e) => {
  track1.dataset.mouseDownAt = e.clientX;
};
window.onmouseup = (e) => {
  track1.dataset.mouseDownAt = "0";
  track1.dataset.prevPercentage = track1.dataset.percentage;
};
window.onmousemove = (e) => {
  if (track1.dataset.mouseDownAt === "0") return;
  const mouseDelta = parseFloat(track1.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;
  const percentage = (mouseDelta / maxDelta) * -100;
  let nextPercentage = parseFloat(track1.dataset.prevPercentage) + percentage;
  nextPercentage = Math.min(nextPercentage, 0);
  nextPercentage = Math.max(nextPercentage, -90);
  track1.dataset.percentage = nextPercentage;
  track1.animate(
    {
      transform: `translate(${nextPercentage + 20}%, -100%)`,
    },
    { duration: 1200, fill: "forwards" }
  );

  for (const image of track1.getElementsByClassName("image")) {
    image.animate(
      {
        objectPosition: `${nextPercentage + 100}% 50%`,
      },
      { duration: 1200, fill: "forwards" }
    );
  }
};
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
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("alertBoxContainer").style.display = "block";
  }, 5000);
});
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("alertBoxContainer").style.display = "none";
  }, 9000);
});
