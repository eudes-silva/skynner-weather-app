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
    height:10%;
  }

  input {
    background-color: #fff;
    background-image:url('../assets/search-solid.svg');
    background-repeat:no-repeat;
    background-position: right 5px center;
    background-size: 15px;

    font-family: 'Open Sans', sans-serif;
    font-size:1em;
    letter-spacing:0.5px;
    color:#583e92;
    font-weight: 700;
    
    display:block;
    padding:1% 30px 1% 10px;
    box-sizing: border-box;
    width: 100%;
    height:30px;
    
    border: 2px solid #583e92;
    transition: border 0.2s ease-in-out;
    border-radius:2px;
  }

  input:hover{
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.15);
    -webkit-box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.15);
    transition: box-shadow 0.3s ease-in-out;
  }

  input:focus{
    font-size:1em; 
    
    border-radius:2px;
    outline:#fff;
    border:2px solid #92B4F4;
    transition: border 0.2s ease-in-out;

    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.15);
    -webkit-box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.15);
    transition: box-shadow 0.3s ease-in-out;
  }
  
::-webkit-input-placeholder { 
  color: #583e92;
  opacity:0.5;

  font-family: 'Open Sans', sans-serif;
  font-weight:700;
  text-align:right; 
  letter-spacing:0.5px;
}
::-moz-placeholder { 
  font-family: 'Open Sans', sans-serif;
  font-weight:700;
  text-align:right; 
  letter-spacing:0.5px; 
}
</style>
