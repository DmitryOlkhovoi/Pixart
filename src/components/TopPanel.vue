<template>
  <div>
    <b-button-group size="sm">
      <b-button @click="zoomOut">
        <i class="fas fa-minus"></i>
      </b-button>
      <span class="zoom-indicator">{{scaleText}}</span>
      <b-button @click="zoomIn">
        <i class="fas fa-plus"></i>
      </b-button>
    </b-button-group>
    <b-button-group size="sm">
      <b-button :disabled="!undoIsPossible" @click="undo">
        <i class="fas fa-undo-alt"></i>
        Undo
      </b-button>
      <b-button :disabled="!redoIsPossible" @click="redo">
        <i class="fas fa-redo-alt"></i>
        Redo
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
    ...mapGetters(['undoIsPossible', 'redoIsPossible']),
    scaleText() {
      return `${100 * this.scale}%`
    }
  },
  methods: {
    ...mapMutations([
      'prevSnapshot',
      'nextSnapshot'
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
  }
}
</script>

<style scoped>
  .zoom-indicator {
    padding: 2px 10px;
    border: 1px solid #6b757c;
  }
</style>
