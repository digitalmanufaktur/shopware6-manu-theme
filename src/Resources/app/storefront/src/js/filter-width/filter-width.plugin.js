import Plugin from 'src/plugin-system/plugin.class';


export default class InputSpinner extends Plugin {
    init() {
        this._filterBtn = document.querySelector('.cms-element-sidebar-filter');
        this._sortBtn = document.querySelector('.sorting')
        this._sortBtnWidthPx = this._sortBtn.offsetWidth+'px';
        this._windowWidthPx = window.innerWidth+'px';
        
        if (this._windowWidthPx >= '360px' && this._windowWidthPx < '768px') {
            this._filterBtn.style.width = this._sortBtnWidthPx;
            this._filterBtn.style.margin = '0 auto';
            
        } 
    }
}