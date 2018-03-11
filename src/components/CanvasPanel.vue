<template>
  <div>
    <Canvas :pixels="pixels" :scale="scale" @onPixelClick="onPixelClick" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Canvas from './Canvas'

export default {
  name: 'CanvasPanel',
  components: { Canvas },
  props: ['scale', 'color'],
  computed: mapState({
    pixels: state => state.pixels,
  }),
  methods: {
    ...mapMutations([
      'fillPixel'
    ]),
    onPixelClick(index) {
      this.fillPixel({
        index,
        color: this.color.hex,
      })
    }
  } 
}
</script>

<style scoped>
</style>
