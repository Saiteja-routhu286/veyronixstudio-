/* ================= SCROLL TO TOP ================= */
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* ================= SMOOTH NAV SCROLL ================= */
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");

    if (targetId.startsWith("#")) {
      e.preventDefault();

      const section = document.querySelector(targetId);

      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: "smooth"
        });
      }
    }
  });
});

/* ================= CARD HOVER FIX (clean control) ================= */
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-6px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0px)";
  });
});

/* ================= FADE-IN ON SCROLL ================= */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll("section, .card").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "0.6s ease";
  observer.observe(el);
});

/* ================= LOG ================= */
console.log("VEYRONIX STUDIO LOADED - PREMIUM MODE");


document.querySelector(".secondary-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const target = document.querySelector("#contact");
  const targetPosition = target.offsetTop;
  const startPosition = window.pageYOffset;

  const distance = targetPosition - startPosition;
  const duration = 2000; // ⬅️ increase = slower scroll (2000ms = slow)

  let start = null;

  function animation(currentTime) {
    if (start === null) start = currentTime;

    const timeElapsed = currentTime - start;
    const run = ease(timeElapsed, startPosition, distance, duration);

    window.scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
});
