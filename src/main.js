import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import VueProgressBar from 'vue-progressbar';
import App from './App.vue';
import './registerServiceWorker';
// import './plugins/material';

const options = {
  color: '#fa00ed',
  failedColor: '#874b4b',
  thickness: '5px',
  // transition: {
  //   speed: '0.2s',
  //   opacity: '0.6s',
  //   termination: 300,
  // },
  autoRevert: true,
  location: 'top',
  inverse: false,
};

Vue.use(VueProgressBar, options);
// Vue.use(VueProgressBar, {
//   color: 'rgb(143, 255, 199)',
//   failedColor: 'red',
//   height: '2px',
// });

Vue.use(VueMaterial);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
