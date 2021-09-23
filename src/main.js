import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store';
Vue.config.productionTip = false;
Vue.config.devtools=true;
new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
