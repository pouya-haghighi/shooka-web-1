<template>
  <div class="form-control__input">
      <div class="input-container">
        <input :type="type" class="input-container__field" :class="{'is-valid' : isValid}" :id="id" @input="inputValueBinding" />
        <label class="input-container__label" :for="id">{{ label }}</label>
      </div>
  </div>
</template>

<script>
export default {
  name: "LoginInput",
  props : ['label', 'id', 'modelValue', 'type'],
  emits : ['update:modelValue'],
  data(){
    return {
      inputValue : this.inputValue,
      isValid : false
    }
  },
  watch : {
    inputValue(currentVal){
      console.log(currentVal)
    }
  },
  methods : {
    inputValueBinding(e){
      if(e.target.value === 'ok'){
        this.isValid = true;
      } else {
        this.isValid = false;
      }
      this.$emit('update:modelValue', e.target.value);
    }
  }

}
</script>

<style scoped>
.input-container {
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  padding-top: 1.5rem;
  margin-top: 1.5rem;

}
.input-container__label {

  color: #8597a3;
  font-size : 1.2rem;
  position: absolute;
  top: 1.2rem;
  right: 0;
  transition: 0.25s ease;
}
.input-container__field {
  border: 0;
  /*z-index: 1;*/
  background-color: transparent;
  border-bottom: 0.2rem solid #eee;
  font-size: 1.3rem;
  padding-top: .25rem;
  font-weight: lighter;
  /*padding: 0.25rem 0;*/
}
.input-container__field[type="password"]{
  letter-spacing: 0.3rem;
}
.input-container__field:focus,
.input-container__field:valid {
  /*font-size: 1.8rem;*/
  outline: 0;
  border-bottom-color: #a2a2a2;
}
.input-container__field:focus + .input-container__label {
  color: #4a69bd;
  transform: translateY(-2.5rem);
}
.input-container__field.is-valid + .input-container__label {
  color: green;
  transform: translateY(-2.5rem);
}
</style>