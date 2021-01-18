<template>
  <div class="search-wrapper">
    <form class="search-form" @submit.prevent="submit">
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
  .search-wrapper{
    border:1px solid #000;
    height:10%;
  }

  input {
    background-image:url('../assets/search-solid.svg');
    background-repeat:no-repeat;
    background-position: right 5px center;
    background-size: 15px;
    padding: 1% 0.2em; 
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #333;
  }
  
::-webkit-input-placeholder { 
  font-weight:700;
  transform: translateX(-25px);
  text-align:right; 
}
input::-moz-placeholder { 
  font-weight:700;
  -moz-transform: translateX(-20px); /*??? doesnt work in firefox?*/
  text-align:right; 
}

</style>
