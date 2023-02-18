import{C as S}from"./confetti-71e3018d.mjs";import{_ as v,o as w,c as g,a as t,t as r,F as x,r as A,d as p,n as y}from"./entry-74b935a9.mjs";function d(e){return e<10?"0"+e:e}const k={head(){return{title:"New Year Countdown - BluSpring"}},methods:{setCurrentSong(e){const o=e.target.value,n=this.songsList.find(i=>i.name==o);this.setSong(n)},setSong(e){this.currentSongName=e.name;let o=this.currentSongTime=e.startAt;if(this.iOSSafari){const n=o.split(":");o=`${n[0]}:${n[1]}:${parseInt(n[2])-1}`}this.songTime=new Date(`Dec 31, ${new Date().getFullYear()} ${o}`).getTime(),this.audio=new Audio,this.audio.src=e.url,this.audio.loop=!1,this.audio.load()},testSong(e){const o=e.target;o.disabled=!0;const n=this.audio;n.currentTime=Math.floor(Math.random()*(n.duration-1))+1,n.play().then(()=>{"mediaSession"in window.navigator&&(window.navigator.mediaSession.setActionHandler("play",function(){}),window.navigator.mediaSession.setActionHandler("pause",function(){}),window.navigator.mediaSession.setActionHandler("seekbackward",function(){}),window.navigator.mediaSession.setActionHandler("seekforward",function(){}),window.navigator.mediaSession.setActionHandler("previoustrack",function(){}),window.navigator.mediaSession.setActionHandler("nexttrack",function(){}))}).catch(i=>{}),n.onplaying=()=>{setTimeout(()=>{n.onplaying=null,n.pause(),n.currentTime=0,o.disabled=!1},5e3)}},removeRequired(e){e.target.parentElement.remove()},test(){this.run=!0}},data(){return{currentSongName:"{name}",currentSongTime:"{time}",songsList:[{name:"Technoblade - Blitz",url:"/music/blitz.mp3",startAt:"23:58:36"},{name:"Wilbur Soot - Your New Boyfriend",url:"/music/ynb.mp3",startAt:"23:58:48"},{name:"Glass Animals - Heat Waves",url:"/music/heatwaves.mp3",startAt:"23:59:43"},{name:"Lovejoy - The Fall",url:"/music/thefall.mp3",startAt:"23:57:47"},{name:"Lovejoy - It's All Futile! It's All Pointless!",url:"/music/iafiap.mp3",startAt:"23:58:51"},{name:"Lovejoy - Model Buses",url:"/music/modelbuses.mp3",startAt:"23:57:52"},{name:"CG5 - I See A Dreamer",url:"/music/isad.mp3",startAt:"23:58:30"}],startAt:9953959549044432,songTime:0x2a5059fff4ed2000,iOSSafari:!1,audio:new Audio,confetti:null,date:"00/00/0000",time:"00:00:00",countdown:"00:00:00:00",interval:null,mode:"dark",run:!1}},mounted(){window.localStorage.getItem("theme")&&(this.mode=window.localStorage.getItem("theme"));var e=window.navigator.userAgent,o=!!e.match(/iPad/i)||!!e.match(/iPhone/i),n=!!e.match(/WebKit/i);this.iOSSafari=o&&n&&!e.match(/CriOS/i);const i=new Date(`Jan 1, ${new Date().getFullYear()+1} 00:00:00`).getTime();this.confetti=new S({target:this.$refs.confetti,rotate:!0,width:window.innerWidth,height:window.innerHeight,clock:45,start_from_edge:!0,respawn:!0}),this.setSong(this.songsList[0]);let s=!1,a=!1,l=!1,_=!1;this.interval=setInterval(()=>{Date.now()>=this.songTime-1e4&&!s&&((this.audio.readyState==0||this.audio.readyState==1)&&this.audio.load(),s=!0),(Date.now()>=this.songTime&&!a||this.run)&&(a=!0,this.$refs.songsList.disabled=!0,this.$refs.testButton.disabled=!0,this.audio.play().then(()=>{"mediaSession"in window.navigator&&(window.navigator.mediaSession.setActionHandler("play",function(){}),window.navigator.mediaSession.setActionHandler("pause",function(){}),window.navigator.mediaSession.setActionHandler("seekbackward",function(){}),window.navigator.mediaSession.setActionHandler("seekforward",function(){}),window.navigator.mediaSession.setActionHandler("previoustrack",function(){}),window.navigator.mediaSession.setActionHandler("nexttrack",function(){})),!_&&this.run&&(this.confetti.render(),_=!0)}).catch(c=>{}));const b=new Date;if(this.date=b.toLocaleDateString(),this.time=b.toLocaleTimeString(),Date.now()<i){const c=Date.now()-i;let h=Math.floor(c/(1e3*60*60*24)),m=Math.floor(c%(1e3*60*60*24)/(1e3*60*60)),f=Math.floor(c%(1e3*60*60)/(1e3*60)),u=Math.floor(c%(1e3*60)/1e3);this.countdown=`${d(Math.abs(h+1))}:${d(Math.abs(m+1))}:${d(Math.abs(f+1))}:${d(Math.abs(u+1))}`,u<=15&&f==0&&m==0&&h==0&&u%2==0?this.$refs.countdown.style.color="rgb(238, 43, 43)":u<=15&&f==0&&m==0&&h==0&&(this.$refs.countdown.style.color="rgb(168, 209, 243)")}else l||(l=!0,this.confetti.render()),this.countdown="00:00:00:00"},250)},unmounted(){clearInterval(this.interval)}},C={ref:"confetti",class:"absolute top-0 left-0 pointer-events-none z-40 w-screen h-screen"},T=t("h2",{class:"text-center left-0 right-0 pt-24 text-4xl m-auto text-[#7e1094] select-none"},"New Years' Countdown",-1),D={class:"z-[1000] fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80"},H=["onClick"],M={class:"text-center top-0 bottom-0 left-0 right-0 m-auto h-2/5 w-screen pt-12"},L={class:"top-4 left-0 right-0 m-auto text-3xl text-center text-[#a1569e] select-none pointer-events-none"},$={class:"bottom-[-15%] right-0 left-0 m-auto"},B=["onClick"],I={class:"bottom-0 right-0 left-0 m-auto inline-block w-fit h-20 text-xl lg:text-2xl text-center"},N=t("label",{for:"song",class:"song-label"},"Current Song",-1),z=t("br",null,null,-1),F=["onChange"],Y={class:"text-center left-0 right-0 m-auto text-xl"},O={id:"message"},P=p("This should play "),W={class:"text-blue-400"},j=t("br",null,null,-1),q=t("br",null,null,-1),G=p(" From then, there is a part in the song that will hopefully be perfectly timed with when it reaches 12 AM in your time zone."),E=t("br",null,null,-1),R=t("strong",null,"Make sure your clock is actually synchronized with real-world time!",-1);function V(e,o,n,i,s,a){return w(),g("main",{class:y(`w-full h-full m-auto absolute top-0 left-0 table ${this.mode=="light"?"bg-[#eeeeee]":"text-white"}`)},[t("canvas",C,null,512),T,t("div",D,[t("button",{class:"absolute top-0 left-0 right-0 bottom-0 m-auto h-fit z-[1002] text-white border-2 border-white rounded-md p-3 text-2xl bg-red-900",onClick:a.removeRequired},"Due to browser policies, you are required to push this button for the music to automatically start playing.",8,H)]),t("div",M,[t("h6",L,r(s.date)+" \xA0\xA0 "+r(s.time),1),t("h4",{ref:"countdown",class:"text-[#a8d1f3] left-0 right-0 m-auto text-7xl select-none pointer-events-none"},r(s.countdown),513),t("div",$,[t("button",{onClick:a.testSong,ref:"testButton",class:"text-blue-400 underline"},"Push me to test if audio works.",8,B)]),t("div",I,[N,z,t("select",{name:"song",ref:"songsList",onChange:a.setCurrentSong,class:"text-black text-center font-semibold p-3"},[(w(!0),g(x,null,A(s.songsList,l=>(w(),g("option",{key:l.url},r(l.name),1))),128))],40,F)])]),t("p",Y,[t("span",O,[P,t("span",W,'"'+r(s.currentSongName)+'"',1),p(" the second it reaches "+r(s.currentSongTime)+", I hope.",1)]),j,q,G,E,R])],2)}var Q=v(k,[["render",V]]);export{Q as default};
