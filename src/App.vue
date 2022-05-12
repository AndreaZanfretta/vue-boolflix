<template>
  <div id="app">
    <app-header />
    <main>
      <div class="film-section">
        <h1 v-if="loadState">Film</h1>
        <h1 v-else>Film della settimana</h1>
        <app-main v-if="loadState" :validate="searchFilm"/>
        <app-main v-else :validate="trendingFilms"/>
      </div>
      <div class="tv-section">
        <h1 v-if="loadStateSeries">Serie TV</h1>
        <h1 v-else>Serie TV della settimana</h1>
        <app-main v-if="loadState" :validate="searchSeries"/>
        <app-main v-else :validate="trendingSeries"/>
      </div>
      
    </main>
    
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import store from './store';
import axios from 'axios'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
  },
  data(){
    return{
      apiUrl: 'https://api.themoviedb.org/3/trending/',
      apiKey: 'e9c76fb91f859a24ed8811a6b98566a1',
      trendingFilms: [],
      trendingSeries: [],
    }
  },
  computed:{
    searchFilm(){
      return store.state.filmList;
    },
    searchSeries(){
      return store.state.seriesList;
    },
    loadState(){
      return store.state.loaded;
    },
    loadStateSeries(){
      return store.state.loadedSeries;
    }
  },
  methods: {
    trendingFilmsSeries(){
      const paramObj = {
          params: {
              api_key: this.apiKey,
          }
      }
      axios.get(this.apiUrl + 'movie/week', paramObj)
      .then(res => {
          this.trendingFilms = res.data.results;
          console.log(this.trendingFilms)
      })
      .catch(err => {
          console.error(err); 
      })
      axios.get(this.apiUrl + 'tv/week', paramObj)
      .then(res => {
          this.trendingSeries = res.data.results;
          console.log(this.trendingSeries)
      })
      .catch(err => {
          console.error(err); 
      })
      }
  },
  mounted(){
    this.trendingFilmsSeries();
  }
}
</script>

<style lang="scss">
@import "./styles/generals";
@import "./styles/vars";
main{
  padding-top: 50px;
  width: 100%;
  height: calc(100vh - 80px);
  background-color: $main-bg;
}
h1{
  margin-left: 50px;
  color: white;
  font-family: 'Bebas Neue', cursive;
}
</style>
