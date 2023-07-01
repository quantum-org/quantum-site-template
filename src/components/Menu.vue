<template>
<div>
	<nav id="header" class="fixed bg-black text-white w-full z-20 top-0">
		<div id="progress" class="h-1 z-40 top-0"
			style="background:linear-gradient(to right, #FFFFFF var(--scroll), transparent 0);"></div>
		<div class="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
			<div class="block lg:hidden pl-8 p-2">
				<div class="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
					<img  class="logo" src="../assets/logo.png" />
			</div>
		</div>
		<div class="block lg:hidden pr-4">
			<button id="nav-toggle" class="flex items-center px-3 py-2 text-white-300 border-gray-600 focus:outline-none">
          <svg fill="text-white" viewBox="0 0 20 20" class="w-6 h-6 fill-current">
            <title>Menu</title>
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
		</div>
			</div>
		<div class="w-full flex-grow p-4 lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-black md:bg-transparent z-20"
			id="nav-content">
			<ul class="list-reset lg:flex justify-center flex-1 items-center">
				<li id="logo" class="inline-block lg:pr-28">
					<img  class="logo xs:hidden" src="../assets/logo.png" />
				</li>
				<li class="mr-3">
      		<router-link id="" to="/" class="inline-block py-2 px-4 text-gray-300 hover:text-gray-500 font-bold" replace>Home</router-link>
      	</li>
      	<li v-if="config.music.enabled" class="mr-3">
      		<router-link to="/music" class="inline-block py-2 px-4 text-gray-300 hover:text-gray-500 font-bold" replace>Music</router-link>
      	</li>
      	<li v-if="config.merch.enabled" class="mr-3">
      		<router-link to="/merch" class="inline-block py-2 px-4 text-gray-300 hover:text-gray-500 font-bold" replace>Merch</router-link>
      	</li>
      	<li class="mr-3">
      		<router-link to="/contact" class="inline-block py-2 px-4 text-gray-300 hover:text-gray-500 font-bold" replace>Contact</router-link>
      	</li>
				<li class="lg:pl-16 mr-4">
					<a v-if="config.social_networks.bandcamp.enabled" class="inline-block py-2 px-3 xs:px-2" :href="config.social_networks.bandcamp.link"><img src="../assets/icons/bandcamp.svg" width="30"></a>
					<a v-if="config.social_networks.youtube.enabled" class="inline-block py-2 px-3 xs:px-2" :href="config.social_networks.youtube.link"><img src="../assets/icons/youtube.svg" width="30"></a>
					<a v-if="config.social_networks.spotify.enabled" class="inline-block py-2 px-3 xs:px-2" :href="config.social_networks.spotify.link"><img src="../assets/icons/spotify.svg" width="30"></a>
					<a v-if="config.social_networks.facebook.enabled" class="inline-block py-2 px-3 xs:px-2" :href="config.social_networks.facebook.link"><img src="../assets/icons/facebook.svg" width="30"></a>
					<a v-if="config.social_networks.instagram.enabled" class="inline-block py-2 px-3 xs:px-2" :href="config.social_networks.instagram.link"><img src="../assets/icons/instagram.svg" width="30"></a>
				</li>
      </ul>
		</div>
        </nav>
		</div>
</template>

<script>
import config from '../assets/config.json'
import Home from './Home.vue'
import Music from './Music.vue'
import Merch from './Merch.vue'
import Contact from './Contact.vue'


// border-b-0 md:border-b-4 border-gray-300 hover:border-gray-500
export default {
	data () {
    	return {
      		config: config
    	}
  	},
	mounted(){
	//Navbar
	var h = document.documentElement,
		b = document.body,
		st = 'scrollTop',
		sh = 'scrollHeight',
		progress = document.querySelector('#progress'),
		scroll;
	var scrollpos = window.scrollY;
	var header = document.getElementById("header");
	var navcontent = document.getElementById("nav-content");
	document.addEventListener('scroll', function () {
		scroll = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
		progress.style.setProperty('--scroll', scroll + '%');
		scrollpos = window.scrollY;
	
		if (scrollpos > 10) {
				header.classList.add("bg-black");
				navcontent.classList.remove("bg-black");
				navcontent.classList.add("bg-black");
		} else {
				header.classList.remove("bg-black");
				navcontent.classList.remove("bg-black");
				navcontent.classList.add("bg-black");
		
		}
	
	});
	document.getElementById('nav-toggle').onclick = function () {
		document.getElementById("nav-content").classList.toggle("hidden");
		document.getElementById("logo").classList.toggle("hidden");
	}}
}

</script>
<style scoped>
a.router-link-active {
 @apply border-b-0 md:border-b-4 border-gray-300 hover:border-gray-500;
}
</style>
