const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideLinks.forEach(otherLink => {
            otherLink.parentElement.classList.remove('active');
        });
        link.parentElement.classList.add('active');
    });
});

const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sidebar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sidebar.classList.toggle('close');
});
window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sidebar.classList.add('close');
    } else {
        sidebar.classList.remove('close');
    }
});