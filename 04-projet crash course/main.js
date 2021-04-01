const mobileBtn = document.getElementById('mobile-cta');
const  nav = document.querySelector('nav'); //querySelector pour les balises HTML
const mobileBtnExit = document.getElementById('mobile-exit');

        mobileBtn.addEventListener('click', () =>{
            nav.classList.add('menu-btn');           // c'est une classe qu'on a mis en css: nav-menu-btn{display: block;}
        });
        mobileBtnExit.addEventListener('click',() =>{
            nav.classList.remove('menu-btn');
        });
        