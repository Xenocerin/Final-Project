function openModal() {
    document.getElementById('modalWrapper').style.display = 'block';
}

function closeModal() {
    document.getElementById('modalWrapper').style.display = 'none';
}

document.addEventListener("click", function(e) {
     if (e.target.matches('.modal-wrapper')) { // outside click
        closeModal();
     }
});

document.addEventListener("DOMContentLoaded", function() {
    // Get references to the search bar input and the divs to be filtered
    var searchBar = document.getElementById("input");
    var divsToFilter = document.querySelectorAll(".minor-section");

    // Add event listener for input event on the search bar
    searchBar.addEventListener("input", function() {
        // Get the value entered in the search bar and convert it to lowercase
        var searchText = searchBar.value.toLowerCase();

        // Loop through each div to filter
        divsToFilter.forEach(function(div) {
            // Get the div's ID and convert it to lowercase
            var divId = div.id.toLowerCase();

            // Check if the div ID contains the search text
            if (divId.includes(searchText)) {
                // If it matches, display the div
                div.style.display = "block";
            } else {
                // If it doesn't match, hide the div
                div.style.display = "none";
            }
        });
    });
});
