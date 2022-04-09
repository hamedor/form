<template>
  <div id="app">
    <div class="test">
      <form ref='clear' @submit.prevent="sendForm()" class="form" >
        <span>Шаги:</span>
      <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { active: currentTab === tab }]"
        v-on:click.prevent="currentTab = tab"
      >{{tab}}
      </button>
      <button @click.prevent="cleanErrors();cleanForm();" type="button" class="cleanButton">
      Очистить форму
      </button>
      <component v-bind:is="currentTabComponent" class="tab"></component>
      <div class="navBtns">
        <button type="button" @click.prevent="prev()">Назад</button>
        <button type="button" @click.prevent="next()">Вперед</button>
      </div>
      <div class="sendButton">
        <button class="sendButton" type="submit" >Отправить форму</button>
      </div>
      </form>

  </div>
  </div>
</template>

<script>

import tab1 from './components/tabFirst.vue'
import tab2 from './components/tabSecond.vue'
import tab3 from './components/tabThird.vue'
import useVuelidate from '@vuelidate/core'


export default {
  name: 'App',
  setup () {
    return { $v: useVuelidate() }
    },
  components: {
    tab1,
    tab2,
    tab3,
  },
  data(){
    return{
      currentTab: "1",
      tabs: ["1", "2", "3"],
      email: '',
      active:'',
      submitStatus:'',
    }
  },
  computed: {
    currentTabComponent: function() {
      return "tab-" + this.currentTab.toLowerCase();
    }
  },
  methods:{
    sendForm(){
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      }else{
        if(localStorage.email &&
          localStorage.firstName &&
          localStorage.lastName &&
          localStorage.birthDate &&
          localStorage.phone &&
          localStorage.multi &&
          localStorage.city &&
          localStorage.type &&
          localStorage.dateOfGet
          ){
          alert("Спасибо, форма отправлена");
          this.cleanForm();
        }
      }
    },
    next(){
      if(this.currentTab === '1'){
        this.currentTab = "2"
      }
      else if(this.currentTab === '2'){
        this.currentTab = "3"
      }
    },
    prev(){
      if(this.currentTab === '3'){
        this.currentTab = "2"
      }
      else if(this.currentTab === '2'){
        this.currentTab = "1"
      }
    },
    cleanForm(){
      localStorage.clear();
      setTimeout(()=>{
        this.$refs.clear.reset();
      },100)
    },
    cleanErrors(){
      this.$v.$reset();
      },
  }
}
</script>

<style lang="scss">
body {
  background-color: #5c4084;
}
.container{
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.test{
    max-width: 400px;
    margin: 0 auto;
    background-color: #fff;
    padding: 30px;
    margin-top: 100px;
    border-radius: 20px;
}
.field__container{
  vertical-align: top;
  position: relative;
  
}.field__label{
    position: absolute;
    pointer-events: none;
    left:15px;
    top: 25px;
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    transition: .3s;
    color: gray;
}
.field__input{
    height: 40px;
    outline: none;
    border: 1px solid #B0C4DE;
    font-size: 1em;
    padding: 5px 0;
    margin: 10px 0 5px 0;
    width: 100%;
}
.field__container input:focus + label,
.field__container input:not(:placeholder-shown) + label{
  color: gray;
  left: 5px;
  top: 11px;
  font-size: 12px;
}
.multiText{
  font-size: 20px;
  color:gray;
}
#sendSms{
  margin-top:20px
}
.form{
  position: relative;
}
.form__field{
  position: relative;

    display: inline;
}
.input-errors{
  position: absolute;
}
input{
    position: relative;
    background-color: transparent;
    z-index: 2;
}
.navBtns{
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
}
button {
  background-color: #5c4084;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  color: white;
}
button:hover{
  background-color: rgb(135, 10, 203);
}
.sendButton{
  margin-top: 20px;
  display: flex;
  justify-content: center;

}
.cleanButton{
  margin-left: 20px;
  font-size: 10px;
  position: absolute;
  top: -20px;
  right: -8px;
}
.tab-button{
  border-radius: 100%;
  margin-left: 10px;
  margin-top: 20px;
  background-color: #fff;
  color: #5c4084;
  border: 1px solid #5c4084;
}
.active{
  border: 5px solid #5c4084;
  color: #fff;
  background-color: #5c4084;
  font-weight: 700;
}
.form_label input,
.field_multiselect {
  position: relative;
  width: 100%;
  display: block;
  min-height: 50px;
  border: 1px solid #cdd6f3;
  box-sizing: border-box;
  padding: 12px 40px 10px 16px;
  outline-color: #cdd6f3;
}
.form_label input::placeholder,
.field_multiselect::placeholder {
  color: #a8acc9;
}
.form_label input:hover,
.field_multiselect:hover {
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.16);
}
.form_label input:focus,
.field_multiselect:focus {
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.16);
}
.form_label input.error {
  border-color: #eb5757;
}
.error_text {
  color: #eb5757;
}
.field_multiselect {
  padding-right: 60px;
}
.field_multiselect:after {
  content: "";
  position: absolute;
  right: 14px;
  top: 15px;
  width: 6px;
  height: 16px;
  background: url("data:image/svg+xml,%3Csvg width='6' height='16' viewBox='0 0 6 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 0L6 5H0L3 0Z' fill='%23A8ACC9'/%3E%3Cpath d='M3 16L6 11H0L3 16Z' fill='%23A8ACC9'/%3E%3C/svg%3E") 50% 50% no-repeat;
}
.multiselect_block {
  position: relative;
  width: 100%;
  margin-top: 10px;
}
.field_select {
  position: absolute;
  top: calc(100% - 2px);
  left: 0;
  width: 100%;
  border: 2px solid #cdd6f3;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
  box-sizing: border-box;
  outline-color: #cdd6f3;
  z-index: 6;
}
.multiSelected{
  background-color: #5c4084;
}
.field_select[multiple] {
  overflow-y: auto;
}
.field_select option {
  display: block;
  padding: 8px 16px;
  width: 100%;
  cursor: pointer;
}
.field_select option:checked {
  background-color: #eceff3;
}
.field_select option:hover {
  background-color: #5c4084;
}
.multiselect_label {
  position: absolute;
  top: 1px;
  left: 2px;
  width: 100%;
  height: 44px;
  cursor: pointer;
  z-index: 3;
}
.field_select {
  display: none;
}
input.multiselect_checkbox {
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 40px;
  border: none;
  opacity: 0;
}
.multiselect_checkbox:checked ~ .field_select {
  display: block;
}
.multiselect_checkbox:checked ~ .multiselect_label {
  width: 40px;
  left: initial;
  right: 4px;
  background: #ffffff url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19.4958 6.49499C19.7691 6.22162 19.7691 5.7784 19.4958 5.50504C19.2224 5.23167 18.7792 5.23167 18.5058 5.50504L12.5008 11.5101L6.49576 5.50504C6.22239 5.23167 5.77917 5.23167 5.50581 5.50504C5.23244 5.7784 5.23244 6.22162 5.50581 6.49499L11.5108 12.5L5.50581 18.505C5.23244 18.7784 5.23244 19.2216 5.50581 19.495C5.77917 19.7684 6.22239 19.7684 6.49576 19.495L12.5008 13.49L18.5058 19.495C18.7792 19.7684 19.2224 19.7684 19.4958 19.495C19.7691 19.2216 19.7691 18.7784 19.4958 18.505L13.4907 12.5L19.4958 6.49499Z' fill='%234F5588'/%3E%3C/svg%3E") 50% 50% no-repeat;
}
.multiselect_checkbox:checked ~ .field_multiselect_help {
  opacity: 1;
}
.form__container{
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
input[type="text"],
input[type="mail"],
input[type="date"],
input[type="tel"]{
  padding-left: 10px ;
  box-sizing: border-box;
  height: 53px;
}
.is-invalid{
  border-color:#eb5757;
  transition: border .5s ease;
}
</style>
