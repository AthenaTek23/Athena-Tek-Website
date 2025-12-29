import{j as o,m as c,A as v}from"./vendor-motion-CX9B87cL.js";import{u as d}from"./index-CEp12qIk.js";import{r as l}from"./vendor-react-DNUgy55u.js";function m(t,r={}){const{offset:i=150,threshold:e=.3}=r,[p,g]=l.useState(t[0]||"");return l.useEffect(()=>{const a=()=>{const u=window.scrollY+i;for(let n=t.length-1;n>=0;n--){const s=document.getElementById(t[n]);if(s){const b=s.offsetTop,x=s.offsetHeight;if(u>=b-x*e){g(t[n]);break}}}};return a(),window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[t,i,e]),p}function h(t,r=140){const i=document.getElementById(t);if(!i)return;const e=i.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:e-r,behavior:"smooth"})}function j({sections:t}){const{isDark:r}=d(),i=m(t.map(e=>e.id));return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"h-14"}),o.jsx("nav",{className:`
          fixed top-20 left-0 right-0 z-40 shadow-lg
          ${r?"bg-dark-900/95 backdrop-blur-sm border-b border-white/5":"bg-white/95 backdrop-blur-sm border-b border-light-200"}
        `,children:o.jsx("div",{className:"container-main",children:o.jsx("div",{className:"flex items-center gap-1 py-2 overflow-x-auto scrollbar-hide",children:t.map(e=>o.jsxs("button",{onClick:()=>h(e.id),className:`
                  relative px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors
                  ${i===e.id?"text-white":r?"text-dark-400 hover:text-white hover:bg-primary-navy/20":"text-light-500 hover:text-light-700 hover:bg-primary-navy/10"}
                `,children:[e.label,i===e.id&&o.jsx(c.div,{layoutId:"activeSection",className:"absolute inset-0 rounded-lg bg-primary-navy",style:{zIndex:-1},transition:{type:"spring",bounce:.2,duration:.6}})]},e.id))})})})]})}function S({sections:t}){const{isDark:r}=d(),i=m(t.map(e=>e.id));return o.jsx("div",{className:"fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3",children:t.map(e=>o.jsxs("button",{onClick:()=>h(e.id),className:"group relative flex items-center justify-end","aria-label":`Go to ${e.label}`,children:[o.jsx(v,{children:o.jsx("span",{className:`
                absolute right-6 px-3 py-1.5 rounded text-xs font-medium whitespace-nowrap
                opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none
                ${r?"bg-dark-800 text-white":"bg-white text-light-900 shadow-lg"}
              `,children:e.label})}),o.jsx(c.div,{className:`
              w-3 h-3 rounded-full transition-colors
              ${i===e.id?r?"bg-primary-light":"bg-primary-navy":r?"bg-dark-600 hover:bg-dark-500":"bg-light-300 hover:bg-light-400"}
            `,animate:{scale:i===e.id?1.3:1},transition:{type:"spring",bounce:.5}})]},e.id))})}export{j as P,S};
