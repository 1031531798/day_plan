<template>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
  &::after {
    content: '';
    position: fixed;
    left: -20px;
    top: -20px;
    width: 110%;
    height: 110%;
    z-index: -1;
    background-image: url('./assets/bg2.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    filter: blur(10px);
  }
}
</style>
