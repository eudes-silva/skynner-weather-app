<template>
  <div class="saved-cities__wrapper">
    <ul></ul>
    <button>comparar</button>
  </div>
</template>

<script>
export default {
  name: 'SavedCitiesList',
  data() {
    return {
      
    }
  },
  created() {
    this.$root.$refs.SavedCitiesList = this;
  },
  methods: {
    
  },
  mounted() {
    
  }
}
</script>

<style scoped>
  .saved-cities__wrapper{
    border:1px solid #000;
    display:flex;
    flex-direction: column;
    height:40%;
  }
</style>