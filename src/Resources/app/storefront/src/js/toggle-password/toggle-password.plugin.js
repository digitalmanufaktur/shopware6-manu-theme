import Plugin from 'src/plugin-system/plugin.class';
import DomAccess from 'src/helper/dom-access.helper';

export default class TogglePassword extends Plugin {
    static options = {
        activeClass: 'active'
    };

    init() {
        this.password = DomAccess.querySelector(document, '#' + this.el.dataset.togglePassword, false);

        if (!this.password) {
            return;
        }

        this.el.addEventListener('click', this.tooglePassword.bind(this));
    }

    tooglePassword() {
        // toggle the type attribute
        const type = this.password.getAttribute('type') === 'password' ? 'text' : 'password';
        this.password.setAttribute('type', type);
        // toggle the eye slash icon
        this.el.classList.toggle(this.options.activeClass);
    }
}
