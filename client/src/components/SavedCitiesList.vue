<template>
  <div class="saved-cities__wrapper" v-if="storedCities.length>0">
    <ul class="saved-cities__list" v-for="(city,index) in storedCities" :key="index">
      <li :cityName="city.cityName">{{city.cityName}}<button>X</button></li>
    </ul>
    <button class="saved-cities__btn">comparar</button>
  </div>
</template>

<script>

export default {
  name: 'SavedCitiesList',
  data() {
    return {
      storedCities:[],
    }
  },
  components:{
    
  },
  created() {
    this.$root.$refs.SavedCitiesList = this;
  },
  methods: {
    addStoredCities(){
      if (sessionStorage.getItem('cities')) {
      try {
        this.storedCities = JSON.parse(sessionStorage.getItem('cities'));
      } catch(e) {
        sessionStorage.removeItem('cities');
      }
    }    
    }   
  },
  mounted(){
         
  }
}
</script>

<style scoped>
  .saved-cities__wrapper{
    display:flex;
    flex-direction: column;
    height:40%;
  }

  .saved-cities__btn{
  font-size: 1.2em;
  letter-spacing: 0.5px;
  cursor: pointer;
  color:#fff;
  background-color:#583e92;
  text-transform: uppercase;
  transition: background-color 0.2s ease-in-out;

  border:none;
  border-radius:2px;
    
  margin:20px 0 10px;
  padding:15px 0;
  
  width:100%;
}

.saved-cities__btn:hover{
  background-color:#7954a8;
}  
</style>