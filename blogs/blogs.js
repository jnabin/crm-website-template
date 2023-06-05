ScrollReveal({
    reset: false,
    distance: '100px',
    duration: 1600,
    delay: 400
});
ScrollReveal().reveal('.news-grid-item:nth-child(even)', {delay: 400, origin: 'right'});
ScrollReveal().reveal('.showing-result-count', {delay: 400, origin: 'bottom'});
ScrollReveal().reveal('.news-grid-item:nth-child(odd)', {delay: 400, origin: 'left'});
ScrollReveal().reveal('.pagination-items', {delay: 400, origin: 'bottom'});