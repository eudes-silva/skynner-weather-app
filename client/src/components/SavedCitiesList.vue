<template>
  <div class="saved-cities__wrapper" v-if="storedCities.length>0">
    <ul class="saved-cities__list">
      <li class="saved-cities__item" v-for="(city,index) in storedCities" :key="index"  :cityName="city.cityName">{{city.cityName}}<button class="saved-cities__btn-close" @click="removeCity(index)">X</button></li>
    </ul>
    <router-link to="/compare"><button class="saved-cities__btn">comparar</button></router-link>
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
    },
    removeCity(x){
      this.storedCities.splice(x, 1);
      const parsed = JSON.stringify(this.storedCities);
      sessionStorage.setItem('cities', parsed);
      if(this.storedCities.length===0){
        this.$parent.forceRerender();
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

    color:#35281D;
  }

  .saved-cities__list{
    display:flex;
    flex-direction: column-reverse;

    width:100%;
    padding:0;
  }

  .saved-cities__item{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    font-size:1.5em;
    font-weight: 700;

    padding: 10px 5.5%;
  }

  .saved-cities__btn-close{
    display: inline-block;
    border-radius:50%;
    border: none;
    border:3px solid#35281D;
    
    background:transparent;
    cursor:pointer;
    font-family: Arial, Helvetica, sans-serif;
    color:#35281D;
    font-size:18px;
    font-weight: 700;
    line-height:31px;
    text-align:center;
    vertical-align:middle;
    transition: color 0.2s ease-in-out;

    width:35px;
    height:35px;
    padding:0;
  }

  .saved-cities__btn-close:hover{
    color: #FF0054;
    transition: color 0.2s ease-in-out;
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
  border-radius:0px 0px 2px 2px;
    
  padding:15px 0;
  
  width:100%;
}

.saved-cities__btn:hover{
  background-color:#7954a8;
  transition: background-color 0.2s ease-in-out;
}  
</style>