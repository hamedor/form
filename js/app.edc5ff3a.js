(function(){"use strict";var e={407:function(e,t,a){var i=a(144),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"test"},[a("form",{ref:"clear",staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.sendForm()}}},[a("span",[e._v("Шаги:")]),e._l(e.tabs,(function(t){return a("button",{key:t,class:["tab-button",{active:e.currentTab===t}],on:{click:function(a){a.preventDefault(),e.currentTab=t}}},[e._v(e._s(t)+" ")])})),a("button",{staticClass:"cleanButton",attrs:{type:"button"},on:{click:function(t){t.preventDefault(),e.cleanErrors(),e.cleanForm()}}},[e._v(" Очистить форму ")]),a(e.currentTabComponent,{tag:"component",staticClass:"tab"}),a("div",{staticClass:"navBtns"},[a("button",{attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.prev()}}},[e._v("Назад")]),a("button",{attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.next()}}},[e._v("Вперед")])]),e._m(0)],2)])])},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sendButton"},[a("button",{staticClass:"sendButton",attrs:{type:"submit"}},[e._v("Отправить форму")])])}],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",{staticClass:"form__heading"},[e._v("Личные данные")]),a("div",{staticClass:"form__field field"},[e._l(e.$v.email.$errors,(function(t){return a("div",{key:t.$uid,staticClass:"field__errors"},[a("div",{staticClass:"field__msg"},[e._v(e._s(t.$message))])])})),a("div",{staticClass:"field__container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"field__input",class:{"is-invalid":e.$v.email.$error},attrs:{type:"mail",name:"email",placeholder:" "},domProps:{value:e.email},on:{blur:function(t){return e.$v.email.$touch()},input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("label",{staticClass:"field__label",attrs:{for:"email"}},[e._v("email*")])])],2),a("div",{staticClass:"form__field field"},[e._l(e.$v.firstName.$errors,(function(t){return a("div",{key:t.$uid,staticClass:"field__errors"},[a("div",{staticClass:"field__msg"},[e._v(e._s(t.$message))])])})),a("div",{staticClass:"field__container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],staticClass:"field__input",class:{"is-invalid":e.$v.firstName.$error},attrs:{type:"text",placeholder:" ",name:"firstName"},domProps:{value:e.firstName},on:{blur:function(t){return e.$v.firstName.$touch()},input:function(t){t.target.composing||(e.firstName=t.target.value)}}}),a("label",{staticClass:"field__label",attrs:{for:"firstName"}},[e._v("имя*")])])],2),a("div",{staticClass:"form__field field"},[e._l(e.$v.lastName.$errors,(function(t){return a("div",{key:t.$uid,staticClass:"field__errors"},[a("div",{staticClass:"field__msg"},[e._v(e._s(t.$message))])])})),a("div",{staticClass:"field__container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],staticClass:"field__input",class:{"is-invalid":e.$v.lastName.$error},attrs:{type:"text",placeholder:" ",name:"lastName"},domProps:{value:e.lastName},on:{blur:function(t){return e.$v.lastName.$touch()},input:function(t){t.target.composing||(e.lastName=t.target.value)}}}),a("label",{staticClass:"field__label",attrs:{for:"lastName"}},[e._v("фамилия*")])])],2),a("div",{staticClass:"form__field field"},[a("div",{staticClass:"field__container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.fatherName,expression:"fatherName"}],staticClass:"field__input",attrs:{type:"text",placeholder:" ",name:"fatherName"},domProps:{value:e.fatherName},on:{input:function(t){t.target.composing||(e.fatherName=t.target.value)}}}),a("label",{staticClass:"field__label",attrs:{for:"fatherName"}},[e._v("отчество")])])]),a("div",{staticClass:"form__field field"},[e._l(e.$v.birthDate.$errors,(function(t){return a("div",{key:t.$uid,staticClass:"field__errors"},[a("div",{staticClass:"field__msg"},[e._v(e._s(t.$message))])])})),a("div",{staticClass:"field__container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.birthDate,expression:"birthDate"}],staticClass:"field__input",class:{"is-invalid":e.$v.birthDate.$error},attrs:{type:"date",placeholder:" ",name:"birthDate"},domProps:{value:e.birthDate},on:{blur:function(t){return e.$v.birthDate.$touch()},input:function(t){t.target.composing||(e.birthDate=t.target.value)}}}),a("label",{staticClass:"field__label",attrs:{for:"birthDate"}},[e._v("дата рождения*")])])],2),a("div",{staticClass:"form__field field"},[e._l(e.$v.phone.$errors,(function(t){return a("div",{key:t.$uid,staticClass:"field__errors"},[a("div",{staticClass:"field__msg"},[e._v(e._s(t.$message))])])})),a("div",{staticClass:"field__container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"field__input",class:{"is-invalid":e.$v.phone.$error},attrs:{type:"tel",placeholder:" ",name:"phone"},domProps:{value:e.phone},on:{blur:function(t){return e.$v.phone.$touch()},input:function(t){t.target.composing||(e.phone=t.target.value)}}}),a("label",{staticClass:"field__label",attrs:{for:"phone"}},[e._v("номер телефона*")])])],2),a("div",{staticClass:"form__field field "},[a("div",{staticClass:"multiselect_block"},[e._l(e.$v.multi.$errors,(function(t){return a("div",{key:t.$uid,staticClass:"input-errors"},[a("div",{staticClass:"error-msg"},[e._v(e._s(t.$message))])])})),a("label",{staticClass:"field_multiselect",attrs:{for:"select-1"}},[a("div",{ref:"outputMulti",staticClass:"multiText"},[e._v("группа клиентов*")])]),a("input",{staticClass:"multiselect_checkbox",attrs:{id:"checkbox-1",type:"checkbox"}}),a("label",{staticClass:"multiselect_label",attrs:{for:"checkbox-1"}}),a("select",{directives:[{name:"model",rawName:"v-model",value:e.multi,expression:"multi"}],staticClass:"field_select",attrs:{id:"select-1",multiple:""},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.multi=t.target.multiple?a:a[0]},function(t){return e.inner()}]}},e._l(e.options,(function(t){return a("option",{key:t.text,staticClass:"option",domProps:{value:t.value}},[e._v(" "+e._s(t.text)+" ")])})),0)],2)]),a("div",{staticClass:"container"},[e._m(0),a("div",{staticClass:"form__field field"},[a("label",{attrs:{for:"gender"}},[e._v(" Пол:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{type:"radio",name:"gender",id:"gender1",value:"мужской"},domProps:{checked:e._q(e.gender,"мужской")},on:{change:function(t){e.gender="мужской"}}}),a("label",{attrs:{for:"gender1"}},[e._v("мужской")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{type:"radio",name:"gender",id:"gender2",value:"женский"},domProps:{checked:e._q(e.gender,"женский")},on:{change:function(t){e.gender="женский"}}}),a("label",{attrs:{for:"gender2"}},[e._v("женский")])])]),e._m(1)])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form__field field"},[a("label",{attrs:{for:"doctorName"}},[e._v("Лечащий врач:")]),a("select",{attrs:{name:"doctorName"}},[a("option",[e._v("Иванов")]),a("option",[e._v("Захаров")]),a("option",[e._v("Чернышева")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form__field"},[a("input",{attrs:{type:"checkbox",id:"sendSms"}}),a("label",{attrs:{for:"sendSms"}},[e._v("не отправлять СМС")])])}],n=a(28),c=a(587);const u=e=>/^[а-яё]*$/i.test(e);var d={name:"tabFirst",setup(){return{$v:(0,n.ZP)()}},data(){return{email:"",firstName:"",lastName:"",fatherName:"",birthDate:"",phone:"",gender:"",multi:[],options:[{text:"VIP",value:"VIP"},{text:"Проблемные",value:"Проблемные"},{text:"ОМС",value:"ОМС"}]}},validations(){return{email:{required:c.BM.withMessage("Поле не может быть пустым",c.C1),email:c.BM.withMessage("Введите правильно email формата example@email.ru",c.Do)},firstName:{required:c.BM.withMessage("Поле не может быть пустым",c.C1),maxLength:c.BM.withMessage("не больше 15",(0,c.BS)(15)),"сyrillic":c.BM.withMessage("Допускаются только буквы кириллического алфавита",u)},lastName:{required:c.BM.withMessage("Поле не может быть пустым",c.C1),maxLength:c.BM.withMessage("не больше 15",(0,c.BS)(15)),"сyrillic":c.BM.withMessage("Допускаются только буквы кириллического алфавита",u)},birthDate:{required:c.BM.withMessage("Поле не может быть пустым",c.C1)},phone:{required:c.BM.withMessage("Поле не может быть пустым",c.C1),maxLength:c.BM.withMessage("не больше 11 цифр",(0,c.BS)(11)),minLength:c.BM.withMessage("не меньше 11 цифр",(0,c.Ei)(11)),numeric:c.BM.withMessage("Могут использоваться только цифры",c.uR)},multi:{required:c.BM.withMessage("Поле не может быть пустым",c.C1)},gender:{}}},mounted(){localStorage.email&&(this.email=localStorage.email),localStorage.firstName&&(this.firstName=localStorage.firstName),localStorage.lastName&&(this.lastName=localStorage.lastName),localStorage.fatherName&&(this.fatherName=localStorage.fatherName),localStorage.birthDate&&(this.birthDate=localStorage.birthDate),localStorage.phone&&(this.phone=localStorage.phone),localStorage.gender&&(this.gender=localStorage.gender),localStorage.multi&&(this.multi=localStorage.multi.split(","))},watch:{email(e){localStorage.email=e},firstName(e){localStorage.firstName=e},lastName(e){localStorage.lastName=e},fatherName(e){localStorage.fatherName=e},birthDate(e){localStorage.birthDate=e},phone(e){localStorage.phone=e},gender(e){localStorage.gender=e},multi(e){localStorage.multi=e}},methods:{inner(){this.$refs.outputMulti.innerHTML=this.multi}}},m=d,v=a(1),f=(0,v.Z)(m,s,o,!1,null,null,null),_=f.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v("Адрес")]),a("div",{staticClass:"form__field field"},[a("div",{staticClass:"field__container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.country,expression:"country"}],staticClass:"field__input",attrs:{type:"text",placeholder:" ",name:"country"},domProps:{value:e.country},on:{input:function(t){t.target.composing||(e.country=t.target.value)}}}),a("label",{staticClass:"field__label",attrs:{for:"country"}},[e._v("страна")])])]),a("div",{staticClass:"form__field field"},[a("div",{staticClass:"field__container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.district,expression:"district"}],staticClass:"field__input",attrs:{type:"text",placeholder:" ",name:"district"},domProps:{value:e.district},on:{input:function(t){t.target.composing||(e.district=t.target.value)}}}),a("label",{staticClass:"field__label",attrs:{for:"country"}},[e._v("область")])])]),a("div",{staticClass:"form__field field"},[e._l(e.$v.city.$errors,(function(t){return a("div",{key:t.$uid,staticClass:"field__errors"},[a("div",{staticClass:"field__msg"},[e._v(e._s(t.$message))])])})),a("div",{staticClass:"field__container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.city,expression:"city"}],staticClass:"field__input",class:{"is-invalid":e.$v.city.$error},attrs:{type:"text",placeholder:" ",name:"city"},domProps:{value:e.city},on:{blur:function(t){return e.$v.city.$touch()},input:function(t){t.target.composing||(e.city=t.target.value)}}}),a("label",{staticClass:"field__label",attrs:{for:"country"}},[e._v("город*")])])],2),a("div",{staticClass:"form__field field"},[a("div",{staticClass:"field__container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.index,expression:"index"}],staticClass:"field__input",attrs:{type:"text",placeholder:" ",name:"index"},domProps:{value:e.index},on:{input:function(t){t.target.composing||(e.index=t.target.value)}}}),a("label",{staticClass:"field__label",attrs:{for:"country"}},[e._v("индекс")])])]),a("div",{staticClass:"form__field field"},[a("div",{staticClass:"field__container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.street,expression:"street"}],staticClass:"field__input",attrs:{type:"text",placeholder:" ",name:"street"},domProps:{value:e.street},on:{input:function(t){t.target.composing||(e.street=t.target.value)}}}),a("label",{staticClass:"field__label",attrs:{for:"country"}},[e._v("улица")])])]),a("div",{staticClass:"form__field field"},[a("div",{staticClass:"field__container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.home,expression:"home"}],staticClass:"field__input",attrs:{type:"text",placeholder:" ",name:"home"},domProps:{value:e.home},on:{input:function(t){t.target.composing||(e.home=t.target.value)}}}),a("label",{staticClass:"field__label",attrs:{for:"country"}},[e._v("дом")])])])])},g=[],h={name:"tabSecond",setup(){return{$v:(0,n.ZP)()}},data(){return{country:"",district:"",city:"",index:"",street:"",home:""}},validations(){return{city:{required:c.BM.withMessage("Поле не может быть пустым",c.C1)}}},mounted(){localStorage.country&&(this.country=localStorage.country),localStorage.district&&(this.district=localStorage.district),localStorage.city&&(this.city=localStorage.city),localStorage.index&&(this.index=localStorage.index),localStorage.street&&(this.street=localStorage.street),localStorage.home&&(this.home=localStorage.home)},watch:{country(e){localStorage.country=e},district(e){localStorage.district=e},city(e){localStorage.city=e},index(e){localStorage.index=e},street(e){localStorage.street=e},home(e){localStorage.home=e}}},b=h,C=(0,v.Z)(b,p,g,!1,null,null,null),y=C.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v("Паспортные данные")]),a("div",{staticClass:"form_label"},[e._l(e.$v.type.$errors,(function(t){return a("div",{key:t.$uid,staticClass:"field__errors"},[a("div",{staticClass:"field__msg"},[e._v(e._s(t.$message))])])})),a("label",{attrs:{for:"documentType"}},[e._v("Тип документа:*")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],class:{"is-invalid":e.$v.type.$error},attrs:{name:"documentType"},on:{blur:function(t){return e.$v.type.$touch()},change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.type=t.target.multiple?a:a[0]}}},[a("option",[e._v("Паспорт")]),a("option",[e._v("Свидетельство о рождении")]),a("option",[e._v("Водительское удостоверение ")])])],2),a("div",{staticClass:"form__field field"},[a("div",{staticClass:"field__container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.serial,expression:"serial"}],staticClass:"field__input",attrs:{type:"text",placeholder:" ",name:"serial"},domProps:{value:e.serial},on:{input:function(t){t.target.composing||(e.serial=t.target.value)}}}),a("label",{staticClass:"field__label",attrs:{for:"country"}},[e._v("серия")])])]),a("div",{staticClass:"form__field field"},[a("div",{staticClass:"field__container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],staticClass:"field__input",attrs:{type:"text",placeholder:" ",name:"number"},domProps:{value:e.number},on:{input:function(t){t.target.composing||(e.number=t.target.value)}}}),a("label",{staticClass:"field__label",attrs:{for:"country"}},[e._v("номер")])])]),a("div",{staticClass:"form__field field"},[a("div",{staticClass:"field__container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.whoGives,expression:"whoGives"}],staticClass:"field__input",attrs:{type:"text",placeholder:" ",name:"whoGives"},domProps:{value:e.whoGives},on:{input:function(t){t.target.composing||(e.whoGives=t.target.value)}}}),a("label",{staticClass:"field__label",attrs:{for:"country"}},[e._v("кем выдан")])])]),a("div",{staticClass:"form__field field"},[e._l(e.$v.dateOfGet.$errors,(function(t){return a("div",{key:t.$uid,staticClass:"field__errors"},[a("div",{staticClass:"field__msg"},[e._v(e._s(t.$message))])])})),a("div",{staticClass:"field__container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dateOfGet,expression:"dateOfGet"}],staticClass:"field__input",class:{"is-invalid":e.$v.dateOfGet.$error},attrs:{type:"text",placeholder:" ",name:"dateOfGet"},domProps:{value:e.dateOfGet},on:{blur:function(t){return e.$v.dateOfGet.$touch()},input:function(t){t.target.composing||(e.dateOfGet=t.target.value)}}}),a("label",{staticClass:"field__label",attrs:{for:"country"}},[e._v("дата выдачи*")])])],2)])},S=[],x={name:"tabThird",setup(){return{$v:(0,n.ZP)()}},data(){return{type:"",serial:"",number:"",whoGives:"",dateOfGet:""}},mounted(){localStorage.type&&(this.type=localStorage.type),localStorage.serial&&(this.serial=localStorage.serial),localStorage.number&&(this.number=localStorage.number),localStorage.whoGives&&(this.whoGives=localStorage.whoGives),localStorage.dateOfGet&&(this.dateOfGet=localStorage.dateOfGet)},watch:{type(e){localStorage.type=e},serial(e){localStorage.serial=e},number(e){localStorage.number=e},whoGives(e){localStorage.whoGives=e},dateOfGet(e){localStorage.dateOfGet=e}},validations(){return{type:{required:c.BM.withMessage("Выберите тип документа",c.C1)},dateOfGet:{required:c.BM.withMessage("Поле не может быть пустым",c.C1)}}}},N=x,w=(0,v.Z)(N,$,S,!1,null,null,null),M=w.exports,P={name:"App",setup(){return{$v:(0,n.ZP)()}},components:{tab1:_,tab2:y,tab3:M},data(){return{currentTab:"1",tabs:["1","2","3"],email:"",active:"",submitStatus:""}},computed:{currentTabComponent:function(){return"tab-"+this.currentTab.toLowerCase()}},methods:{sendForm(){this.$v.$touch(),this.$v.$invalid?this.submitStatus="ERROR":localStorage.email&&localStorage.firstName&&localStorage.lastName&&localStorage.birthDate&&localStorage.phone&&localStorage.multi&&localStorage.city&&localStorage.type&&localStorage.dateOfGet&&(alert("Спасибо, форма отправлена"),this.cleanForm())},next(){"1"===this.currentTab?this.currentTab="2":"2"===this.currentTab&&(this.currentTab="3")},prev(){"3"===this.currentTab?this.currentTab="2":"2"===this.currentTab&&(this.currentTab="1")},cleanForm(){localStorage.clear(),setTimeout((()=>{this.$refs.clear.reset()}),100)},cleanErrors(){this.$v.$reset()}}},k=P,O=(0,v.Z)(k,r,l,!1,null,null,null),G=O.exports,B=a(706);i.Z.use(B.ZP),i.Z.config.productionTip=!1,i.Z.use(n.ZP),new i.Z({render:function(e){return e(G)}}).$mount("#app")}},t={};function a(i){var r=t[i];if(void 0!==r)return r.exports;var l=t[i]={exports:{}};return e[i](l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,i,r,l){if(!i){var s=1/0;for(u=0;u<e.length;u++){i=e[u][0],r=e[u][1],l=e[u][2];for(var o=!0,n=0;n<i.length;n++)(!1&l||s>=l)&&Object.keys(a.O).every((function(e){return a.O[e](i[n])}))?i.splice(n--,1):(o=!1,l<s&&(s=l));if(o){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[i,r,l]}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,l,s=i[0],o=i[1],n=i[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(n)var u=n(a)}for(t&&t(i);c<s.length;c++)l=s[c],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(u)},i=self["webpackChunkmultipage_form"]=self["webpackChunkmultipage_form"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(407)}));i=a.O(i)})();
//# sourceMappingURL=app.edc5ff3a.js.map