import Vue from 'vue'
import App from './App.vue'

// Import thư viện Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fab, fas, far)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  el: '#app',
  render: h => h(App)
})
