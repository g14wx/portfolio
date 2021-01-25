<template>
  <div class="container  mx-auto">
    <div>
      <h1 class="ml2 font-main md:text-8xl flex flex-wrap gap-0" >carlos&hernandez</h1>
      <div class="flex flex-wrap overflow-hidden">

        <div class="w-full overflow-hidden mt-10">
        <div>carlos</div>
        </div>

        <div class="w-full">
          <form>
            <input class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
<button class="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Large</button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import anime from "animejs"
export default Vue.extend({


  methods:{

    parseLetters(textContent:string):string{


      return textContent.split("").map((l:string,i:number)=>{

        switch (l) {
          case "&":
            return '<span class=\'letter\'>&nbsp;</span>';
            break;
          case "c":
            return `<div class='w-full h-0 firstBlock' id="firstBlock"><span class='letter'>${l}</span>`
          case "s":
            return `<span class='letter'>${l}</span></div>`
          case "h":
            return `<div class='w-full secondBlock' id="secondBlock"><span class='letter'>${l}</span>`
          case "z":
            return `<span class='letter lastLetter' id='lastLetter'>${l}</div>`;
            break;
          case "e":
            if(i> 10){
                return `<span class='letter lastE'>${l}</span>`
            }else{
                return `<span class='letter'>${l}</span>`
            }
          default:
              return `<span class='letter'>${l}</span>`
            break;
        }

      }).join("")

    }

  },
  mounted(){

    var textWrapper2:any = document.querySelector('.ml2');
    textWrapper2.innerHTML = this.parseLetters(textWrapper2.textContent)
   
   var moveBlock2 = anime({
        autoplay:false,
        targets: ".secondBlock",
        rotate: -10
   })

   var moveImDev = anime({
     duration: 2000,
     autoplay:false,
     targets: ".ml1 .letter"
      
   })
   
   anime.timeline({loop: false})
    .add({
      targets: '.ml2 .letter',
      translateY: [100,0],
      opacity: [0,1],
      translateZ: 0,
      duration: 950,
      delay: (el:any, i:number) => 70*i,
      complete:()=>{
        console.log("delething class letter from lastLetter")
        document.getElementById("lastLetter")?.classList.remove("letter")
      }
    }).add({
      targets: '.letter',
      duration: 1000,
      rotate: '1turn',
      delay: (el:any, i:number) => 70*i,
      complete:()=>{
        console.log("completing rotation")
        document.getElementById("lastLetter")?.classList.add("letter")
      },
    })
    .add(
      {
        duration:500,
        targets: '.lastE',
        rotate:"-60deg"
      }
    )
    .add(
      {
        duration:500,
        targets: '.lastLetter',
        translateY: -50, 
      }
    )
    .add(
      {
        targets:".lastLetter",
        translateY:0
      }
    )
    .add(
      {
        targets:".lastLetter",
        rotate: '360deg',
        complete:()=>{
          document.getElementById("firstBlock")?.classList.add("letter")
          document.getElementById("secondBlock")?.classList.add("letter")
          moveBlock2.play();
        }
      }
    )
    .add(
      {
        targets: ".firstBlock",
        rotate: -10
      }
    )
  }

})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.ml1{

}

.ml1 .letter{
  display: inline-block;
}
.ml2 {
}

.ml2 .letter {
  display: inline-block;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
