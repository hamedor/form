<template>
    <div>
         <h3>Адрес</h3>

      <div class="form__field field">
        <div class="field__container">
          <input class="field__input" type="text" placeholder=" " v-model="country" name="country"  />
          <label class="field__label" for="country">страна</label>
        </div>
      </div>
      <div class="form__field field">
        <div class="field__container">
          <input class="field__input" type="text" placeholder=" " v-model="district" name="district" />
          <label class="field__label" for="country">область</label>
        </div>
      </div>
      <div class="form__field field">
        <div class="field__errors" v-for="error of $v.city.$errors" :key="error.$uid">
          <div class="field__msg">{{ error.$message }}</div>
        </div>
        <div class="field__container">
          <input class="field__input" type="text" placeholder=" " v-model="city" name="city" :class="{'is-invalid':$v.city.$error}"
          @blur="$v.city.$touch()" />
          <label class="field__label" for="country">город*</label>
        </div>
      </div>
      <div class="form__field field">
        <div class="field__container">
          <input class="field__input" type="text" placeholder=" " v-model="index" name="index" />
          <label class="field__label" for="country">индекс</label>
        </div>
      </div>
      <div class="form__field field">
        <div class="field__container">
          <input class="field__input" type="text" placeholder=" " v-model="street" name="street" />
          <label class="field__label" for="country">улица</label>
        </div>
      </div>
      <div class="form__field field">
        <div class="field__container">
          <input class="field__input" type="text" placeholder=" " v-model="home" name="home" />
          <label class="field__label" for="country">дом</label>
        </div>
      </div>
    </div>

</template>


<script>

import useVuelidate from '@vuelidate/core'
import {required, helpers} from '@vuelidate/validators'

export default {
    name:"tabSecond",
    setup () {
      return { $v: useVuelidate() }
    },
    data(){
      return{
        country:'',
        district:'',
        city:'',
        index:'',
        street:'',
        home:'',
      }
    },
    validations(){
      return{
        city:{
          required: helpers.withMessage('Поле не может быть пустым', required),
          }
        }
    },
    mounted(){
      if(localStorage.country){
        this.country = localStorage.country;
      }
      if(localStorage.district){
        this.district = localStorage.district;
      }
      if(localStorage.city){
        this.city = localStorage.city;
      }
      if(localStorage.index){
        this.index = localStorage.index;
      }
      if(localStorage.street){
        this.street = localStorage.street;
      }
      if(localStorage.home){
        this.home = localStorage.home;
      }
    },
    watch:{
      country(newCountry){
        localStorage.country = newCountry;
      },
      district(newDistrict){
        localStorage.district = newDistrict;
      },
      city(newCity){
        localStorage.city = newCity;
      },
      index(newIndex){
        localStorage.index = newIndex;
      },
      street(newStreet){
        localStorage.street = newStreet;
      },
      home(newHome){
        localStorage.home = newHome;
      }
    }
}
</script>

<style>

</style>