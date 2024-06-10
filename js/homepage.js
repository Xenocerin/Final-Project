function openModal() {
    document.getElementById('modalWrapper').style.display = 'block';
}

function closeModal() {
    document.getElementById('modalWrapper').style.display = 'none';
}

document.addEventListener("click", function(e) {
     if (e.target.matches('.modal-wrapper')) {
        closeModal();
     }
});

document.addEventListener("DOMContentLoaded", function() {
    var searchBar = document.getElementById("input");
    var divsToFilter = document.querySelectorAll(".recipe");

    searchBar.addEventListener("input", function() {

        var searchText = searchBar.value.toLowerCase();

        divsToFilter.forEach(function(div) {
        
            var divId = div.id.toLowerCase();

           
            if (divId.includes(searchText)) {
                
                div.style.display = "block";
            } else {
              
                div.style.display = "none";
            }
        });
    });
});
$(".recipe").append("<button class='favorites'>Add to favorites</button>");


$(".favorites").click(function(){
    if ($(this).parent().textContent="Favorite"){
         $(this).parent().clone().appendTo('#myModal')
    }
  });

  $(".favorites").click(function(){
    $(document).on("click", "#myModal .favorites", function(){
    if ($(this).parent().textContent="Remove Favorite"){
        $(document).on("click", "#myModal .favorites", function(){
            $(this).parent().remove();
        });
    }
  });
  });





  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('favorites')) {
      event.target.textContent = "Remove Favorite";
    }

 
});


// Pexels API
//API key: kMU5WuNRNGA2kCazUiKRrLox6ZsYUUZiKLNVlrUTNO5cXGji9EBx4GnA
document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "kMU5WuNRNGA2kCazUiKRrLox6ZsYUUZiKLNVlrUTNO5cXGji9EBx4GnA";
    const imageUrl = "https://api.pexels.com/v1/search?query=food&per_page=30";

    fetch(imageUrl, {
        headers: {
            Authorization: apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const randomIndex = Math.floor(Math.random() * data.photos.length); // Select a random index
        const imageUrl = data.photos[randomIndex].src.large; 
        const welcomeDiv = document.getElementById("welcome");

        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = data.photos[0].alt;
        img.style.width = "400px";
        img.style.height = "400px";
        img.style.objectFit = "cover";

        welcomeDiv.innerHTML = ""; // Clear any existing content
        welcomeDiv.appendChild(img);
        welcomeDiv.style.display = "flex";
        welcomeDiv.style.justifyContent = "center";
        welcomeDiv.style.alignItems = "center";

        welcomeDiv.appendChild(img);  
    })
    .catch(error => console.error("Error fetching the image:", error));
});
