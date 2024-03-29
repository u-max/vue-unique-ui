import Dialog from './plugins/Dialog';
import './css/unique-ui.css';
import './css/animate.css';

const install = function (Vue, opts = {}) {
    if (install.installed) return;

    Vue.component(Dialog.name, Dialog);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    Dialog
};