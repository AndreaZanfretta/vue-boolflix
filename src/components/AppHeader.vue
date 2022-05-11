<template>
    <header>
        <div class="container-header">
            <h1>BoolFlix</h1>
            <div class="input-group">
                <input @keyup.enter="searchFilm" v-model="searched" type="text" class="form-control" placeholder="Cerca un film o serie tv" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <div class="input-group-append">
                    <button @click="searchFilm" class="btn btn-outline-secondary" type="button">Cerca</button>
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
            apiUrl: 'https://api.themoviedb.org/3/search/',
            apiKey: 'e9c76fb91f859a24ed8811a6b98566a1',
            searched: '',
            films_tvseries: [],
        }
    },
    computed: {

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
            axios.get(this.apiUrl + 'multi', paramObj)
            .then(res => {
                this.films_tvseries = res.data.results;
                store.setFilms(this.films_tvseries)
            })
            .catch(err => {
                console.error(err); 
            })
            /* axios.get(this.apiUrl + 'tv', paramObj)
            .then(res => {
                this.tvSeries = res.data.results;
                this.full = this.films.concat(this.tvSeries);
                store.setFilms(this.full);
            })
            .catch(err => {
                console.error(err); 
            }) */
        }
    },
    mounted(){
    }

}
</script>

<style scoped lang="scss">
@import '../styles/vars';
header{
    width: 100%;
    height: 80px;
    background-color: $header-bg;
    display: flex;
    align-items: center;
    align-content: center;
}
.container-header{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 0 30px;

        .input-group{
            width: 20%;
            vertical-align: middle;
        }

        h1{
            color: $logo-font;
        }
}

</style>