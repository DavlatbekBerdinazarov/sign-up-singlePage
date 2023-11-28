
const bar = document.querySelector('.icon-menu');
const closeBar = document.querySelector('.icon-menu-close');
const navigationBar = document.querySelector('.navigation');
const body = document.querySelector('body');



bar.addEventListener('click', () => {
    bar.style.display = 'none';
    closeBar.style.display = 'block';
    closeBar.style.zIndex = '999';
    navigationBar.style.visibility = 'visible';

    closeBar.addEventListener('click', () => {
        navigationBar.style.visibility = 'hidden';

        body.style.width = "none";
        body.style.height = 'none';
        body.style.background = 'none';

        closeBar.style.display = 'none';
        bar.style.display = 'block';

    })

    body.style.width = '100%';
    body.style.height = '100%';
    body.style.background = 'rgba(0,0,0,0.3)';
})