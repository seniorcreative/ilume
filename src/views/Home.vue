<template>
  <section>
      <h1>Title</h1>
      <dialog-view></dialog-view>
  </section>
</template>

<script>
import DialogView from '../components/DialogView.vue'

export default {
  name: 'Home',
  components: { DialogView }
}
</script>

<style lang="scss">
  section {
    height: calc(100vh - 200px);
  }
</style>
