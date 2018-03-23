import { List } from 'immutable';

export const defaultState = {
  pixels: List(new Array(100 * 100).fill(null)),
};

export const mutations = {
  fillPixel(state, payload) {
    const { index, color } = payload;

    // state.pixels.splice(index, 1, color);

    state.pixels = state.pixels.set(index, color);
  },
};

export default {
  defaultState,
  mutations,
};
