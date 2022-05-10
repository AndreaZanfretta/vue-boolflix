import Vue from 'vue'
const store = {
    state: Vue.observable({
        filmList:[]
    }),
    setFilms(arr){
        this.state.filmList = arr;
        console.log(this.state.filmList)
    }
}
export default store;