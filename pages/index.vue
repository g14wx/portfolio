<template>
<div>
  <portfolio-component v-if="loaded"/>
<LoadingComponent v-else />
</div>


</template>

<script lang="ts">
import Vue from 'vue';
import PortfolioComponent from '~/components/PortfolioComponent.vue';
import anime from "animejs";


interface MyWindow extends Window {
  onNuxtReady(obj: object): void
}
declare var window: MyWindow;

export default Vue.extend({
  components: { PortfolioComponent },


  data(){
    return {
      loaded: false
    }
  },

  methods:{
    animateCircle(){
      anime({
        targets:".ring-outer",
        loop:false,
        easing: "easeOutQuart",
        scale: [1,0]
      })
    }
  },

mounted(){

if (process.browser) {
  window?.onNuxtReady((app:any) => {
    setTimeout(() => {
      this.animateCircle()
    }, 2000);
    setTimeout(() => {
      this.loaded = true;
    }, 3000);
  })
}

    }

})
</script>
