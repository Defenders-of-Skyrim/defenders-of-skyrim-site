/* eslint-disable no-param-reassign */
import _Vue from 'vue';
import APIFetch from './APIFetch';

export default function CockpitAPI(Vue: typeof _Vue): void {
  Vue.prototype.$getChangelog = () => APIFetch.getChangelog();

  Vue.prototype.$getMods = () => APIFetch.getMods();
}
