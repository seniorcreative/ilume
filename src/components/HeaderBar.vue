<template>
  <header class="is-flex is-flex-spread">
    <img src="../assets/Rick_and_Morty.png" width="150">
    <div class="search-input-wrapper is-relative is-inline-flex">
      <input type="text" class="input" name="search" placeholder="Search...">
      <font-awesome-icon :icon="['fa', 'search']" class="is-absolute" style="top: 2px; right: 12px;" />
    </div>
  </header>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'HeaderBar',
  components: { FontAwesomeIcon }
}
</script>

<style lang="scss" scoped>
  header {
    background: black;
    padding: 2em;
    width: 100%;
  }
</style>
