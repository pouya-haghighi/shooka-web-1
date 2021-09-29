<template>
<router-view></router-view>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
@import url("./assets/fonts/YekanFont/css/fontiran.css");

* {
  box-sizing: inherit;
  /*direction: rtl;*/
  padding: 0;
  margin: 0;
  font-family: inherit;
}
ul{
  list-style: none;
}
html {
  font-size: 62.5%;
  font-family: iranyekan, roboto, Arial;
}
body {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
}
#app{
  width: 100%;
  height: 100%;
}
</style>
