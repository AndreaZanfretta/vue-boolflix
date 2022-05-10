<template>
    <div>
        <ul>
            <li v-for="(film, index) in setFilms" :key="index">{{film.title}}</li>
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