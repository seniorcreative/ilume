<template>
  <header>
    <div class="search-input-wrapper is-relative">
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

<style lang="scss">

</style>
