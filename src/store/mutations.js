import { List } from 'immutable';

export const defaultState = {
  pixels: List(new Array(100 * 100).fill(null)),
};

export const mutations = {
  fillPixel(state, payload) {
    const { index, color } = payload;

    state.pixels = state.pixels.set(index, color);
  },

  fillPixels(state, payload) {
    state.pixels = payload.reduce(
      (acc, current) => acc.set(current.index, current.color), state.pixels,
    );
  },
};

export default {
  defaultState,
  mutations,
};
