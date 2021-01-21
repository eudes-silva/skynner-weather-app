<template>
  <div class="saved-cities__wrapper" v-if="storedCities.length>0">
    <ul class="saved-cities__list" v-for="(city,index) in storedCities" :key="index">
      <li class="saved-cities__item" :cityName="city.cityName">{{city.cityName}}<button class="saved-cities__btn-close" @click="removeCity(index)">X</button></li>
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
    },
    removeCity(x){
      this.storedCities.splice(x, 1);
      const parsed = JSON.stringify(this.storedCities);
      sessionStorage.setItem('cities', parsed);
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
    height:40%;
  }

  .saved-cities__list{
    padding:0;
  }

  .saved-cities__item{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size:1.2em;
    font-weight: 800;
}

  .saved-cities__btn-close{
    border-radius:50%;
    border:2px solid #333;
    cursor:pointer;
    font-size:1em;
    /* padding:6px 4px 4px 4px; */
    width:32px;
    height:32px;
    line-height: 28px;
    vertical-align: middle;
    color:#333;
    transition: color 0.2s ease-in-out;
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
  border-radius:2px;
    
  margin:20px 0 10px;
  padding:15px 0;
  
  width:100%;
}

.saved-cities__btn:hover{
  background-color:#7954a8;
}  
</style>