<template>
  <main>
  <div class="forms-container">
      <form-slider :info-array="arr" step-buttons-color="black" :sliding-action="(current === 'login')? 'next' : 'back'">
        <div class="forms-container__inner">

        <base-forms :form-type="current" @form-type="getFormType"></base-forms>
        </div>

      </form-slider>
  </div>
    <div class="wc-container">
      <div class="wc-container__inner">
            <div class="logo">
              <img src="/img/logo1.png">
            </div>
        <transition appear-active-class="wc-text--animated" appear @after-appear="removeLeftBorder">
        <div class="wc-text wc-text--while-animating" :class="{'border-left' : welcomeBorderFlag}" >
          <span>به </span>
          <span class="wc-text__shooka">شوکا</span>
          <span class="wc-text__w">و</span>
          <span class="wc-text__b">ب</span>
          <span> خوش آمدید </span>
        </div>
        </transition>
      </div>
    </div>
  </main>

</template>
<script>

import FormSlider from "../components/FormSlider";
import BaseForms from "../components/BaseForms";
export default {
  name: 'App',
  components: {BaseForms, FormSlider},
  data(){
    return{
      welcomeBorderFlag : true,
      arr : ['login', 'guest'],
      current : 'login'
    }
  },
  methods : {
    removeLeftBorder(){
      this.welcomeBorderFlag = false;
    },
    // getCurrentSlide(slide){
    //   this.current = slide;
    // },
    getFormType(type){
      console.log(type)
      if(type === 'guest'){
        this.current = type;
      } else {
        this.current = type;
      }
    }
  }
}
</script>
<style scoped>
main{
  width: 100%;
  height : 100%;
  display: flex;
  flex-direction: row-reverse;
}
.forms-container{
  width: 59rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.forms-container__inner{
  width: 100%;
  height: 100%;
}
.wc-container{
  width: calc(100% - 59rem);
  height: 100%;
  background-color: #eceaf9;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wc-container__inner{
  width: 49.2rem;
  height : 18.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.logo{
  width: 100%;
  height : 13.6rem;
}
.logo img{
  width: 100%;
}
.wc-text{
  direction: rtl;
  width: 18ch;
  display: none;
  white-space: nowrap;
  overflow: hidden;
  font-size: 3.1rem;
  color: #676767;
}
.wc-text__shooka{
  color: #2C65AA;
}
.wc-text__w{
  color: #84B755;
}
.wc-text__b{
  color: #E6A743;
}
.wc-text--while-animating{
  display: block;

}
.wc-text--animated{
  animation : typing 1.4s steps(23);
}
.border-left {
  border-left: .3rem solid;
}
@keyframes typing {
  from{
    width: 0;
  }
  to{

  }

}
</style>