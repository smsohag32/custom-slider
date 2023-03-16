const navLinks = document.getElementById('nav-link')

const toggleMenu = () => {
    const toggle = document.getElementById('toggle');

    if (toggle.classList.contains('fa-bars')) {
        toggle.classList.toggle('fa-xmark')
        navLinks.classList.toggle('top-[96px]')
    }

}
const imgData = [
    'img/img1.jpg',
    'img/img2.jpg',
    'img/img3.jpg',
    'img/img4.jpg',
]
const imgEl = document.getElementById('imgEl');
let imgIndex = 0;
setInterval(() => {
    if (imgIndex === imgData.length) {
        imgIndex = 0;
    }
    const img = imgData[imgIndex];
    imgEl.setAttribute('src', img)
    // console.log(imgIndex);
    imgIndex++
}, 1500);