<template>
  <div class="search-result__wrapper" v-if="info">
    <h3 class="info-cityname" :cityName="info.cityName">{{ info.cityName }}</h3>
    <p class="info-date info-time" :date="info.date" :time="info.time">{{ info.date }}, {{ info.time }}</p>
    <ul class="info-forecasting__list">
      <li class="info-forecasting__item" :temp="info.temp"><span>temperatura </span> {{ info.temp }}ºC</li>
      <li class="info-forecasting__item" :humidity="info.humidity"><span>umidade </span>{{ info.humidity }}%</li>
      <li class="info-forecasting__item" :wind_speedy="info.wind_speedy"><span>vento </span>{{ info.wind_speedy }}</li>
    </ul>
    <button class="btn-save" @click="addCity">salvar</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SearchResult',
  data() {
    return {
      info: '',
      cities:[],
    };
  },
  created() {
    this.$root.$refs.SearchResult = this;
  },
  methods: {
    getApiData(cityName) {
      axios
        .get(`http://localhost:3000/api/weather?${encodeURIComponent(cityName)}`)
        .then((response) => (this.info = response.data))
        .catch((error) => {
          console.log(error);
        });
    },
    addCity() {
      if (!this.info) {
        return;
      }
      if(this.cities.length<5){//session storage array limit = 5 cities
        const cityAlreadyIncluded = this.cities.some(city=>city.cityName===this.info.cityName);
        if(!cityAlreadyIncluded){
          this.cities.push(this.info);
          this.saveCity();
        }else{
          console.log('Erro! Você já salvou esta cidade!')
        }
        
      }else{
        console.log("Erro! Não pode salvar mais cidades!")
      }
      this.$root.$refs.SavedCitiesList.addStoredCities();
    },
    removeCity(x) {
      this.cities.splice(x, 1);
      this.saveCity();
    },
    saveCity() {
      const parsed = JSON.stringify(this.cities);
      sessionStorage.setItem('cities', parsed);
    }
  },
  mounted() {
    // this.getApiData();
    // this.saveCity()
    if (sessionStorage.getItem('cities')) {
      try {
        this.cities = JSON.parse(sessionStorage.getItem('cities'));
      } catch(e) {
        sessionStorage.removeItem('cities');
      }
    }
  },
}
</script>

<style scoped>
.search-result__wrapper {
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-around;

  color:#35281D;

  border-radius:2px;
  
  height:auto;
}

.info-cityname{
  margin-bottom:0;
}

.info-date{
  margin-top:0;
}

.info-forecasting__list{
  margin:10px 0 0 0;
  padding:0;

  width:100%;
}

.info-forecasting__item{
  display:flex;
  flex-direction: row;
  justify-content: space-between;

  font-weight: 700;
  font-size:1.2em;
  
  margin:10px auto 0 auto;
  
  width:60%;
}

.info-forecasting__list .info-forecasting__item span{
  font-size:1em;
  font-weight: 500;
  text-transform:capitalize;

  margin-right:10px;
}

.btn-save{
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
  
  width:60%;
}

.btn-save:hover{
  background-color:#7954a8;
}
</style>
