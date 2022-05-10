<template>
    <header>
        <div class="container-header">
            <h1>BoolFlix</h1>
            <div class="input-group mb-3">
                <input v-model="searched" type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <div class="input-group-append">
                    <button @click="searchFilm" class="btn btn-outline-secondary" type="button">Button</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import axios from 'axios';
import store from '../store';
export default {
    name: 'AppHeader',
    data(){
        return{
            apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=e9c76fb91f859a24ed8811a6b98566a1&query=Jack+Reacher',
            apiKey: 'e9c76fb91f859a24ed8811a6b98566a1',
            searched: '',
            films: [],
        }
    },
    computed: {
        FilmsList(){
            return store.state.FilmsList;
        }
    },
    methods: {
        searchFilm(){
            const paramObj = {
                params: {
                    api_key: this.apiKey,
                    query: this.searched,
                    language: 'it-IT'
                }
            }
            axios.get(this.apiUrl + 'movie', paramObj)
            .then(res => {
                this.films = res.data.results;
                store.setFilms(this.films);
                console.log(this.films)
            })
            .catch(err => {
                console.error(err); 
            })
        }
    },
    mounted(){
    }

}
</script>

<style scoped lang="scss">

</style>