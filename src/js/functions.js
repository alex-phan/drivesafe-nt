(function () {
    scrollToTop();
})();

function scrollToTop() {
    var backToTop = document.querySelector(".back-to-top");
    var backToTopButton = document.querySelector(".back-to-top button");
    var scrollSensor = 500;

    backToTopButton.addEventListener("click", function() {
        scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    });

    window.addEventListener("scroll", function () {
        showButton();
    });

    function showButton() {
        if (window.pageYOffset > scrollSensor) {
            backToTop.classList.remove("d-none");
            backToTop.classList.add("d-block");
        } else if (window.pageYOffset <= scrollSensor) {
            backToTop.classList.remove("d-block");
            backToTop.classList.add("d-none");
        }
    }
}