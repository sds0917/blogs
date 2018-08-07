import TdLocation from './location/index.js'
import TdFooter from './footer/index.js'
import TdLeftNav from './left-nav/index.js'

const components = [
    TdLocation,
    TdFooter,
    TdLeftNav
];

const install = function (Vue, opts = {}) {
    components.map(component => {
        Vue.component(component.name, component);
    });
    Vue.prototype.$TDEMENT = {
        size: opts.size || '',
        zIndex: opts.zIndex || 2000
    };
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports = {
    version: '1.0.0',
    TdLocation,
    TdFooter,
    TdLeftNav
};

module.exports.default = module.exports;
