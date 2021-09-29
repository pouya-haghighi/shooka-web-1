<template>
  <div class="checkbox" :class="{['checkbox--checked'] : isChecked}" @click="checkToggling"></div>
</template>

<script>
export default {
  name: "BaseCheckBox",
  data(){
    return {
      isChecked : false,
    }
  },
  emits : ['is-checked'],
  methods : {
    checkToggling(){
      this.isChecked = !this.isChecked;
      this.$emit('is-checked', this.isChecked);
    }
  }
}
</script>

<style scoped>
.checkbox{
  width: 1.6rem;
  height: 1.6rem;
  border-radius : .3rem;
  border : .2rem solid #7566c1;
  margin-left: .6rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.checkbox--checked:before{
  height : 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  content: '\2713';
  color : #7566c1;
  font-family: "Arial";
  font-size: 1rem;
  font-weight: bold;
}
</style>