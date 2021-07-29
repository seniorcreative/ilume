<template>
  <div class="modal">
    <div class="modal-content is-relative">
      <div @click="closeModal" class="is-absolute is-clickable" style="top: 1em; right: 1em;"><font-awesome-icon :icon="['fa', 'times-circle']" /></div>
      <h2>Welcome to the Rick and Morty Show</h2>
      <article></article>
      <div></div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'DialogView',
  props: {
    characterData: Object
  },
  components: {
    FontAwesomeIcon
  },
  methods: {
    closeModal () {
      this.$emit('onCloseModal')
    }
  }
}
</script>

<style lang="scss">

</style>
