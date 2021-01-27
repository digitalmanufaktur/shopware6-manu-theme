import InputSpinner from './js/input-spinner/input-spinner.plugin';
import NewsletterPrivacy from './js/newsletter-privacy/newsletter-privacy.plugin';
import TogglePassword from './js/toggle-password/toggle-password.plugin';
import RegisterExpand from './js/register-expand/register-expand.plugin';

const PluginManager = window.PluginManager;

PluginManager.register('NewsletterPrivacy', NewsletterPrivacy, '.footer-newsletter-email');
PluginManager.register('InputSpinner', InputSpinner, '[data-input-spinner]');
PluginManager.register('TogglePassword', TogglePassword, '[data-toggle-password]');
PluginManager.register('RegisterExpand', RegisterExpand, '[data-register-expand]');
