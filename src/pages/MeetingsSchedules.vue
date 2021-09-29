<template>
<base-nav-bar></base-nav-bar>
  <div class="schedules-container">
    <div class="schedules-container__inner">
      <div class="left-section">
        <base-schedule-card></base-schedule-card>
      </div>
      <div class="right-section">
        <div class="important-schedules"></div>
        <div class="schedules--future"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseNavBar from "../components/BaseNavBar";
import BaseScheduleCard from "../components/BaseScheduleCard";
export default {
  name: "MeetingsSchedules",
  components: {BaseScheduleCard, BaseNavBar}
}
</script>

<style scoped>
.schedules-container{
  width: 100%;
  height: calc(100% - 8.8rem);
  background-color: #eceaf9;
  display: flex;
  justify-content: center;
  align-items: center;
}
.schedules-container__inner{
  width: 92.5%;
  height: 88.8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /*background-color: blue;*/
}
.right-section{
  width: 75.3rem;
  height: 100%;
  background-color: blue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.left-section{
  width: calc(100% - 75.3rem - 3.4rem);
  height: 100%;
  /*background-color: aqua;*/
}
.important-schedules{
  width: 100%;
  height: 25.8rem;
  background-color: #7566c1;
}
.schedules--future{
  width: 100%;
  height : calc(100% - 25.8rem);
  background-color: purple;
}
</style>