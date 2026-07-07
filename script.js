// ===== Active Navigation =====

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.id;
        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});


// ===== Mobile Menu =====

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});