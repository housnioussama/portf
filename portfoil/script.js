const primaryNav= document.querySelector(".menu");
const navToggle = document.querySelector(".mobile-nav");

navToggle.addEventListener("click", () => {
    const visib =primaryNav.getAttribute("data-visible");
    if(visib === "false"){
        primaryNav.setAttribute("data-visible",true);
        
    }
    else {
        primaryNav.setAttribute("data-visible",false);
        
    }
});

