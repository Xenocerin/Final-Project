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