(()=>{"use strict";const e=e=>{const t=[];t.length=e;const n=e=>"X"===e;return{arr:t,isSunk:()=>{t.every(n)&&console.log("sunk")},hit:e=>t[e-1]="X"}},t=document.getElementById("start");let n="";function a(e){for(let t=0;t<10;t++)for(let n=0;n<10;n++)if("S"==e[t][n]){const e=document.getElementById(`${t}${n}`);e.classList.remove(".grid-cell"),e.classList.add("grid-cell-with-ship")}}t.addEventListener("click",(()=>{const e=document.querySelector(".game-info");e.textContent="Player, place your ships";const t=document.createElement("button"),a=document.createElement("button");t.textContent="Vertical",a.textContent="Horizontal",e.appendChild(t),e.appendChild(a),t.addEventListener("click",(()=>{n="vert"})),a.addEventListener("click",(()=>{n="hori"}))}));const r=(()=>{const e=[["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""]],t=e=>"S"==e;return{grid:e,placeShip:function(n,a,r,s){if("hori"==s){let s=[];for(let t=0;t<r;t++)s.push(e[a][n+t]);if(s.some(t))return;if(null!=e[a][n+(r-1)])for(let t=0;t<r;t++)e[a][n+t]="S"}else if("vert"==s){let s=[];for(let t=0;t<r;t++)s.push(e[a+t][n]);if(s.some(t))return;if(null!=e[a+(r-1)][n])for(let t=0;t<r;t++)e[a+t][n]="S"}},receiveAttack:function(t,n,a){e[n][t]?a.hit():e[n][t]="O"},shipsSunk:function(){e.some(t)||console.log("game over")}}})();e(5),e(4),e(3),e(3),e(2);let s=0;!function(){for(let e=0;e<10;e++)for(let t=0;t<10;t++){const n=document.getElementById("computer-grid"),a=document.createElement("div");a.classList.add("grid-cell"),a.dataset.y=e,a.dataset.x=t,n.appendChild(a)}}(),function(){for(let e=0;e<10;e++)for(let t=0;t<10;t++){const n=document.getElementById("player-grid"),a=document.createElement("div");a.classList.add("grid-cell"),a.dataset.y=e,a.dataset.x=t,a.id=`${e}${t}`,n.appendChild(a)}}(),document.querySelectorAll(".grid-cell").forEach((e=>{e.addEventListener("click",(()=>{switch(s){case 0:r.placeShip(parseInt(e.dataset.x),parseInt(e.dataset.y),5,n),a(r.grid),s+=1;break;case 1:r.placeShip(parseInt(e.dataset.x),parseInt(e.dataset.y),4,n),a(r.grid),s+=1;break;case 2:case 3:r.placeShip(parseInt(e.dataset.x),parseInt(e.dataset.y),3,n),a(r.grid),s+=1;break;case 4:r.placeShip(parseInt(e.dataset.x),parseInt(e.dataset.y),2,n),a(r.grid),s+=1;break;case 5:return}}))}))})();