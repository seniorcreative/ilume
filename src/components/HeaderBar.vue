<template>
  <header class="is-flex is-flex-spread is-flex-level is-fixed">
    <router-link to="/1/" title="Back to page 1"><img src="../assets/Rick_and_Morty.png" width="150"></router-link>
    <div class="is-relative">
      <input type="text" class="input" v-model="searchValue" name="search" placeholder="Search...">
      <font-awesome-icon :icon="['fa', 'search']" class="is-absolute" style="top: 8px; right: 12px;" />
    </div>
  </header>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'HeaderBar',
  components: { FontAwesomeIcon },
  data () {
    return {
      searchValue: ''
    }
  },
  watch: {
    searchValue: function (s) {
      this.$emit('onSearch', s)
    }
  },
  methods: {
    onSearch (e) {
      console.log(`doing a search ${e}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  header {
    top: 0;
    left: 0;
    background: black;
    padding: 2em;
    width: 100%;
    z-index: 1;
  }
</style>
