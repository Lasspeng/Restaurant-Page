(()=>{"use strict";const e=()=>{const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("id","homePage"),e.appendChild(t);const n=document.createElement("h1");n.innerHTML="Very Cool Restaurant",t.appendChild(n);const o=document.createElement("img");o.src="../img/restaurant-img.jpeg",o.style.height="400px",o.style.width="700px",t.appendChild(o);const c=document.createElement("h3");c.innerHTML="Welcome to our very cool restaurant!",t.appendChild(c);const i=document.createElement("p");i.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",t.appendChild(i)};e(),document.querySelector(".home").addEventListener("click",(()=>{document.querySelector("#content").textContent="",e()})),document.querySelector(".menu").addEventListener("click",(()=>{document.querySelector("#content").textContent="",(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("id","menuPage"),e.appendChild(t);const n=document.createElement("h1");n.innerHTML="Menu",t.appendChild(n);const o=document.createElement("h2");o.innerHTML="Food",t.appendChild(o),((e,t,n)=>{const o=document.querySelector("#menuPage"),c=document.createElement("div");o.appendChild(c);const i=document.createElement("h3");i.innerHTML="Fried Mozzarella Cheese Sticks ($8.99)",c.appendChild(i);const d=document.createElement("img");d.src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F04%2F07%2F23596-fried-mozzarella-cheese-sticks-3x2-252.jpg",c.appendChild(d),d.style.height="300px",d.style.width="300px"})()})()})),document.querySelector(".contact").addEventListener("click",(()=>{document.querySelector("#content").textContent="",(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("id","contact"),e.appendChild(t);const n=document.createElement("h3");n.innerHTML="Location and Hours",t.appendChild(n);const o=document.createElement("p");o.innerHTML="521 Wonderland Rd. <br/ > 12345 <br/ > Atlanta, GA <br/ >",t.appendChild(o);const c=document.createElement("p");c.innerHTML="Monday-Saturday <br/ > 9AM-11PM",t.appendChild(c)})()}))})();