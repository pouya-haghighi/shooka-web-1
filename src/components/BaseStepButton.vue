<template>
  <div v-if="type === 'back'" class="step-btn" aria-label="Previous slide">
    &#10094;
  </div>
  <div v-else class="step-btn" aria-label="Next slide">
    &#10095;
  </div>
</template>

<script>
export default {
  name: "BaseStepButton",
  props : ['type']
}
</script>

<style scoped>
div {
  border-radius: 50% ;
  cursor: pointer;
  border: 3px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /*position: absolute;*/
  /*top: calc(50% - 35px);*/
  /*left: 1%;*/
  /*z-index: 10;*/
  transition: transform 0.3s ease-in-out;
  user-select: none;
}


div:hover {
  transform: scale(1.1);
}

</style>