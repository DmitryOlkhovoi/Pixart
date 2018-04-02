<template>
   <b-button-group size="sm">
    <b-button @click="zoomOut">
      <i class="fas fa-minus"></i>
    </b-button>
    <span class="zoom-indicator">{{scaleText}}</span>
    <b-button @click="zoomIn">
      <i class="fas fa-plus"></i>
    </b-button>
  </b-button-group>
</template>

<script>
export default {
  name: 'TopPanel',
  props: ['scale'],
  computed: {
    scaleText() {
      return `${100 * this.scale}%`
    }
  },
  methods: {
    zoomOut() {
      if (this.scale > 0.5) {
        this.$emit('zoomOut')
      }
    },
    zoomIn() {
      if (this.scale < 20) {
        this.$emit('zoomIn')
      }
    }
  }
}
</script>

<style scoped>
  .zoom-indicator {
    line-height: 2;
    padding: 0 10px;
    border: 1px solid #6b757c;
  }
</style>
