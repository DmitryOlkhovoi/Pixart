<template>
  <div class="RightPanel-wrapper">
    <Compact v-model="color" @input="updateValue" />
    <Chrome v-model="color" @input="updateValue" />
    <small class="form-text text-muted">Choose any color you want</small>
  </div>
</template>

<script>
import { Chrome, Compact } from 'vue-color'

export default {
  name: 'RightPanel',
  components: { Chrome, Compact },
  data: () => ({
    color: {
      hex: '#000'
    }
  }),
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>
  .RightPanel-wrapper {
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .vc-compact {
    width: 245px;
  }

  .vc-chrome {
    margin-top: 20px;
    margin-bottom: 10px;
  }
</style>
