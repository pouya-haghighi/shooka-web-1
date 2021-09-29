<template>
  <header class="schedule-card__header">
    <hr>
    <h2>{{title}}</h2>
  </header>
</template>

<script>
export default {
  name: "BaseScheduleHeader",
  props : ['title']
}
</script>

<style scoped>
.schedule-card__header{
  position: relative;
  width: 100%;
  padding : 0 1.3rem;
  margin-bottom: 1.3rem;

}
h2{
  background-color: #eceaf9;
  padding-left: 1.3rem;
  font-size: 1.5rem;
  font-weight: bold;
position: absolute;
  top : 50%;
  right: 0;
  z-index: 1;
  transform: translateY(-50%);
}
</style>