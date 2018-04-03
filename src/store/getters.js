export default {
  undoIsPossible: state => state.snapshotPointer >= 1,
  redoIsPossible: state => state.snapshots.length - 1 > state.snapshotPointer,
};
