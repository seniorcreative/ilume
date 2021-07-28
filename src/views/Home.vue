<template>
  <section v-if="mortyData && mortyData.results">
      <!-- TODO: Search bar -->
      <h1>Search</h1>
      <!-- 12 column content grid -->
      <div class="container">
        <section class="cols is-wrappable">
          <div @click="toggleModal" class="col is-3 is-clickable" v-for="(character, c) in mortyData.results" v-bind:key="c">
            <character>
              <p>{{character.name}}</p>
              <img :src="character.image" :alt="'image for '+character.name" width="20" height="20">
            </character>
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
  data () {
    return {
      showModal: false,
      mortyData: null
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

</style>
