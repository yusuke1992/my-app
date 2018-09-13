<template>
  <div id="app">
    <nav>
      <router-link to ="/" exact>Home</router-link>
      <router-link to ="/product">商品情報</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
// import store from './store'
// import HelloWorld from './components/HelloWorld'
// import EditForm from './components/EditForm'
export default {
  name: 'App',
  // components: { EditForm },
  // computed:{
  //   message(){return this.$store.getters.message }
  // }
}
</script>

<style>
 #app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: red;
  margin-top: 60px; */
}
a{
  /* border: 1px solid black; */
  /* padding: 10px;
  background-color: #e6e404; */
}
.router-link-active{
  background-color:red;
  color:white;
}
a:visited,
a:link{
  padding: 10px;
  color:black;
  text-decoration:none;
  border: 1px solid black;
}

</style>


