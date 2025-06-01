// Mostrar/ocultar história
document.getElementById("cta-button").addEventListener("click", function() {
    document.getElementById("our-story").classList.add("visible");
    window.scrollTo({
        top: document.getElementById("our-story").offsetTop,
        behavior: "smooth"
    });
});

document.getElementById("close-story").addEventListener("click", function() {
    document.getElementById("our-story").classList.remove("visible");
});

// Efeito 3D nos cards
document.querySelectorAll('.model-card-3d').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 15;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 15;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateY(-20px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
});

// Formulário
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    alert(`Obrigado, ${name}! Sua mensagem foi enviada.`);
    this.reset();
});