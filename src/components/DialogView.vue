<template>
  <div class="modal">
    <div class="modal-content">
      <button type="button" @click="closeModal"><i class="icon-cross">Exit</i></button>
      <h2>Welcome to the Rick and Morty Show</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DialogView',
  methods: {
    closeModal () {
      this.$emit('onCloseModal')
    }
  }
}
</script>

<style lang="scss">

</style>
