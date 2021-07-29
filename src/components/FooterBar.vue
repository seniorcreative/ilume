<template>
  <footer class="footer is-flex is-flex-spread is-flex-level container is-fixed">
    <!-- Left Chevron -->
    <router-link :to="{ name: 'home', params: {pg: Math.max(1, currentPage -1), q: ''}}" class="button button-round button-round-left is-clickable">
      <font-awesome-icon class="is-relative" style="left: -3px;" :icon="['fa', 'chevron-left']" />
    </router-link>
    <!--  Page Number -->
    <!-- TODO: Implement loading mechanism... -->
    <p class="size-2 is-light">Page {{currentPage}} / 34</p>
    <!-- Right Chevron -->
    <!-- TODO: Wire to max pages -->
    <router-link :to="{ name: 'home', params: {pg: Math.min(34, currentPage + 1), q: ''}}" class="button button-round button-round-right is-clickable">
      <font-awesome-icon :icon="['fa', 'chevron-right']" />
    </router-link>
  </footer>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'FooterBar',
  components: { FontAwesomeIcon },
  props: {
    currentPage: Number
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer {
    margin: 0;
    width: calc(100% - 2em);
    background: #000;
    padding: 1em 3em;
    border-radius: 12px;
    bottom: 1em;
    left: 1em;
  }
  .button-round {
    border-radius: 50%;
    width: 36px;
    height: 36px;
    background: #555;
    text-align: center;
    border: 2px solid greenyellow;
    color: greenyellow;
    transition: all 0.2s ease-in-out;
    transform: scale(1);
    &-left {
      &:hover {
        transform: scale(1.1);
      }
    }
    &-right {
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .size-2 {
    font-size: 1em;
    width: 120px;
  }
</style>
