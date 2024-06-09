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
$(".minor-section").append("<button class='favorites'>Add to favorites</button>");


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