const undoIsPossible = state => state.snapshotPointer >= 1;
const redoIsPossible = state => state.snapshots.length - 1 > state.snapshotPointer;

const clearIsPossible = state => undoIsPossible(state) || redoIsPossible(state);

export default {
  undoIsPossible,
  redoIsPossible,
  clearIsPossible,
};
