import{_ as h}from"./plugin-vue_export-helper-x3n3nnut.js";import{f,o as _,c as p,a as m}from"./app-Xr_rwflE.js";const v=m("p",null,"Redirecting to the correct locale...",-1),g=[v],$={__name:"index.html",setup(z){return f(()=>{const{languages:i}=window.navigator,{hash:s,origin:n}=window.location,e=s.substring(1),r={0:["/en/",["en-US","en-UK","en"]],1:["/zh/",["zh-CN","zh-TW","zh"]],2:["/ru/",["ru-RU","ru-KZ","ru-BY","ru-UA","ru-MD","ru-LV","tt-RU","ru"]],3:["/id/",["id-ID","id"]],4:["/es/",["es-ES","es"]],5:["/vi/",["vi-VN","vi"]],6:["/pt/",["pt-PT","pt-BR","pt"]],"/en/":["en-US"],"/zh/":["zh-CN"],"/ru/":["ru-RU"],"/id/":["id-ID"],"/es/":["es-ES"],"/vi/":["vi-VN"],"/pt/":["pt-PT"]},o=["/en/","/es/","/id/","/ru/","/vi/","/zh/"],c=o.pop();let t=null;e:for(const u of i)for(const[a,d]of Object.entries(r))if(d.includes(u)){if(!o.includes(a))continue;t=a;break e}const l=c?`${n}${c}${e?`#${e}`:""}`:null;t&&o.includes(t)?location.href=`${n}${t}${e?`#${e}`:""}`:l?location.href=l:location.href=`${n}/404.html`}),(i,s)=>(_(),p("div",null,g))}},B=h($,[["__file","index.html.vue"]]);export{B as default};
