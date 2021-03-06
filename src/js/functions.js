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
    const cardsArr = cardLists.getElementsByClassName('col');
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
    const cardsArr = cardLists.getElementsByClassName('col');
    //console.log(cardsArr);

    //Looping through cards
    for (let i = 0; i < cardsArr.length; i++) {
        let title = cardsArr[i].querySelector(".card-body .card-title a.stretched-link");
        //console.log(title);

        if (title.innerText.toUpperCase().indexOf(input) > -1) {
            cardsArr[i].style.display = "";
        } else {
            cardsArr[i].style.display = "none";
        }
    }
}

//Filter functionality
function filterDrivingSchool() {
    const input = document.getElementById('search').value.toUpperCase();
    const cardLists = document.getElementById('card-lists');
    //console.log(cardLists);
    const cardsArr = cardLists.getElementsByClassName('col');
    //console.log(cardsArr);

    //Looping through cards
    for (let i = 0; i < cardsArr.length; i++) {
        let title = cardsArr[i].querySelector(".card-body .card-title a.stretched-link");
        //console.log(title);

        if (title.innerText.toUpperCase().indexOf(input) > -1) {
            cardsArr[i].style.display = "";
        } else {
            cardsArr[i].style.display = "none";
        }
    }
}

// Star rating functionality
function markStar(item) {
    //console.log(item)
    count = item.id[0];
    sessionStorage.starRating = count;
    var subid = item.id.substring(1);
    for (var i = 0; i < 5; i++) {
        if (i < count) {
            if (document.getElementById((i + 1) + subid).classList.contains("fa-regular")) {
                document.getElementById((i + 1) + subid).classList.remove("fa-regular");
                document.getElementById((i + 1) + subid).classList.add("fa-solid");
            }
        } else {
            if (document.getElementById((i + 1) + subid).classList.contains("fa-solid")) {
                document.getElementById((i + 1) + subid).classList.remove("fa-solid");
                document.getElementById((i + 1) + subid).classList.add("fa-regular");
            }
        }


    }
}

function starOver(item) {
    count = item.id[0];
    sessionStorage.overStarRating = count;
    var subid = item.id.substring(1);
    for (var i = 0; i < 5; i++) {
        if (i < count) {
            if (document.getElementById((i + 1) + subid).classList.contains("fa-regular")) {
                document.getElementById((i + 1) + subid).classList.remove("fa-regular");
                document.getElementById((i + 1) + subid).classList.add("fa-solid");
            }
        } else {
            if (document.getElementById((i + 1) + subid).classList.contains("fa-solid")) {
                document.getElementById((i + 1) + subid).classList.remove("fa-solid");
                document.getElementById((i + 1) + subid).classList.add("fa-regular");
            }
        }


    }
}

function starOut(item) {
    count = sessionStorage.getItem("starRating");
    var subid = item.id.substring(1);
    for (var i = 0; i < 5; i++) {
        if (i < count) {
            if (document.getElementById((i + 1) + subid).classList.contains("fa-regular")) {
                document.getElementById((i + 1) + subid).classList.remove("fa-regular");
                document.getElementById((i + 1) + subid).classList.add("fa-solid");
            }
        } else {
            if (document.getElementById((i + 1) + subid).classList.contains("fa-solid")) {
                document.getElementById((i + 1) + subid).classList.remove("fa-solid");
                document.getElementById((i + 1) + subid).classList.add("fa-regular");
            }
        }


    }
}

//textArea functionality
function clearComment(item) {
    document.getElementById("reviewComment").value = "";
}


//Filter functionality
function locFilter() {
    const btns = document.querySelectorAll('.filter-dropdown');
    const cardsArr = document.querySelectorAll('.filter-options');
    //console.log(btns);

    // const search = document.getElementById(search);

    for (i = 0; i < btns.length; i++) {

        btns[i].addEventListener('click', (e) => {
            e.preventDefault()

            const filter = e.target.dataset.filter;
            //console.log(filter);

            cardsArr.forEach((location) => {
                if (filter === 'all') {
                    location.style.display = 'block'
                } else {
                    if (location.classList.contains(filter)) {
                        location.style.display = 'block'
                    } else {
                        location.style.display = 'none'
                    }
                }
            });
        });
    };

}

//Sorting functionality
const cardLists = document.getElementById('card-lists');
const cardsArr = cardLists.getElementsByClassName('col');
const sortA = cardsArr[0].outerHTML;
const sortB = cardsArr[1].outerHTML;
const sortC = cardsArr[2].outerHTML;
const sortD = cardsArr[3].outerHTML;

const cardLists2 = document.getElementById('card-lists2');
const cardsArr2 = cardLists2.getElementsByClassName('col');
const sortE = cardsArr2[1].outerHTML;
const sortF = cardsArr2[2].outerHTML;
const sortG = cardsArr2[3].outerHTML;
const sortH = cardsArr2[0].outerHTML;

function sortingByTitleAtoZ() {
    const cardLists = document.getElementById('card-lists');
    //console.log(cardLists.innerHTML);
    const cardsArr = cardLists.getElementsByClassName('col');
    //console.log(cardsArr)

    //console.log(a)
    cardLists.innerHTML = "";
    //console.log(cardLists.innerHTML)
    cardLists.innerHTML = sortA + sortB + sortC + sortD;

    const cardLists2 = document.getElementById('card-lists2');
    const cardsArr2 = cardLists2.getElementsByClassName('col');

    cardLists2.innerHTML = "";
    cardLists2.innerHTML = sortE + sortF + sortG + sortH;
}

//Sorting functionality
// Search
function sortingByTitleZtoA() {
    const cardLists = document.getElementById('card-lists');
    //console.log(cardLists.innerHTML);
    const cardsArr = cardLists.getElementsByClassName('col');
    //console.log(cardsArr)

    cardLists.innerHTML = "";
    //console.log(cardLists.innerHTML)
    cardLists.innerHTML = sortD + sortC + sortB + sortA;

    const cardLists2 = document.getElementById('card-lists2');
    const cardsArr2 = cardLists2.getElementsByClassName('col');

    cardLists2.innerHTML = "";
    cardLists2.innerHTML = sortH + sortG + sortF + sortE;
}

//Sorting functionality
// Search
function defaultSorting() {
    const cardLists = document.getElementById('card-lists');
    //console.log(cardLists.innerHTML);
    const cardsArr = cardLists.getElementsByClassName('col');
    //console.log(cardsArr)

    //console.log(a)
    cardLists.innerHTML = "";
    //console.log(cardLists.innerHTML)
    cardLists.innerHTML = sortA + sortB + sortC + sortD;
    
    const cardLists2 = document.getElementById('card-lists2');
    const cardsArr2 = cardLists2.getElementsByClassName('col');

    cardLists2.innerHTML = "";
    cardLists2.innerHTML = sortH + sortE + sortF + sortG;
}