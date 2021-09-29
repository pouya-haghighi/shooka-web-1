<template>
<nav class="nav-bar">
  <div class="nav-bar__inner">
    <div class="r-section">
      <profile-info></profile-info>

      <div class="logo">
      <img src="/img/logo2.png" alt="logo not loaded">
    </div>
    </div>
    <date-filterers></date-filterers>
    <div class="am-i-moderator">
      <label class="am-i-moderator__label">جلساتی که در آنها مدیر هستم</label>
      <base-toggle-button></base-toggle-button>
    </div>

<!--  <div></div>--></div>
</nav>
</template>

<script>
import BaseToggleButton from "./BaseToggleButton";
import DateFilterers from "./DateFilterers";
import ProfileInfo from "./ProfileInfo";
export default {
  name: "BaseNavBar",
  components: {ProfileInfo, DateFilterers, BaseToggleButton}
}
</script>

<style scoped>
.nav-bar{
  width: 100%;
  height: 8.8rem;
  background-color: #7566c1;
  display: flex;
  justify-content: right;
}
.nav-bar__inner{
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
}
.r-section{
  display: flex;
  align-items: center;
}
.logo{
  width: 9.5rem;
  height: 8.5rem;
}
.logo img{
  height: 100%;
}
.am-i-moderator{
  display: flex;
  justify-content: center;
  align-items: center;
}
.am-i-moderator__label{
  margin-right: .8rem;
  font-size: 1.2rem;
  color :white;
}
</style>