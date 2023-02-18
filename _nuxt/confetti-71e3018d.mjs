function x(r){var e={target:"confetti-holder",max:80,size:1,animate:!0,respawn:!0,props:["circle","square","triangle","line"],colors:[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],clock:25,interval:null,rotate:!1,start_from_edge:!1,width:window.innerWidth,height:window.innerHeight};if(r&&(r.target&&(e.target=r.target),r.max&&(e.max=r.max),r.size&&(e.size=r.size),r.animate!==void 0&&r.animate!==null&&(e.animate=r.animate),r.respawn!==void 0&&r.respawn!==null&&(e.respawn=r.respawn),r.props&&(e.props=r.props),r.colors&&(e.colors=r.colors),r.clock&&(e.clock=r.clock),r.start_from_edge!==void 0&&r.start_from_edge!==null&&(e.start_from_edge=r.start_from_edge),r.width&&(e.width=r.width),r.height&&(e.height=r.height),r.rotate!==void 0&&r.rotate!==null&&(e.rotate=r.rotate)),typeof e.target!="object"&&typeof e.target!="string")throw new TypeError("The target parameter should be a node or string");if(typeof e.target=="object"&&(e.target===null||!e.target instanceof HTMLCanvasElement)||typeof e.target=="string"&&(document.getElementById(e.target)===null||!document.getElementById(e.target)instanceof HTMLCanvasElement))throw new ReferenceError("The target element does not exist or is not a canvas element");var f=typeof e.target=="object"?e.target:document.getElementById(e.target),n=f.getContext("2d"),s=[];function a(t,i){t||(t=1);var c=Math.random()*t;return i?Math.floor(c):c}var h=e.props.reduce(function(t,i){return t+(i.weight||1)},0);function u(){for(var t=Math.random()*h,i=0;i<e.props.length;++i){var c=e.props[i].weight||1;if(t<c)return i;t-=c}}function g(){var t=e.props[u()],i={prop:t.type?t.type:t,x:a(e.width),y:e.start_from_edge?e.clock>=0?-10:parseFloat(e.height)+10:a(e.height),src:t.src,radius:a(4)+1,size:t.size,rotate:e.rotate,line:Math.floor(a(65)-30),angles:[a(10,!0)+2,a(10,!0)+2,a(10,!0)+2,a(10,!0)+2],color:e.colors[a(e.colors.length,!0)],rotation:a(360,!0)*Math.PI/180,speed:a(e.clock/7)+e.clock/30};return i}function w(t){if(!!t){var i=t.radius<=3?.4:.8;switch(n.fillStyle=n.strokeStyle="rgba("+t.color+", "+i+")",n.beginPath(),t.prop){case"circle":{n.moveTo(t.x,t.y),n.arc(t.x,t.y,t.radius*e.size,0,Math.PI*2,!0),n.fill();break}case"triangle":{n.moveTo(t.x,t.y),n.lineTo(t.x+t.angles[0]*e.size,t.y+t.angles[1]*e.size),n.lineTo(t.x+t.angles[2]*e.size,t.y+t.angles[3]*e.size),n.closePath(),n.fill();break}case"line":{n.moveTo(t.x,t.y),n.lineTo(t.x+t.line*e.size,t.y+t.radius*5),n.lineWidth=2*e.size,n.stroke();break}case"square":{n.save(),n.translate(t.x+15,t.y+5),n.rotate(t.rotation),n.fillRect(-15*e.size,-5*e.size,15*e.size,5*e.size),n.restore();break}case"svg":{n.save();var c=new window.Image;c.src=t.src;var o=t.size||15;n.translate(t.x+o/2,t.y+o/2),t.rotate&&n.rotate(t.rotation),n.drawImage(c,-(o/2)*e.size,-(o/2)*e.size,o*e.size,o*e.size),n.restore();break}}}}var d=function(){e.animate=!1,clearInterval(e.interval),requestAnimationFrame(function(){n.clearRect(0,0,f.width,f.height);var t=f.width;f.width=1,f.width=t})},v=function(){f.width=e.width,f.height=e.height,s=[];for(var t=0;t<e.max;t++)s.push(g());function i(){n.clearRect(0,0,e.width,e.height);for(var o in s)w(s[o]);c(),e.animate&&requestAnimationFrame(i)}function c(){for(var o=0;o<e.max;o++){var l=s[o];l&&(e.animate&&(l.y+=l.speed),l.rotate&&(l.rotation+=l.speed/35),(l.speed>=0&&l.y>e.height||l.speed<0&&l.y<0)&&(e.respawn?(s[o]=l,s[o].x=a(e.width,!0),s[o].y=l.speed>=0?-10:parseFloat(e.height)):s[o]=void 0))}s.every(function(y){return y===void 0})&&d()}return requestAnimationFrame(i)};return{render:v,clear:d,appstate:e}}export{x as C};
