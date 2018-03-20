<template>
    <div id="app">
        <img src="./assets/logo.png">
        <HelloWorld/>


    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'app',
        components: {
            HelloWorld
        },
        data() {
            return {
            }
        },
        created() {
            // this.countnum()
        },
        mounted() {


        },
        methods: {
        }
    }
</script>

<style lang="stylus">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        .hint{
            color:orangered;
        }
        .tochild{
            width:100%;
            height:100px;
            line-height:100px;
            background:yellowgreen;
        }
        .toeverywhere{
            width:100%;
            height:100px;
            line-height:100px;
            background:blueviolet;
        }
    }
</style>
