<template>
    <div>
        <ul>
            <li v-for="(film, index) in setFilms" :key="index">
            <p>Titolo: {{film.title}} {{film.name}}</p>
            <p>Titolo Originale: {{film.original_title}} {{film.original_name}}</p>
            <p>Lingue: {{film.original_language}}</p>
            <p>Voto: {{film.vote_average}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import store from '../store'
export default {
    name: 'AppMain',
    data(){
        return{
            
        }
    },
    computed:{
        setFilms(){
            return store.state.filmList;
        }
    },
    methods:{

    },
    mounted(){

    }
}
</script>

<style scoped lang="scss">

</style>