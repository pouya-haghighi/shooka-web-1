<template>
<div class="date-filterer" v-if="dateFiltererType === 'from-date'">
  <label>:جستجو از تاریخ</label>
  <input type="text">
</div>
<div class="date-filterer" v-else>
  <label>:تا تاریخ</label>
  <input type="text">
</div>
</template>

<script>
export default {
  name: "DateFiltererEntity",
  props : ['dateFiltererType'],

}
</script>

<style scoped>
.date-filterer{
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
.date-filterer label{
  font-size: 1.2rem;
  margin-left: .8rem ;
  color :white;
}
input{
  width: 20.2rem;
  height: 3.2rem;
  border: none;
  outline: none;
  border-radius: 1rem;
  background-color: #f1f1f1;
}
</style>