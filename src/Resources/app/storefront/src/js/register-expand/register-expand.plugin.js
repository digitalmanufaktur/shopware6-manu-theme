import Plugin from 'src/plugin-system/plugin.class';
import DomAccess from 'src/helper/dom-access.helper';

export default class RegisterExpand extends Plugin {
    static options = {
        registerContentSelector: '#registerContent',
        hiddenClass: 'hidden',
        scrollLeft: 0,
        scrollBlock: 'start',
        scrollBehavior: 'smooth'
    };

    init() {
        this.registerContent = DomAccess.querySelector(document, this.options.registerContentSelector, false);

        if (!this.registerContent) {
            return;
        }

        this.el.addEventListener('click', this.toggleRegisterContent.bind(this));
    }

    toggleRegisterContent() {
        this.registerContent.classList.toggle(this.options.hiddenClass);
        if (!this.registerContent.classList.contains(this.options.hiddenClass)) {
            this.registerContent.scrollIntoView({
                left: this.options.scrollLeft,
                block: this.options.scrollBlock,
                behavior: this.options.scrollBehavior
            });
        }
    }
}
