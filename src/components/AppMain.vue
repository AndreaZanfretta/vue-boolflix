<template>
    <div class="card">
        <ul>
            <li @mouseenter="overlay" v-for="(film, index) in setFilms" :key="index" class="col-6 col-md-4 col-lg-2">
            <img class="poster" :src="'https://image.tmdb.org/t/p/w342' + film.poster_path" :alt="film.media_type === 'movie' ? film.title : film.name">
            <div  class="overlay" :class="visible ? 'active' : ''">
                <div class="texts">
                    <p>Titolo: {{film.title}} {{film.name}}</p> <br>
                    <p :class="(film.title !== film.original_title) ? 'show' : 'hide' && (film.name !== film.original_name) ? 'show' : 'hide'">Titolo Originale: {{film.original_title}} {{film.original_name}}</p>
                    <p>{{film.overview}}</p>
                    <p>Lingue: {{film.original_language}} <img class="flags" v-if="['de', 'en', 'fr', 'it'].includes(film.original_language)" :src="require('../assets/flags/'+film.original_language+'.png')">
                    <img class="flags" v-else :src="require('../assets/flags/nd.png')" alt=""></p>
                    <p>Voto: {{film.vote_average}}</p>
                    <span>
                    <i v-for="index in 5" :key="index" :class="index <= Math.round((Math.round(film.vote_average) / 2 ))? 'fa-solid' : 'fa-regular'" class="fa-star"></i>
                    </span>
                </div>
            </div>
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
            visible: false,
        }
    },
    computed:{
        setFilms(){
            return store.state.filmList;
        },

    },
    methods:{
        overlay(){
            return this.visible = true;
        }
    },
    created(){
        
        
    }
}
</script>

<style scoped lang="scss">
@import '../styles/vars';
.show{
    display: block;
}
.hide{
    display: none;
}
.card{
    background-color: $main-bg;

}
ul{
    width: 100%;
    height: 500px;
    display: flex;
    flex-flow: row nowrap;
    list-style-type: none;
    color: white;
    overflow-x: auto;

        li{
            width: calc(100% / 5);
            height: 100%;
            margin: 0 20px;
            position: relative;
        }
        .poster{
            height: 100%;
            width: 100%;
            object-fit: cover;

        }

        .flags{
            width: 30px;
        }
        
}
.overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: stretch;
    align-content: center;
    background-color: rgba($color: #000000, $alpha: 0.4);

        .texts{
            overflow-y: auto;
            padding: 20px 10px;
        }
}

.active{
    display: flex;
}
</style>