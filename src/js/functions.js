(function() {
    initScrollToTop();
    initPagination();
})();

function initScrollToTop() {
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

    // hide back to top button until the window is scrolled past a certain point
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

function initPagination() {
    var prevLink = document.getElementById("prev-page");
    var nextLink = document.getElementById("next-page");
    var cardsList = document.getElementsByClassName("cards");

    prevLink.addEventListener("click", function() {
        changePage();
    });

    nextLink.addEventListener("click", function() {
        changePage();
    });

    // temporarily faked functionality
    function changePage() {
        for (let i = 0; i < cardsList.length; i++) {
            if (cardsList[i].classList.contains("d-flex")) {
                cardsList[i].classList.remove("d-flex");
                cardsList[i].classList.add("d-none");
            } else if (cardsList[i].classList.contains("d-none")) {
                cardsList[i].classList.remove("d-none");
                cardsList[i].classList.add("d-flex");
            }
        }
    }
}

// Search
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
}

// Search
function searchDrivingSchool2() {
    const input = document.getElementById('search2').value.toUpperCase();
    const cardLists = document.getElementById('card-lists2');
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
}