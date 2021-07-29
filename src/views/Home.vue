<template>
  <section v-if="mortyData && mortyData.results">
      <!-- 12 column content grid -->
      <div class="container">
        <section class="cols is-wrappable  content-section">
          <div @click="showCharacter(character)" class="col is-clickable" v-bind:class="gridClass" v-for="(character, c) in getMortyData()" v-bind:key="c">
              <character :char="character" :delay="c"></character>
          </div>
        </section>
      </div>
      <transition name="fade">
        <dialog-view @on-close-modal="toggleModal" :characterData="characterData" v-if="showModal" />
      </transition>
  </section>
  <loader-view v-if="isLoading" />
</template>

<script>
import DialogView from '../components/DialogView.vue'
import LoaderView from '../components/LoaderView.vue'
import Character from '../components/Character.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: { DialogView, LoaderView, Character },
  props: {
    search: String
  },
  data () {
    return {
      showModal: false,
      mortyData: null,
      mortySearchData: null,
      currentPage: 1,
      selectedCharacterIndex: null,
      characterData: null,
      isLoading: false,
      windowWidth: window.innerWidth,
      gridClass: 'is-4'
    }
  },
  methods: {
    toggleModal () {
      this.showModal = !this.showModal
    },
    setData (data) {
      this.mortyData = data
    },
    getMortyData () {
      // Are we searching?
      return this.search ? this.mortySearchData.results : this.mortyData.results
    },
    searchCharacter (pattern) {
      // Search through this page.
      const tmpData = []
      for (let m = 0; m < this.mortyData.results.length; m++) {
        const character = this.mortyData.results[m]
        if (character.name.toLowerCase().includes(pattern.toLowerCase())) {
          tmpData.push(character)
        }
      }
      this.mortySearchData = { info: this.mortyData.info, results: tmpData }
    },
    showCharacter (character) {
      // Load character data then show the modal
      // Show the loader
      this.isLoading = true
      // Load... with a small UX delay for humans
      const scope = this
      const axiosInstance = axios.create()
      axiosInstance.get(`/character/${character.id}`)
        .then(res => {
          this.characterData = res
          this.toggleModal()
          setTimeout(() => {
            scope.isLoading = false
          }, 250)
        })
        // TODO: catch and manage errors
    },
    pageChange (pageNum) {
      // Clear the data
      this.setData(null)
      // Go to page top
      window.scrollTo(0, 0)
      // Show the loader
      this.isLoading = true
      // Load... with a small UX delay for humans
      const scope = this
      setTimeout(() => {
        const axiosInstance = axios.create()
        axiosInstance.get(`/character/?page=${pageNum}`)
          .then(res => {
            scope.setData(res.data)
            // Turn off loading mode... with a small UX delay for humans
            setTimeout(() => {
              scope.isLoading = false
            }, 250)
            scope.$emit('onPageChange', pageNum)
          })
        // TODO: catch and manage errors
      }, 250)
    },
    onResize (w) {
      this.windowWidth = window.innerWidth
    }
  },
  watch: {
    $route (p) {
      this.currentPage = Number(this.$route.params.pg)
      this.pageChange(this.currentPage)
    },
    search (s) {
      this.searchCharacter(s)
    },
    windowWidth () {
      this.gridClass = this.windowWidth < 768 ? 'is-4' : 'is-3'
    }
  },
  mounted () {
    this.pageChange(1)
    window.addEventListener('resize', this.onResize)
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

<style lang="scss">
  .content-section {
    padding: 2em
  }
</style>
