<template>
  <div>
    <Canvas
      :pixels="pixels"
      :scale="scale"
      @onClick="onClick"
      @onMouseDown="onMouseDown"
      @onMouseMove="onMouseMove"
      @onMouseUp="onMouseUp"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import bresenham from 'bresenham'
import Canvas from './Canvas'
import { getFlatIndex } from '@/utils'

export default {
  name: 'CanvasPanel',
  components: { Canvas },
  props: ['scale', 'color'],

  data: () => ({
    paint: false,
    lastPixel: null,
  }),

  computed: mapState({
    pixels: state => state.pixels,
  }),

  methods: {
    ...mapMutations([
      'fillPixel',
      'fillPixels',
      'makeSnapshot'
    ]),
    
    fillPixelWithColor([x, y]) {
      this.fillPixel({
        index: getFlatIndex(x, y, 100),
        color: this.color.hex,
      })
    },

    fillPixelsWithColor(pixels) {
      this.fillPixels(pixels.map(({x, y}) => ({
        index: getFlatIndex(x, y, 100),
        color: this.color.hex,
      })))
    },

    fillLine(fromPixel, toPixel) {
      const [x1, y1] = fromPixel
      const [x2, y2] = toPixel
      const pixelsToFill = bresenham(x1, y1, x2, y2)

      this.fillPixelsWithColor(pixelsToFill)
    },

    onClick(pixel) {
      this.fillPixelWithColor(pixel)
    },

    onMouseDown() {
      this.paint = true
    },

    onMouseMove(pixel) {
      if (this.paint) {
        if (!this.lastPixel) {
          this.lastPixel = pixel
        } else {
          this.fillLine(this.lastPixel, pixel)
          this.lastPixel = pixel
        }
      }
    },

    onMouseUp() {
      this.paint = false
      this.lastPixel = null
      this.makeSnapshot()
    },
  } 
}
</script>

<style scoped>
</style>
