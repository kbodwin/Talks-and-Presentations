"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_behaviors_ajax-error_ts-app_assets_modules_github_behaviors_include-467754","ui_packages_soft-navigate_soft-navigate_ts"],{57765:(e,t,r)=>{r.d(t,{a:()=>a,n:()=>i});var n=r(97797);function i(){let e=document.getElementById("ajax-error-message");e&&(e.hidden=!1)}function a(){let e=document.getElementById("ajax-error-message");e&&(e.hidden=!0)}(0,n.on)("deprecatedAjaxError","[data-remote]",function(e){let{error:t,text:r}=e.detail;e.currentTarget===e.target&&"abort"!==t&&"canceled"!==t&&(/<html/.test(r)?(i(),e.stopImmediatePropagation()):setTimeout(function(){e.defaultPrevented||i()},0))}),(0,n.on)("deprecatedAjaxSend","[data-remote]",function(){a()}),(0,n.on)("click",".js-ajax-error-dismiss",function(){a()})},63452:(e,t,r)=>{r.d(t,{A:()=>l,L:()=>s});var n=r(17688),i=r(21403),a=r(97797),o=r(2132);let d=new WeakMap;function l(e){let t=e.closest(".js-render-needs-enrichment");t&&(t.classList.remove("render-error"),d.get(t)?.setLoading(!1))}function s(e,t){let r=e.closest(".js-render-needs-enrichment");return!!r&&(r.classList.add("render-error"),d.get(r)?.setError(!0,t))}function c(e,t,r){let i=r.identifier??"",a=new URL(e,window.location.origin);for(let[e,r]of Object.entries(t))a.searchParams.append(e,`${r}`);return a.hash=i,(0,n.qy)`
    <div
      class="render-container color-bg-transparent js-render-target p-0"
      data-identity="${i}"
      data-host="${a.origin}"
      data-type="${r.type}"
    >
      <iframe
        title="File display"
        role="presentation"
        class="render-viewer"
        src="${String(a)}"
        name="${i}"
        data-content="${r.contentJson}"
        sandbox="allow-scripts allow-same-origin allow-top-navigation allow-popups"
      >
      </iframe>
    </div>
  `}(0,i.lB)(".js-render-needs-enrichment",{constructor:HTMLElement,initialize:function(e){let t={color_mode:(0,o.PT)()},r=e.getAttribute("data-type"),i=e.getAttribute("data-src"),a=e.getAttribute("data-identity"),l=e.getElementsByClassName("js-render-enrichment-target")[0],s=e.getElementsByClassName("js-render-enrichment-loader")[0],u=l.closest("details"),m=document.createElement("div");m.classList.add("js-render-enrichment-fallback"),e.appendChild(m);let f=l.firstElementChild;m.appendChild(f);let h={setLoading(e){s.hidden=!e},setError:(e,t)=>(h.setLoading(!1),!1!==e&&(f.classList.toggle("render-plaintext-hidden",!e),!!t&&((0,n.XX)([t,f],m),!0)))};d.set(e,h);let p=l.getAttribute("data-plain"),g=l.getAttribute("data-json");if(null==g||null==p)throw h.setError(!0,(0,n.qy)`<p class="flash flash-error">Unable to render rich display</p>`),Error(`Expected to see input data for type: ${r}`);let v=c(i,t,{type:r,identifier:a,contentJson:g}),y=c(i,t,{type:r,identifier:`${a}-fullscreen`,contentJson:g}),b=function(e,t,r){let i=(0,n.qy)`<clipboard-copy
    aria-label="Copy ${r.type} code"
    .value=${e}
    class="btn my-2 js-clipboard-copy p-0 d-inline-flex tooltipped-no-delay"
    role="button"
    data-copy-feedback="Copied!"
    data-tooltip-direction="s"
  >
    <svg
      aria-hidden="true"
      height="16"
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
      class="octicon octicon-copy js-clipboard-copy-icon m-2"
    >
      <path
        fill-rule="evenodd"
        d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"
      ></path>
      <path
        fill-rule="evenodd"
        d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"
      ></path>
    </svg>
    <svg
      aria-hidden="true"
      height="16"
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
      class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2"
    >
      <path
        fill-rule="evenodd"
        d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
      ></path>
    </svg>
  </clipboard-copy>`,a=(0,n.qy)`
    <details class="details-reset details-overlay details-overlay-dark" style="display: contents">
      <summary
        role="button"
        aria-label="Open dialog"
        class="btn my-2 mr-2 p-0 d-inline-flex"
        aria-haspopup="dialog"
        @click="${t}"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="octicon m-2">
          <path
            fill-rule="evenodd"
            d="M3.72 3.72a.75.75 0 011.06 1.06L2.56 7h10.88l-2.22-2.22a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.22-2.22H2.56l2.22 2.22a.75.75 0 11-1.06 1.06l-3.5-3.5a.75.75 0 010-1.06l3.5-3.5z"
          ></path>
        </svg>
      </summary>
      <details-dialog
        class="Box Box--overlay render-full-screen d-flex flex-column anim-fade-in fast"
        aria-label="${r.type} rendered container"
      >
        <div>
          <button
            aria-label="Close dialog"
            data-close-dialog=""
            type="button"
            data-view-component="true"
            class="Link--muted btn-link position-absolute render-full-screen-close"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              style="display:inline-block;vertical-align:text-bottom"
              class="octicon octicon-x"
            >
              <path
                fill-rule="evenodd"
                d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"
              ></path>
            </svg>
          </button>
          <div class="Box-body border-0" role="presentation"></div>
        </div>
      </details-dialog>
    </details>
  `;return(0,n.qy)`<div class="position-absolute top-0 pr-2 right-0 d-flex flex-justify-end flex-items-center">
    ${a}${i}
  </div>`}(p,()=>{(0,n.XX)(y,l.getElementsByClassName("Box-body")[0])},{type:r});u&&!u.open?u.ontoggle=()=>{u.open&&((0,n.XX)([b,v],l),u.ontoggle=null)}:(0,n.XX)([b,v],l)}}),(0,a.on)("preview:toggle:off",".js-previewable-comment-form",function(e){let t=e.currentTarget.querySelector(".js-render-needs-enrichment"),r=t?.querySelector(".js-render-enrichment-target");r&&(r.textContent="")}),(0,a.on)("preview:rendered",".js-previewable-comment-form",function(e){let t=e.currentTarget.querySelector(".js-render-needs-enrichment");t&&d.get(t)?.setLoading(!1)})},23711:(e,t,r)=>{r.d(t,{d:()=>c,s:()=>s});var n=r(79024),i=r(21403),a=r(97797);function o(e,t){let r=e.currentTarget;if(r instanceof Element){for(let e of r.querySelectorAll("[data-show-on-error]"))e instanceof HTMLElement&&(e.hidden=!t);for(let e of r.querySelectorAll("[data-hide-on-error]"))e instanceof HTMLElement&&(e.hidden=t)}}function d(e){o(e,!1)}function l(e){o(e,!0)}function s({currentTarget:e}){e instanceof Element&&c(e)}function c(e){let t=e.closest("details");t&&function(e){let t=e.getAttribute("data-deferred-details-content-url");if(t){e.removeAttribute("data-deferred-details-content-url");let r=e.querySelector("include-fragment, poll-include-fragment");r&&(r.src=t)}}(t)}(0,i.lB)("include-fragment, poll-include-fragment",{subscribe:e=>(0,n.Zz)((0,n.Rt)(e,"error",l),(0,n.Rt)(e,"loadstart",d))}),(0,a.on)("click","include-fragment button[data-retry-button]",({currentTarget:e})=>{e.closest("include-fragment").refetch()})},14152:(e,t,r)=>{r.d(t,{Qs:()=>g,hq:()=>d,zr:()=>v});var n=r(17688),i=r(63452),a=r(21403),o=r(93084);function d(e){return!!e.querySelector('.js-render-target[data-type="ipynb"]')}let l=["is-render-pending","is-render-ready","is-render-loading","is-render-loaded"],s=["is-render-ready","is-render-loading","is-render-loaded","is-render-failed","is-render-failed-fatally"],c=new WeakMap;function u(e){let t=c.get(e);null!=t&&(t.load=t.hello=null,t.helloTimer&&(clearTimeout(t.helloTimer),t.helloTimer=null),t.loadTimer&&(clearTimeout(t.loadTimer),t.loadTimer=null))}function m(e,t=""){e.classList.remove(...l),e.classList.add("is-render-failed");let r=function(e){let t=(0,n.qy)`<p>Unable to render rich display</p>`;if(""!==e){let r=e.split("\n");t=(0,n.qy)`<p><b>Unable to render rich display</b></p>
      <p>${r.map(e=>(0,n.qy)`${e}<br />`)}</p>`}return(0,n.qy)`<div class="flash flash-error">${t}</div>`}(t);!1===(0,i.L)(e,r)&&function(e,t){let r=e.querySelector(".render-viewer-error");r&&(r.remove(),e.classList.remove("render-container"),(0,n.XX)(t,e))}(e,r),u(e)}function f(e,t=!1){!(!(0,o.A)(e)||e.classList.contains("is-render-ready")||e.classList.contains("is-render-failed")||e.classList.contains("is-render-failed-fatally"))&&(!t||c.get(e)?.hello)&&m(e)}function h(e,t){return!!e&&!!e.postMessage&&(e.postMessage(JSON.stringify(t),"*"),!0)}function p(e){return t=>{if(!t.querySelector(".js-render-target"))return;let r=t.querySelector("iframe"),n=r?.contentWindow;if(n)return e(n)}}(0,a.lB)(".js-render-target",function(e){e.classList.remove(...s),e.style.height="auto",!c.get(e)?.load&&(u(e),c.get(e)||(c.set(e,{load:Date.now(),hello:null,helloTimer:window.setTimeout(f,1e4,e,!0),loadTimer:window.setTimeout(f,45e3,e)}),e.classList.add("is-render-automatic","is-render-requested")))}),window.addEventListener("message",function(e){let t=e.data;if(!t)return;if("string"==typeof t)try{t=JSON.parse(t)}catch{return}if("object"!=typeof t&&void 0!=t||"render"!==t.type||"string"!=typeof t.identity)return;let r=t.identity;if("string"!=typeof t.body)return;let n=t.body,a=function(e,t){let r=e.querySelector(`.js-render-target[data-identity="${t}"]`);return r&&r instanceof HTMLElement?r:null}(document,r);if(!a||e.origin!==a.getAttribute("data-host"))return;let o=null!=t.payload?t.payload:void 0,d=a.querySelector("iframe"),s=d?.contentWindow;switch(n){case"hello":if((c.get(a)||{untimed:!0}).hello=Date.now(),!s)return;h(s,{type:"render:cmd",body:{cmd:"ack",ack:!0}}),h(s,{type:"render:cmd",body:{cmd:"branding",branding:!1}});break;case"error":m(a,o?.error);break;case"error:fatal":m(a,o?.error),a.classList.add("is-render-failed-fatal");break;case"error:invalid":m(a,o?.error),a.classList.add("is-render-failed-invalid");break;case"loading":a.classList.remove(...l),a.classList.add("is-render-loading");break;case"loaded":a.classList.remove(...l),a.classList.add("is-render-loaded");break;case"ready":(0,i.A)(a),a.classList.remove(...l),a.classList.add("is-render-ready"),o&&"number"==typeof o.height&&(a.style.height=`${o.height}px`,""!==location.hash&&window.dispatchEvent(new HashChangeEvent("hashchange"))),o?.ack===!0&&window.requestAnimationFrame(()=>{setTimeout(()=>{h(s,{type:"render:cmd",body:{cmd:"code_rendering_service:ready:ack","code_rendering_service:ready:ack":{}}})},0)});break;case"resize":o&&"number"==typeof o.height&&(a.style.height=`${o.height}px`);break;case"code_rendering_service:container:get_size":h(s,{type:"render:cmd",body:{cmd:"code_rendering_service:container:size","code_rendering_service:container:size":{width:a?.getBoundingClientRect().width}}});break;case"code_rendering_service:markdown:get_data":if(!s)return;!function(){let e;let t=d?.getAttribute("data-content")??"";try{e=JSON.parse(t)?.data}catch{e=null}e&&h(s,{type:"render:cmd",body:{cmd:"code_rendering_service:data:ready","code_rendering_service:data:ready":{data:e,width:a?.getBoundingClientRect().width}}})}()}});let g=p(e=>h(e,{type:"render:cmd",body:{cmd:"code_rendering_service:behaviour:expand_all"}})),v=p(e=>h(e,{type:"render:cmd",body:{cmd:"code_rendering_service:behaviour:collapse_all"}}))},2132:(e,t,r)=>{r.d(t,{OQ:()=>o,PA:()=>l,PT:()=>u,Px:()=>s,to:()=>c});var n=r(5728),i=r(73480);function a(){(0,i.TV)("preferred_color_mode",o())}function o(){return d("dark")?"dark":d("light")?"light":void 0}function d(e){return window.matchMedia&&window.matchMedia(`(prefers-color-scheme: ${e})`).matches}function l(e){let t=document.querySelector("html[data-color-mode]");t&&t.setAttribute("data-color-mode",e)}function s(e,t){let r=document.querySelector("html[data-color-mode]");r&&r.setAttribute(`data-${t}-theme`,e)}function c(e){let t=document.querySelector("html[data-color-mode]");if(t)return t.getAttribute(`data-${e}-theme`)}function u(e="light"){let t=function(){let e=document.querySelector("html[data-color-mode]");if(e)return e.getAttribute("data-color-mode")}();return("auto"===t?o():t)??e}(async()=>{if(await n.G,a(),window.matchMedia){let e=window.matchMedia("(prefers-color-scheme: dark)");e?.addEventListener?e.addEventListener("change",a):e.addListener(a)}})()},7572:(e,t,r)=>{r.d(t,{C:()=>o,i:()=>d});var n=r(97156),i=r(97564),a=r(46493);function o(e,t){(0,i.G7)("primer_live_region_element")&&t?.element===void 0?(0,a.Cj)(e,{politeness:t?.assertive?"assertive":"polite"}):d((e.getAttribute("aria-label")||e.innerText||"").trim(),t)}function d(e,t){let{assertive:r,element:o}=t??{};(0,i.G7)("primer_live_region_element")&&void 0===o?(0,a.iP)(e,{politeness:r?"assertive":"polite"}):function(e,t,r){let i=r??n.XC?.querySelector(t?"#js-global-screen-reader-notice-assertive":"#js-global-screen-reader-notice");i&&(i.textContent===e?i.textContent=`${e}\u00A0`:i.textContent=e)}(e,r,o)}},73480:(e,t,r)=>{function n(e){return i(e)[0]}function i(e){let t=[];for(let r of function(){try{return document.cookie.split(";")}catch{return[]}}()){let[n,i]=r.trim().split("=");e===n&&void 0!==i&&t.push({key:n,value:i})}return t}function a(e,t,r=null,n=!1,i="lax"){let a=document.domain;if(null==a)throw Error("Unable to get document domain");a.endsWith(".github.com")&&(a="github.com");let o="https:"===location.protocol?"; secure":"",d=r?`; expires=${r}`:"";!1===n&&(a=`.${a}`);try{document.cookie=`${e}=${t}; path=/; domain=${a}${d}${o}; samesite=${i}`}catch{}}function o(e,t=!1){let r=document.domain;if(null==r)throw Error("Unable to get document domain");r.endsWith(".github.com")&&(r="github.com");let n=new Date(new Date().getTime()-1).toUTCString(),i="https:"===location.protocol?"; secure":"",a=`; expires=${n}`;!1===t&&(r=`.${r}`);try{document.cookie=`${e}=''; path=/; domain=${r}${a}${i}`}catch{}}r.d(t,{OR:()=>i,Ri:()=>n,TV:()=>a,Yj:()=>o})},67327:(e,t,r)=>{r.d(t,{Kq:()=>SoftNavErrorEvent,RQ:()=>SoftNavEndEvent,ni:()=>SoftNavSuccessEvent,sW:()=>SoftNavStartEvent});var n=r(27260);let i=class SoftNavEvent extends Event{constructor(e,t){super(t),this.mechanism=e}};let SoftNavStartEvent=class SoftNavStartEvent extends i{constructor(e){super(e,n.z.START)}};let SoftNavSuccessEvent=class SoftNavSuccessEvent extends i{constructor(e,t){super(e,n.z.SUCCESS),this.visitCount=t}};let SoftNavErrorEvent=class SoftNavErrorEvent extends i{constructor(e,t){super(e,n.z.ERROR),this.error=t}};let SoftNavEndEvent=class SoftNavEndEvent extends i{constructor(e){super(e,n.z.END)}}},56725:(e,t,r)=>{r.d(t,{Bu:()=>h,SC:()=>s,Ti:()=>m,iS:()=>c,k5:()=>l,o4:()=>u,rZ:()=>f});var n=r(27260),i=r(67327),a=r(47175),o=r(54861);let d=0;function l(){d=0,document.dispatchEvent(new Event(n.z.INITIAL)),(0,o.xT)()}function s(e){(0,o.LM)()||(document.dispatchEvent(new Event(n.z.PROGRESS_BAR.START)),document.dispatchEvent(new i.sW(e)),(0,o.Vy)(e),(0,o.ZW)(),(0,o.HK)(),(0,a.E5)())}function c(e={}){g(e)&&(d+=1,document.dispatchEvent(new i.ni((0,o.di)(),d)),m(e))}function u(e={}){if(!g(e))return;d=0;let t=(0,o.my)()||o.BW;document.dispatchEvent(new i.Kq((0,o.di)(),t)),p(),(0,a.Cd)(t),(0,o.xT)()}function m(e={}){if(!g(e))return;let t=(0,o.di)();p(),document.dispatchEvent(new i.RQ(t)),(0,o.Ff)(),(0,o.JA)(t)}function f(e={}){g(e)&&((0,a.Im)(),document.dispatchEvent(new Event(n.z.RENDER)))}function h(){document.dispatchEvent(new Event(n.z.FRAME_UPDATE))}function p(){document.dispatchEvent(new Event(n.z.PROGRESS_BAR.END))}function g({skipIfGoingToReactApp:e,allowedMechanisms:t=[]}={}){return(0,o.LM)()&&(0===t.length||t.includes((0,o.di)()))&&(!e||!(0,o.fX)())}},47175:(e,t,r)=>{r.d(t,{Cd:()=>l,E5:()=>d,Im:()=>s,Up:()=>a,nW:()=>o});var n=r(51528),i=r(54861);let a="stats:soft-nav-duration",o={turbo:"TURBO",react:"REACT","turbo.frame":"FRAME",ui:"UI",hard:"HARD"};function d(){performance.clearResourceTimings(),performance.mark(a)}function l(e){(0,n.i)({turboFailureReason:e,turboStartUrl:(0,i.dR)(),turboEndUrl:window.location.href})}function s(){let e=function(){if(0===performance.getEntriesByName(a).length)return null;performance.measure(a,a);let e=performance.getEntriesByName(a).pop();return e?e.duration:null}();if(!e)return;let t=o[(0,i.di)()],r=Math.round(e);t===o.react&&document.dispatchEvent(new CustomEvent("staffbar-update",{detail:{duration:r}})),(0,n.i)({requestUrl:window.location.href,softNavigationTiming:{mechanism:t,destination:(0,i.fX)()||"rails",duration:r,initiator:(0,i.Pv)()||"rails"}})}},63120:(e,t,r)=>{r.d(t,{softNavigate:()=>a});var n=r(56725),i=r(7332);function a(e,t){(0,n.SC)("turbo"),(0,i.YR)(e,{...t})}}}]);
//# sourceMappingURL=app_assets_modules_github_behaviors_ajax-error_ts-app_assets_modules_github_behaviors_include-467754-4ebb18f4e8ca.js.map