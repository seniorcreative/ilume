<template>
  <div class="modal">
    <div class="modal-content is-relative has-text-left" v-if="characterData">
      <div @click="closeModal" class="is-absolute is-clickable" style="top: 1em; right: 1em;">
        <font-awesome-icon :icon="['fa', 'times-circle']" />
      </div>
      <h2>{{characterData.data.name}}</h2>
      <small><font-awesome-icon :icon="['fa', 'map-marker-alt']" />&nbsp;&nbsp;{{characterData.data.location.name || 'N/A'}}</small>
      <div class="cols">
        <div class="col is-half">
          <img :src="characterData.data.image" class='char-image'>
        </div>
        <div class="col is-half">
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
          </div>
        </article>
        </div>
      </div>
      <div class="border-line"></div>
      <button type="button" @click="getEpisodes" class="button is-smaller is-plain is-padless-h is-clickable">
        <span v-if="!showEpisodes">Show</span>
        <span v-if="showEpisodes">Hide</span> episodes
        <font-awesome-icon v-if="!showEpisodes" :icon="['fa', 'chevron-down']" />
        <font-awesome-icon v-if="showEpisodes" :icon="['fa', 'chevron-up']" />
      </button>
      <p v-if="showEpisodes">{{characterFirstName}} is in {{numEpisodes}} episodes &hellip; scroll for more</p>
      <div class="episodes" v-if="episodeData" v-show="showEpisodes">
          <ol v-for="(ep, i) in episodeData" v-bind:key="i">
            <li>
              <a :href="'https://rickandmortyapi.com/api/episode/' + ep.id" target="_blank">{{ep.id}}.&nbsp;{{ep.name}}&nbsp;<font-awesome-icon :icon="['fa', 'external-link-alt']" />
              </a>
            </li>
          </ol>
      </div>
      <div class="border-line"></div>
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
    },
    characterFirstName () {
      return this.characterData.data.name ? this.characterData.data.name.split(' ')[0] : 'N/A'
    },
    numEpisodes () {
      return this.characterData.data.episode ? this.characterData.data.episode.length : '-'
    }
  }
}
</script>

<style lang="scss">
  h2 {
    margin: 0.5em 0;
    font-weight: bold;
    font-size: 1.25em;
  }
  small, p {
    font-size: 0.8em;
    font-family: 'Courier New', Courier, monospace;
  }
  label {
    display: inline-block;
    min-width: 80px;
    font-family: 'Courier New', Courier, monospace;
    margin-right: 0.5em;
    font-weight: normal;
  }
  .episodes {
    margin: 1em 0;
    height: 25vh;
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.7em;
    line-height: 1;
    overflow: scroll;
    text-align: left;
    a {
      display: inline-block;
      margin-bottom: 10px;
      text-decoration: none;
      color: black;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .data-row {
    margin: 0 0 0.5em 0;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
  }
  .char-image {
    margin: 0.5em 0;
    border-radius: 20px;
    max-width: 150px;
    height: auto;
  }
  article {
    margin: 1em 0;
  }
  .border-line {
    border-top: 1px solid #222;
    width: 100%;
  }
</style>
