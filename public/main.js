(()=>{var e={672:e=>{e.exports=function(e){return null==(r=e)||""===r?"Hello, my friend.":Array.isArray(e)?function(e){const r=["fr","nl","en"];let t;const n=e.find((e=>r.includes(e))),l=e.filter((e=>!r.includes(e))),o=l.filter((e=>e===e.toUpperCase())),a=l.filter((e=>e!==e.toUpperCase()));if(o.length>1||l.length!==a.length+o.length)return!1;let i;switch(n){case"fr":i="Bonjour",t="et ";break;case"nl":i="Hallo",t="en ";break;default:i="Hello",t="and "}let s=`${i}, `;return a.forEach(((e,r)=>{1===a.length?s+=`${e}.`:r===a.length-1?s+=`${t}${e}.`:s+=`${e}${r===a.length-2?" ":", "}`})),1===o.length&&(s+=` AND HELLO ${o[0]} !`),s}(e):function(e){return e===e.toUpperCase()}(e)?`HELLO, ${e}!`:`Hello, ${e}.`;var r}}},r={};!function t(n){var l=r[n];if(void 0!==l)return l.exports;var o=r[n]={exports:{}};return e[n](o,o.exports,t),o.exports}(672)})();