const menuBtn = document.querySelector('.menu')
const navList = document.querySelector('.nav__list')
const handleNav = () => {
    // menuBtn.classList.toggle('is-active');
    navList.classList.toggle('nav__list--active');

    // allNavItems.forEach(item => {
    //     item.addEventListener('click', () => {
    //         nav.classList.remove('nav__list--active')
    //         navBtn.classList.remove('is-active')
    //     })
    // })

    // console.log('hej');
}
menuBtn.addEventListener('click', handleNav)

















































const accordionItemHeaders = document.querySelectorAll(".courses__btn");
accordionItemHeaders.forEach(e => {
    e.addEventListener("click", a => {
        const n = document.querySelector(".courses__btn.active");
        n && n !== e && (n.classList.toggle("active"), n.nextElementSibling.style.maxHeight = 0), e.classList.toggle("active");
        const t = e.nextElementSibling;
        e.classList.contains("active") ? t.style.maxHeight = t.scrollHeight + "px" : t.style.maxHeight = 0
    })
});
