import{_ as h}from"./plugin-vue_export-helper-x3n3nnut.js";import{f,o as p,c as _,a as m}from"./app-gJuP6pwQ.js";const R=m("p",null,"Redirecting to the correct locale...",-1),v=[R],U={__name:"index.html",setup(g){return f(()=>{const{languages:n}=window.navigator,{hash:i,origin:t}=window.location,e=i.substring(1),a={0:["/en/",["en-US","en-UK","en"]],1:["/zh/",["zh-CN","zh-TW","zh"]],2:["/ru/",["ru-RU","ru-KZ","ru-BY","ru-UA","ru-MD","ru-LV","tt-RU","ru"]],3:["/id/",["id-ID","id"]],4:["/es/",["es-ES","es"]],5:["/mx/",["es-MX","es-419","es-AR","es-BM","es-BZ","es-BO","es-CL","es-CO","es-CR","es-CU","es-DO","es-EC","es-SV","es-GT","es-HN","es-NI","es-PA","es-PY","es-PE","es-PR","es-US","es-UY","es-VE"]],6:["/vi/",["vi-VN","vi"]],7:["/pt/",["pt-PT","pt-BR","pt"]],8:["/ko/",["ko","ko-KR"]],9:["/tr/",["tr-TR","tr"]],"/en/":["en-US"],"/zh/":["zh-CN"],"/ru/":["ru-RU"],"/id/":["id-ID"],"/es/":["es-ES"],"/mx/":["es-MX"],"/vi/":["vi-VN"],"/pt/":["pt-BR"],"/ko/":["ko-KR"],"/tr/":["tr-TR"]},o=["/en/","/es/","/id/","/mx/","/pt/","/ru/","/tr/","/vi/","/zh/"],r=o.pop();let s=null;e:for(const u of n)for(const[l,d]of Object.entries(a))if(d.includes(u)){if(!o.includes(l))continue;s=l;break e}const c=r?`${t}${r}${e?`#${e}`:""}`:null;s&&o.includes(s)?location.href=`${t}${s}${e?`#${e}`:""}`:c?location.href=c:location.href=`${t}/404.html`}),(n,i)=>(p(),_("div",null,v))}},B=h(U,[["__file","index.html.vue"]]);export{B as default};