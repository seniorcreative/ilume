<template>
  <div class="modal">
    <div class="modal-content is-relative" v-if="characterData">
      <div @click="closeModal" class="is-absolute is-clickable" style="top: 1em; right: 1em;"><font-awesome-icon :icon="['fa', 'times-circle']" /></div>
      <h2>{{characterData.data.name}}</h2>
      <img :src="characterData.data.image">
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
      <button type="button" @click="toggleEpisodes" class="button">Episodes
        <font-awesome-icon v-if="!showEpisodes" :icon="['fa', 'chevron-down']" />
        <font-awesome-icon v-if="showEpisodes" :icon="['fa', 'chevron-up']" />
      </button>
      <div class="episodes" v-show="showEpisodes">
          <ol v-for="(ep, i) in characterData.data.episode" v-bind:key="i">
            <li><a :href="ep">{{ep}}</a></li>
          </ol>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'DialogView',
  props: {
    characterData: Object
  },
  data () {
    return {
      showEpisodes: false
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
    }

  }
}
</script>

<style lang="scss">
  .label {
    margin-right: 1em;
  }
  h2 {
    margin: 0 0 1em 0;
    font-weight: bold;
    font-size: 1.25em;
  }
  label, .episodes {
    font-family: 'Courier New', Courier, monospace;
  }
  .data-row {
    margin: 0 0 0.5em 0;
  }
  img {
    border-radius: 12px;
  }
  article {
    margin: 1em 0;
  }
</style>
