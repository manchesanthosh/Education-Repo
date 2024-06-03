const activpage = window.location.pathname;

const navlinks = document.querySelectorAll("nav ul li a").forEach((link) => {
  if (link.href.includes(`${activpage}`)) {
    link.classList.add("active");
  }
});
