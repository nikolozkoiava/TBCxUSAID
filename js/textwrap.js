const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        faqs.forEach(otherFaq => {
            if (otherFaq !== faq && otherFaq.classList.contains('open')) {
                otherFaq.classList.remove('open');
            }
        });
    });
});

