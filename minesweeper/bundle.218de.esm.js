!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(e){return t[e]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/demos/minesweeper/",e(e.s="mdyV")}({"5s8I":function(t){t.exports={topRow:"NbAnYrWSfkuenLuTJ6QS5",bottomRow:"_2p47jEkoTBrzYEJW6FmyjW"}},"E+vy":function(t){t.exports={container:"d_mFF1jruGjQl7_HGI8X_",square:"_3BBjZ1LPKgQUmtc8IO0vSh"}},HVBM:function(t){t.exports={filters:"_1cWFJaZg9-KUzz2-tn8yCU",summaries:"_2G422t4yLLZ-TCrtj4fWkT"}},L7Kd:function(t){t.exports={header:"_3oiVJRdVy6_Sqo1_K0EJ7o",active:"_2VNCoyd6uprVuGrsbL3h4C"}},QfWi:function(t,e,n){"use strict";function r(){return Object(ut.h)("header",{className:st.header},Object(ut.h)("h1",null,"Minesweeper Game"),Object(ut.h)("nav",null,Object(ut.h)(at.Link,{activeClassName:st.active,href:ft},lt),Object(ut.h)(at.Link,{activeClassName:st.active,href:_t},pt)))}function o(t,e){ut.options.__h&&ut.options.__h(ht,t,bt||e),bt=0;var n=ht.__H||(ht.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function i(t){return bt=1,u(f,t)}function u(t,e,n){var r=o(dt++,2);return r.__c||(r.__c=ht,r.__=[n?n(e):f(void 0,e),function(e){var n=t(r.__[0],e);r.__[0]!==n&&(r.__[0]=n,r.__c.setState({}))}]),r.__}function c(t,e){var n=o(dt++,3);!ut.options.__s&&function(t,e){return!t||e.some((function(e,n){return e!==t[n]}))}(n.__H,e)&&(n.__=t,n.__H=e,ht.__H.__h.push(n))}function a(){yt.some((function(t){if(t.__P)try{t.__H.__h.forEach(s),t.__H.__h.forEach(l),t.__H.__h=[]}catch(e){return t.__H.__h=[],ut.options.__e(e,t.__v),!0}})),yt=[]}function s(t){t.t&&t.t()}function l(t){var e=t.__();"function"==typeof e&&(t.t=e)}function f(t,e){return"function"==typeof e?e(t):e}function p(t,e){return e(t)}function _(t,e){return function({x:t,y:e},n,r){return[{x:t-1,y:e-1},{x:t,y:e-1},{x:t+1,y:e-1},{x:t-1,y:e},{x:t+1,y:e},{x:t-1,y:e+1},{x:t,y:e+1},{x:t+1,y:e+1}].filter(t=>function({x:t,y:e},n,r){return t>=0&&e>=0&&t<n&&e<r}(t,n,r))}(t.position,e[0].length,e.length).map(({x:t,y:n})=>e[n][t])}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t,e){return _(t,e).reduce((t,{mine:e})=>e?t+1:t,t.mine?1:0)}function y(t,e,n){return function(t){return t.map(e=>e.map(e=>h({},e,{adjacentMines:b(e,t)})))}(function(t,e){return t.map((t,n)=>t.map((t,r)=>h({},t,{position:{x:r,y:n},mine:0===Math.floor(Math.random()*e)})))}(function(t,e){return new Array(t).fill(new Array(e).fill({position:{x:0,y:0},revealed:!1,flagged:!1,mine:!1,adjacentMines:0}))}(t,e),n))}function v(t){const{height:e,width:n,mineRatio:r,name:o}=t;return{board:y(e,n,r),status:"START",difficultyName:o,flagging:!1,startedAt:null,finishedAt:null}}function g(t,e){return e(t)}function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function w(t){return t.map(t=>t.map(t=>function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t,{revealed:!!t.mine||t.revealed})))}function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function A(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function k(t,e){return _(t,e).filter(t=>!t.mine&&!t.revealed)}function x(t,e){let n=void 0;return t.find(t=>{const r=k(t,e);return n=r.length?r[0]:void 0,!!n}),n}function N(t,e){return 0===t.adjacentMines&&k(t,e).length>0}function S(t,e){let n=[],r=t;for(;r;)r.revealed=!0,n=N(r,e)?[...n,r]:n.filter(t=>t!==r),r=x(n,e);return e}function D(t){try{localStorage.setItem("stats",JSON.stringify(t))}catch(t){}}function C(t){const{startedAt:e,finishedAt:n,difficultyName:r}=t;if(!e||!n)throw new Error("Game is unfinished!");return{difficultyName:r,win:"WIN"===t.status,startedAt:e,finishedAt:n}}function T(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?T(Object(n),!0).forEach((function(e){R(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function R(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function L(t){function e(){document.activeElement instanceof HTMLElement&&document.activeElement.blur()}const{square:n,status:r,flagging:o,dispatch:i,statsDispatch:u}=t,c="FAIL"===r||"WIN"===r,a=n.flagged?Nt.flagged:"",s=o?Nt.flagging:"";return Object(ut.h)("div",{className:xt.square},Object(ut.h)("button",{disabled:c,className:`${xt.square} ${Nt.hidden} ${a} ${s}`,onClick:function(){o?(i(function(t){return function(e){return function(t,e){const n=e.board.map(e=>e.map(e=>e.position.y===t.position.y&&e.position.x===t.position.x?function(t){return E({},t,{flagged:!t.flagged})}(e):e));return E({},e,{board:n})}(t,e)}}(n)),e()):n.flagged||(i(function(t,e){return function(n){const r=function(t,e){return function(t){const{board:e,flagging:n,startedAt:r,difficultyName:o}=t,i=function(t){const{gameStarted:e,mineRevealed:n,nonMineNotRevealed:r}=function(t){let e=!1,n=!1,r=!1;return t.forEach(t=>t.forEach(t=>{!e&&t.revealed&&(e=!0),!n&&t.revealed&&t.mine&&(n=!0),r||t.revealed||t.mine||(r=!0)})),{gameStarted:e,mineRevealed:n,nonMineNotRevealed:r}}(t);return e?n?"FAIL":r?"PLAY":"WIN":"START"}(e),u=function(t){return"FAIL"===t||"WIN"===t}(i);return{board:u?w(e):e,difficultyName:o,status:i,flagging:n,startedAt:r,finishedAt:u?Date.now():null}}(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach((function(e){A(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},e,{board:S(t,e.board),startedAt:e.startedAt||Date.now()}))}(t,n);return!n.finishedAt&&r.finishedAt&&e(function(t){return function(e){return function({todayOnly:t,results:e},n){const r={todayOnly:t,results:[...e,C(n)]};return D(r),r}(e,t)}}(r)),r}}(n,u)),e())}}))}function M(t){const{status:e,square:n}=t,{mine:r,adjacentMines:o}=n;return Object(ut.h)("div",{className:`${xt.square} ${St.revealed}`},r?function(){const t=` ${"WIN"===e?St.win:""} ${St.mine}`;return Object(ut.h)("img",{className:t,src:"{minesweeperRouteProps.path}/assets/icons/mine.png",alt:"Mine"})}():o||"")}function I(t){const{square:e,status:n,flagging:r,dispatch:o,statsDispatch:i}=t,{revealed:u}=e;return Object(ut.h)("div",{className:xt.container},u?Object(ut.h)(M,{square:e,status:n}):Object(ut.h)(L,{square:e,status:n,flagging:r,dispatch:o,statsDispatch:i}))}function W(t){const{game:e,dispatch:n,statsDispatch:r}=t,{status:o,board:i,flagging:u}=e;return Object(ut.h)("div",{className:Dt.board},i.map(t=>function(t){return Object(ut.h)("div",{className:Dt.row},t.map(t=>function(t){return Object(ut.h)(I,{square:t,status:o,flagging:u,dispatch:n,statsDispatch:r})}(t)))}(t)))}function F(t){const{dispatch:e}=t,[n,r]=i("EASY");return Object(ut.h)("div",{className:Ct.reset},Object(ut.h)("form",{onSubmit:function(t){t.preventDefault(),e(function(t){return function(){return v(t)}}(function(){switch(n){case"HARD":return At;case"NORMAL":return Pt;case"EASY":return wt}}()))}},Object(ut.h)("select",{className:Ct.select,value:n,onInput:function(t){r(t.currentTarget.value)}},kt.map((function(t){const{name:e,displayName:n,width:r,height:o}=t;return Object(ut.h)("option",{value:e},n," (",r,"x",o,")")}))),Object(ut.h)("button",{className:Ct.submit,type:"submit"},"Reset")))}function U(t){const{status:e}=t;return Object(ut.h)("div",{className:Tt.status},Object(ut.h)("div",{className:Tt.emoji,title:function(){switch(e){case"START":return"";case"PLAY":return"Game in progress...";case"FAIL":return"You lost!  Please, try again!";case"WIN":return"You won!"}}()},function(){switch(e){case"START":return"🙂";case"PLAY":return"🤔";case"FAIL":return"😵";case"WIN":return"😎"}}()))}function H(t){return`0${t}`.slice(-2)}function $(t,e=!1){return`${t<0?"-":""}${function(t,e){const n=Math.floor(Math.abs(t)/1e3),r=Math.floor(n/3600),o=Math.floor(n%3600/60),i=Math.floor(n%3600%60);return r>0?`${r}:${H(o)}:${H(i)}`:e||o>0?`${o}:${H(i)}`:`${i}`}(t,e)}`}function K(t,e){return null===t?0:null===e?Date.now()-t:e-t}function q(t){const{startedAt:e,finishedAt:n}=t,[r,o]=i(K(e,n)),u=null!==e?"":Rt.hide;return c((function(){const t=window.setInterval((function(){o(K(e,n))}),100);return function(){clearInterval(t)}})),Object(ut.h)("div",{className:`${Rt.container} ${u}`},Object(ut.h)("div",{className:Rt.timer},$(r)," ⏱"))}function G(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function B(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function V(t){function e(){a||i((function(t){return function(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?G(Object(n),!0).forEach((function(e){B(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t,{flagging:!t.flagging})}(t)}))}function n(t){"f"===t.key&&e()}const{status:r,flagging:o,dispatch:i}=t,u=o?Lt.buttonActive:"",a="WIN"===r||"FAIL"===r;return c((function(){return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}})),Object(ut.h)("div",{className:`${Lt.container} ${u}`},Object(ut.h)("button",{onClick:e,disabled:a,className:Lt.button,title:"Toggle flagging mines (Press F for shortcut)"},Object(ut.h)("span",{className:Lt.flag},"🚩")))}function Y(t){const{game:e,dispatch:n,statsDispatch:r,updateTitle:o}=t,{status:i,flagging:u,startedAt:a,finishedAt:s}=e;return c((function(){o(lt)}),[]),Object(ut.h)("div",null,Object(ut.h)("div",{className:Et.topRow},Object(ut.h)(U,{status:i}),Object(ut.h)(F,{dispatch:n}),Object(ut.h)(q,{startedAt:a,finishedAt:s})),Object(ut.h)(W,{game:e,dispatch:n,statsDispatch:r}),Object(ut.h)("div",{className:Et.bottomRow},Object(ut.h)(V,{status:i,flagging:u,dispatch:n})))}function J(t){const{label:e,value:n}=t;return Object(ut.h)("div",{className:Mt.line},Object(ut.h)("div",{className:Mt.label},Object(ut.h)("strong",null,e)),Object(ut.h)("div",{className:Mt.value},n))}function Z({results:t,todayOnly:e},n){const r=function(){const t=new Date(Date.now());return t.setHours(0,0,0,0),t.getTime()}();return t.filter(t=>!(n&&t.difficultyName!==n.name||e&&t.finishedAt<r))}function Q(t,e){return`${(Math.round(10*(e?t/e*100:0))/10).toFixed(1)}%`}function X(t){return t.reduce((t,e)=>t+e,0)}function z(t){return t.filter(t=>t.win).map(t=>t.finishedAt-t.startedAt)}function tt(t){const{stats:e,difficulty:n}=t,r=function(t,e){const n=Z(t,e),r=n.length,o=z(n),i=o.length;return{games:r,wins:i,winRate:Q(i,r),fastestTime:function(t){let e=null;return t.forEach(t=>{(null===e||t<e)&&(e=t)}),e?$(e,!0):"-:--"}(o),averageTime:function(t){const e=X(t),n=Math.floor(e/t.length);return n?$(n,!0):"-:--"}(o)}}(e,n),{games:o,wins:i,winRate:u,fastestTime:c,averageTime:a}=r;return Object(ut.h)("div",{className:It.summary},Object(ut.h)("h3",null,n.displayName," ",Object(ut.h)("span",{className:It.dimensions},"(",n.width,"x",n.height,")")),Object(ut.h)("div",{className:It.statLines},Object(ut.h)(J,{label:"Games",value:o}),Object(ut.h)(J,{label:"Wins",value:i}),Object(ut.h)(J,{label:"Wins (%)",value:u}),Object(ut.h)(J,{label:"Fastest Time",value:c}),Object(ut.h)(J,{label:"Average Time",value:a})))}function et(t){const{stats:e}=t,{totalTime:n,games:r,wins:o,winRate:i}=function(t){const e=Z(t),n=function(t){const e=X(function(t){return t.map(t=>t.finishedAt-t.startedAt)}(t));return e?$(e,!0):"-:--"}(e),r=e.length,o=z(e).length;return{totalTime:n,games:r,wins:o,winRate:Q(o,r)}}(e);return Object(ut.h)("div",{className:It.summary},Object(ut.h)("h3",null,"All Modes"),Object(ut.h)("div",{className:It.statLines},Object(ut.h)(J,{label:"Games",value:r}),Object(ut.h)(J,{label:"Wins",value:o}),Object(ut.h)(J,{label:"Wins (%)",value:i}),Object(ut.h)(J,{label:"Total Play Time",value:n})))}function nt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function rt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ot(t){return function(e){return function(t,e){const n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?nt(Object(n),!0).forEach((function(e){rt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):nt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t,{todayOnly:e});return D(n),n}(e,t)}}function it(t){const{stats:e,dispatch:n,updateTitle:r}=t,o=e.todayOnly?"Today":"All Time";return c((function(){r(pt)}),[]),Object(ut.h)("div",null,Object(ut.h)("div",{className:Wt.filters},Object(ut.h)("button",{id:"allTimeButton",onClick:function(){n(ot(!1))}},"All Time"),Object(ut.h)("button",{id:"todayButton",onClick:function(){n(ot(!0))}},"Today")),Object(ut.h)("h2",null,"Game Stats: ",o),Object(ut.h)("div",{className:Wt.summaries},Object(ut.h)(et,{stats:e}),Object(ut.h)(tt,{difficulty:wt,stats:e}),Object(ut.h)(tt,{difficulty:Pt,stats:e}),Object(ut.h)(tt,{difficulty:At,stats:e})),Object(ut.h)("small",null,"ℹ️ Stats are only recorded for finished games!"))}n.r(e),n("pyAK");var ut=n("hosL"),ct=n("Y3FI"),at=n("ox/y"),st=n("L7Kd");const lt="Play",ft="/demos/minesweeper/",pt="Stats",_t="/demos/minesweeper/stats";var dt,ht,mt,bt=0,yt=[],vt=ut.options.__r,gt=ut.options.diffed,Ot=ut.options.__c,jt=ut.options.unmount;ut.options.__r=function(t){vt&&vt(t),dt=0,(ht=t.__c).__H&&(ht.__H.__h.forEach(s),ht.__H.__h.forEach(l),ht.__H.__h=[])},ut.options.diffed=function(t){gt&&gt(t);var e=t.__c;if(e){var n=e.__H;n&&n.__h.length&&(1!==yt.push(e)&&mt===ut.options.requestAnimationFrame||((mt=ut.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);"undefined"!=typeof window&&(e=requestAnimationFrame(n))})(a))}},ut.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(s),t.__h=t.__h.filter((function(t){return!t.__||l(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],ut.options.__e(n,t.__v)}})),Ot&&Ot(t,e)},ut.options.unmount=function(t){jt&&jt(t);var e=t.__c;if(e){var n=e.__H;if(n)try{n.__.forEach((function(t){return t.t&&t.t()}))}catch(t){ut.options.__e(t,e.__v)}}};const wt={name:"EASY",displayName:"Easy",height:10,width:10,mineRatio:8},Pt={name:"NORMAL",displayName:"Normal",height:15,width:25,mineRatio:8},At={name:"HARD",displayName:"Hard",height:25,width:50,mineRatio:8},kt=[wt,Pt,At];var xt=n("E+vy"),Nt=n("b6eC"),St=n("d4kF"),Dt=n("fwD8"),Ct=n("rAdK"),Tt=n("Z8HV"),Et=n("5s8I"),Rt=n("anWR"),Lt=n("S72u"),Mt=n("wmBI"),It=n("X9Fu"),Wt=n("HVBM");e.default=function(){function t(t){document.title=`Minesweeper Game - ${t}`}const[e,n]=u(p,v(wt)),[o,i]=u(g,function(){try{const t=localStorage.getItem("stats");return t?JSON.parse(t):{todayOnly:!1,results:[]}}catch(t){return{todayOnly:!1,results:[]}}}());return Object(ut.h)("div",{id:"app"},Object(ut.h)(r,null),Object(ut.h)("main",null,Object(ut.h)(ct.Router,null,Object(ut.h)(ct.Route,{path:ft,component:Y,game:e,dispatch:n,statsDispatch:i,updateTitle:t}),Object(ut.h)(ct.Route,{path:_t,component:it,stats:o,dispatch:i,updateTitle:t}))))}},S72u:function(t){t.exports={container:"_2tGRj5bs7uYqlzSGBMmPPR",button:"M55u8jseqpiRvO8OrvA5V",flag:"_1gIhCK9fRlxlyHhmZgatwm",buttonActive:"uXdgHtVoMo8yafW5O5db6",wiggleKeyFrames:"_3KP_mK2-6avCTTBTjb_8yS"}},X9Fu:function(t){t.exports={summary:"_33-IbutgyWRwLt_gWzvZis",dimensions:"_18SnD1rGNcrxnZq-n-d05A",statLines:"Ybm_DtfNw9UTM7TKs0u6o"}},Y3FI:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),u={};if(i&&i[1])for(var a=i[1].split("&"),s=0;s<a.length;s++){var l=a[s].split("=");u[decodeURIComponent(l[0])]=decodeURIComponent(l.slice(1).join("="))}t=c(t.replace(o,"")),e=c(e||"");for(var f=Math.max(t.length,e.length),p=0;p<f;p++)if(e[p]&&":"===e[p].charAt(0)){var _=e[p].replace(/(^:|[+*?]+$)/g,""),d=(e[p].match(/[+*?]+$/)||b)[0]||"",h=~d.indexOf("+"),m=~d.indexOf("*"),y=t[p]||"";if(!y&&!m&&(d.indexOf("?")<0||h)){r=!1;break}if(u[_]=decodeURIComponent(y),h||m){u[_]=t.slice(p).map(decodeURIComponent).join("/");break}}else if(e[p]!==t[p]){r=!1;break}return(!0===n.default||!1!==r)&&u}function i(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function u(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:c(t.props.path).map(a).join("")}(t),t.props}function c(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function a(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function s(){var t;return""+((t=y&&y.location?y.location:y&&y.getCurrentLocation?y.getCurrentLocation():"undefined"!=typeof location?location:O).pathname||"")+(t.search||"")}function l(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=v.length;e--;)if(v[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),y&&y[e]?y[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),f(t)}function f(t){for(var e=!1,n=0;n<v.length;n++)!0===v[n].routeTo(t)&&(e=!0);for(var r=g.length;r--;)g[r](t);return e}function p(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return l(e)}}function _(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return p(t.currentTarget||t.target||this),d(t)}function d(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function h(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(p(e))return d(t)}}while(e=e.parentNode)}}n.r(e),n.d(e,"subscribers",(function(){return g})),n.d(e,"getCurrentUrl",(function(){return s})),n.d(e,"route",(function(){return l})),n.d(e,"Router",(function(){return w})),n.d(e,"Route",(function(){return A})),n.d(e,"Link",(function(){return P})),n.d(e,"exec",(function(){return o}));var m=n("hosL"),b={},y=null,v=[],g=[],O={},j=!1,w=function(t){function e(e){t.call(this,e),e.history&&(y=e.history),this.state={url:e.url||s()},j||("function"==typeof addEventListener&&(y||addEventListener("popstate",(function(){f(s())})),addEventListener("click",h)),j=!0)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||t.url!==this.props.url||t.onChange!==this.props.onChange},e.prototype.canRoute=function(t){var e=Object(m.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){v.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;y&&(this.unlisten=y.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),v.splice(v.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(u).sort(i).map((function(t){var i=o(e,t.props.path,t.props);if(i){if(!1!==n){var u={url:e,matches:i};return r(u,i),delete u.ref,delete u.key,Object(m.cloneElement)(t,u)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(Object(m.toChildArray)(n),o,!0),u=i[0]||null,c=this.previousUrl;return o!==c&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:c,active:i,current:u})),u},e}(m.Component),P=function(t){return Object(m.createElement)("a",r({onClick:_},t))},A=function(t){return Object(m.createElement)(t.component,t)};w.subscribers=g,w.getCurrentUrl=s,w.route=l,w.Router=w,w.Route=A,w.Link=P,w.exec=o,e.default=w},Z8HV:function(t){t.exports={status:"_1147OUGNeAYI9AR67l3M_F",emoji:"_3kTdVpLwURv5ZCG1BkEjnu"}},anWR:function(t){t.exports={container:"_1b7DgXfDW-verlutAJs4J9",hide:"_3EXH8HVfi73vqzQt9mlNau",timer:"_2cFb60-Inj7n2JffQx2qGk"}},b6eC:function(t){t.exports={hidden:"_Q0GAmu13cSZrgEnyTAmu",flagged:"US-_EuLNQM_x57Ro2nIFI",flagging:"_2V8IhtMNCWBKfUkHLq5x9g"}},d4kF:function(t){t.exports={revealed:"_2DsiIUj-2FFGFi7RoW5Ess",mine:"_1kCDhNVeofrqWmInXchJTz",mineKeyFrames:"_2cqgmlXYZG0kg5yquOBFkS",win:"_2PfFxuh60roKG5A8khyu9Q",winKeyFrames:"h0jr41_I_MWtLngRN6BYL"}},fwD8:function(t){t.exports={board:"_1iZAthx1--rn2vXXViQBvR",row:"_2E5SJFgFMk9ds9xu9z9DJg"}},hosL:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t){var e=t.parentNode;e&&e.removeChild(t)}function i(t,e,n){var r,o=arguments,i={};for(r in e)"key"!==r&&"ref"!==r&&(i[r]=e[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(i.children=n),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===i[r]&&(i[r]=t.defaultProps[r]);return u(t,i,e&&e.key,e&&e.ref,null)}function u(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(i.__v=i),S.vnode&&S.vnode(i),i}function c(){return{}}function a(t){return t.children}function s(t,e){this.props=t,this.context=e}function l(t,e){if(null==e)return t.__?l(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?l(t):null}function f(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return f(t)}}function p(t){(!t.__d&&(t.__d=!0)&&C.push(t)&&!T++||R!==S.debounceRendering)&&((R=S.debounceRendering)||E)(_)}function _(){for(var t;T=C.length;)t=C.sort((function(t,e){return t.__v.__b-e.__v.__b})),C=[],t.some((function(t){var e,n,o,i,u,c,a;t.__d&&(c=(u=(e=t).__v).__e,(a=e.__P)&&(n=[],(o=r({},u)).__v=o,i=v(a,u,o,e.__n,void 0!==a.ownerSVGElement,null,n,null==c?l(u):c),g(n,u),i!=c&&f(u)))}))}function d(t,e,n,r,i,u,c,a,s){var f,p,_,d,m,b,y,g=n&&n.__k||W,O=g.length;if(a==I&&(a=null!=u?u[0]:O?l(n,0):null),f=0,e.__k=h(e.__k,(function(n){if(null!=n){if(n.__=e,n.__b=e.__b+1,null===(_=g[f])||_&&n.key==_.key&&n.type===_.type)g[f]=void 0;else for(p=0;p<O;p++){if((_=g[p])&&n.key==_.key&&n.type===_.type){g[p]=void 0;break}_=null}if(d=v(t,n,_=_||I,r,i,u,c,a,s),(p=n.ref)&&_.ref!=p&&(y||(y=[]),_.ref&&y.push(_.ref,null,n),y.push(p,n.__c||d,n)),null!=d){var o;if(null==b&&(b=d),void 0!==n.__d)o=n.__d,n.__d=void 0;else if(u==_||d!=a||null==d.parentNode){t:if(null==a||a.parentNode!==t)t.appendChild(d),o=null;else{for(m=a,p=0;(m=m.nextSibling)&&p<O;p+=2)if(m==d)break t;t.insertBefore(d,a),o=a}"option"==e.type&&(t.value="")}a=void 0!==o?o:d.nextSibling,"function"==typeof e.type&&(e.__d=a)}else a&&_.__e==a&&a.parentNode!=t&&(a=l(_))}return f++,n})),e.__e=b,null!=u&&"function"!=typeof e.type)for(f=u.length;f--;)null!=u[f]&&o(u[f]);for(f=O;f--;)null!=g[f]&&w(g[f],g[f]);if(y)for(f=0;f<y.length;f++)j(y[f],y[++f],y[++f])}function h(t,e,n){if(null==n&&(n=[]),null==t||"boolean"==typeof t)e&&n.push(e(null));else if(Array.isArray(t))for(var r=0;r<t.length;r++)h(t[r],e,n);else n.push(e?e("string"==typeof t||"number"==typeof t?u(null,t,null,null,t):null!=t.__e||null!=t.__c?u(t.type,t.props,t.key,null,t.__v):t):t);return n}function m(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]="number"==typeof n&&!1===F.test(e)?n+"px":null==n?"":n}function b(t,e,n,r,o){var i,u,c,a,s;if(o?"className"===e&&(e="class"):"class"===e&&(e="className"),"style"===e)if(i=t.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(a in r)n&&a in n||m(i,a,"");if(n)for(s in n)r&&n[s]===r[s]||m(i,s,n[s])}else"o"===e[0]&&"n"===e[1]?(u=e!==(e=e.replace(/Capture$/,"")),c=e.toLowerCase(),e=(c in t?c:e).slice(2),n?(r||t.addEventListener(e,y,u),(t.l||(t.l={}))[e]=n):t.removeEventListener(e,y,u)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&!o&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function y(t){this.l[t.type](S.event?S.event(t):t)}function v(t,e,n,o,i,u,c,l,f){var p,_,h,m,b,y,v,g,j,w,A=e.type;if(void 0!==e.constructor)return null;(p=S.__b)&&p(e);try{t:if("function"==typeof A){if(g=e.props,j=(p=A.contextType)&&o[p.__c],w=p?j?j.props.value:p.__:o,n.__c?v=(_=e.__c=n.__c).__=_.__E:("prototype"in A&&A.prototype.render?e.__c=_=new A(g,w):(e.__c=_=new s(g,w),_.constructor=A,_.render=P),j&&j.sub(_),_.props=g,_.state||(_.state={}),_.context=w,_.__n=o,h=_.__d=!0,_.__h=[]),null==_.__s&&(_.__s=_.state),null!=A.getDerivedStateFromProps&&(_.__s==_.state&&(_.__s=r({},_.__s)),r(_.__s,A.getDerivedStateFromProps(g,_.__s))),m=_.props,b=_.state,h)null==A.getDerivedStateFromProps&&null!=_.componentWillMount&&_.componentWillMount(),null!=_.componentDidMount&&_.__h.push(_.componentDidMount);else{if(null==A.getDerivedStateFromProps&&g!==m&&null!=_.componentWillReceiveProps&&_.componentWillReceiveProps(g,w),!_.__e&&null!=_.shouldComponentUpdate&&!1===_.shouldComponentUpdate(g,_.__s,w)||e.__v===n.__v&&!_.__){for(_.props=g,_.state=_.__s,e.__v!==n.__v&&(_.__d=!1),_.__v=e,e.__e=n.__e,e.__k=n.__k,_.__h.length&&c.push(_),p=0;p<e.__k.length;p++)e.__k[p]&&(e.__k[p].__=e);break t}null!=_.componentWillUpdate&&_.componentWillUpdate(g,_.__s,w),null!=_.componentDidUpdate&&_.__h.push((function(){_.componentDidUpdate(m,b,y)}))}_.context=w,_.props=g,_.state=_.__s,(p=S.__r)&&p(e),_.__d=!1,_.__v=e,_.__P=t,p=_.render(_.props,_.state,_.context),e.__k=null!=p&&p.type==a&&null==p.key?p.props.children:Array.isArray(p)?p:[p],null!=_.getChildContext&&(o=r(r({},o),_.getChildContext())),h||null==_.getSnapshotBeforeUpdate||(y=_.getSnapshotBeforeUpdate(m,b)),d(t,e,n,o,i,u,c,l,f),_.base=e.__e,_.__h.length&&c.push(_),v&&(_.__E=_.__=null),_.__e=!1}else null==u&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=O(n.__e,e,n,o,i,u,c,f);(p=S.diffed)&&p(e)}catch(t){e.__v=null,S.__e(t,e,n)}return e.__e}function g(t,e){S.__c&&S.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){S.__e(t,e.__v)}}))}function O(t,e,n,r,o,i,u,c){var a,s,l,f,p,_=n.props,h=e.props;if(o="svg"===e.type||o,null!=i)for(a=0;a<i.length;a++)if(null!=(s=i[a])&&((null===e.type?3===s.nodeType:s.localName===e.type)||t==s)){t=s,i[a]=null;break}if(null==t){if(null===e.type)return document.createTextNode(h);t=o?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,h.is&&{is:h.is}),i=null,c=!1}if(null===e.type)_!==h&&t.data!=h&&(t.data=h);else{if(null!=i&&(i=W.slice.call(t.childNodes)),l=(_=n.props||I).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!c){if(_===I)for(_={},p=0;p<t.attributes.length;p++)_[t.attributes[p].name]=t.attributes[p].value;(f||l)&&(f&&l&&f.__html==l.__html||(t.innerHTML=f&&f.__html||""))}(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||b(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||b(t,i,e[i],n[i],r)})(t,h,_,o,c),f?e.__k=[]:(e.__k=e.props.children,d(t,e,n,r,"foreignObject"!==e.type&&o,i,u,I,c)),c||("value"in h&&void 0!==(a=h.value)&&a!==t.value&&b(t,"value",a,_.value,!1),"checked"in h&&void 0!==(a=h.checked)&&a!==t.checked&&b(t,"checked",a,_.checked,!1))}return t}function j(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){S.__e(t,n)}}function w(t,e,n){var r,i,u;if(S.unmount&&S.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||j(r,null,e)),n||"function"==typeof t.type||(n=null!=(i=t.__e)),t.__e=t.__d=void 0,null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){S.__e(t,e)}r.base=r.__P=null}if(r=t.__k)for(u=0;u<r.length;u++)r[u]&&w(r[u],e,n);null!=i&&o(i)}function P(t,e,n){return this.constructor(t,n)}function A(t,e,n){var r,o,u;S.__&&S.__(t,e),o=(r=n===L)?null:n&&n.__k||e.__k,t=i(a,null,[t]),u=[],v(e,(r?e:n||e).__k=t,o||I,I,void 0!==e.ownerSVGElement,n&&!r?[n]:o?null:W.slice.call(e.childNodes),u,n||I,r),g(u,t)}function k(t,e){A(t,e,L)}function x(t,e){var n,o;for(o in e=r(r({},t.props),e),arguments.length>2&&(e.children=W.slice.call(arguments,2)),n={},e)"key"!==o&&"ref"!==o&&(n[o]=e[o]);return u(t.type,n,e.key||t.key,e.ref||t.ref,null)}function N(t){var e={},n={__c:"__cC"+M++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var r,o=this;return this.getChildContext||(r=[],this.getChildContext=function(){return e[n.__c]=o,e},this.shouldComponentUpdate=function(t){o.props.value!==t.value&&r.some((function(e){e.context=t.value,p(e)}))},this.sub=function(t){r.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){r.splice(r.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Consumer.contextType=n,n.Provider.__=n,n}n.r(e),n.d(e,"render",(function(){return A})),n.d(e,"hydrate",(function(){return k})),n.d(e,"createElement",(function(){return i})),n.d(e,"h",(function(){return i})),n.d(e,"Fragment",(function(){return a})),n.d(e,"createRef",(function(){return c})),n.d(e,"isValidElement",(function(){return D})),n.d(e,"Component",(function(){return s})),n.d(e,"cloneElement",(function(){return x})),n.d(e,"createContext",(function(){return N})),n.d(e,"toChildArray",(function(){return h})),n.d(e,"_unmount",(function(){return w})),n.d(e,"options",(function(){return S}));var S,D,C,T,E,R,L,M,I={},W=[],F=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;S={__e:function(t,e){for(var n,r;e=e.__;)if((n=e.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(t))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(t)),r)return p(n.__E=n)}catch(e){t=e}throw t}},D=function(t){return null!=t&&void 0===t.constructor},s.prototype.setState=function(t,e){var n;n=this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof t&&(t=t(n,this.props)),t&&r(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),p(this))},s.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),p(this))},s.prototype.render=a,C=[],T=0,E="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,L=I,M=0},mdyV:function(t,e,n){"use strict";n.r(e);var r=n("hosL");const{h:o,render:i,hydrate:u}=r,c=t=>t&&t.default?t.default:t;if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw-esm.js"),"function"==typeof c(n("QfWi"))){let t=document.getElementById("preact_root")||document.body.firstElementChild;(()=>{let e=c(n("QfWi")),r={};const a=document.querySelector('[type="__PREACT_CLI_DATA__"]');a&&(r=JSON.parse(a.innerHTML).preRenderData||r);const s=r.url?"/"===(l=r.url)[l.length-1]?l:l+"/":"";var l;const f=u&&s===location.pathname;t=(f?u:i)(o(e,{CLI_DATA:{preRenderData:r}}),document.body,t)})()}},"ox/y":function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n("hosL"),u=n("Y3FI"),c=e.Match=function(t){function e(){for(var e,n,o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return e=n=r(this,t.call.apply(t,[this].concat(i))),n.update=function(t){n.nextUrl=t,n.setState({})},r(n,e)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){u.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){u.subscribers.splice(u.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,u.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,u.exec)(n,t.path,{})})},e}(i.Component),a=function(t){var e=t.activeClassName,n=t.path,r=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,i.h)(c,{path:n||r.href},(function(t){return(0,i.h)(u.Link,o({},r,{class:[r.class||r.className,t.matches&&e].filter(Boolean).join(" ")}))}))};e.Link=a,e.default=c,c.Link=a},pyAK:function(){},rAdK:function(t){t.exports={reset:"_303JYRLJg4VzbyGKJU51qa",select:"KS4wxcDiOEwvDlDi2TXjU",submit:"A1h7SpH0K5N1vl8CA2vHT"}},wmBI:function(t){t.exports={line:"PofOX2RH2Z_90zB7Zo0XQ",label:"_2uY5e-AnVt-UVEcoPX346e",value:"gEea82ovAsLZdQhY36cFT"}}});
//# sourceMappingURL=bundle.218de.esm.js.map