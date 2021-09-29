<template>
<div class="date-filterers-container">
  <date-filterer-entity :date-filterer-type="'from-date'"></date-filterer-entity>
  <date-filterer-entity :date-filterer-type="'to-date'"></date-filterer-entity>
</div>
</template>

<script>
import DateFiltererEntity from "./DateFiltererEntity";
export default {
  name: "DateFilterers",
  components: {DateFiltererEntity}
}
</script>

<style scoped>
.date-filterers-container{
  width: 64.1rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
}
</style>