<template>
    <transition name="fade">
        <div class="char has-text-centered" v-if="isShowing">
            <img :src="char.image" :alt="'image for '+char.name" class="char-image" >
            <small class="is-green">{{char.name}}</small>
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
    }, this.delay * 1000)
  }
}
</script>

<style lang="scss">
  .char {
    transition: all 0.3s ease;
    transform: scale(1);
    &:hover {
      transform: scale(1.1);
    }
  }
  .char-image {
    width: 100%;
    height: auto;
    border-radius: 12px;
  }
</style>
