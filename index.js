let about=document.getElementById("about");
let nav_link=document.getElementsByClassName("nav-link");

function nav_bar(id_name) {
    let content = document.getElementsByClassName("content");
    for (let i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    id_name.style.display = "block";
}

document.querySelectorAll(".nav_link").forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        let target = document.querySelector(link.getAttribute("href"));
        nav_bar(target);
    });
});

nav_bar(about);