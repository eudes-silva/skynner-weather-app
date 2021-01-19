<template>
  <div id="app">
    <div class="container">
      <SearchBar />
      <SearchResult />
      <SavedCitiesList />
    </div>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import SavedCitiesList from './components/SavedCitiesList';

export default {
  name: 'App',
  components: {
    SearchBar,
    SearchResult,
    SavedCitiesList,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

html,
body {
  box-sizing: border-box;

  margin: 0;
  padding: 0;

  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
  width: 100%;
  overflow: auto;
}

#app {
  height: 100%;

  display: grid;
  place-items: center;

  font-family: 'Open Sans', sans-serif;
}

.container {
  display: flex;
  flex-direction: column;

  width: 30%;
  height: 90%;

  position: relative;
}

@media screen and (max-width: 1024px) {
  .container {
    width: 50%;
  }
}

@media screen and (max-width: 768px) {
  .container {
    width: 60%;
  }
}

@media screen and (max-width: 480px) {
  .container {
    width: 70%;
  }
}
</style>
