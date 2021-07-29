<template>
    <transition name="fade">
        <div class="char has-text-centered" v-if="isShowing">
            <img :src="char.image" :alt="'image for '+char.name" class="char-image" >
            <p class="name is-green">{{char.name}}</p>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'Character',
  props: {
    char: Object,
    delay: Number
  },
  data () {
    return {
      isShowing: false
    }
  },
  created () {
    const scope = this
    setTimeout(() => {
      scope.isShowing = true
    }, this.delay * 250)
  }
}
</script>

<style lang="scss">
  .name {
    font-size: 1.2em;
    padding: 0.25em 0;
   }
  .char {
    transition: all 0.3s ease;
    transform: scale(1);
    &:hover {
      transform: scale(1.1);
    }
  }
  .char-image {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: auto;
    border-radius: 12px;
  }
</style>
