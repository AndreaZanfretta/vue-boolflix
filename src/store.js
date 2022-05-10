import Vue from 'vue'
const store = {
    state: Vue.observable({
        filmList:[]
    }),
    setFilms(arr){
        this.state.filmList = arr;
    }
}
export default store;