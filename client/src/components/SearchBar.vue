<template>
  <div class="search-bar__wrapper">
    <form @submit.prevent="submit">
      <input
        class="search-input"
        type="text"
        @model="cityInputValue"
        @keyup.enter="submit"
        placeholder="Cidade"
      />
    </form>
  </div>
</template>

<script>

export default {
   name:'SearchBar',
   data(){
     return {
       cityInputValue:''
     }
   },
   methods: {
    submit (cityInputValue) {
      if(cityInputValue.target.value){
        this.$root.$refs.SearchResult.getApiData(cityInputValue.target.value);
        cityInputValue.target.value = '';
      }
      
    }
  }
}
</script>

<style scoped>
  .search-bar__wrapper{
    border:1px solid #000;
  }
</style>
