import { List } from 'immutable';

const defaultPixels = List(new Array(100 * 100).fill(null));

export const defaultState = {
  pixels: defaultPixels,
  snapshotPointer: 0,
  snapshots: [defaultPixels],
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

  clearAll(state) {
    state.snapshots = [defaultPixels];
    state.snapshotPointer = 0;
    state.pixels = state.snapshots[state.snapshotPointer];
  },

  makeSnapshot(state) {
    state.snapshotPointer += 1;
    state.snapshots.length = state.snapshotPointer;
    state.snapshots.push(state.pixels);
  },

  prevSnapshot(state) {
    state.snapshotPointer -= 1;
    state.pixels = state.snapshots[state.snapshotPointer];
  },

  nextSnapshot(state) {
    state.snapshotPointer += 1;
    state.pixels = state.snapshots[state.snapshotPointer];
  },
};

export default {
  defaultState,
  mutations,
};
