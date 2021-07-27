<template>
  <div>
      <!-- Use HTML5 semantics -->
      <header-bar></header-bar>
      <router-view></router-view>
      <footer-bar></footer-bar>
  </div>
</template>

<script>
import FooterBar from './components/FooterBar.vue'
import HeaderBar from './components/HeaderBar.vue'

export default {
  name: 'App',
  components: {
    HeaderBar,
    FooterBar
  }
}
</script>

<style lang="scss">
@import './assets/main.scss';
</style>
