function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            tabContent.forEach((content) => {
                content.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        };

        tabMenu.forEach((item, index) => {
            item.addEventListener('click', function() {
                activeTab(index);
            });
        });
    };
};
initTabNav();


function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');

    if (accordionList.length) {
        accordionList[0].classList.add('ativo');
        accordionList[0].nextElementSibling.classList.add('ativo');

        function activeAccordion() {
            this.classList.toggle('ativo');
            this.nextElementSibling.classList.toggle('ativo');
        };

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    };
};
initAccordion();

function initSmoothScroll() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    if(linksInternos.length) {
        function scrollToSection(event) {
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');
            const section = document.querySelector(href);
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        };
        linksInternos.forEach((link) => {
            link.addEventListener('click', scrollToSection);
        });
    };
};
initSmoothScroll();

function showSection() {
    const sections = document.querySelectorAll('.js-scroll');
    if (sections.length) {
        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - window.innerHeight*0.5; //o topo vira metade da tela, a animação ocorre antes
                if (sectionTop < 0) {
                    section.classList.add('ativo');
                };
            });
        };
        animaScroll()
        window.addEventListener('scroll', animaScroll);
    };
};
showSection();