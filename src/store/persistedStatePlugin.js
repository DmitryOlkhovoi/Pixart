import { List } from 'immutable';

export default (store) => {
  const savedPixels = localStorage.getItem('pixart:pixels');

  if (savedPixels) {
    const pixels = List(JSON.parse(savedPixels));
    store.state.pixels = pixels;
    store.state.snapshots = [pixels];
  }

  store.subscribe((mutation, state) => {
    if (mutation.type === 'makeSnapshot' || mutation.type === 'clearAll') {
      localStorage.setItem('pixart:pixels', JSON.stringify(state.pixels.toJS()));
    }
  });
};
