import Plugin from 'src/plugin-system/plugin.class';
import DomAccess from 'src/helper/dom-access.helper';

export default class NewsletterPrivacy extends Plugin {
    static options = {
        newsletterPrivacySelector: '[data-newsletter-privacy]'
    };

    init() {
        this.newsletterPrivacy = DomAccess.querySelector(document, this.options.newsletterPrivacySelector, false);

        if (!this.newsletterPrivacy) {
            return;
        }

        this.el.addEventListener('focus', this.showPrivacy.bind(this));
    }

    showPrivacy() {
        this.newsletterPrivacy.classList.add('show');
    }
}
