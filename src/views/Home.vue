<template>
  <section v-if="mortyData && mortyData.results">
      <!-- 12 column content grid -->
      <div class="container">
        <section class="cols is-wrappable">
          <div @click="toggleModal" class="col is-3 is-clickable" v-for="(character, c) in mortyData.results" v-bind:key="c">
              <div class="char has-text-centered">
                <img :src="character.image" :alt="'image for '+character.name" class="char-image" >
                <small>{{character.name}}</small>
              </div>
          </div>
        </section>
        <p class="has-text-centered">{{currentPage}}</p>
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
  data () {
    return {
      showModal: false,
      mortyData: null,
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
    searchCharacter (pattern) {
      // Search through this page.
    },
    pageChange (pageNum) {
      const axiosInstance = axios.create()
      axiosInstance.get(`/character/?page=${pageNum}`)
        .then(res => {
          this.setData(res.data)
        })
    }
  },
  watch: {
    $route: function (p) {
      this.currentPage = Number(this.$route.params.pg)
      this.pageChange(this.currentPage)
    }
  },
  created () {
    const axiosInstance = axios.create()
    axiosInstance.get('/character/')
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
</style>
