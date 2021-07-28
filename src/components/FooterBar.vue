<template>
  <footer class="is-flex is-flex-spread">
    <font-awesome-icon :icon="['fa', 'chevron-left']" />
    <font-awesome-icon :icon="['fa', 'chevron-right']" />
  </footer>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'FooterBar',
  components: { FontAwesomeIcon }
}
</script>

<style lang="scss">

</style>
