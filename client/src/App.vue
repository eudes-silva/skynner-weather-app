<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
  };
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

html,
body {
  box-sizing: border-box;

  background-color: #fff;
  
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

  border-radius:2px;
  
  width: 30%;
  height: auto;

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
