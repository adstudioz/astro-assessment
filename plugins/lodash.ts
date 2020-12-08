import Vue from 'vue';
import lodash, { LoDashStatic } from 'lodash';

declare module 'vue/types/vue' {
  interface Vue {
    $lodash: LoDashStatic;
  }
}

Vue.prototype.$lodash = lodash;
