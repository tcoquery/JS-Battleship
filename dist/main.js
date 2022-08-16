(()=>{"use strict";const t=t=>{const e=[];return{isSunk:()=>{if(e.filter((t=>"X"===t)).length==t)return!0},hit:()=>e.push("X")}},e=document.getElementById("start"),a=document.querySelector(".game-info"),r=document.querySelector(".text-info");let o="hori";function n(t){for(let e=0;e<10;e++)for(let a=0;a<10;a++)if(""!=t[e][a]){const t=document.getElementById(`${e}${a}`);t.classList.remove(".player-grid-cell"),t.classList.add("grid-cell-with-ship")}}function l(t){r.textContent=`Player, place your ${t}`}function d(t){let e=Math.floor(10*Math.random()),a=Math.floor(10*Math.random());const r=document.getElementById(`${a}${e}`);""!=t.grid[a][e]&&"X"!=r.textContent?(t.receiveAttack(e,a),r.textContent="X"):""===t.grid[a][e]&&"O"!=r.textContent?r.textContent="O":d(t)}e.addEventListener("click",(()=>{r.textContent="Player, place your carrier",function(){const t=document.createElement("button"),e=document.createElement("button");t.textContent="Vertical",e.textContent="Horizontal",a.appendChild(t),a.appendChild(e),t.addEventListener("click",(()=>{o="vert"})),e.addEventListener("click",(()=>{o="hori"}))}()}));const s=()=>{const t=[["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""]];let e=0;const a=t=>""!=t;return{grid:t,placeShip:function(e,r,n,l){if("hori"==o){let o=[];for(let a=0;a<n;a++)o.push(t[r][e+a]);if(o.some(a))return;if(null!=t[r][e+(n-1)])for(let a=0;a<n;a++)t[r][e+a]=l}else if("vert"==o){let o=[];for(let a=0;a<n;a++)o.push(t[r+a][e]);if(o.some(a))return;if(null!=t[r+(n-1)][e])for(let a=0;a<n;a++)t[r+a][e]=l}},placeComputerShip:function e(r,o,n,l){const d=Math.floor(10*Math.random());if(d>4){let d=[];for(let e=0;e<n;e++)d.push(t[o][r+e]);if(d.some(a))e(Math.floor(10*Math.random()),Math.floor(10*Math.random()),n,l);else if(null!=t[o][r+(n-1)])for(let e=0;e<n;e++)t[o][r+e]=l}else if(d<=4&&null!=t[o+(n-1)]){let d=[];for(let e=0;e<n;e++)d.push(t[o+e][r]);if(d.some(a))e(Math.floor(10*Math.random()),Math.floor(10*Math.random()),n,l);else if(null!=t[o+(n-1)][r])for(let e=0;e<n;e++)t[o+e][r]=l}else e(Math.floor(10*Math.random()),Math.floor(10*Math.random()),n,l)},receiveAttack:function(a,r){t[r][a].hit(),t[r][a].isSunk()&&(e+=1),5==e&&alert("Game over")}}},i=s(),c=s(),p=t(5),h=t(5),u=t(4),f=t(4),m=t(3),M=t(3),y=t(3),g=t(3),x=t(2),I=t(2),C=document.querySelector(".game-info");!function(){for(let t=0;t<10;t++)for(let e=0;e<10;e++){const a=document.getElementById("computer-grid"),r=document.createElement("div");r.classList.add("computer-grid-cell"),r.dataset.y=t,r.dataset.x=e,a.appendChild(r)}}(),function(){for(let t=0;t<10;t++)for(let e=0;e<10;e++){const a=document.getElementById("player-grid"),r=document.createElement("div");r.classList.add("player-grid-cell"),r.dataset.y=t,r.dataset.x=e,r.id=`${t}${e}`,a.appendChild(r)}}();let S=0;document.querySelectorAll(".player-grid-cell").forEach((t=>{t.addEventListener("click",(()=>{switch(S){case 0:i.placeShip(parseInt(t.dataset.x),parseInt(t.dataset.y),5,p),n(i.grid),i.grid[parseInt(t.dataset.y)][parseInt(t.dataset.x)]==p&&(S+=1,l("battleship"));break;case 1:i.placeShip(parseInt(t.dataset.x),parseInt(t.dataset.y),4,u),n(i.grid),i.grid[parseInt(t.dataset.y)][parseInt(t.dataset.x)]==u&&(S+=1,l("cruiser"));break;case 2:i.placeShip(parseInt(t.dataset.x),parseInt(t.dataset.y),3,m),n(i.grid),i.grid[parseInt(t.dataset.y)][parseInt(t.dataset.x)]==m&&(S+=1,l("submarine"));break;case 3:i.placeShip(parseInt(t.dataset.x),parseInt(t.dataset.y),3,y),n(i.grid),i.grid[parseInt(t.dataset.y)][parseInt(t.dataset.x)]==y&&(S+=1,l("destroyer"));break;case 4:i.placeShip(parseInt(t.dataset.x),parseInt(t.dataset.y),2,x),n(i.grid),i.grid[parseInt(t.dataset.y)][parseInt(t.dataset.x)]==x&&(S+=1,C.textContent="",e=c,a=i,document.querySelectorAll(".computer-grid-cell").forEach((t=>{t.addEventListener("click",(()=>{let r=parseInt(t.dataset.x),o=parseInt(t.dataset.y);""!=e.grid[o][r]&&"X"!=t.textContent?(e.receiveAttack(r,o),t.textContent="X",t.style.backgroundColor="darkgrey",d(a)):""===e.grid[o][r]&&"O"!=t.textContent?(t.textContent="O",d(a)):alert("This cell was already selected !")}))})));break;case 5:return}var e,a}))})),c.placeComputerShip(Math.floor(10*Math.random()),Math.floor(10*Math.random()),5,h),c.placeComputerShip(Math.floor(10*Math.random()),Math.floor(10*Math.random()),4,f),c.placeComputerShip(Math.floor(10*Math.random()),Math.floor(10*Math.random()),3,M),c.placeComputerShip(Math.floor(10*Math.random()),Math.floor(10*Math.random()),3,g),c.placeComputerShip(Math.floor(10*Math.random()),Math.floor(10*Math.random()),2,I)})();