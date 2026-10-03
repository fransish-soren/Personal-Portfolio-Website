const menu = document.querySelector("#menu");
const nav = document.querySelector("#navLinks");

menu.onclick = () => {
    nav.classList.toggle("active");

    menu.innerHTML = nav.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
};


// Close menu after clicking link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.onclick = () => {
        nav.classList.remove("active");
        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    };
});
// Active click
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {

    navLinks.forEach(item => {
      item.classList.remove("active");
    });

    link.classList.add("active");
  });
});