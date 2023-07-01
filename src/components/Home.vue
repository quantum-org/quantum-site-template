<template>
  <div class="grid grid-cols-1 place-items-center container">
    <div class="video-container">
      <iframe :src="config.frontpage_yt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div>
      <br><br><br><br>
    </div>
    <div v-if="config.shows">
      <table class="table-auto table-hover align-middle">
        <tbody class>
          <tr v-for="(show, index) in shows" :key="index" class="border-b-0 md:border-b-4 border-gray-300 ">
            <td class="py-4 px-2 lg:px-4 text-white font-bold">{{ show.date }}</td>
            <td class="py-4 px-2 lg:px-20 text-white">{{ show.name}}</td>
            <td class="py-4 px-2 lg:px-16 text-white">{{ show.place}}</td>
            <td class="py-4 px-2 lg:px-4 text-white"><button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 rounded" v-on:click="openLink(show.link)">Event</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

import config from "../assets/config.json"
import showsList from "../assets/shows.json"

export default {
  data () {
    return {
      config: config,
      shows: showsList
    }
  },
  methods:{
      openLink: function (link) {
          window.open(link, "_blank");
      }
  }
}
</script>

<style scoped>

</style>
