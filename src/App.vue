<template>
  <div id="app">
    <Loading></Loading>
    <router-view/>
  </div>
</template>
<script>
  import Loading from './components/Loading';
  export default {
    name: 'App',
    components: {Loading}
  };
</script>
<style>
  @import 'scss/style.css';
</style>

