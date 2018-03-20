<template>
    <div class="child">
        <h2>{{tittle}}</h2>
        <div>积分：{{originalScore}}</div>
        <div>价格：{{originalPrice}}</div>
        <button v-on:click="press">会员价格</button>
    </div>
</template>

<script>
    export default {
        name: "child",
        data() {
            return{
                tittle: '我是兄弟1'
            }
        },
        computed:{
            originalScore(){
                return this.$store.state.score.score;
            },
            originalPrice(){
                return this.$store.state.price.price;
            }
        },
        methods:{
//当点击按钮时，就改变了state中count的值，
// 然后我们可以在兄弟节点2中，看一下这个值是否接受到了？
            press(){
                this.$store.dispatch({type:'findpriceSync'});//改变state
            }
        },

    }
</script>

<style scoped>
    .child {
        background-color: yellowgreen;
        color: #000;
    }
</style>