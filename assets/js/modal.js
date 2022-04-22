window.onload = function() {
    var buttons = document.querySelectorAll("[data-modalid]");
    
    for (var button of buttons) {
        var modal = document.getElementById(button.dataset.modalid);
        button.onclick = openModal.bind(null, modal);

        modal.onclick = function(e) {
            if (e.target.classList.contains("modal") || 
                e.target.classList.contains("modal__close"))
                closeModal(modal);
        }

        function openModal(modal) {
            modal.classList.add("modal--active");
        }
        function closeModal(modal) {
            modal.classList.remove("modal--active");
        }
    }
}