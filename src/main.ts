import { createApp } from 'vue'
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons'



library.add(faBars,faArrowLeft,faChevronDown, faArrowRightLong)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
