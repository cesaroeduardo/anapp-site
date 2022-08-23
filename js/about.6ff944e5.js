"use strict";(self["webpackChunkvuejs_tailwindcss_portfolio"]=self["webpackChunkvuejs_tailwindcss_portfolio"]||[]).push([[443],{467:function(t,e,n){n.r(e),n.d(e,{default:function(){return H}});var a=n(252);const i={class:"container mx-auto"},s={class:"container mx-auto"};function r(t,e,n,r,o,u){const m=(0,a.up)("AboutMe"),d=(0,a.up)("AboutCounter"),l=(0,a.up)("AboutClients");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",i,[(0,a.Wm)(m)]),(0,a.Wm)(d),(0,a._)("div",s,[(0,a.Wm)(l)])])}var o=n(577),u=n.p+"img/profile.62b965d8.jpeg";const m={class:"block sm:flex sm:gap-10 mt-10 sm:mt-20"},d=(0,a._)("div",{class:"w-full sm:w-1/4 mb-7 sm:mb-0"},[(0,a._)("img",{src:u,class:"rounded-xl w-96",alt:""})],-1),l={class:"w-full sm:w-3/4 text-left"};function c(t,e,n,i,s,r){return(0,a.wg)(),(0,a.iD)("div",m,[d,(0,a._)("div",l,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.bios,(t=>((0,a.wg)(),(0,a.iD)("p",{key:t.id,class:"font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"},(0,o.zw)(t.bio),1)))),128))])])}var h={setup(){return{bios:[{id:1,bio:"Sou uma alma criativa e curiosa, que encontrou no design uma maneira de levar a vida exercitanto sempre as aréas que mais me interessam e estimulam. Estou sempre em busca de novas inspirações e antenada nas trends, tudo para produzir um conteúdo com mais valor e evoluir como profissional."},{id:2,bio:"Encontrei no Design uma forma de continuar a ser curiosa, descobrindo coisas novas e de certa forma fazendo arte. Mas, principalmente, o Design me possibilita utilizar uma das minhas ‘skills’ mais poderosas, a empatia. Com o passar dos anos, a gente vai aprendendo a ser mais dura, mas ver o lado bom das pessoas e entender o que se passa nelas, é essencial não só para o lado profissional, mas principalmente humano."},{id:3,bio:"Cada vez mais, sei que meu trabalho vai muito além do visual: se trata de transmitir essências, uma mensagem para ser contada junto com boas histórias!"}]}}},p=n(744);const A=(0,p.Z)(h,[["render",c]]);var f=A;const b={class:"mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm"},g={class:"font-general-regular container mx-auto py-20 block sm:flex sm:justify-between sm:items-center"},x={class:"mb-20 sm:mb-0"},v={class:"block text-md text-ternary-dark dark:text-ternary-light"},k={class:"mb-20 sm:mb-0"},y={class:"block text-md text-ternary-dark dark:text-ternary-light"},w={class:"mb-20 sm:mb-0"},_={class:"block text-md text-ternary-dark dark:text-ternary-light"},F={class:"mb-20 sm:mb-0"},S={class:"block text-md text-ternary-dark dark:text-ternary-light"};function T(t,e,n,i,s,r){const u=(0,a.up)("counter");return(0,a.wg)(),(0,a.iD)("div",b,[(0,a._)("div",g,[(0,a._)("div",x,[(0,a.Wm)(u,{ref:"counter",startAmount:0,endAmount:4,duration:1,autoinit:!0,onFinished:e[0]||(e[0]=e=>t.alert("Counting finished!")),class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2","aria-label":"About Status Counter"},null,512),(0,a._)("span",v,(0,o.zw)(t.experienceTitle),1)]),(0,a._)("div",k,[(0,a.Wm)(u,{ref:"counter",startAmount:0,endAmount:2100,duration:1,suffix:"+",autoinit:!0,onFinished:e[1]||(e[1]=e=>t.alert("Counting finished!")),class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"},null,512),(0,a._)("span",y,(0,o.zw)(t.githubTitle),1)]),(0,a._)("div",w,[(0,a.Wm)(u,{ref:"counter",startAmount:0,endAmount:97,duration:1,suffix:"%",autoinit:!0,onFinished:e[2]||(e[2]=e=>t.alert("Counting finished!")),class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"},null,512),(0,a._)("span",_,(0,o.zw)(t.feedbackTitle),1)]),(0,a._)("div",F,[(0,a.Wm)(u,{ref:"counter",startAmount:0,endAmount:16,duration:1,autoinit:!0,onFinished:e[3]||(e[3]=e=>t.alert("Counting finished!")),class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"},null,512),(0,a._)("span",S,(0,o.zw)(t.projectsTitle),1)])])])}var C=(0,a.aZ)({name:"Vue3Autocounter",interval:null,props:{startAmount:{type:Number,default:0},endAmount:{type:Number,default:0,required:!0},duration:{type:Number,default:3,validator(t){return t>=1}},autoinit:{type:Boolean,default:!0},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimalSeparator:{type:String,default:"."},decimals:{type:Number,default:0,validator(t){return t>=0}}},data(){return{timestamp:0,startTimestamp:0,currentAmount:0,currentStartAmount:0,currentDuration:0,paused:!1,remaining:0,animationFrame:0}},mounted(){this.currentAmount=this.startAmount,this.currentStartAmount=this.startAmount,this.currentDuration=1e3*this.duration,this.remaining=1e3*this.duration,this.autoinit?this.start():this.paused=!0,this.$emit("mounted")},unmounted(){this.cancelAnimation()},watch:{startAmount(){this.reset()},endAmount(){this.reset()},duration(){this.reset()}},computed:{isCountingUp(){return this.endAmount>this.startAmount},displayedAmount(){return`${this.prefix}${this.formatedAmount}${this.suffix}`},formatedAmount(){const t=/(\d+)(\d{3})/;let e=this.currentAmount.toFixed(this.decimals);e+="";let n=e.split("."),a=n[0],i=n.length>1?this.decimalSeparator+n[1]:"",s=!isNaN(parseFloat(this.separator));if(this.separator&&!s)while(t.test(a))a=a.replace(t,"$1"+this.separator+"$2");return a+i}},methods:{start(){this.cancelAnimation(),this.currentStartAmount=this.startAmount,this.startTimestamp=null,this.currentDuration=1e3*this.duration,this.paused=!1,this.animationFrame=window.requestAnimationFrame(this.counting)},pause(){this.paused||(this.cancelAnimation(),this.paused=!0)},resume(){this.paused&&(this.startTimestamp=null,this.currentDuration=+this.remaining,this.currentStartAmount=+this.currentAmount,this.animationFrame=window.requestAnimationFrame(this.counting),this.paused=!1)},reset(){this.paused=!1,this.startTimestamp=null,this.cancelAnimation(),this.currentAmount=this.startAmount,this.autoinit?this.start():this.paused=!0},counting(t){this.timestamp=t,this.startTimestamp||(this.startTimestamp=t);let e=t-this.startTimestamp;this.remaining=this.currentDuration-e,this.isCountingUp?(this.currentAmount=this.currentStartAmount+(this.endAmount-this.currentStartAmount)*(e/this.currentDuration),this.currentAmount=this.currentAmount>this.endAmount?this.endAmount:this.currentAmount):(this.currentAmount=this.currentStartAmount-(this.currentStartAmount-this.endAmount)*(e/this.currentDuration),this.currentAmount=this.currentAmount<this.endAmount?this.endAmount:this.currentAmount),e<this.currentDuration?this.animationFrame=window.requestAnimationFrame(this.counting):setTimeout((()=>{this.$emit("finished")}),1e3)},cancelAnimation(){this.animationFrame&&window.cancelAnimationFrame(this.animationFrame)}}});function D(t,e,n,i,s,r){return(0,a.wg)(),(0,a.j4)("span",null,(0,o.zw)(t.displayedAmount),1)}C.render=D;var z=(()=>{const t=C;return t.install=e=>{e.component("Vue3Autocounter",t)},t})(),j=z,q={components:{counter:j},data:()=>({experienceTitle:"Anos de experiência",githubTitle:"Seguidores",feedbackTitle:"Feedback positivo",projectsTitle:"Projetos entregues"})};const W=(0,p.Z)(q,[["render",T]]);var $=W;const N={},Z=N;var M=Z,E=n(508),U=n.n(E),V={name:"About",components:{AboutMe:f,AboutCounter:$,AboutClients:M},data:()=>({}),mounted(){U().replace()},updated(){U().replace()},methods:{}};const B=(0,p.Z)(V,[["render",r]]);var H=B}}]);
//# sourceMappingURL=about.6ff944e5.js.map