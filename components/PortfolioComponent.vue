<template>
  <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0" >

  <div class="bg"></div>
  <div class="bg bg2"></div>
  <div class="bg bg3"></div>

	<!--Main Col-->
	<div id="profile" class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white mx-6 lg:mx-0 ">
	

		<div class="p-4 md:p-12 text-center lg:text-left ">
			<!-- Image for mobile view-->
			<div class="block imgCardPort lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style="background-image: url('logo.png')"></div>
			
    <h1 class=" pt-8 lg:pt-0 ml2 font-main sm:text-4xl md:text-5xl flex flex-wrap gap-0 content-center" >carlos&hernandez</h1>
			<div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
			<p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><svg class="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/></svg>I'm a&nbsp;<span id="changeWord" >{{wordToChange}}</span>&nbsp;developer</p>
			<p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"><svg class="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"/></svg> <span class="ml16">Im from Santa Ana, El Salvador</span></p>


			<div class="pt-12 pb-8 buttonAnimate">
        <button class="btnAnimate h-8 px-4 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg cursor-pointer focus:shadow-outline hover:bg-indigo-800 mb-1" @click="showThisProjects(0)">
            <span>Pure Vue Projects</span>
        </button>
        <button class="btnAnimate h-8 px-4 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg cursor-pointer focus:shadow-outline hover:bg-indigo-800" @click="showThisProjects(1)">
            <span>Laravel and Vue projects</span>
        </button>
        <button class="btnAnimate h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg cursor-pointer focus:shadow-outline hover:bg-indigo-800" @click="showThisProjects(2)">
            <span>Spring and Vue projects</span>
        </button>
        <button class="btnAnimate h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg cursor-pointer focus:shadow-outline hover:bg-indigo-800" @click="showThisProjects(3)">
            <span>Flutter projects</span>
        </button>
			</div>

			<div class=" iconsAnimate mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
				<a  class="link iconAnimate" href="https://www.facebook.com/goth14wx/" target="_blank" data-tippy-content="@facebook_handle"><svg class="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"/></svg></a>
				<a class="link iconAnimate" href="https://github.com/shift14wx" target="_blank" data-tippy-content="@github_handle"><svg class="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
				<a class="link iconAnimate" href="https://www.reddit.com/user/Ac-04" target="_blank" data-tippy-content="@reddit_handler">
      <svg class="h-6 fill-current text-gray-600 hover:text-green-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.238 15.348c.085.084.085.221 0 .306-.465.462-1.194.687-2.231.687l-.008-.002-.008.002c-1.036 0-1.766-.225-2.231-.688-.085-.084-.085-.221 0-.305.084-.084.222-.084.307 0 .379.377 1.008.561 1.924.561l.008.002.008-.002c.915 0 1.544-.184 1.924-.561.085-.084.223-.084.307 0zm-3.44-2.418c0-.507-.414-.919-.922-.919-.509 0-.923.412-.923.919 0 .506.414.918.923.918.508.001.922-.411.922-.918zm13.202-.93c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-.129c0-.851-.695-1.543-1.55-1.543-.417 0-.795.167-1.074.435-1.056-.695-2.485-1.137-4.066-1.194l.865-2.724 2.343.549-.003.034c0 .696.569 1.262 1.268 1.262.699 0 1.267-.566 1.267-1.262s-.568-1.262-1.267-1.262c-.537 0-.994.335-1.179.804l-2.525-.592c-.11-.027-.223.037-.257.145l-.965 3.038c-1.656.02-3.155.466-4.258 1.181-.277-.255-.644-.415-1.05-.415-.854.001-1.549.693-1.549 1.544 0 .566.311 1.056.768 1.325-.03.164-.05.331-.05.5 0 2.281 2.805 4.137 6.253 4.137s6.253-1.856 6.253-4.137c0-.16-.017-.317-.044-.472.486-.261.82-.766.82-1.353zm-4.872.141c-.509 0-.922.412-.922.919 0 .506.414.918.922.918s.922-.412.922-.918c0-.507-.413-.919-.922-.919z"/></svg>
        <title>Reddit</title>
        </a>
			</div>
			
			<!-- Use https://simpleicons.org/ to find the svg for your preferred product --> 

		</div>

	</div>
	
	<!--Img Col-->
	<div class="w-full hidden lg:flex lg:w-2/5 rounded rounded-lg flex bg-gray-200 justify-center items-center relative " style="height:35rem !important; ">
    <!--<div class="w-1/2" style="height:50% !important;">
    <!--background: linear-gradient(122deg,#35495E 50%, #3EAC7B 50%);
    <div class="h-full flex flex-col justify-center items-center" >
        <img src="vue.png" class="p-4" alt="" srcset="">
    </div>
    </div>-->
   
<div v-if="loadedCard" v-for="(project,index) in selectedProject" :key="index" class="mx-10 shadow shadow-lg w-full relative bg-white rounded rounded-xl" style="margin-top:60px">
    <img :src="project.img" class="absolute imageCardProject" style="height:150px; top:-100px; left:0px;" alt="" srcset="">

  <span class="absolute font-hand" :class="{'text-5xl':project.mainTitle=='Vue','text-2xl':project.mainTitle !='Vue'}" style="top:-40px; right:0px;">{{project.mainTitle}}</span>
<ul class="m-10 pt-5" v-if="project.projects"> 
  <li  v-for="project in project.projects" :key="project.title" class=" rounded-sm px-3 py-3" style='border-bottom-width:0'>
    <a :href="project.url" target="_blank" class="no-underline text-purple-700">{{project.title}} {{project.title.length > 0 ? '('+project.credentials+')' : '' }}</a></li>
</ul>
<div v-else>
 <div class="my-10 mx-8 pt-5 text-justify">
   Hi, my name is Carlos Hernandez, I'm a developer and I enjoy learn and practice new thecnologies, I keep improving every day, what I learn, I keep practicing it.
 </div>

</div>

 <div class="absolute bg-black rounded rounded-xl p-4 text-white hintCard" style="left:-10px; bottom:-80px; width:110%;" >{{project.hint}}</div>
</div>

	</div>
	
	
	<!-- Pin to top right corner
	  <div class="absolute top-0 right-0 h-12 w-18 p-4">

	  </div> -->

 <div v-if="modal" class=" modalAnimate overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex mx-5">
      <div class="relative w-auto my-6 mx-auto max-w-6xl">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 class="text-3xl font-semibold">
              <img :src="imgModalIcon" style="width:10%" class="imageCardProject inline mr-1" alt="" srcset=""> {{titleModal}}
            </h3>
            <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="modal=false">
              <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto">
            <p class="my-4 text-gray-600 text-lg leading-relaxed">

          <ul class="" v-if="projectsModal"> 
            <li  v-for="project in projectsModal" :key="project.title" class=" rounded-sm px-3 py-3" style='border-bottom-width:0'>
              <a :href="project.url" target="_blank" class="no-underline text-purple-700">{{project.title}} {{project.title.length > 0 ? '('+project.credentials+')' : '' }}</a></li>
          </ul>

             {{contentModal}}
            </p>
          </div>
          <!--footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
            <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease" v-on:click="modal=false">
              Close
            </button>
            <a href="#" class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease" v-on:click="modal=false">
              go
            </a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="modal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>

</div>


</template>

<script lang="ts">
import Vue from 'vue'
import anime from "animejs"
export default Vue.extend({


  data(){
    return {
      modal:false,
      wordToChange : "",
      indexTitle: 0,
      animateCardProjects: null,
      animateModal:null,
      loaded:false,
      loadedCard:true,
      animateHint:null,
      islg:false,
      imgModalIcon:"",
      titleModal:"",
      contentModal:"",
      projectsModal:[],
      projects:[
        {
          "img":"vue.png",
          "mainTitle":"Vue",
          "projects":[
            {
            "title": "Tutorial Install xampp y IIS",
            "url":"https://mystifying-brattain-bafa57.netlify.app/",
            "credentials":"no credentials"
          },
          {
            "title": "Time Line - Bible",
            "url":"https://brave-heyrovsky-3646c8.netlify.app/",
            "credentials":"no credentials"
          }
          ],
            "hint":"My favorite stack to work with vue is Nuxt, its an easy solution for WPA and SPA"
        },
        {
          "img":"laravel.png",
          "mainTitle":"Laravel/Vue",
          "projects":[
          {
            "title": "Corporate law system",
            "url":"https://cplegal.herokuapp.com",
            "credentials":"admin@admin.com : password"
          },
          {
            "title": "ContaPainless T, contable System ",
            "url":"https://tranquil-citadel-03171.herokuapp.com/",
            "credentials":"admin@admin.com : password"
          },
          {
            "title": "Restaurant system ",
            "url":"http://pruebagenerica01.byethost24.com/restaurante/",
            "credentials":"tavo : tavo"
          }
          ],
          "hint": "Nowadays I use laravel, lumen, Jetstream and Inertia/Vue"
        },
        {
          "img":"spring.png",
          "mainTitle":"Spring/Vue",
          "projects":[
          {
            "title": "mechanical garage System",
            "url":"https://taller-mecanico-poe.herokuapp.com/",
            "credentials":"admin : admin"
          },
                    {
            "title": "",
            "url":"#"
          }
          ],
          "hint": "I'm a working in some projects that I haven't finished yet, but this show what I can do with Spring a little bit"
        },
          {
          "img":"flutter.png",
          "mainTitle":"Flutter",
          projects:[

                    {
            "title": "",
            "url":"#"
          }
          ],
          "hint": "Due to the demand of flutter in the country that I live, flutter is not so recommended for mobile dev, but I keep practicing it"
        }
      ],
      selectedProject:[
        {
          "img":"logo.png",
          "mainTitle":"Fearless",
          "hint":"You can click in the buttons in the left card, that will show you up, my projects"
      }
      ]
    }
  },

  methods:{

  onResize() {
    if (window.innerWidth > 960) {
      this.islg = true
    } else {
      this.islg = false
    }
  },
    showThisProjects(project:Number){
      this.onResize();
      if(!this.islg){
        this.modal = true;
      }
      this.loadedCard = false;
        this.selectedProject[0] = this.projects[project];
        this.loadedCard = true;
        this.animateCardProjects.play();
        this.animateHint.play();

        this.titleModal = this.projects[project].mainTitle;
        this.imgModalIcon = this.projects[project].img;
        this.contentModal = this.projects[project].hint;
        this.projectsModal = this.projects[project].projects;
        this.animateModal.play();
    },

    parseLetters(textContent:string):string{


      return textContent.split("").map((l:string,i:number)=>{

        switch (l) {
          case "&":
            return '';
            break;
          case "c":
            return `<div class='w-full h-1/2 firstBlock text-center' id="firstBlock" ><span class='letter'>${l}</span>`
          case "s":
            return `<span class='letter'>${l}</span></div>`
          case "h":
            return `<div class='w-full secondBlock text-center' id="secondBlock"><span class='letter'>${l}</span>`
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

  this.onResize();

/**
 * animate buttons
 */

this.animateModal=anime({
  autoplay:false,
  targets:".modalAnimate",
  scale:[0,1]
});

anime(
  {
    targets: ".buttonAnimate .btnAnimate",
    translateY: [100,0],
    opacity: [0,1],
    translateZ: 0,
    duration: 950,
    delay: (el:any, i:number) => 70*i,
  }
).play();

anime(
  {
    targets: ".iconsAnimate .iconAnimate",
    translateY: [100,0],
    opacity: [0,1],
    translateZ: 0,
    duration: 950,
    delay: (el:any, i:number) => 70*i,
  }
).play();

/**
 * MAKE ANIME FOR THE PROJECTS
 */

    anime({
          targets:".imgCardPort",
            autoplay:true,
            scale:[0,1],
            translateY:[-100,0]
        })

        this.animateHint = anime.timeline({
        
        duration:500,
          targets:".hintCard",
            autoplay:false,
        })
        .add({
            scale:[0,1],
            translateX:[-100,0],
            duration:2000
        }).add(
          {
            rotate:[0,5]
          }
        )

    this.animateCardProjects = anime({
      targets:".imageCardProject",
        autoplay:false,
        scale:[0,1],
        translateY:[-100,0],
        duration:500
    });

    this.animateCardProjects.play();
    this.animateHint.play();
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
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml16');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letterml16'>$&</span>");

   anime.timeline({loop:false}).add({
    targets: '.ml16 .letterml16',
    translateY: [100,0],
    opacity: [0,1],
    translateZ: 0,
    duration: 950,
    delay: (el:any, i:number) => 70*i,
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
        document.getElementById("lastLetter")?.classList.remove("letter")
      }
    }).add({
      targets: '.letter',
      duration: 1000,
      rotate: '1turn',
      delay: (el:any, i:number) => 70*i,
      complete:()=>{
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
    );

    // change changeWord


    var titles:Array<string> = [
      "Web",
      "Backend",
      "Frontend",
      "mobile",
      "desktop"
    ];

    anime.timeline({
      targets: "#changeWord",
      loop:true,
      loopBegin:()=>{

        if(this.indexTitle <= 3){
          this.indexTitle++;
        }else{
          this.indexTitle = 0;
        }
        this.wordToChange = titles[ this.indexTitle ].toString()
      }
    })
    .add({
      easing: "easeInQuad",
      opacity: [0,1]
    })
    .add({
      easing:"easeOutQuad",
      opacity:[1,0]
    })
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


.ml16 {
}

.ml16 .letter {
  display: inline-block;
  line-height: 1em;
}

</style>
