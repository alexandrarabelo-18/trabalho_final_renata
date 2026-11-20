
const botaoMenu = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (botaoMenu && menu) {
    botaoMenu.addEventListener('click', function() {

        menu.classList.toggle('aberto');

        const menuAberto = menu.classList.contains('aberto');

        botaoMenu.setAttribute('aria-expanded', menuAberto);
        botaoMenu.textContent = menuAberto ? '✕' : '☰';

    });
}

const anoAtual = document.querySelector('#ano');

if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
}
