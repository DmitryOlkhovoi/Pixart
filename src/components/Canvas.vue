<template>
  <div ref="canvasWrapper" class="Canvas-wrapper">
    <canvas
      ref="canvas"
      @click="onClick"
      @mousedown="onMouseDown"
      @mousemove="onMouseMove"
      @mouseup="onMouseUp"
      :width="width"
      :height="height"
      :style="`width: ${scale * width}px; height: ${scale * height}px;`"
    >
    </canvas>
  </div>
</template>

<script>
import { List } from 'immutable'

export default {
  name: 'Canvas',
  props: {
    scale: {
      type: Number,
      default: 5,
    },
    width: {
      type: Number,
      default: 100,
    },
    height: {
      type: Number,
      default: 100,
    },
    pixels: {
      type: Object,
      default: () => List(),
    },
  },
  mounted() {
    this.context = this.$refs.canvas.getContext('2d');
    this.renderCanvas();
  },
  watch: {
    pixels() {
      this.renderCanvas();
    }
  },
  methods: {
    getFlatIndex(x, y) {
      return x + y * this.width;
    },

    getPixelCoordinates(e) {
      return [
        Math.floor((e.pageX - this.$refs.canvas.offsetLeft + this.$refs.canvasWrapper.scrollLeft) / this.scale),
        Math.floor((e.pageY - this.$refs.canvas.offsetTop + this.$refs.canvasWrapper.scrollTop) / this.scale),
      ];
    },

    onClick(e) {
      this.$emit('onClick', this.getPixelCoordinates(e))
    },

    onMouseDown() {
      this.$emit('onMouseDown')
    },

    onMouseMove(e) {
      this.$emit('onMouseMove', this.getPixelCoordinates(e))
    },

    onMouseUp() {
      this.$emit('onMouseUp')
    },

    renderPixel(x, y) {
      let fillColor = this.pixels.get(this.getFlatIndex(x, y));

      if (!fillColor) {
        fillColor = (x + y) % 2 === 0 ? '#e7e7e7' : 'white';
      }
      
      this.context.fillStyle = fillColor
      this.context.fillRect(x, y, 1, 1);
    },

    renderPixels() {
      this.context.clearRect(0, 0, this.width, this.height);
      for (let x = 0; x < this.width; x += 1) {
        for (let y = 0; y < this.height; y += 1) {
          this.renderPixel(x, y)
        }
      }
    },
    
    renderCanvas() {
      this.renderPixels()
    },
  },
};
</script>

<style scoped>
  canvas {
    image-rendering: -moz-crisp-edges;
    image-rendering: -webkit-crisp-edges;
    image-rendering: pixelated;
    image-rendering: crisp-edges;
  }

  .Canvas-wrapper {
    display: block;
    overflow: scroll;
    height: 570px;
    max-width: 1100px;
  }
</style>
