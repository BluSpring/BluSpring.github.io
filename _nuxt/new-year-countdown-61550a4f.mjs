import{_ as k,o as y,c as x,a as s,t as m,F as A,r as T,d as S,n as z}from"./entry-4e2df03e.mjs";function C(n){var e={target:"confetti-holder",max:80,size:1,animate:!0,respawn:!0,props:["circle","square","triangle","line"],colors:[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],clock:25,interval:null,rotate:!1,start_from_edge:!1,width:window.innerWidth,height:window.innerHeight};if(n&&(n.target&&(e.target=n.target),n.max&&(e.max=n.max),n.size&&(e.size=n.size),n.animate!==void 0&&n.animate!==null&&(e.animate=n.animate),n.respawn!==void 0&&n.respawn!==null&&(e.respawn=n.respawn),n.props&&(e.props=n.props),n.colors&&(e.colors=n.colors),n.clock&&(e.clock=n.clock),n.start_from_edge!==void 0&&n.start_from_edge!==null&&(e.start_from_edge=n.start_from_edge),n.width&&(e.width=n.width),n.height&&(e.height=n.height),n.rotate!==void 0&&n.rotate!==null&&(e.rotate=n.rotate)),typeof e.target!="object"&&typeof e.target!="string")throw new TypeError("The target parameter should be a node or string");if(typeof e.target=="object"&&(e.target===null||!e.target instanceof HTMLCanvasElement)||typeof e.target=="string"&&(document.getElementById(e.target)===null||!document.getElementById(e.target)instanceof HTMLCanvasElement))throw new ReferenceError("The target element does not exist or is not a canvas element");var i=typeof e.target=="object"?e.target:document.getElementById(e.target),o=i.getContext("2d"),r=[];function l(t,a){t||(t=1);var u=Math.random()*t;return a?Math.floor(u):u}var h=e.props.reduce(function(t,a){return t+(a.weight||1)},0);function v(){for(var t=Math.random()*h,a=0;a<e.props.length;++a){var u=e.props[a].weight||1;if(t<u)return a;t-=u}}function _(){var t=e.props[v()],a={prop:t.type?t.type:t,x:l(e.width),y:e.start_from_edge?e.clock>=0?-10:parseFloat(e.height)+10:l(e.height),src:t.src,radius:l(4)+1,size:t.size,rotate:e.rotate,line:Math.floor(l(65)-30),angles:[l(10,!0)+2,l(10,!0)+2,l(10,!0)+2,l(10,!0)+2],color:e.colors[l(e.colors.length,!0)],rotation:l(360,!0)*Math.PI/180,speed:l(e.clock/7)+e.clock/30};return a}function f(t){if(!!t){var a=t.radius<=3?.4:.8;switch(o.fillStyle=o.strokeStyle="rgba("+t.color+", "+a+")",o.beginPath(),t.prop){case"circle":{o.moveTo(t.x,t.y),o.arc(t.x,t.y,t.radius*e.size,0,Math.PI*2,!0),o.fill();break}case"triangle":{o.moveTo(t.x,t.y),o.lineTo(t.x+t.angles[0]*e.size,t.y+t.angles[1]*e.size),o.lineTo(t.x+t.angles[2]*e.size,t.y+t.angles[3]*e.size),o.closePath(),o.fill();break}case"line":{o.moveTo(t.x,t.y),o.lineTo(t.x+t.line*e.size,t.y+t.radius*5),o.lineWidth=2*e.size,o.stroke();break}case"square":{o.save(),o.translate(t.x+15,t.y+5),o.rotate(t.rotation),o.fillRect(-15*e.size,-5*e.size,15*e.size,5*e.size),o.restore();break}case"svg":{o.save();var u=new window.Image;u.src=t.src;var c=t.size||15;o.translate(t.x+c/2,t.y+c/2),t.rotate&&o.rotate(t.rotation),o.drawImage(u,-(c/2)*e.size,-(c/2)*e.size,c*e.size,c*e.size),o.restore();break}}}}var g=function(){e.animate=!1,clearInterval(e.interval),requestAnimationFrame(function(){o.clearRect(0,0,i.width,i.height);var t=i.width;i.width=1,i.width=t})},w=function(){i.width=e.width,i.height=e.height,r=[];for(var t=0;t<e.max;t++)r.push(_());function a(){o.clearRect(0,0,e.width,e.height);for(var c in r)f(r[c]);u(),e.animate&&requestAnimationFrame(a)}function u(){for(var c=0;c<e.max;c++){var d=r[c];d&&(e.animate&&(d.y+=d.speed),d.rotate&&(d.rotation+=d.speed/35),(d.speed>=0&&d.y>e.height||d.speed<0&&d.y<0)&&(e.respawn?(r[c]=d,r[c].x=l(e.width,!0),r[c].y=d.speed>=0?-10:parseFloat(e.height)):r[c]=void 0))}r.every(function(p){return p===void 0})&&g()}return requestAnimationFrame(a)};return{render:w,clear:g,appstate:e}}function b(n){return n<10?"0"+n:n}const M={head(){return{title:"New Year Countdown - BluSpring"}},methods:{setCurrentSong(n){const e=n.target.value,i=this.songsList.find(o=>o.name==e);this.setSong(i)},setSong(n){this.currentSongName=n.name;let e=this.currentSongTime=n.startAt;if(this.iOSSafari){const i=e.split(":");e=`${i[0]}:${i[1]}:${parseInt(i[2])-1}`}this.songTime=new Date(`Dec 31, ${new Date().getFullYear()} ${e}`).getTime(),this.audio=new Audio,this.audio.src=n.url,this.audio.loop=!1,this.audio.load()},testSong(n){const e=n.target;e.disabled=!0;const i=this.audio;i.currentTime=Math.floor(Math.random()*(i.duration-1))+1,i.play().then(()=>{"mediaSession"in window.navigator&&(window.navigator.mediaSession.setActionHandler("play",function(){}),window.navigator.mediaSession.setActionHandler("pause",function(){}),window.navigator.mediaSession.setActionHandler("seekbackward",function(){}),window.navigator.mediaSession.setActionHandler("seekforward",function(){}),window.navigator.mediaSession.setActionHandler("previoustrack",function(){}),window.navigator.mediaSession.setActionHandler("nexttrack",function(){}))}).catch(o=>{}),i.onplaying=()=>{setTimeout(()=>{i.onplaying=null,i.pause(),i.currentTime=0,e.disabled=!1},5e3)}},removeRequired(n){n.target.parentElement.remove()},test(){this.run=!0}},data(){return{currentSongName:"{name}",currentSongTime:"{time}",songsList:[{name:"Technoblade - Blitz",url:"/music/blitz.mp3",startAt:"23:58:36"},{name:"Wilbur Soot - Your New Boyfriend",url:"/music/ynb.mp3",startAt:"23:58:48"},{name:"Glass Animals - Heat Waves",url:"/music/heatwaves.mp3",startAt:"23:59:43"},{name:"Lovejoy - The Fall",url:"/music/thefall.mp3",startAt:"23:57:47"},{name:"Lovejoy - It's All Futile! It's All Pointless!",url:"/music/iafiap.mp3",startAt:"23:58:51"},{name:"Lovejoy - Model Buses",url:"/music/modelbuses.mp3",startAt:"23:57:52"},{name:"CG5 - I See A Dreamer",url:"/music/isad.mp3",startAt:"23:58:30"}],startAt:9953959549044432,songTime:0x2a5059fff4ed2000,iOSSafari:!1,audio:new Audio,confetti:null,date:"00/00/0000",time:"00:00:00",countdown:"00:00:00:00",interval:null,mode:"dark",run:!1}},mounted(){window.localStorage.getItem("theme")&&(this.mode=window.localStorage.getItem("theme"));var n=window.navigator.userAgent,e=!!n.match(/iPad/i)||!!n.match(/iPhone/i),i=!!n.match(/WebKit/i);this.iOSSafari=e&&i&&!n.match(/CriOS/i);const o=new Date(`Jan 1, ${new Date().getFullYear()+1} 00:00:00`).getTime();this.confetti=new C({target:this.$refs.confetti,rotate:!0,width:window.innerWidth,height:window.innerHeight,clock:45,start_from_edge:!0,respawn:!0}),this.setSong(this.songsList[0]);let r=!1,l=!1,h=!1,v=!1;this.interval=setInterval(()=>{Date.now()>=this.songTime-1e4&&!r&&((this.audio.readyState==0||this.audio.readyState==1)&&this.audio.load(),r=!0),(Date.now()>=this.songTime&&!l||this.run)&&(l=!0,this.$refs.songsList.disabled=!0,this.$refs.testButton.disabled=!0,this.audio.play().then(()=>{"mediaSession"in window.navigator&&(window.navigator.mediaSession.setActionHandler("play",function(){}),window.navigator.mediaSession.setActionHandler("pause",function(){}),window.navigator.mediaSession.setActionHandler("seekbackward",function(){}),window.navigator.mediaSession.setActionHandler("seekforward",function(){}),window.navigator.mediaSession.setActionHandler("previoustrack",function(){}),window.navigator.mediaSession.setActionHandler("nexttrack",function(){})),!v&&this.run&&(this.confetti.render(),v=!0)}).catch(f=>{}));const _=new Date;if(this.date=_.toLocaleDateString(),this.time=_.toLocaleTimeString(),Date.now()<o){const f=Date.now()-o;let g=Math.floor(f/(1e3*60*60*24)),w=Math.floor(f%(1e3*60*60*24)/(1e3*60*60)),t=Math.floor(f%(1e3*60*60)/(1e3*60)),a=Math.floor(f%(1e3*60)/1e3);this.countdown=`${b(Math.abs(g+1))}:${b(Math.abs(w+1))}:${b(Math.abs(t+1))}:${b(Math.abs(a+1))}`,a<=15&&t==0&&w==0&&g==0&&a%2==0?this.$refs.countdown.style.color="rgb(238, 43, 43)":a<=15&&t==0&&w==0&&g==0&&(this.$refs.countdown.style.color="rgb(168, 209, 243)")}else h||(h=!0,this.confetti.render()),this.countdown="00:00:00:00"},250)},unmounted(){clearInterval(this.interval)}},H={ref:"confetti",class:"absolute top-0 left-0 pointer-events-none z-40 w-screen h-screen"},I=s("h2",{class:"text-center left-0 right-0 pt-24 text-4xl m-auto text-[#7e1094] select-none"},"New Years' Countdown",-1),D={class:"z-[1000] fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80"},L=["onClick"],B={class:"text-center top-0 bottom-0 left-0 right-0 m-auto h-2/5 w-screen pt-12"},F={class:"top-4 left-0 right-0 m-auto text-3xl text-center text-[#a1569e] select-none pointer-events-none"},$={class:"bottom-[-15%] right-0 left-0 m-auto"},E=["onClick"],N={class:"bottom-0 right-0 left-0 m-auto inline-block w-fit h-20 text-xl lg:text-2xl text-center"},P=s("label",{for:"song",class:"song-label"},"Current Song",-1),q=s("br",null,null,-1),W=["onChange"],Y={class:"text-center left-0 right-0 m-auto text-xl"},j={id:"message"},R=S("This should play "),O={class:"text-blue-400"},G=s("br",null,null,-1),V=s("br",null,null,-1),J=S(" From then, there is a part in the song that will hopefully be perfectly timed with when it reaches 12 AM in your time zone."),K=s("br",null,null,-1),Q=s("strong",null,"Make sure your clock is actually synchronized with real-world time!",-1);function U(n,e,i,o,r,l){return y(),x("main",{class:z(`w-full h-full m-auto absolute top-0 left-0 table ${this.mode=="light"?"bg-[#eeeeee]":"text-white"}`)},[s("canvas",H,null,512),I,s("div",D,[s("button",{class:"absolute top-0 left-0 right-0 bottom-0 m-auto h-fit z-[1002] text-white border-2 border-white rounded-md p-3 text-2xl bg-red-900",onClick:l.removeRequired},"Due to browser policies, you are required to push this button for the music to automatically start playing.",8,L)]),s("div",B,[s("h6",F,m(r.date)+" \xA0\xA0 "+m(r.time),1),s("h4",{ref:"countdown",class:"text-[#a8d1f3] left-0 right-0 m-auto text-7xl select-none pointer-events-none"},m(r.countdown),513),s("div",$,[s("button",{onClick:l.testSong,ref:"testButton",class:"text-blue-400 underline"},"Push me to test if audio works.",8,E)]),s("div",N,[P,q,s("select",{name:"song",ref:"songsList",onChange:l.setCurrentSong,class:"text-black text-center font-semibold p-3"},[(y(!0),x(A,null,T(r.songsList,h=>(y(),x("option",{key:h.url},m(h.name),1))),128))],40,W)])]),s("p",Y,[s("span",j,[R,s("span",O,'"'+m(r.currentSongName)+'"',1),S(" the second it reaches "+m(r.currentSongTime)+", I hope.",1)]),G,V,J,K,Q])],2)}var Z=k(M,[["render",U]]);export{Z as default};
