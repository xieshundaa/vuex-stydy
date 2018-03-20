<template>
  <div class="hello">
    <child></child>
    <child2></child2>
  </div>
</template>

<script>
  import child from './children/child'
  import child2 from './children/child2'
export default {
  name: 'HelloWorld',
  props: {

  },
    components:{
      child,
      child2
    },
    created() {

    },
  mounted() {
  },
  methods: {

 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
