<template>
  <div id="app">
    <app-header />
    <main>
      <div class="film-section">
        <h1>Film</h1>
        <app-main />
      </div>
      <div class="tv-section">
        <h1>Serie TV</h1>
      </div>
      
    </main>
    
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
  }
}
</script>

<style lang="scss">
@import "./styles/generals";
@import "./styles/vars";
main{
  width: 100%;
  height: calc(100vh - 80px);
  background-color: $main-bg;
}
</style>
