<template>
  <div class="wrapper">
    <div class="top-panel">
      <TopPanel :scale="scale" @zoomIn="zoomIn" @zoomOut="zoomOut" />
    </div>
    <div>
      <CanvasPanel :scale="scale" :color="color" />
    </div>
    <div>
      <RightPanel v-model="color" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import CanvasPanel from '@/components/CanvasPanel'
import RightPanel from '@/components/RightPanel'
import TopPanel from '@/components/TopPanel'

export default {
  name: 'Index',
  components: { CanvasPanel, RightPanel, TopPanel },
  data: () => ({
    scale: 5,
    color: {
      hex: '#000'
    }
  }),
  methods: {
    zoomIn() {
      this.scale += 0.5
    },
    zoomOut() {
      this.scale -= 0.5
    }
  }
}
</script>

<style scoped>
  .top-panel {
    grid-column: 1/4;
    padding-bottom: 20px;
  }
  .wrapper {
    display: grid;
    grid-template-columns: 2fr 300px;
    padding: 20px;
  }
</style>
