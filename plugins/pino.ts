import Vue from 'vue';
import pino, { Logger } from 'pino';

declare module 'vue/types/vue' {
  interface Vue {
    $log: Logger;
  }
}

const log = pino();
log.level = process.env.LOG_LEVEL || 'info';

Vue.prototype.$log = log;
