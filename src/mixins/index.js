/**
 * import and init GLOBAL mixins
 */

import Vue from 'vue'

import jumpTo from '../mixins/jumpTo'
import formatDateTime from '../mixins/formatDateTime'

Vue.mixin(jumpTo)
Vue.mixin(formatDateTime)
