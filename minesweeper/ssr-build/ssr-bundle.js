module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/demos/minesweeper/",n(n.s="QfWi")}({"16fK":function(t,e,n){t.exports={standardDescription:"_1imlL_4y9v9Ok4xVLhAeyX",plusDescription:"_2RpkY_NDJjibjjEEoS3tgh",plusPlusDescription:"_2NxmuMjQCc9wYjTZKypXTk"}},"5s8I":function(t,e,n){t.exports={topRow:"NbAnYrWSfkuenLuTJ6QS5",bottomRow:"_2p47jEkoTBrzYEJW6FmyjW"}},"E+vy":function(t,e,n){t.exports={container:"d_mFF1jruGjQl7_HGI8X_",square:"_3BBjZ1LPKgQUmtc8IO0vSh"}},Givn:function(t,e,n){t.exports={version:"_1KusS-DBH_ARCkWO5mY2ZP"}},HVBM:function(t,e,n){t.exports={filters:"_1cWFJaZg9-KUzz2-tn8yCU",summaries:"_2G422t4yLLZ-TCrtj4fWkT"}},HteQ:function(t,e){t.exports=require("preact")},L7Kd:function(t,e,n){t.exports={header:"_3oiVJRdVy6_Sqo1_K0EJ7o",active:"_2VNCoyd6uprVuGrsbL3h4C"}},QfWi:function(t,e,n){"use strict";n.r(e);n("pyAK");var r=n("HteQ"),i=n("Y3FI"),o=n("ox/y"),a=n("L7Kd"),u="Play",c="/demos/minesweeper/",l="Stats",s="/demos/minesweeper/stats",f="Help",h="/help";function p(){return Object(r.h)("header",{className:a.header},Object(r.h)("h1",null,"Minesweeper Game"),Object(r.h)("nav",null,Object(r.h)(o.Link,{activeClassName:a.active,href:c},u),Object(r.h)(o.Link,{activeClassName:a.active,href:s},l),Object(r.h)(o.Link,{activeClassName:a.active,href:h},f)))}var d,b,m,g=0,O=[],v=r.options.__r,y=r.options.diffed,j=r.options.__c,_=r.options.unmount;function w(t,e){r.options.__h&&r.options.__h(b,t,g||e),g=0;var n=b.__H||(b.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function N(t){return g=1,A(D,t)}function A(t,e,n){var r=w(d++,2);return r.__c||(r.__c=b,r.__=[n?n(e):D(void 0,e),function(e){var n=t(r.__[0],e);r.__[0]!==n&&(r.__[0]=n,r.__c.setState({}))}]),r.__}function P(t,e){var n=w(d++,3);!r.options.__s&&S(n.__H,e)&&(n.__=t,n.__H=e,b.__H.__h.push(n))}function T(){O.some((function(t){if(t.__P)try{t.__H.__h.forEach(R),t.__H.__h.forEach(x),t.__H.__h=[]}catch(e){return t.__H.__h=[],r.options.__e(e,t.__v),!0}})),O=[]}function R(t){t.t&&t.t()}function x(t){var e=t.__();"function"==typeof e&&(t.t=e)}function S(t,e){return!t||e.some((function(e,n){return e!==t[n]}))}function D(t,e){return"function"==typeof e?e(t):e}function E(t,e){return e(t)}function k(t,e){return function(t,e,n){var r=t.x,i=t.y;return[{x:r-1,y:i-1},{x:r,y:i-1},{x:r+1,y:i-1},{x:r-1,y:i},{x:r+1,y:i},{x:r-1,y:i+1},{x:r,y:i+1},{x:r+1,y:i+1}].filter((function(t){return function(t,e,n){var r=t.x,i=t.y;return r>=0&&i>=0&&r<e&&i<n}(t,e,n)}))}(t.position,e[0].length,e.length).map((function(t){var n=t.x,r=t.y;return e[r][n]}))}function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){L(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function L(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function H(t,e){return k(t,e).reduce((function(t,e){return e.mine?t+1:t}),t.mine?1:0)}function I(t,e,n){return function(t){return t.map((function(e){return e.map((function(e){return M({},e,{adjacentMines:H(e,t)})}))}))}(function(t,e){return t.map((function(t,n){return t.map((function(t,r){return M({},t,{position:{x:r,y:n},mine:0===Math.floor(Math.random()*e)})}))}))}(function(t,e){return new Array(t).fill(new Array(e).fill({position:{x:0,y:0},revealed:!1,flagged:!1,mine:!1,adjacentMines:0}))}(t,e),n))}function q(t){var e=t.height,n=t.width,r=t.mineRatio,i=t.name;return{board:I(e,n,r),status:"START",difficultyName:i,flagging:!1,startedAt:null,finishedAt:null}}r.options.__r=function(t){v&&v(t),d=0,(b=t.__c).__H&&(b.__H.__h.forEach(R),b.__H.__h.forEach(x),b.__H.__h=[])},r.options.diffed=function(t){y&&y(t);var e=t.__c;if(e){var n=e.__H;n&&n.__h.length&&(1!==O.push(e)&&m===r.options.requestAnimationFrame||((m=r.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);"undefined"!=typeof window&&(e=requestAnimationFrame(n))})(T))}},r.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(R),t.__h=t.__h.filter((function(t){return!t.__||x(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],r.options.__e(n,t.__v)}})),j&&j(t,e)},r.options.unmount=function(t){_&&_(t);var e=t.__c;if(e){var n=e.__H;if(n)try{n.__.forEach((function(t){return t.t&&t.t()}))}catch(t){r.options.__e(t,e.__v)}}};var F={name:"EASY",displayName:"Easy",height:10,width:10,mineRatio:8},W={name:"NORMAL",displayName:"Normal",height:15,width:25,mineRatio:8},K={name:"HARD",displayName:"Hard",height:20,width:40,mineRatio:8},U={name:"EASY+",displayName:"Easy+",height:10,width:10,mineRatio:7},Y={name:"NORMAL+",displayName:"Normal+",height:15,width:25,mineRatio:7},G={name:"HARD+",displayName:"Hard+",height:20,width:40,mineRatio:7},B={name:"EASY++",displayName:"Easy++",height:10,width:10,mineRatio:6},V={name:"NORMAL++",displayName:"Normal++",height:15,width:25,mineRatio:6},Q={name:"HARD++",displayName:"Hard++",height:20,width:40,mineRatio:6},J=[F,U,B,W,Y,V,K,G,Q];function X(t,e){return e(t)}function Z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $(t){return t.map((function(t){return t.map((function(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(n),!0).forEach((function(e){z(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t,{revealed:!!t.mine||t.revealed})}))}))}function tt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function et(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?tt(Object(n),!0).forEach((function(e){nt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):tt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function rt(t,e){return k(t,e).filter((function(t){return!t.mine&&!t.revealed}))}function it(t,e){var n=void 0;return t.find((function(t){var r=rt(t,e);return!!(n=r.length?r[0]:void 0)})),n}function ot(t,e){return 0===t.adjacentMines&&rt(t,e).length>0}function at(t,e){var n=t.position,r=n.y,i=n.x;e[r][i]=et({},t,{revealed:!0})}function ut(t,e){var n=[],r=t;for(e=e.map((function(t){return t}));r;)at(r,e),n=ot(r,e)?[].concat(n,[r]):n.filter((function(t){return t!==r})),r=it(n,e);return e}function ct(t,e){return function(t){var e,n,r,i,o=t.board,a=t.flagging,u=t.startedAt,c=t.difficultyName,l=(e=function(t){var e=!1,n=!1,r=!1;return t.forEach((function(t){return t.forEach((function(t){!e&&t.revealed&&(e=!0),!n&&t.revealed&&t.mine&&(n=!0),r||t.revealed||t.mine||(r=!0)}))})),{gameStarted:e,mineRevealed:n,nonMineNotRevealed:r}}(o),n=e.gameStarted,r=e.mineRevealed,i=e.nonMineNotRevealed,n?r?"FAIL":i?"PLAY":"WIN":"START"),s=function(t){return"FAIL"===t||"WIN"===t}(l);return{board:s?$(o):o,difficultyName:c,status:l,flagging:a,startedAt:u,finishedAt:s?Date.now():null}}(et({},e,{board:ut(t,e.board),startedAt:e.startedAt||Date.now()}))}function lt(t){try{localStorage.setItem("stats",JSON.stringify(t))}catch(t){}}function st(t){var e=t.startedAt,n=t.finishedAt,r=t.difficultyName;if(!e||!n)throw new Error("Game is unfinished!");return{difficultyName:r,win:"WIN"===t.status,startedAt:e,finishedAt:n}}function ft(t){return function(e){return function(t,e){var n=t.todayOnly,r=t.results,i={todayOnly:n,results:[].concat(r,[st(e)])};return lt(i),i}(e,t)}}var ht=n("E+vy"),pt=n("b6eC");function dt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function bt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?dt(Object(n),!0).forEach((function(e){mt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):dt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function mt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function gt(t,e){var n=e.board.map((function(e){return e.map((function(e){return e.position.y===t.position.y&&e.position.x===t.position.x?function(t){return bt({},t,{flagged:!t.flagged})}(e):e}))}));return bt({},e,{board:n})}function Ot(t){var e=N(0),n=e[0],i=e[1],o=t.square,a=t.status,u=t.flagging,c=t.dispatch,l=t.statsDispatch,s="FAIL"===a||"WIN"===a,f=o.flagged?pt.flagged:"",h=u?pt.flagging:"";function p(){document.activeElement instanceof HTMLElement&&document.activeElement.blur()}function d(){o.flagged||c(function(t,e){return function(n){var r=ct(t,n);return!n.finishedAt&&r.finishedAt&&e(ft(r)),r}}(o,l))}function b(){if(!u){var t=window.setTimeout(d,500);i(t)}}function m(){n&&(window.clearTimeout(n),i(0)),p()}function g(t){s||(u?(c(function(t){return function(e){return gt(t,e)}}(o)),p()):o.flagged||t())}return Object(r.h)("div",{className:ht.square},Object(r.h)("button",{disabled:s,className:ht.square+" "+pt.hidden+" "+f+" "+h,onClick:function(){g(d)},onTouchStart:function(t){t.preventDefault(),g(b)},onTouchEnd:m,onTouchMove:m}))}var vt=n("d4kF");function yt(t){var e,n=t.status,i=t.square,o=i.mine,a=i.adjacentMines;return Object(r.h)("div",{className:ht.square+" "+vt.revealed},o?(e=("WIN"===n?vt.win:"")+" "+vt.mine,Object(r.h)("span",{className:e},"💣")):a||"")}function jt(t){var e=t.square,n=t.status,i=t.flagging,o=t.dispatch,a=t.statsDispatch,u=e.revealed;return Object(r.h)("div",{className:ht.container},u?Object(r.h)(yt,{square:e,status:n}):Object(r.h)(Ot,{square:e,status:n,flagging:i,dispatch:o,statsDispatch:a}))}var _t=n("fwD8");function wt(t){var e=t.game,n=t.dispatch,i=t.statsDispatch,o=e.status,a=e.board,u=e.flagging;function c(t){return Object(r.h)("div",{className:_t.row},t.map((function(t){return function(t){return Object(r.h)(jt,{square:t,status:o,flagging:u,dispatch:n,statsDispatch:i})}(t)})))}return Object(r.h)("div",{className:_t.board},a.map((function(t){return c(t)})))}var Nt=n("rAdK");function At(t){var e=t.dispatch,n=N("EASY"),i=n[0],o=n[1];return Object(r.h)("div",{className:Nt.reset},Object(r.h)("form",{onSubmit:function(t){t.preventDefault();var n=J.find((function(t){return t.name===i}))||F;e(function(t){return function(){return q(t)}}(n))}},Object(r.h)("select",{className:Nt.select,value:i,onInput:function(t){o(t.currentTarget.value)}},J.map((function(t){var e=t.name,n=t.displayName,i=t.width,o=t.height;return Object(r.h)("option",{value:e},n," (",i,"x",o,")")}))),Object(r.h)("button",{className:Nt.submit,type:"submit"},"Reset")))}var Pt=n("Z8HV");function Tt(t){var e=t.status,n=t.difficultyName,i=J.find((function(t){return t.name===n})),o=i?i.displayName:"";return Object(r.h)("div",{className:Pt.status},Object(r.h)("div",{className:Pt.emoji,title:function(){switch(e){case"START":return"";case"PLAY":return"Game in progress...";case"FAIL":return"You lost!  Please, try again!";case"WIN":return"You won!"}}()},function(){switch(e){case"START":return"🙂";case"PLAY":return"🤔";case"FAIL":return"😵";case"WIN":return"😎"}}()),Object(r.h)("div",{className:Pt.difficulty},o))}var Rt=n("5s8I"),xt=n("anWR");function St(t){return("0"+t).slice(-2)}function Dt(t,e){return void 0===e&&(e=!1),""+(t<0?"-":"")+function(t,e){var n=Math.floor(Math.abs(t)/1e3),r=Math.floor(n/3600),i=Math.floor(n%3600/60),o=Math.floor(n%3600%60);return r>0?r+":"+St(i)+":"+St(o):e||i>0?i+":"+St(o):""+o}(t,e)}function Et(t,e){return null===t?0:null===e?Date.now()-t:e-t}function kt(t){var e=t.startedAt,n=t.finishedAt,i=N(Et(e,n)),o=i[0],a=i[1],u=null!==e?"":xt.hide;return P((function(){var t=window.setInterval((function(){a(Et(e,n))}),100);return function(){clearInterval(t)}})),Object(r.h)("div",{className:xt.container+" "+u},Object(r.h)("div",{className:xt.timer},Dt(o)," ⏱"))}var Ct=n("S72u");function Mt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Lt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ht(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Mt(Object(n),!0).forEach((function(e){Lt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Mt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t,{flagging:!t.flagging})}function It(t){var e=t.status,n=t.flagging,i=t.dispatch,o=n?Ct.buttonActive:"",a="WIN"===e||"FAIL"===e;function u(){a||i((function(t){return Ht(t)}))}function c(t){"f"===t.key&&u()}return P((function(){return document.addEventListener("keydown",c),function(){document.removeEventListener("keydown",c)}})),Object(r.h)("div",{className:Ct.container+" "+o},Object(r.h)("button",{onClick:u,disabled:a,className:Ct.button,title:"Toggle flagging mines (Press F for shortcut)"},Object(r.h)("span",{className:Ct.flag},"🚩")))}function qt(t){var e=t.game,n=t.dispatch,i=t.statsDispatch,o=t.updateTitle,a=e.status,c=e.flagging,l=e.startedAt,s=e.finishedAt;return P((function(){o(u)}),[]),Object(r.h)("div",null,Object(r.h)(At,{dispatch:n}),Object(r.h)("div",{className:Rt.topRow},Object(r.h)(Tt,{status:a,difficultyName:e.difficultyName}),Object(r.h)(kt,{startedAt:l,finishedAt:s})),Object(r.h)(wt,{game:e,dispatch:n,statsDispatch:i}),Object(r.h)("div",{className:Rt.bottomRow},Object(r.h)(It,{status:a,flagging:c,dispatch:n})))}var Ft=n("wmBI");function Wt(t){var e=t.label,n=t.value;return Object(r.h)("div",{className:Ft.line},Object(r.h)("div",{className:Ft.label},Object(r.h)("strong",null,e)),Object(r.h)("div",{className:Ft.value},n))}var Kt=n("X9Fu");function Ut(t,e){var n=t.results,r=t.todayOnly,i=function(){var t=new Date(Date.now());return t.setHours(0,0,0,0),t.getTime()}();return n.filter((function(t){return(!e||t.difficultyName===e.name)&&!(r&&t.finishedAt<i)}))}function Yt(t,e){var n=e?t/e*100:0;return(Math.round(10*n)/10).toFixed(1)+"%"}function Gt(t){return t.reduce((function(t,e){return t+e}),0)}function Bt(t){return t.filter((function(t){return t.win})).map((function(t){return t.finishedAt-t.startedAt}))}function Vt(t,e){var n,r,i,o=Ut(t,e),a=o.length,u=Bt(o),c=u.length;return{games:a,wins:c,winRate:Yt(c,a),fastestTime:function(t){var e=null;return t.forEach((function(t){(null===e||t<e)&&(e=t)})),e?Dt(e,!0):"-:--"}(u),averageTime:(r=Gt(n=u),(i=Math.floor(r/n.length))?Dt(i,!0):"-:--")}}function Qt(t){var e=t.stats,n=t.difficulty,i=Vt(e,n),o=i.games,a=i.wins,u=i.winRate,c=i.fastestTime,l=i.averageTime;return Object(r.h)("div",{className:Kt.summary},Object(r.h)("h3",null,n.displayName," ",Object(r.h)("span",{className:Kt.dimensions},"(",n.width,"x",n.height,")")),Object(r.h)("div",{className:Kt.statLines},Object(r.h)(Wt,{label:"Games",value:o}),Object(r.h)(Wt,{label:"Wins",value:a}),Object(r.h)(Wt,{label:"Wins (%)",value:u}),Object(r.h)(Wt,{label:"Fastest Time",value:c}),Object(r.h)(Wt,{label:"Average Time",value:l})))}var Jt=n("HVBM");function Xt(t){var e=Ut(t),n=function(t){var e=Gt(function(t){return t.map((function(t){return t.finishedAt-t.startedAt}))}(t));return e?Dt(e,!0):"-:--"}(e),r=e.length,i=Bt(e).length;return{totalTime:n,games:r,wins:i,winRate:Yt(i,r)}}function Zt(t){var e=Xt(t.stats),n=e.totalTime,i=e.games,o=e.wins,a=e.winRate;return Object(r.h)("div",{className:Kt.summary},Object(r.h)("h3",null,"All Modes"),Object(r.h)("div",{className:Kt.statLines},Object(r.h)(Wt,{label:"Games",value:i}),Object(r.h)(Wt,{label:"Wins",value:o}),Object(r.h)(Wt,{label:"Wins (%)",value:a}),Object(r.h)(Wt,{label:"Total Play Time",value:n})))}function zt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function $t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function te(t,e){var n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?zt(Object(n),!0).forEach((function(e){$t(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):zt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t,{todayOnly:e});return lt(n),n}function ee(t){return function(e){return te(e,t)}}function ne(t){var e=t.stats,n=t.dispatch,i=t.updateTitle,o=e.todayOnly?"Today":"All Time";return P((function(){i(l)}),[]),Object(r.h)("div",null,Object(r.h)("div",{className:Jt.filters},Object(r.h)("button",{id:"allTimeButton",onClick:function(){n(ee(!1))}},"All Time"),Object(r.h)("button",{id:"todayButton",onClick:function(){n(ee(!0))}},"Today")),Object(r.h)("h2",null,"Game Stats: ",o),Object(r.h)("div",{className:Jt.summaries},Object(r.h)(Zt,{stats:e})),Object(r.h)("div",{className:Jt.summaries},Object(r.h)(Qt,{difficulty:F,stats:e}),Object(r.h)(Qt,{difficulty:U,stats:e}),Object(r.h)(Qt,{difficulty:B,stats:e})),Object(r.h)("div",{className:Jt.summaries},Object(r.h)(Qt,{difficulty:W,stats:e}),Object(r.h)(Qt,{difficulty:Y,stats:e}),Object(r.h)(Qt,{difficulty:V,stats:e})),Object(r.h)("div",{className:Jt.summaries},Object(r.h)(Qt,{difficulty:K,stats:e}),Object(r.h)(Qt,{difficulty:G,stats:e}),Object(r.h)(Qt,{difficulty:Q,stats:e})),Object(r.h)("small",null,"ℹ️ Stats are only recorded for finished games!"))}var re=n("16fK");function ie(t){var e=t.updateTitle;return P((function(){e(f)}),[]),Object(r.h)("div",null,Object(r.h)("h2",null,"How to Play"),Object(r.h)("h3",null,"🤔 Objective"),"Reveal all squares that do not contain a 💣.",Object(r.h)("ul",null,Object(r.h)("li",null,"😎 Your win when all squares are revealed that do not contain a 💣."),Object(r.h)("li",null,"😵 You lose when you reveal a 💣.")),Object(r.h)("h3",null,"⛏️ Normal Mode"),"When a gray square is revealed, it will show one of the following:",Object(r.h)("ul",null,Object(r.h)("li",null,"Blank - adjacent squares will also be revealed until squares which contain numbers are found."),Object(r.h)("li",null,"Number 1 through 8 - the count of how many 💣 squares are touching this square."),Object(r.h)("li",null,"💣 - the game is over.")),Object(r.h)("h3",null,"🚩 Flagging Mode"),"Activate flagging mode to place or remove a 🚩 on hidden squares.",Object(r.h)("ul",null,Object(r.h)("li",null,"Use the 🚩 button below the game board to swap between flagging mode and normal mode."),Object(r.h)("li",null,"While flagging mode is active, squares cannot be revealed."),Object(r.h)("li",null,"Flagged Squares cannot be revealed in normal mode.")),Object(r.h)("h3",null,"🤯 Difficulty"),"There is a range of difficulty options. There is different board sizes, as well as rates at which a 💣 is placed. Difficulties marked with a",Object(r.h)("strong",null,"+")," or ",Object(r.h)("strong",null,"++")," will have more hidden 💣's.",Object(r.h)("ul",null,Object(r.h)("li",{className:re.standardDescription},Object(r.h)("strong",null,"Standard")," has a 1:",F.mineRatio," chance for a 💣 to be placed."),Object(r.h)("li",{className:re.plusDescription},Object(r.h)("strong",null,"+")," has a 1:",U.mineRatio," chance for a 💣 to be placed."),Object(r.h)("li",{className:re.plusPlusDescription},Object(r.h)("strong",null,"++")," has a 1:",B.mineRatio," ","chance for a 💣 to be placed.")),Object(r.h)("h2",null,"Controls"),Object(r.h)("h3",null,"👆Touch Controls"),Object(r.h)("ul",null,Object(r.h)("li",null,Object(r.h)("li",null,Object(r.h)("strong",null,"Press and Hold")," on a gray square for 1 second to reveal it."),Object(r.h)("li",null,"If you tap on the wrong square, ",Object(r.h)("strong",null,"Swipe")," ","or ",Object(r.h)("strong",null,"Raise")," your finger to prevent revealing it by accident."),Object(r.h)("li",null,Object(r.h)("strong",null,"Tap")," on the 🚩 button to activate or deactivate flagging mode."),Object(r.h)("li",null,"When flagging mode is active, ",Object(r.h)("strong",null,"Tap")," on a gray square to place or remove a 🚩."))),Object(r.h)("h3",null,"🖱 Mouse Controls"),Object(r.h)("ul",null,Object(r.h)("li",null,Object(r.h)("strong",null,"Click")," on a gray square to reveal it."),Object(r.h)("li",null,Object(r.h)("strong",null,"Click")," on the 🚩 button to activate or deactivate flagging mode."),Object(r.h)("li",null,"When flagging mode is active, ",Object(r.h)("strong",null,"Click")," on a gray square to place or remove a 🚩.")),Object(r.h)("h3",null,"⌨️ Keyboard Controls"),Object(r.h)("ul",null,Object(r.h)("li",null,"Press ",Object(r.h)("strong",null,'"Tab"')," key to move the cursor forward through the board."),Object(r.h)("li",null,"Press ",Object(r.h)("strong",null,'"Shift + Tab"')," keys to move the cursor backward through the board."),Object(r.h)("li",null,"Press ",Object(r.h)("strong",null,'"Space"')," or",Object(r.h)("strong",null,'"Enter"')," keys on a gray square to reveal it."),Object(r.h)("li",null,"Press ",Object(r.h)("strong",null,'"F"')," key to activate or deactivate flagging mode."),Object(r.h)("li",null,"When flagging mode is active, press",Object(r.h)("strong",null,'"Space"')," or",Object(r.h)("strong",null,'"Enter"')," keys on a gray square to place or remove a 🚩.")))}var oe=n("Givn");e.default=function(){var t=A(E,q(F)),e=t[0],n=t[1],o=A(X,function(){try{var t=localStorage.getItem("stats");return t?JSON.parse(t):{todayOnly:!1,results:[]}}catch(t){return{todayOnly:!1,results:[]}}}()),a=o[0],u=o[1];function l(t){document.title="Minesweeper Game - "+t}function f(){if(window.getSelection){var t=window.getSelection();if(!t)return;t.empty?t.empty():t.removeAllRanges&&t.removeAllRanges()}}return Object(r.h)("div",{id:"app",onTouchStart:f,onTouchEnd:f},Object(r.h)(p,null),Object(r.h)("main",null,Object(r.h)(i.Router,null,Object(r.h)(i.Route,{path:c,component:qt,game:e,dispatch:n,statsDispatch:u,updateTitle:l}),Object(r.h)(i.Route,{path:s,component:ne,stats:a,dispatch:u,updateTitle:l}),Object(r.h)(i.Route,{path:h,component:ie,updateTitle:l})),Object(r.h)("small",{className:oe.version},"v1.2.0")))}},S72u:function(t,e,n){t.exports={container:"_2tGRj5bs7uYqlzSGBMmPPR",button:"M55u8jseqpiRvO8OrvA5V",flag:"_1gIhCK9fRlxlyHhmZgatwm",buttonActive:"uXdgHtVoMo8yafW5O5db6",wiggleKeyFrames:"_3KP_mK2-6avCTTBTjb_8yS"}},X9Fu:function(t,e,n){t.exports={summary:"_33-IbutgyWRwLt_gWzvZis",dimensions:"_18SnD1rGNcrxnZq-n-d05A",statLines:"Ybm_DtfNw9UTM7TKs0u6o"}},Y3FI:function(t,e,n){"use strict";n.r(e),n.d(e,"subscribers",(function(){return p})),n.d(e,"getCurrentUrl",(function(){return b})),n.d(e,"route",(function(){return m})),n.d(e,"Router",(function(){return w})),n.d(e,"Route",(function(){return A})),n.d(e,"Link",(function(){return N})),n.d(e,"exec",(function(){return a}));var r=n("HteQ"),i={};function o(t,e){for(var n in e)t[n]=e[n];return t}function a(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,a=t.match(o),u={};if(a&&a[1])for(var c=a[1].split("&"),s=0;s<c.length;s++){var f=c[s].split("=");u[decodeURIComponent(f[0])]=decodeURIComponent(f.slice(1).join("="))}t=l(t.replace(o,"")),e=l(e||"");for(var h=Math.max(t.length,e.length),p=0;p<h;p++)if(e[p]&&":"===e[p].charAt(0)){var d=e[p].replace(/(^:|[+*?]+$)/g,""),b=(e[p].match(/[+*?]+$/)||i)[0]||"",m=~b.indexOf("+"),g=~b.indexOf("*"),O=t[p]||"";if(!O&&!g&&(b.indexOf("?")<0||m)){r=!1;break}if(u[d]=decodeURIComponent(O),m||g){u[d]=t.slice(p).map(decodeURIComponent).join("/");break}}else if(e[p]!==t[p]){r=!1;break}return(!0===n.default||!1!==r)&&u}function u(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function c(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,l(e).map(s).join(""));var e}(t),t.props}function l(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function s(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var f=null,h=[],p=[],d={};function b(){var t;return""+((t=f&&f.location?f.location:f&&f.getCurrentLocation?f.getCurrentLocation():"undefined"!=typeof location?location:d).pathname||"")+(t.search||"")}function m(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=h.length;e--;)if(h[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),f&&f[e]?f[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),g(t)}function g(t){for(var e=!1,n=0;n<h.length;n++)!0===h[n].routeTo(t)&&(e=!0);for(var r=p.length;r--;)p[r](t);return e}function O(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return m(e)}}function v(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return O(t.currentTarget||t.target||this),y(t)}function y(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function j(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(O(e))return y(t)}}while(e=e.parentNode)}}var _=!1;var w=function(t){function e(e){t.call(this,e),e.history&&(f=e.history),this.state={url:e.url||b()},_||("function"==typeof addEventListener&&(f||addEventListener("popstate",(function(){g(b())})),addEventListener("click",j)),_=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(r.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){h.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;f&&(this.unlisten=f.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),h.splice(h.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(c).sort(u).map((function(t){var i=a(e,t.props.path,t.props);if(i){if(!1!==n){var u={url:e,matches:i};return o(u,i),delete u.ref,delete u.key,Object(r.cloneElement)(t,u)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,i=t.onChange,o=e.url,a=this.getMatchingChildren(Object(r.toChildArray)(n),o,!0),u=a[0]||null,c=this.previousUrl;return o!==c&&(this.previousUrl=o,"function"==typeof i&&i({router:this,url:o,previous:c,active:a,current:u})),u},e}(r.Component),N=function(t){return Object(r.createElement)("a",o({onClick:v},t))},A=function(t){return Object(r.createElement)(t.component,t)};w.subscribers=p,w.getCurrentUrl=b,w.route=m,w.Router=w,w.Route=A,w.Link=N,w.exec=a,e.default=w},Z8HV:function(t,e,n){t.exports={status:"_1147OUGNeAYI9AR67l3M_F",emoji:"_3kTdVpLwURv5ZCG1BkEjnu",difficulty:"_30tuC6HRlYLH1SvWr5TXws"}},anWR:function(t,e,n){t.exports={container:"_1b7DgXfDW-verlutAJs4J9",hide:"_3EXH8HVfi73vqzQt9mlNau",timer:"_2cFb60-Inj7n2JffQx2qGk"}},b6eC:function(t,e,n){t.exports={hidden:"_Q0GAmu13cSZrgEnyTAmu",flagged:"US-_EuLNQM_x57Ro2nIFI",flagging:"_2V8IhtMNCWBKfUkHLq5x9g"}},d4kF:function(t,e,n){t.exports={revealed:"_2DsiIUj-2FFGFi7RoW5Ess",mine:"_1kCDhNVeofrqWmInXchJTz",mineKeyFrames:"_2cqgmlXYZG0kg5yquOBFkS",win:"_2PfFxuh60roKG5A8khyu9Q",winKeyFrames:"h0jr41_I_MWtLngRN6BYL"}},fwD8:function(t,e,n){t.exports={board:"_1iZAthx1--rn2vXXViQBvR",row:"_2E5SJFgFMk9ds9xu9z9DJg"}},"ox/y":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n("HteQ"),o=n("Y3FI");function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var c=e.Match=function(t){function e(){var n,r;a(this,e);for(var i=arguments.length,o=Array(i),c=0;c<i;c++)o[c]=arguments[c];return n=r=u(this,t.call.apply(t,[this].concat(o))),r.update=function(t){r.nextUrl=t,r.setState({})},u(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){o.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){o.subscribers.splice(o.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,o.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,o.exec)(n,t.path,{})})},e}(i.Component),l=function(t){var e=t.activeClassName,n=t.path,a=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,i.h)(c,{path:n||a.href},(function(t){var n=t.matches;return(0,i.h)(o.Link,r({},a,{class:[a.class||a.className,n&&e].filter(Boolean).join(" ")}))}))};e.Link=l,e.default=c,c.Link=l},pyAK:function(t,e,n){},rAdK:function(t,e,n){t.exports={reset:"_303JYRLJg4VzbyGKJU51qa",select:"KS4wxcDiOEwvDlDi2TXjU",submit:"A1h7SpH0K5N1vl8CA2vHT"}},wmBI:function(t,e,n){t.exports={line:"PofOX2RH2Z_90zB7Zo0XQ",label:"_2uY5e-AnVt-UVEcoPX346e",value:"gEea82ovAsLZdQhY36cFT"}}});
//# sourceMappingURL=ssr-bundle.js.map