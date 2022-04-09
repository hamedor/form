<template>
<div>
  <h3 class="form__heading">Личные данные</h3>
    <div class="form__field field">
      <div class="field__errors"  v-for="error of $v.email.$errors" :key="error.$uid">
        <div class="field__msg">{{ error.$message }}</div>
      </div>
      <div class="field__container">
        <input type="mail" name="email" class="field__input" placeholder=" " v-model="email" :class="{'is-invalid':$v.email.$error}"
        @blur="$v.email.$touch()"  />
        <label for="email" class="field__label">email*</label>
      </div>
    </div>
    <div class="form__field field">
      <div class="field__errors" v-for="error of $v.firstName.$errors" :key="error.$uid">
        <div class="field__msg">{{ error.$message }}</div>
      </div>
      <div class="field__container">
        <input type="text"  class="field__input" placeholder=" " v-model="firstName" name="firstName" :class="{'is-invalid':$v.firstName.$error}"
        @blur="$v.firstName.$touch()" />
        <label for="firstName" class="field__label">имя*</label>
      </div>
    </div>

    <div class="form__field field">
      <div class="field__errors" v-for="error of $v.lastName.$errors" :key="error.$uid">
        <div class="field__msg">{{ error.$message }}</div>
      </div>
      <div class="field__container">
        <input type="text"  class="field__input" placeholder=" " v-model="lastName" name="lastName" :class="{'is-invalid':$v.lastName.$error}"
        @blur="$v.lastName.$touch()" />
        <label for="lastName" class="field__label">фамилия*</label>
      </div>
    </div>
      <div class="form__field field">
        <div class="field__container">
          <input type="text"  class="field__input" placeholder=" " v-model="fatherName" name="fatherName" />
          <label for="fatherName" class="field__label">отчество</label>
        </div>
      </div>
      <div class="form__field field">
        <div class="field__errors" v-for="error of $v.birthDate.$errors" :key="error.$uid">
          <div class="field__msg">{{ error.$message }}</div>
        </div>
        <div class="field__container">
          <input type="date" class="field__input" placeholder=" " v-model="birthDate" name="birthDate" :class="{'is-invalid':$v.birthDate.$error}"
          @blur="$v.birthDate.$touch()" />
          <label for="birthDate" class="field__label">дата рождения*</label>
        </div>
      </div>
      <div class="form__field field">
        <div class="field__errors" v-for="error of $v.phone.$errors" :key="error.$uid">
          <div class="field__msg">{{ error.$message }}</div>
        </div>
        <div class="field__container">
        <input type="tel" class="field__input" placeholder=" " v-model="phone" name="phone" :class="{'is-invalid':$v.phone.$error}"
        @blur="$v.phone.$touch()" />
        <label for="phone" class="field__label">номер телефона*</label>
        </div>
      </div>

      <div class="form__field field " >
        <div class="multiselect_block">
          <div class="input-errors" v-for="error of $v.multi.$errors" :key="error.$uid">
          <div class="error-msg">{{ error.$message }}</div>
          </div>
          <label for="select-1" class="field_multiselect">
          <div class="multiText" ref="outputMulti">группа клиентов*</div>
          </label>
          <input id="checkbox-1" class="multiselect_checkbox" type="checkbox">
          <label for="checkbox-1" class="multiselect_label"></label>
          <select class="field_select" id="select-1" @change="inner()"
          v-model="multi" multiple>
            <option class="option"
            v-for="option in options" :value="option.value"
            v-bind:key="option.text"
            >
              {{option.text}}
            </option>
          </select>
        </div>
      </div>
      <div class="container">
      <div class="form__field field">
          <label for="doctorName">Лечащий врач:</label>
          <select name="doctorName">
            <option>Иванов</option>
            <option>Захаров</option>
            <option>Чернышева</option>
          </select>
        </div>
        <div class="form__field field">
          <label for="gender"> Пол:</label>
          <input type="radio" v-model="gender" name="gender" id="gender1" value="мужской">
          <label for="gender1">мужской</label>
          <input type="radio" v-model="gender" name="gender" id="gender2" value="женский">
          <label for="gender2">женский</label>
        </div>
      </div>
    
      <div class="form__field">
      <input type="checkbox" id="sendSms">
      <label for="sendSms">не отправлять СМС</label>

     
</div>
</div>
</template>

<script>

import useVuelidate from '@vuelidate/core'
import {required, email, minLength, maxLength,sameAs, helpers, numeric} from '@vuelidate/validators'



const сyrillic = (val) => /^[а-яё]*$/i.test(val);

export default {
    name:"tabFirst",
    
    setup () {
    return { $v: useVuelidate() }
    },
    data(){
    return{
      email:'',
      firstName:'',
      lastName:'',
      fatherName:'',
      birthDate:'',
      phone:'',
      gender:'',
      multi:[],
      options:[
        {
        text: 'VIP',
        value:'VIP',
        },
        {text: 'Проблемные',
        value:'Проблемные',
        },
        {text:'ОМС',
        value:'ОМС',
        },
      ]
    }
  },
    validations() {
    return {
      email: {
        required: helpers.withMessage('Поле не может быть пустым', required),
        email: helpers.withMessage("Введите правильно email формата example@email.ru", email)
        },
      firstName: {
        required: helpers.withMessage('Поле не может быть пустым', required),
        maxLength: helpers.withMessage('не больше 15', maxLength(15)),
        сyrillic: helpers.withMessage('Допускаются только буквы кириллического алфавита', сyrillic),
    },
      lastName: {
        required: helpers.withMessage('Поле не может быть пустым', required),
        maxLength: helpers.withMessage('не больше 15', maxLength(15)),
        сyrillic: helpers.withMessage('Допускаются только буквы кириллического алфавита', сyrillic),
    },
      birthDate: {
        required: helpers.withMessage('Поле не может быть пустым', required),
    },
      phone:{
        required: helpers.withMessage('Поле не может быть пустым', required),
        maxLength: helpers.withMessage('не больше 11 цифр', maxLength(11)),
        minLength: helpers.withMessage('не меньше 11 цифр', minLength(11)),
        numeric: helpers.withMessage('Могут использоваться только цифры', numeric),
      },
      multi:{
        required: helpers.withMessage('Поле не может быть пустым', required),
      },
      gender:{
       
      }
    }
  },
  mounted(){
    if(localStorage.email){
      this.email = localStorage.email;
    }
    if(localStorage.firstName){
      this.firstName = localStorage.firstName;
    }
    if(localStorage.lastName){
      this.lastName = localStorage.lastName;
    }
    if(localStorage.fatherName){
      this.fatherName = localStorage.fatherName;
    }
    if(localStorage.birthDate){
      this.birthDate = localStorage.birthDate;
    }
    if(localStorage.phone){
      this.phone= localStorage.phone;
    }
    if(localStorage.gender){
      this.gender= localStorage.gender;
    }
    if(localStorage.multi){
      this.multi= localStorage.multi.split(','); //Не работает. Доделать
    }

  },
  
  watch:{
    email(newEmail){
      localStorage.email = newEmail;
    },

    firstName(newFirstName){
      localStorage.firstName = newFirstName;
    },
    lastName(newLastName){
      localStorage.lastName = newLastName;
    },
    fatherName(newFatherName){
      localStorage.fatherName = newFatherName;
    },
    birthDate(newBirthDate){
      localStorage.birthDate = newBirthDate;
    },
    phone(newPhone){
      localStorage.phone = newPhone;
    },
    gender(newGender){
      localStorage.gender = newGender;
    },
    multi(newMulti){
      localStorage.multi = newMulti;
    },
  },
  methods:{
    inner(){
      this.$refs.outputMulti.innerHTML = this.multi;
    }
      }
    }
</script>

<style>





</style>