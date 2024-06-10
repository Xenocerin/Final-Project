function openModal() {
    document.getElementById('modalWrapper').style.display = 'block';
}

function closeModal() {
    document.getElementById('modalWrapper').style.display = 'none';
}

document.addEventListener("click", function (e) {
    if (e.target.matches('.modal-wrapper')) {
        closeModal();
    }
});
//help

function openFav() {
    document.getElementById('modalWrapper2').style.display = 'block';
}

function closeFav() {
    document.getElementById('modalWrapper2').style.display = 'none';
}

document.addEventListener("click", function (e) {
    if (e.target.matches('.modal-wrapper2')) {
        closeModal2();
    }
});
//=)

function openCon() {
    document.getElementById('modalWrapper3').style.display = 'block';
}

function closeCon() {
    document.getElementById('modalWrapper3').style.display = 'none';
}

document.addEventListener("click", function (e) {
    if (e.target.matches('.modal-wrapper3')) {
        closeModal3();
    }
});


document.addEventListener("DOMContentLoaded", function () {
    var searchBar = document.getElementById("input");
    var divsToFilter = document.querySelectorAll(".recipe");

    searchBar.addEventListener("input", function () {

        var searchText = searchBar.value.toLowerCase();

        divsToFilter.forEach(function (div) {

            var divId = div.id.toLowerCase();


            if (divId.includes(searchText)) {

                div.style.display = "block";
            } else {

                div.style.display = "none";
            }
        });
    });
});
document.querySelectorAll(".recipe").forEach(function (recipe) {
    if (!recipe.querySelector(".favorites")) {
        const button = document.createElement("button");
        button.classList.add("favorites");
        button.textContent = "Add to favorites";
        recipe.appendChild(button);
    }
});

document.addEventListener("click", function (event) {

    if (event.target.classList.contains("favorites")) {

        if (event.target.textContent === "Add to favorites") {
            event.target.textContent = "Remove Favorite";
            const parentDiv = event.target.parentNode.cloneNode(true);
            document.getElementById("myModal").appendChild(parentDiv);
        } else {
            event.target.parentNode.remove();
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "kMU5WuNRNGA2kCazUiKRrLox6ZsYUUZiKLNVlrUTNO5cXGji9EBx4GnA";
    const imageUrl = "https://api.pexels.com/v1/search?query=food&per_page=30";

    fetch(imageUrl, {
        headers: {
            Authorization: apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.photos.length);
            const imageUrl = data.photos[randomIndex].src.large;
            const welcomeDiv = document.getElementById("welcome");

            const img = document.createElement("img");
            img.src = imageUrl;
            img.alt = data.photos[0].alt;
            img.style.width = "400px";
            img.style.height = "400px";
            img.style.objectFit = "cover";

            welcomeDiv.innerHTML = "";
            welcomeDiv.appendChild(img);
            welcomeDiv.style.display = "flex";
            welcomeDiv.style.justifyContent = "center";
            welcomeDiv.style.alignItems = "center";

            welcomeDiv.appendChild(img);
        })
        .catch(error => console.error("Error fetching the image:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    const randomDiv = document.querySelector('.favorite');
    const replaceBtn = document.getElementById('replaceBtn');
    const container = document.querySelector('.target-div');


    function pickRandomDiv() {
        const divs = document.querySelectorAll('.random-div');
        const randomIndex = Math.floor(Math.random() * divs.length);
        const randomDivClone = divs[randomIndex].cloneNode(true);
        container.replaceChild(randomDivClone, randomDiv);
    }


    replaceBtn.addEventListener('click', pickRandomDiv);
});

function replaceRandomDiv() {

    var divs = document.querySelectorAll('.recipe');


    var randomIndex = Math.floor(Math.random() * divs.length);
    var randomDiv = divs[randomIndex];

    var clonedDiv = randomDiv.cloneNode(true);

    var targetDiv = document.querySelector('.target-div');

    targetDiv.innerHTML = '';

    targetDiv.appendChild(clonedDiv);
}
document.getElementById('replaceBtn').addEventListener('click', replaceRandomDiv);