import Plugin from 'src/plugin-system/plugin.class';
import './bootstrap-input-spinner';

export default class InputSpinner extends Plugin {
    init() {
        $(this.el).inputSpinner();
    }
}
