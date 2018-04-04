<template>
  <div>
    <b-button-group size="sm">
      <b-button @click="zoomOut">
        <i class="fas fa-search-minus"></i>
      </b-button>
      <span class="zoom-indicator">{{scaleText}}</span>
      <b-button @click="zoomIn">
        <i class="fas fa-search-plus"></i>
      </b-button>
      <b-button :disabled="!undoIsPossible" @click="undo">
        <i class="fas fa-undo-alt"></i>
        Undo
      </b-button>
      <b-button :disabled="!redoIsPossible" @click="redo">
        <i class="fas fa-redo-alt"></i>
        Redo
    </b-button>
    <b-button :disabled="!clearIsPossible" @click="clearConfirm">
      <i class="fas fa-trash-alt"></i>
      Clear
    </b-button>
    </b-button-group>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'TopPanel',
  props: ['scale'],
  computed: {
    ...mapGetters(['undoIsPossible', 'redoIsPossible', 'clearIsPossible']),
    scaleText() {
      return `${100 * this.scale}%`
    },
  },
  methods: {
    ...mapMutations([
      'prevSnapshot',
      'nextSnapshot',
      'clearAll'
    ]),
    zoomOut() {
      if (this.scale > 0.5) {
        this.$emit('zoomOut')
      }
    },
    zoomIn() {
      if (this.scale < 20) {
        this.$emit('zoomIn')
      }
    },
    undo() {
      this.prevSnapshot()
    },
    redo() {
      this.nextSnapshot()
    },
    clearConfirm() {
      if (confirm('Clear canvas?')) {
        this.clearAll()
      }
    }
  }
}
</script>

<style scoped>
  .zoom-indicator {
    padding: 2px 10px;
    border: 1px solid #6b757c;
  }
</style>
