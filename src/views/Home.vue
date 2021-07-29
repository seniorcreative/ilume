<template>
  <section v-if="mortyData && mortyData.results">
      <!-- 12 column content grid -->
      <div class="container">
        <section class="cols is-wrappable  content-section">
          <div @click="toggleModal" class="col is-3 is-clickable" v-for="(character, c) in getMortyData()" v-bind:key="c">
              <div class="char has-text-centered">
                <img :src="character.image" :alt="'image for '+character.name" class="char-image" >
                <small class="is-light" style="display: block; margin: 5px 0;">{{character.name}}</small>
              </div>
          </div>
        </section>
      </div>
      <transition name="fade">
        <dialog-view @on-close-modal="toggleModal" v-if="showModal" />
      </transition>
  </section>
</template>

<script>
import DialogView from '../components/DialogView.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: { DialogView },
  props: {
    search: String
  },
  data () {
    return {
      showModal: false,
      mortyData: null,
      mortySearchData: null,
      currentPage: 1
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
      console.log('searching for ', pattern)
      const tmpData = []
      for (let m = 0; m < this.mortyData.results.length; m++) {
        const character = this.mortyData.results[m]
        if (character.name.toLowerCase().includes(pattern.toLowerCase())) {
          tmpData.push(character)
        }
      }
      console.log('tmpData', tmpData)
      this.mortySearchData = { info: this.mortyData.info, results: tmpData }
    },
    pageChange (pageNum) {
      const axiosInstance = axios.create()
      axiosInstance.get(`/character/?page=${pageNum}`)
        .then(res => {
          this.setData(res.data)
          this.$emit('onPageChange', pageNum)
        })
    }
  },
  watch: {
    $route: function (p) {
      this.currentPage = Number(this.$route.params.pg)
      this.pageChange(this.currentPage)
    },
    search: function (s) {
      this.searchCharacter(s)
    }
  },
  created () {
    const axiosInstance = axios.create()
    axiosInstance.get(`/character/?page=${this.currentPage}`)
      .then(res => {
        this.setData(res.data)
      })
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
  .content-section {
    padding: 2em
  }
</style>
