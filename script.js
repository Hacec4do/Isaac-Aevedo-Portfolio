// Small interactions: reveal projects as they enter the viewport.
const items = document.querySelectorAll(".project, .about-copy, .contact-links");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

items.forEach(item => {
  item.style.opacity = "0";
  item.style.transform = "translateY(18px)";
  item.style.transition = "opacity .7s ease, transform .7s ease";
  observer.observe(item);
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".is-visible").forEach(el => {
    el.style.opacity = "1";
    el.style.transform = "none";
  });
});

const style = document.createElement("style");
style.textContent = `.is-visible{opacity:1!important;transform:none!important}`;
document.head.appendChild(style);
