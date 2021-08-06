import InputSpinner from './js/input-spinner/input-spinner.plugin';
import NewsletterPrivacy from './js/newsletter-privacy/newsletter-privacy.plugin';
import TogglePassword from './js/toggle-password/toggle-password.plugin';
import RegisterExpand from './js/register-expand/register-expand.plugin';
import ExtendedWishlistWidgetPlugin from './js/wishlist-widget/wishlist-widget.plugin';
import FilterWidthPlugin from './js/filter-width/filter-width.plugin'

const PluginManager = window.PluginManager;

PluginManager.register('NewsletterPrivacy', NewsletterPrivacy, '.footer-newsletter-email');
PluginManager.register('InputSpinner', InputSpinner, '[data-input-spinner]');
PluginManager.register('TogglePassword', TogglePassword, '[data-toggle-password]');
PluginManager.register('RegisterExpand', RegisterExpand, '[data-register-expand]');
PluginManager.register('FilterWidth', FilterWidthPlugin, '.cms-element-sidebar-filter')

if (window.wishlistEnabled) {
    PluginManager.override('WishlistWidget', ExtendedWishlistWidgetPlugin, '[data-wishlist-widget]');
}
