(function () {
    scrollToTop();
})();

function scrollToTop() {
    var backToTopButton = document.querySelector('.back-to-top button');

    backToTopButton.addEventListener('click', function() {
        scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    });
}