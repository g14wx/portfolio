
import Vue from "vue";
import anime from "animejs";
import {Plugin} from "@nuxt/types";

declare module "vue/types/vue" {
    interface Vue{
        $animetimeline(obj:object) : any,
        $anime(obj:object) : any
        $animerandom(min:number, max:number) :number 
    }
}

const animePlugin : Plugin = (context,inject)=>{
    inject("animetimeline",(obj: object)=>anime.timeline(obj));
    inject("anime",(obj: object)=>anime(obj));
    inject("animerandom",(min:number=0, max:number=0)=>anime.random(min, max));
}

export default animePlugin;