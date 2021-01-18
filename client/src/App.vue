<template>
  <div id="app">
    <div class="container">
      <SearchBar />
      <SearchResult/>
      <SavedCitiesList/>
    </div>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar'
import SearchResult from './components/SearchResult'
import SavedCitiesList from './components/SavedCitiesList'

export default {
  name: 'App',
  components: {
    SearchBar,
    SearchResult,
    SavedCitiesList
  },
};
</script>

<style>
#app {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
