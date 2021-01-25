<template>
  <div class="container-compare">
    <table class="cities">
      <thead>
        <tr class="cities__names">
         <th>cidade</th>
         <th>temp.</th>
         <th>umidade</th>
         <th>vento</th>
        </tr>
      </thead>
      <tbody>
        <tr class="cities__data" v-for="(city,index) in storedCities" :key="index">
          <td v-bind:style= "[city.cityName.length>12 ? {fontSize:'12px'} : {}]">{{ city.cityName }}</td>
          <td>{{ city.temp }}º</td>
          <td>{{ city.humidity }}%</td>
          <td>{{ city.wind_speedy }}</td>
        </tr>
      </tbody>
    </table>
    <router-link to="/" class="compare-btn-redirect"
      ><button class="compare-btn">voltar</button></router-link
    >
  </div>
</template>

<script>
export default {
  name: 'CitiesComparison',
  data() {
    return {
      storedCities: '',
    };
  },
  mounted() {
    if (sessionStorage.getItem('cities')) {
      try {
        this.storedCities = JSON.parse(sessionStorage.getItem('cities'));
      } catch (e) {
        sessionStorage.removeItem('cities');
      }
    }
  },
};
</script>

<style scoped>
.container-compare {
  border-radius: 2px;

  width: 60%;
  height: auto;

  position: relative;
}

.cities {
  display: flex;
  flex-direction: column;

  width: 100%;

  border-top:1px solid #35281D;
  border-right:1px solid #35281D;
}

.cities th{
  height:50px;

  display:flex;
  align-items: center;
  justify-content: center;

  color: #7954a8;
  font-size: clamp(14px,3vw,20px);
  font-weight: 800;
  text-transform: uppercase;
}

.cities th:nth-child(odd){
  background-color: #7954a8;
  color: #fff;
}

.cities td {
  display:flex;
  align-items: center;
  justify-content: center;

  font-size: clamp(14px,3vw,20px);
  font-weight: 800;

  height: 50px;
} 

.cities td,th{
  border-left:1px solid #35281D;
  border-bottom:1px solid #35281D;
}

.cities tbody{
  display: flex;
  flex-direction: column-reverse;
}

.cities__names,.cities__data{
  display:flex;
  flex-direction: row;
}

.cities th,td{
  text-align:center;
  width:25%;
}

.compare-btn-redirect {
  display: block;
  width: 30%;
  margin: 0 auto;
}

.compare-btn {
  font-size: 1.2em;
  letter-spacing: 0.5px;
  cursor: pointer;
  color: #fff;
  background-color: #583e92;
  text-transform: uppercase;
  transition: background-color 0.2s ease-in-out;

  border: none;
  border-radius: 2px;

  margin-top:25px;
  padding: 15px 0;

  width: 100%;
}

.compare-btn:hover {
  background-color: #7954a8;
  transition: background-color 0.2s ease-in-out;
}

@media(max-width:768px){
  .container-compare{
    width:96%;
  }
}
</style>
