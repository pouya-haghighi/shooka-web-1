<template>
  <button type="button" :style="buttonInlineStyle" :class="buttonClasses">
    <a href="#">
      {{ buttonContent }}
    </a>
    <div class="button-slot" v-if="$slots['button-slot']">
      <slot name="button-slot"></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: ['buttonType', 'buttonContent' ,'slotAlign'],
  computed: {
    makingButtonStyle() {
      const dynamicClasses = {}
      const dynamicInlineStyles = {};
      if(this.buttonType || this.buttonContent) {
        if(this.slotAlign === 'right'){
          dynamicInlineStyles.justifyContent = 'flex-end';
        } else if(this.slotAlign === 'left'){
          dynamicInlineStyles.justifyContent = 'flex-start'
        } else {
          dynamicInlineStyles.justifyContent = 'center'

        }
        this.buttonType.forEach((type) => {
          if (type.includes('=')) {
            dynamicInlineStyles[`${type.split('=')[0]}`] = type.split('=')[1].trim().toString();
          } else {
            dynamicClasses[type] = true;
          }
        });
      }
      return [dynamicClasses, dynamicInlineStyles];
    },
    buttonClasses() {
      return this.makingButtonStyle[0];
    },
    buttonInlineStyle() {
      return this.makingButtonStyle[1];
    }
  }
}
</script>

<style scoped>
button {
  position: relative;
  font-size: 1.5rem;
  padding: 1rem 2.5rem;
  border: none;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 0.4rem;
}
.button--full{
  width: 100%;
}
.button--semi-full{
  width: 90%;
}
a {
  text-decoration: none;
  text-align: center;
  color: inherit;
}
.button-slot{
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button--curved {
  border-radius: 2.5rem;
}
.button--big {
  font-size: 2rem;
  padding: 2rem 5rem;
}
.button--ultra-big {
  font-size: 2.6rem;
  padding: 4rem 10rem;
}

.button--disable {
  background-color: #aaa;
}
.button--border{
  border : .2rem solid black
}
.button--small {
  padding: .5rem 1.25rem;
  font-size: 1.5rem;
}


</style>