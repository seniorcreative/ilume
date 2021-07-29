<template>
  <div class="modal">
    <div class="modal-content is-relative has-text-left" v-if="characterData">
      <div @click="closeModal" class="is-absolute is-clickable" style="top: 1em; right: 1em;"><font-awesome-icon :icon="['fa', 'times-circle']" /></div>
      <!-- <div class="is-flex is-flex-level"> -->
        <h2>{{characterData.data.name}}</h2>
        <img :src="characterData.data.image" class='char-image'>
      <!-- </div> -->
      <article class="has-text-left">
        <div class="character-data">

          <div class="data-row">
            <label>Status</label> {{characterData.data.status || 'N/A'}}
          </div>
          <div class="data-row">
            <label>Species</label> {{characterData.data.species || 'N/A'}}
          </div>
          <div class="data-row">
            <label>Type</label> {{characterData.data.type || 'N/A'}}
          </div>
          <div class="data-row">
            <label>Gender</label> {{characterData.data.gender || 'N/A'}}
          </div>
          <div class="data-row">
            <label>Location</label> {{characterData.data.location.name || 'N/A'}}
          </div>
        </div>
      </article>
      <button type="button" @click="getEpisodes" class="button is-smaller">Episodes
        <font-awesome-icon v-if="!showEpisodes" :icon="['fa', 'chevron-down']" />
        <font-awesome-icon v-if="showEpisodes" :icon="['fa', 'chevron-up']" />
      </button>
      <div class="episodes" v-if="episodeData" v-show="showEpisodes">
          <ol v-for="(ep, i) in episodeData" v-bind:key="i">
            <li><a :href="ep" target="_blank">{{ep.name}}</a></li>
          </ol>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'

export default {
  name: 'DialogView',
  props: {
    characterData: Object
  },
  data () {
    return {
      showEpisodes: false,
      episodeData: null
    }
  },
  components: {
    FontAwesomeIcon
  },
  methods: {
    closeModal () {
      this.$emit('onCloseModal')
    },
    toggleEpisodes () {
      this.showEpisodes = !this.showEpisodes
    },
    getEpisodes () {
      if (!this.showEpisodes) {
        const axiosInstance = axios.create()
        axiosInstance.get(`/episode/${this.episodeList}`)
          .then(res => {
            this.episodeData = res.data
            this.showEpisodes = true
          }
          )
      } else {
        this.showEpisodes = false
      }
    }
  },
  computed: {
    episodeList () {
      const Eps = this.characterData && this.characterData.data.episode.map(e => {
        return e.split('https://rickandmortyapi.com/api/episode/')[1]
      })
      return Eps.join(',')
    }
  }
}
</script>

<style lang="scss">
  h2 {
    margin: 0 0 1em 0;
    font-weight: bold;
    font-size: 1.25em;
  }
  label {
    display: inline-block;
    min-width: 80px;
    font-family: 'Courier New', Courier, monospace;
    margin-right: 1em;
    font-weight: normal;
  }
  .episodes {
    margin: 1em 0;
    max-height: 150px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.8em;
    line-height: 1.2;
    overflow: scroll;
    text-align: left;
    a {
      &:before {
        content: '•';
      }
      display: inline-block;
      margin-bottom: 10px;
      text-decoration: none;
      color: black;
    }
  }
  .data-row {
    margin: 0 0 0.5em 0;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
  }
  .char-image {
    border-radius: 20px;
    max-width: 150px;
    height: auto;
  }
  article {
    margin: 1em 0;
  }
</style>
