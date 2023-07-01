<template>
    <div class="md:container">
        <div class="grid grid-cols-1 place-items-center relative flex flex-col bg-black shadow-lg rounded">
            <div><br><br></div>
            <div class="text-l text-white">For any information you can contact us at : </div>
            <div><br></div>
            <div class="text-xl text-white font-bold">{{config.contact.mail}}</div>
            <div><br></div>
            <div class="text-l text-white">Or through our social medias : </div>
            <div><br></div>
            <div>
                <ul class="list-reset lg:flex justify-center flex-1 items-center">
				    <li v-if="config.contact.social_contact.facebook" class="mr-3">
				    	<a :href="config.social_networks.facebook.link"><img src="../assets/icons/facebook.svg" width="30"></a>
				    </li>
				    <li v-if="config.contact.social_contact.instagram" class="mr-3">
				    	<a :href="config.social_networks.instagram.link"><img src="../assets/icons/instagram.svg" width="30"></a>
				    </li>
			    </ul>
            </div>
            <div><br><br></div>
        </div>
    </div>
</template>
<script>
import config from "../assets/config.json"

export default {
  data () {
    return {
      config: config
    }
  }
}
</script>