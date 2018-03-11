<template>
  <div class="wrapper">
    <div class="top-panel">
      top panel
    </div>
    <div>
      <CanvasPanel :scale="+scale" :color="color" />
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

export default {
  name: 'Index',
  components: { CanvasPanel, RightPanel },
  data: () => ({
    scale: 5,
    color: {
      hex: '#000'
    }
  }),
}
</script>

<style scoped>
  .top-panel {
    grid-column: 1/4;
  }
  .wrapper {
    display: grid;
    grid-template-columns: 2fr 300px;
    padding: 20px;
  }
</style>
