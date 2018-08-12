<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
html {
  height: 100%;
  overflow: hidden;
}

body {
  height: 100%;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  background-image: url('./assets/nightsky.jpg');
  background-size: 1920px 1080px;
}
</style>
