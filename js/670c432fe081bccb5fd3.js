!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}({2:function(t,e,n){"use strict";n.r(e);var r=document.querySelector("html"),o=document.querySelector("body"),s=document.getElementById("o"),i=document.getElementById("n"),c=document.getElementById("s"),u=document.getElementById("r"),l=document.getElementById("i");function d(){document.documentElement.scrollTop>200||document.body.scrollTop>200?l.classList.add("o"):l.classList.remove("o")}function a(t,e,n,r){n=n||!1,r=r||!1;var o=document.createEvent("CustomEvent");o.initCustomEvent(t,n,r,e),document.dispatchEvent(o)}l.addEventListener("click",(function(){window.scrollTo(0,0)})),window.onscroll=d,d(),window.addEventListener("load",(function(){var t;(t=new Image).onload=function(){return!0},t.onerror=function(){return!1},void(t.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")?a("webp:supported",{support:!0}):a("webp:supported",{support:!1})}));var f=document.getElementsByTagName("img"),m="src-webp",g="srcset-webp";document.addEventListener("webp:supported",(function(t){t.detail.support||(m="src-img",g="srcset-img");for(var e=0;e<f.length;e++)n=f[e],new IntersectionObserver((function(t,e){t.forEach((function(t){if(t.isIntersecting){var n=t.target,r=n.hasAttribute(g);n.onload=function(){this.removeAttribute("src-img"),this.removeAttribute("src-webp"),r&&(this.removeAttribute("srcset-img"),this.removeAttribute("srcset-webp"))};var o=n.getAttribute(m);if(n.setAttribute("src",o),r){var s=n.getAttribute(g);n.setAttribute("srcset",s)}e.disconnect()}}))})).observe(n);var n})),c.addEventListener("click",(function(){r.classList.toggle("r"),o.classList.toggle("r"),i.classList.toggle("ty"),s.classList.toggle("z")})),u.addEventListener("click",(function(){r.classList.toggle("r"),o.classList.toggle("r"),i.classList.toggle("ty"),s.classList.toggle("z")}))}});