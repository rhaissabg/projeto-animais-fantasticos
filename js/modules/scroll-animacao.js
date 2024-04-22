export default function initAnimacaoScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    if (sections.length) {
        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - window.innerHeight*0.5; //o topo vira metade da tela, a animação ocorre antes
                if (sectionTop < 0) {
                    section.classList.add('ativo');
                } else if (section.classList.contains('ativo')) {
                    section.classList.remove('ativo');
                };
            });
        };
        animaScroll()
        window.addEventListener('scroll', animaScroll);
    };
};