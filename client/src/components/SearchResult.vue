<template>
  <div class="search-result__wrapper">
    <h3 v-if="info">{{ info.cityName }}</h3>
    <p v-if="info">{{ info.date }}, {{ info.time }}</p>
    <ul>
      <li v-if="info">temperatura: {{ info.temp }}ºC</li>
      <li v-if="info">umidade: {{ info.humidity }}%</li>
      <li v-if="info">vento: {{ info.wind_speedy }}</li>
    </ul>
    <button @click="addCity">salvar</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SearchResult',
  data() {
    return {
      info: null,
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
      if (!this.info.cityName) {
        return;
      }
      if(this.cities.length<5){//local storage array limit = 5 cities
        this.cities.push(this.info.cityName);
        this.saveCity();
      }else{
        console.log("Não pode armazenar mais cidades!")
      }
      
    },
    removeCity(x) {
      this.cities.splice(x, 1);
      this.saveCity();
    },
    saveCity() {
      const parsed = JSON.stringify(this.cities);
      localStorage.setItem('cities', parsed);
    }
  },
  mounted() {
    // this.getApiData();
    // this.saveCity()
    if (localStorage.getItem('cities')) {
      try {
        this.cities = JSON.parse(localStorage.getItem('cities'));
      } catch(e) {
        localStorage.removeItem('cities');
      }
    }
  },
}
</script>

<style scoped>
.search-result__wrapper {
  border: 1px solid #000;
  display:flex;
  flex-direction: column;
  height:40%;
}
</style>
