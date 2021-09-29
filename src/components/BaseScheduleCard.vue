<template>
<section class="schedule-card">
<base-schedule-header title="جلسات گذشته"></base-schedule-header>
  <div class="schedule-card__body">
   سلامشنتلنشمستلنمسشتل
    شنتسلنمشتسلنمشتمنسلت
    شتسلنمشتسنملت
  </div>
</section>
</template>

<script>
import BaseScheduleHeader from "./BaseScheduleHeader";
export default {
  name: "BaseScheduleCard",
  components: {BaseScheduleHeader}
}
</script>

<style scoped>
.schedule-card{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.schedule-card__body{
  width: 100%;
  height: calc(100% - 3.4rem);
  background-color: #CCFF33;

}
</style>