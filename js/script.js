const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const boxes = document.querySelectorAll('.box')

window.addEventListener("scroll", scrollBox)

btn.addEventListener("click", () => {
    btn.classList.toggle("open")
    nav.classList.toggle("flex")
    nav.classList.toggle("hidden")
})

function scrollBox() {
    const tregerBottom = (window.innerHeight / 5) * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < tregerBottom) {
            box.classList.add("show")
        } else {
            box.classList.remove("show")
        }
    })
}