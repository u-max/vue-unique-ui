import Toast from '@/public/Toast';

// Toast.install = Vue => Vue.component(Toast.name, Toast);    //注册组件
// const install = (Vue) => Vue.component(Toast.name, Toast);
const install = function (Vue, opts = {}) {
    if (install.installed) return;

    Vue.component(Toast.name, Toast);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default install;