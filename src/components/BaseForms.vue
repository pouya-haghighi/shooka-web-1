<template>
<div class="forms">
  <form v-if="formType === 'login'" class="form login-form">
    <header class="form__header">
         <h2>ورود به شوکاوب</h2>
    </header>
    <login-input
        v-for="val in loginInputs"
        class="form-control"
        :key="val.id"
        :type="val.type"
        :id="val.id"
        :label="val.label"
        v-model="val.inputVal">
    </login-input>
     <div class="form-control">
       <div class="form-control__forgot-password">
         <router-link to="#">فراموش کرده اید؟</router-link>
       </div>
       <div class="form-control__remember-me">
         <p>مرا به خاطر بسپار</p>
         <base-check-box @is-checked="checkedHandler"></base-check-box>

       </div>
     </div>
    <base-button
        button-content="ورود"
        :button-type="['button--full', 'button--curved', 'background-color=#7566c1', 'height=4.1rem', 'color=white']">
    </base-button>
    <div class="form-separator">
      <hr>
      <div class="form-separator__text">یا</div>
    </div>
      <router-link to="#" @click="toggleForms('guest')">ورود به عنوان مهمان</router-link>

    <div class="form-control">
      <div class="form-control__LDAP">
        <label>LDAP احراز هویت از طریق</label>

        <base-check-box @is-checked="okokok"></base-check-box>
      </div>
    </div>
  </form>
  <form v-else class="form guest-form">
    <div class="form-control">
      <label>guest</label>
      <input type="text">
    </div>
    <button @click="toggleForms('login')" type="button">login</button>
  </form>
</div>

</template>

<script>
import LoginInput from "./LoginInput";
import BaseButton from "./BaseButton";
import BaseCheckBox from "./BaseCheckBox";
export default {
  name: "BaseForms",
  components: {BaseCheckBox, BaseButton, LoginInput},
  props : ['formType'],
  data(){
    return {
     loginInputs : {
       tenantName: {
         label: 'نام سازمان',
         type : 'text',
         dataLabel: 'tenantName',
         id: 'tenant-name',
         inputVal: '',
       },
       username: {
         label: 'نام کاربری',
         type : 'text',
         dataLabel: 'username',
         id: 'username',
         inputVal: '',
       },
       password: {
         label: 'گذرواژه',
         type : 'password',
         dataLabel: 'password',
         id: 'password',
         inputVal: '',
       }
     }
    }
  },
  methods : {
    toggleForms(form){
      if(form === 'guest'){
        this.$emit('form-type', form)
      } else {
        this.$emit('form-type', form)
      }
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
  color :#7566c1
}
.forms {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form{
  width: 35.2rem;
  height : 49.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.login-form{


}
.guest-form{


}
.form__header{
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
}
.form__header h2{
  font-size : 2rem;
  font-weight: bold;
  color: rgba(0,0,0,.8);
}
.form-control{
  width: 100%;
}
.form-control:nth-child(5){
display: flex;
  height: 2.5rem;
  justify-content: space-between;
  align-items: center;
}
.form-control:last-child{
  display: flex;
  justify-content: right;
  align-items: center;
}
.form-control__remember-me{
  display: flex;
  align-items: center;
}
.form-separator{
  width: 100%;
  position: relative;
}
.form-separator__text{
  width: 7rem;
  background-color: white;
  z-index: 1;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.form-control__LDAP{
  display: flex;
  align-items: center;
}

</style>