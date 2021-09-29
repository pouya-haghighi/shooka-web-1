<template>
  <div class="slider">
    <div class="slider__inner">
      <transition-group tag="div" :name="transitionName" class="slides-group">
        <div :key="current"
             class="slide"
             :class="infoArray[current]">
          <slot></slot>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormSlider",
  props : ['slidingAction','tick', 'infoArray', 'stepButtonsColor'],
  data(){
    return {
      current: 0,
      direction: 1,
      transitionName: "fade",
      slides: null,
    }
  },
  watch : {
    slidingAction(currentVal){
      if(currentVal === 'next'){
        this.slide(1)
      } else {
        this.slide(-1)
      }
    },
    tick(){
      this.slide(1);
    }
  },
  methods : {
    slide(direction) {
      this.direction = direction;
      if(direction === 1){
        this.transitionName = "slide-next"
      }else {
        this.transitionName = "slide-prev"
      }
      if(this.infoArray.length > 0){
        this.current = (this.current + direction % this.infoArray.length + this.infoArray.length) % this.infoArray.length;

      }
      this.$emit('current', this.infoArray[this.current])
    }
  },

}
</script>

<style scoped>
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-next-enter-from {
  transform: translate(100%);
}
.slide-next-leave-to {
  transform: translate(-100%);
}

.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-prev-enter-from {
  transform: translate(-100%);
}
.slide-prev-leave-to {
  transform: translate(100%);
}


.slider{
  width: 100%;
  height: 100%;
  background-color: white;
  overflow: hidden;
  font-size: 1.2rem;
}
.slider__inner {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: .3rem;
  display: flex;
}

.slide {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /*border: .1rem solid transparent;*/
}

</style>