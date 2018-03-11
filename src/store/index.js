import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import { defaultState, mutations } from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: defaultState,
  actions,
  getters,
  mutations,
});
