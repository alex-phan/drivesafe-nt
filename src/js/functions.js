(function() {
    scrollToTop();
})();

function scrollToTop() {
    var backToTop = document.querySelector(".back-to-top");
    var backToTopButton = document.querySelector(".back-to-top button");
    var scrollSensor = 300;

    backToTopButton.addEventListener("click", function() {
        scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    });

    window.addEventListener("scroll", function() {
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

//Search Functionality
function searchDrivingSchool() {
    const input = document.getElementById('search').value.toUpperCase();
    const cardLists = document.getElementById('card-lists');
    //console.log(cardLists);
    const cardsArr = cardLists.getElementsByClassName('card');
    //console.log(cardsArr);

    //Looping through cards
    for (let i = 0; i < cardsArr.length; i++) {
        let title = cardsArr[i].querySelector(".card-body .card-title a.stretched-link");
        console.log(title);

        if (title.innerText.toUpperCase().indexOf(input) > -1) {
            cardsArr[i].style.display = "";
        } else {
            cardsArr[i].style.display = "none";
        }
    }

    //for (let i = 0; i < cardsArr.length; i++) {
    //    let title = cardsArr[i].querySelector(".card-body .card-title a.stretched-link");
    //    console.log(title);

    //    if (title.innerText.toUpperCase().indexOf(input) > -1) {
    //        cardsArr[i].style.display = "";
    //    } else {
    //        cardsArr[i].style.display = "none";
    //    }
    //}
}