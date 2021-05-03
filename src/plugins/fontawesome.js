import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCogs)
library.add(faHouseUser)

Vue.component('font-awesome-icon', FontAwesomeIcon)
