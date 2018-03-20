import Vue from 'vue'
import score from './moduleScore'

const state = {
    price: 560
}

const mutations = {
    getPrice(state, obj) {
        state.price -= obj.coupon
    }
}

const actions = {
    async findpriceSync(context) {
        await context.dispatch('findscoreSync')
        console.log('该会员的积分是:', score.state.score)
        let url_price = 'https://www.easy-mock.com/mock/5a4c9b6f81bb592653f71011/example/price'
        Vue.http.get(url_price).then(
            (priceResult) => {
                let couponPrice = priceResult.body.data[0].price
                context.commit('getPrice', {coupon: couponPrice})
            }
        )
    }
}
export default {
    state,
    mutations,
    actions
}