import WishlistWidgetPlugin from "src/plugin/header/wishlist-widget.plugin";

export default class ExtendedWishlistWidgetPlugin extends WishlistWidgetPlugin {
    _renderCounter() {
        if (this.el.dataset.wishlistHideCount) {
            if (this._wishlistStorage.getCurrentCounter() > 0) {
                this.el.classList.remove("d-none");
            } else {
                this.el.classList.add("d-none");
            }
        } else {
            this.el.innerHTML = this._wishlistStorage.getCurrentCounter() || "";
        }
    }
}
