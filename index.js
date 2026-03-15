import{a as p,S as f,i as n}from"./assets/vendor-DQvd0HNi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const d="55034455-5b3cbae51e7a3fca079c2f233",g="https://pixabay.com/api/";async function y(s){const r={key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(g,{params:r})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader-wrapper"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function v(s){const{webformatURL:r,largeImageURL:a,tags:i,likes:e,views:t,comments:o,downloads:u}=s;return`
    <li class="gallery-item">
      <a class="gallery-link" href="${a}">
        <img class="gallery-image" src="${r}" alt="${i}" />
      </a>
      <div class="image-info">
        <div class="image-info-item">
          <span>Likes</span>
          <small>${e}</small>
        </div>
        <div class="image-info-item">
          <span>Views</span>
          <small>${t}</small>
        </div>
        <div class="image-info-item">
          <span>Comments</span>
          <small>${o}</small>
        </div>
        <div class="image-info-item">
          <span>Downloads</span>
          <small>${u}</small>
        </div>
      </div>
    </li>
  `}function L(s){const r=s.map(v).join("");l.innerHTML=r,h.refresh()}function w(){l.innerHTML=""}function b(){c.classList.add("show")}function P(){c.classList.remove("show")}const m=document.querySelector(".form"),S=m.querySelector('input[name="search-text"]');m.addEventListener("submit",s=>{s.preventDefault();const r=S.value.trim();if(!r){n.warning({title:"Warning",message:"Please enter a search query",position:"topRight"});return}w(),b(),y(r).then(a=>{a.hits.length===0?n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(a.hits)}).catch(a=>{console.error("Pixabay API error:",a),n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{P()})});
//# sourceMappingURL=index.js.map
