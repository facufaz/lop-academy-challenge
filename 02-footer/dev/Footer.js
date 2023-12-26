document.addEventListener('DOMContentLoaded', function () {
    const footerLinks = document.querySelectorAll('.footer-link');

    footerLinks.forEach(link => {
        link.addEventListener('click', function () {
            link.classList.toggle('active');

            const table = link.querySelector('.dp-list')
            const plus = link.querySelector('.plus');
            const minus = link.querySelector('.minus');
            plus.style.transform = link.classList.contains('active') ? 'scale(0)' : 'scale(1)';
            minus.style.transform = link.classList.contains('active') ? 'scale(1)' : 'scale(0)';
            table.style.transform = link.classList.contains('active') ? 'scale(1)' : 'scale(0)';
        });
    });
});