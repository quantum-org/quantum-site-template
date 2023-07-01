<template>
<div class="md:container">
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li v-if="config.music.bandcamp.enabled" class="pb-px-2 mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-white bg-black ': openTab !== 1, 'text-white bg-black border-b-0 md:border-b-4 border-gray-300': openTab === 1}">
            <i class="fas fa-space-shuttle text-base mr-1"></i> Bandcamp
          </a>
        </li>
        <li v-if="config.music.spotify.enabled" class="mr-2 last:mr-0 flex-auto text-center">
          <a class="pb-px-2 text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-white bg-black': openTab !== 2, 'text-white bg-black border-b-0 md:border-b-4 border-gray-300': openTab === 2}">
            <i class="fas fa-cog text-base mr-1"></i> Spotify
          </a>
        </li>
        <li v-if="config.music.youtube.enabled" class="mr-2 last:mr-0 flex-auto text-center">
          <a class="pb-px-2 text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-white bg-black': openTab !== 3, 'text-white bg-black border-b-0 md:border-b-4 border-gray-300': openTab === 3}">
            <i class="fas fa-briefcase text-base mr-1"></i> Youtube
          </a>
        </li>
        <li v-if="config.music.amazonmusic.enabled" class="mr-2 last:mr-0 flex-auto text-center">
          <a class="pb-px-2 text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(4)" v-bind:class="{'text-white bg-black': openTab !== 4, 'text-white bg-black border-b-0 md:border-b-4 border-gray-300': openTab === 4}">
            <i class="fas fa-briefcase text-base mr-1"></i> Amazon Music
          </a>
        </li>
        <li v-if="config.music.applemusic.enabled" class="mr-2 last:mr-0 flex-auto text-center">
          <a class="pb-px-2 text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(5)" v-bind:class="{'text-white bg-black': openTab !== 5, 'text-white bg-black border-b-0 md:border-b-4 border-gray-300': openTab === 5}">
            <i class="fas fa-briefcase text-base mr-1"></i> Apple Music
          </a>
        </li>
      </ul>
      <div class="relative flex flex-col min-w-0 break-words bg-black w-full mb-6 shadow-lg rounded">
        <div class="px-py-2 pb-1 lg:px-4 lg:py-5 flex-auto">
          <div class="tab-content tab-space text-white">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
              <iframe class="embed-responsive-item" style="border: 0;" height="450" :src="config.music.bandcamp.link" seamless><a :href="config.social_networks.bandcamp.link"></a>a</iframe>
            </div>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                <iframe class="embed-responsive-item" :src="config.music.spotify.link" height="450" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
            <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3, 'video-container': openTab === 3 }">
                <iframe :src="config.music.youtube.link" title="YouTube video player" height="56,25" width="100%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div v-bind:class="{'hidden': openTab !== 4, 'block': openTab === 4}">
                <iframe class="embed-responsive-item" id="AmazonMusicEmbed" :src="config.music.amazonmusic.link" height='550px' style="border:1px solid rgba(0, 0, 0, 0.12);max-width:"></iframe>
            </div>
            <div v-bind:class="{'hidden': openTab !== 5, 'block': openTab === 5}">
                <iframe class="embed-responsive-item" allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" :src="config.music.applemusic.link"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import config from '../assets/config.json'

export default {
  name: "blueGray-tabs",
  data() {
    return {
      openTab: 1,
      config: config
    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  }
}
</script>
