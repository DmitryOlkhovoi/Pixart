import Vue from 'vue';
import Vuex from 'vuex';
import { List } from 'immutable';
import persistedStatePlugin from './persistedStatePlugin'
import actions from './actions';
import getters from './getters';
import { defaultState, mutations } from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [persistedStatePlugin],
  state: defaultState,
  actions,
  getters,
  mutations,
});
