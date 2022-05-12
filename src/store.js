import Vue from 'vue'
const store = {
    state: Vue.observable({
        filmList:[],
        seriesList: [],
        full: [],
        loaded: false,
        loadedSeries: false
    }),
    setFilms(arr){
        this.state.filmList = arr;
        this.state.loaded = true;
    },
    setfull(arr){
        this.state.seriesList = arr;
        this.full = this.state.filmList.concat(this.state.seriesList);
        this.state.loadedSeries = true;
    }
}
export default store;