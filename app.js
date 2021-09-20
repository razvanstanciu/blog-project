window.addEventListener("load", () => {
    const navBtn = document.querySelector(".navbar-icon")
    const nav = document.querySelector(".navbar")

    if(navBtn && nav) {
        navBtn.addEventListener("click", () => {
            nav.classList.toggle("open")
        })
    }
})