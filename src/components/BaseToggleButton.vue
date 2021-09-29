<template>
<div
    class="toggle-btn"
    @click="toggleButton"
    :class="[{'toggle-btn--enable' : toggleBtnStatus === 'enabled'}, {'toggle-btn--disable' : toggleBtnStatus === 'disabled'}]">
<div
    class="toggle-btn__thumb"
    :class="[{'toggle-btn__thumb--enable' : toggleBtnStatus === 'enabled'}, {'toggle-btn__thumb--disable' : toggleBtnStatus === 'disabled'}]"></div>
</div>
</template>

<script>
export default {
  name: "BaseToggleButton",
  data(){
    return {
      toggleBtnStatus : 'not-clicked'
    }
  },
  methods : {
    toggleButton(){
      if(this.toggleBtnStatus === 'not-clicked'){
        this.toggleBtnStatus = 'enabled';
      } else {
        if(this.toggleBtnStatus === 'enabled'){
          this.toggleBtnStatus = 'disabled'
        } else {
          this.toggleBtnStatus = 'enabled';
        }
      }
    }
  }
}
</script>

<style scoped>
.toggle-btn{
  padding: 0 .6rem;
  width: 7.2rem;
  height: 3.1rem;
  border-radius: 2.3rem;
  background-color: #f1f1f1;
  display: flex;
  justify-content: right;
  align-items: center;
}
.toggle-btn__thumb{
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  transition: transform .2s ease-in;
  background-color: white;
  box-shadow: 0 0 .8rem 0 rgba(0, 0, 0, .18);
}
.toggle-btn--enable{
  background-color: #22b822;
}
.toggle-btn--disable{
  background-color: #f1f1f1;
}
.toggle-btn__thumb--enable{
  transform: translateX(-3.5rem);
}
.toggle-btn__thumb--disable{
  transform: translateX(0);

}
@keyframes btn-enabled-animation {
  from{

  }
  to{
    transform: translateX(-4.1rem);
  }
}
@keyframes btn-disabled-animation {
  from{

  }
  to{
    transform: translateX(4.1rem);
  }
}
</style>