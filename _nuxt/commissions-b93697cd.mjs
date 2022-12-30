import{_ as i,o as a,c as u,a as e,t as o,b as _,w as f,n as p,d as x,e as g,f as w,g as n,h as b}from"./entry-4e2df03e.mjs";const y={props:["name","description","slots","maxSlots","price"]},v={class:"container bg-blue-500 w-2/5 md:w-1/5 text-white p-6 rounded-md my-4 mx-4 inline-block"},$={class:"text-4xl"},k={class:"description w-11/12 max-h-20 sm:max-h-48 md:max-h-96 mx-auto rounded-md text-sm md:text-base lg:text-xl overflow-auto p-2"},C={class:"text-2xl"},S={class:""};function I(r,c,t,l,m,d){return a(),u("div",v,[e("h2",$,o(t.name),1),e("div",k,o(t.description),1),e("h4",C,o(t.price),1),e("h5",S,"Slots: "+o(t.slots)+" / "+o(t.maxSlots),1)])}var M=i(y,[["render",I],["__scopeId","data-v-63ece21c"]]);const N={props:["name","url","color","icon"]},B={class:"icon text-center float-left p-1 w-9 h-9 my-auto"};function T(r,c,t,l,m,d){const s=w;return a(),_(s,{to:t.url,title:t.name,class:"text-white w-1/5 md:w-1/4 lg:w-1/6 h-12 inline-flex mx-4 hover:brightness-110 mt-4"},{default:f(()=>[e("div",{style:g("background-color:"+t.color),class:"w-full h-full rounded-full my-auto text-base md:text-2xl p-2 items-center space-x-2"},[e("div",B,[e("i",{class:p(t.icon)},null,2)]),x(" "+o(t.name),1)],4)]),_:1},8,["to","title"])}var q=i(N,[["render",T]]);const D={head(){return{title:"Commissions - BluSpring"}}},V={class:"w-full h-full m-auto absolute top-0 left-0 text-center mt-36 md:mt-16"},A={class:"commission-types"},F={id:"3d",class:"my-16"},z=e("header",{class:"text-5xl text-white"}," 3D-based Commissions ",-1),E={class:"cards"},P={id:"dev",class:"mt-16"},R=e("header",{class:"text-5xl text-white"}," Programming-based Commissions ",-1),G={class:"cards"},L={class:"contact mt-12"},O=e("h3",{class:"text-5xl text-white"},"Contact",-1),U=b('<div class="terms text-white text-center bg-slate-800 w-2/3 mx-auto p-6 overflow-y-auto mt-20 mb-16"><h2 class="text-5xl">Terms of Service</h2><h4 class="text-2xl text-gray-100">By commissioning me, you are agreeing to these terms of service.</h4><br><br><p class="text-2xl"><strong>General Information</strong><br> 1. No NSFW in any way is allowed.<br> 2. Once the commission is paid for, I shall place your commission in a queue to be finished.<br> 3. I reserve the right to decline any commission request.<br> 4. Any personal information given will be kept private and confidential.<br><br><strong>Usage and Rights</strong><br> 1. I do not allow my work to be minted as Non-Fungible Tokens (NFTs).<br> 2. You are not allowed to claim the commissioned work as your own.<br> 3. Commissioned works must not be used for profit, with videos and Minecraft servers being exceptions, unless stated in an agreement.<br> 4. I reserve the right to choose the completed commissions for promotion or as examples for myself, however you may state if you do not wish for this to be the case.<br><br><strong>Cancellations and Refunds</strong><br> 1. At any time, I reserve the right to cancel any unpaid commissions, cancel and refund paid commissions, or put commissions on hold as a result of poor communication, rude or inappropriate behaviour, or any kind of abuse. This right will also apply if I have encountered any serious problems regarding my personal life, health or equipment.<br> 2. Commissioners will be notified prior to cancellation.<br> 3. Commissioners may cancel a work in progress, or withdraw from their place in the queue, but they will not be granted a refund.<br></p></div>',1);function W(r,c,t,l,m,d){const s=M,h=q;return a(),u("main",V,[e("div",A,[e("section",F,[z,e("div",E,[n(s,{name:"3D Minecraft Animation",description:"I will make a 3D animation of your Minecraft character(s) in whatever way you wish, as long as it's following the terms.",slots:"2",maxSlots:"2",price:"$10 / 15s ($0.67 / 1s)"})])]),e("section",P,[R,e("div",G,[n(s,{name:"Minecraft Plugin",description:"I can create a Minecraft plugin for you, as long as it's following the terms, and as long as it is possible in Minecraft in the first place.",slots:"5",maxSlots:"5",price:"$26 / plugin"}),n(s,{name:"Minecraft Mod",description:"I can create a Minecraft mod for you, as long as it's following the terms, and depending on its complexity.",slots:"5",maxSlots:"5",price:"$9 / hour of work"})])])]),e("div",L,[O,n(h,{url:"https://twitter.com/BluSpringg",name:"Twitter",color:"#1d9bf0",icon:"fab fa-twitter"}),n(h,{url:"mailto:bluspringindohq@gmail.com",name:"E-mail",color:"#d71608",icon:"fas fa-envelope-open"})]),U])}var j=i(D,[["render",W]]);export{j as default};