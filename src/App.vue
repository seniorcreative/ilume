<template>
  <div>
      <!-- Use HTML5 semantics -->
      <header-bar @on-search="search"></header-bar>
      <router-view @on-page-change="changePage" :search="searchValue"></router-view>
      <footer-bar :currentPage="currentPage"></footer-bar>
  </div>
</template>

<script>
import FooterBar from './components/FooterBar.vue'
import HeaderBar from './components/HeaderBar.vue'

export default {
  name: 'App',
  data () {
    return {
      currentPage: 1,
      searchValue: ''
    }
  },
  methods: {
    changePage (pageNumber) {
      this.currentPage = pageNumber
    },
    search (searchString) {
      this.searchValue = searchString
      this.$router.push({ name: 'home', params: { pg: this.currentPage, q: this.searchValue } })
    }
  },
  components: {
    HeaderBar,
    FooterBar
  }
}
</script>

<style lang="scss">
@import './assets/main.scss';
</style>
