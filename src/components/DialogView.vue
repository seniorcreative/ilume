<template>
  <div class="modal">
    <div class="modal-content">
      <h2>Welcome to the Rick and Morty Show</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DialogView'
}
</script>

<style lang="scss">
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.2);
    &-content {
      padding: 1em;
      width: calc(80% - 2em);
      height: calc(80vh - 2em);
      margin: 10vh 10%;
      background-color: rgba(#fff, 0.8);
      border-radius: 5px;
    }
  }
</style>
