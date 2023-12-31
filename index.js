const cards = document.querySelectorAll('.card')

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('show', entry.isIntersecting);

            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
            }
        });
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});
