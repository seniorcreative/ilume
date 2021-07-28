<template>
  <footer class="is-flex is-flex-spread">
    <router-link :to="{ name: 'home', params: {pg: 1}}" class="button button-round is-clickable">
      <font-awesome-icon :icon="['fa', 'chevron-left']" />
    </router-link>
    <router-link :to="{ name: 'home', params: {pg: 2}}" class="button button-round  is-clickable">
      <font-awesome-icon :icon="['fa', 'chevron-right']" />
    </router-link>
  </footer>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'FooterBar',
  data () {
    return {
      currentPage: 1
    }
  },
  components: { FontAwesomeIcon }
}
</script>

<style lang="scss">

</style>
