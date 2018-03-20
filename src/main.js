import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueResource from 'vue-resource';
import Vuex from 'vuex';

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(VueResource);

import store from './store/store'


new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
