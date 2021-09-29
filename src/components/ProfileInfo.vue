<template>
<div class="personal-info">
 <div class="personal-info__avatar"></div>
  <div class="personal-info__user-name">نام کاربری</div>
</div>
</template>

<script>
export default {
  name: "ProfileInfo"
}
</script>

<style scoped>
.personal-info{
display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
.personal-info__avatar{
  width: 4.5rem;
  height: 4.5rem;
  background-color: #f1f1f1;
  border-radius: 50%;
}
.personal-info__user-name{
  font-size: 1.2rem;
  margin-right: .8rem;
  color : white;
}
</style>