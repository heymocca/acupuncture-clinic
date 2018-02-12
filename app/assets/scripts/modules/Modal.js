import $ from 'jquery';

class Modal {
    constructor() {
        this.openModalButton = $('.open-modal');
        this.modal = $('.modal');
        this.closeModalButton = $('.modal__close');
        this.events();
    }

    events() {
        //open modal
        this.openModalButton.click(this.openModal.bind(this));
        //close modal
        this.closeModalButton.click(this.closeModal.bind(this));
        //press any key to escape
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e) {
        if(e.keyCode == 13 || e.keyCode == 27 || e.keyCode == 32) {
            this.closeModal();
        }
    }

    openModal() {
        this.modal.addClass("modal__is-visible");
        /*since the "make an appointment" is a link not a button,
        for preventing the browser automatically scroll up to the top,
        you should return false.
        */
        return false;
    }

    closeModal() {
        this.modal.removeClass("modal__is-visible");
    }

}

export default Modal;
