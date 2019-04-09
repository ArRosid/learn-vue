<template>
  <div id="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <servers></servers>
      <app-server-details></app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Servers from './components/Servers.vue';
import ServerDetails from './components/ServerDetails.vue';

export default {
  name: 'app',
  components: {
    appHeader: Header,
    Servers,
    'app-server-details': ServerDetails,
    'app-footer': Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
