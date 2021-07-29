<template>
  <div class='modal is-flex is-flex-centered is-flex-level has-text-centered'>
      <font-awesome-icon class='loader-icon' :icon="['fa', 'cog']" />
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'Loader',
  components: { FontAwesomeIcon }
}
</script>

<style lang='scss' scoped>
    .loader-icon {
        color: greenyellow;
        font-size: 5em;
        animation: rotate 2s linear infinite;
    }
</style>
