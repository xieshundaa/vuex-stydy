import Vue from 'vue'

const state = {score: 0}

const mutations = {
    getScore(state, obj) {
        state.score = obj.score
    }
}

const actions = {
    findscoreSync(context) {
        return new Promise((resolve, reject) => {
            let url_score = 'https://www.easy-mock.com/mock/5a4c9b6f81bb592653f71011/example/score1'
            Vue.http.get(url_score).then(
                (scoreResult) => {
                    let myscore = scoreResult.body.data[0].score
                    context.commit('getScore', {score: myscore})
                    resolve()
                }
            )
        })
    }
}
export default {
    state,
    mutations,
    actions
}