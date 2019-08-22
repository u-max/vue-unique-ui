import Vue from 'vue'
import Dialog from './plugins/Dialog';
import animate from 'animate.css'
import './css/unique-ui.css';
Vue.use(animate)

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