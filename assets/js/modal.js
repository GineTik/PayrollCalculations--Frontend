/*

Пример использования

<!-- Кнопка для вызова модального окна -->
<button type="button" class="button button--gold" data-modalId="exampleModal">
    Launch demo modal
</button>

<!-- Модальное окно -->
<div class="modal" id="exampleModal" tabindex="-1">
    <div class="modal__inner">
        <div class="modal__header">
            <h2 class="modal__title">Анкетування</h2>
            <ion-icon name="close-outline" class="modal__close"></ion-icon>
        </div>
        <div class="modal__body">
            Цей калькулятор допоможе розрахувати багато різних параметрів та дасть чітку відповідь
        </div>
        <div class="modal__footer">
            <button type="button" class="button button--green">Відправити</button>
        </div>
    </div>
</div>

*/


window.onload = function() {

    var buttons = findButtons();
    if (buttons == null)
        return;

    for (var button of buttons) {
        var modal = findModal(button);
        if (modal == null)
            break;

        setHandlers(button, modal);
    }



    // libs
    function setHandlers(button, modal) {
        button.onclick = openModal.bind(null, modal);
        modal.onclick = function(e) {
            if (e.target.classList.contains("modal") || 
                e.target.classList.contains("modal__close"))
                closeModal(modal);
        }
    }
    function findButtons() {
        return document.querySelectorAll("[data-modalid]");
    }
    function findModal(button) {
        return document.getElementById(button.dataset.modalid);
    }
    function openModal(modal) {
        modal.classList.add("modal--active");
    }
    function closeModal(modal) {
        modal.classList.remove("modal--active");
    }
}