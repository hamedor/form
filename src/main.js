import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)
Vue.config.productionTip = false

import Vuelidate from '@vuelidate/core';
Vue.use(Vuelidate);


new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')

