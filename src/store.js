import Vue from 'vue'
const store = {
    state: Vue.observable({
        filmList:[],
        seriesList: [],
        full: [],
        loaded: false,
        loadedSeries: false,
        emptyfilm: false,
        emptytv: false
    }),
    setFilms(arr){
        console.log(arr)
        if(arr.length !== 0){
            this.state.emptyfilm = false;
            this.state.filmList = arr;
            this.state.loaded = true;
        }else{
            this.state.emptyfilm = true;
            this.state.loaded = true;
            this.state.filmList = []
        }
        console.log(this.state.empty)
    },
    setfull(arr){
        console.log(arr)
        if(arr.length !== 0){
            this.state.emptytv = false;
            this.state.seriesList = arr;
            this.full = this.state.filmList.concat(this.state.seriesList);
            this.state.loadedSeries = true;
        }else{
            this.state.loadedSeries = true;
            this.state.emptytv = true;
            this.state.loaded = true;
            this.state.seriesList = []
        }
        console.log()
    }
}
export default store;