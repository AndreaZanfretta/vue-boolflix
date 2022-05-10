<template>
    <div>

    </div>
</template>

<script>
export default {
    name: 'AppMain',
    data(){
        return{
            filmList: []
        }
    },
    methods:{
        setFilms(){
            this.filmList = this.store.filmList;
            console.log(this.filmList)
        }
    }
}
</script>

<style scoped lang="scss">

</style>