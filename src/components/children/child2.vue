<template>
    <div class="child2">
        <h3>我是兄弟2</h3>
        <div>我从兄弟1那边接收来的：</div>
        <div class="attention">{{score}}</div>
        <div class="attention">{{price}}</div>
    </div>
</template>

<script>
    export default {
        name: "child2",
        computed:{
            score(){
                return this.$store.state.score.score;
            },
            price(){
                return this.$store.state.price.price;
            }
        }
    }
</script>

<style scoped>
    .child2 {
        background-color: blueviolet;
        color: #000;
    }

    .attention {
        color: greenyellow;
        font-size: 20px;
    }
</style>