export const defaultState = {
  pixels: new Array(100 * 100).fill(null),
};

export const mutations = {
  fillPixel(state, payload) {
    const { index, color } = payload;

    state.pixels.splice(index, 1, color);
  },
};

export default {
  defaultState,
  mutations,
};
