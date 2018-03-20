import Vue from 'vue'
import Vuex from 'vuex'
import score from './modules/moduleScore'
import price from './modules/modulePrice'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        score,
        price
    }
})