<template>
<div >
  <h3>Паспортные данные</h3>

      <div class="form_label">
         <div class="field__errors" v-for="error of $v.type.$errors" :key="error.$uid">
          <div class="field__msg">{{ error.$message }}</div>
        </div>
        <label for="documentType">Тип документа:*</label>
        <select name="documentType" v-model="type" :class="{'is-invalid':$v.type.$error}"
          @blur="$v.type.$touch()" >
          <option >Паспорт</option>
          <option>Свидетельство о рождении</option>
          <option>Водительское удостоверение </option>
        </select>
      </div>
      <div class="form__field field">
        <div class="field__container">
        <input class="field__input" type="text" placeholder=" " v-model="serial" name="serial" />
        <label class="field__label" for="country">серия</label>
        </div>
      </div>
      <div class="form__field field">
        <div class="field__container">
          <input class="field__input" type="text" placeholder=" " v-model="number" name="number" />
          <label class="field__label" for="country">номер</label>
        </div>
      </div>
      <div class="form__field field">
        <div class="field__container">
          <input class="field__input" type="text" placeholder=" " v-model="whoGives" name="whoGives" />
          <label class="field__label" for="country">кем выдан</label>
        </div>
      </div>
      <div class="form__field field">
         <div class="field__errors" v-for="error of $v.dateOfGet.$errors" :key="error.$uid">
          <div class="field__msg">{{ error.$message }}</div>
        </div>
        <div class="field__container">
          <input class="field__input" type="text" placeholder=" " v-model="dateOfGet" name="dateOfGet"
          :class="{'is-invalid':$v.dateOfGet.$error}"
          @blur="$v.dateOfGet.$touch()" />
          <label class="field__label" for="country">дата выдачи*</label>
        </div>
      </div>
</div>
</template>

<script>

import useVuelidate from '@vuelidate/core'
import {required, helpers} from '@vuelidate/validators'

export default {
    name:'tabThird',
    setup () {
    return { $v: useVuelidate() }
    },
    data(){
        return{
            type:'',
            serial:'',
            number:'',
            whoGives:'',
            dateOfGet:'',
        }
    },
    mounted(){
      if(localStorage.type){
        this.type = localStorage.type;
      }
      if(localStorage.serial){
        this.serial = localStorage.serial;
      }
      if(localStorage.number){
        this.number = localStorage.number;
      }
      if(localStorage.whoGives){
        this.whoGives = localStorage.whoGives;
      }
      if(localStorage.dateOfGet){
        this.dateOfGet = localStorage.dateOfGet;
      }
    },
    watch:{
      type(newType){
        localStorage.type = newType;
      },
      serial(newSerial){
        localStorage.serial = newSerial;
      },
      number(newNumber){
        localStorage.number = newNumber;
      },
      whoGives(newWhoGives){
        localStorage.whoGives = newWhoGives;
      },
      dateOfGet(newDateOfGet){
        localStorage.dateOfGet = newDateOfGet;
      },
    },
    validations(){
      return{
        type:{
          required: helpers.withMessage('Выберите тип документа', required),
        },
        dateOfGet:{
          required: helpers.withMessage('Поле не может быть пустым', required),
        },
      }
    }
}
</script>

<style>

</style>