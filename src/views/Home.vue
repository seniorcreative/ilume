<template>
  <section v-if="mortyData && mortyData.results">
      <h1>Search</h1>
      <button type="button" class="button has-text-centered" @click="toggleModal">Toggle Modal <i class="icon-loop2"></i></button>
      <!-- 12 column content grid -->
      <div class="container">
        <section class="cols is-wrappable">
          <div class="col is-3" v-for="(character, c) in mortyData.results" v-bind:key="c">
            <p>{{character.name}}</p>
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
