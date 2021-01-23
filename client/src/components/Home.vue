<template>
  <div class="container">
    <SearchBar />
    <SearchResult :key="componentKey"/>
    <SavedCitiesList />
  </div>
</template>

<script>
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import SavedCitiesList from './SavedCitiesList';

export default {
  name:'Home',
  components:{
    SearchBar,
    SearchResult,
    SavedCitiesList,
  },
  data(){
    return{
      componentKey: 0,   
    }
  },
  methods: {
    forceRerender() {
        this.componentKey += 1;
    }
  }
}
</script>

<style scoped>

</style>

