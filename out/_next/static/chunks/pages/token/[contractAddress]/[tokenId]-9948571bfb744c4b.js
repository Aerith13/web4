(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7276],{62131:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/token/[contractAddress]/[tokenId]",function(){return n(42539)}])},99009:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(85893);n(67294);var i=n(3853),r=n.n(i);function o(e){let{maxWidth:t,children:n}=e;return(0,a.jsx)("div",{className:"".concat(r().container," ").concat(r()[t]),children:n})}},68056:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(85893);n(67294);var i=n(73609),r=n.n(i);function o(e){let{height:t,width:n}=e;return(0,a.jsx)("div",{style:{width:n,height:t,borderRadius:"inherit"},className:r().skeleton})}},42539:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return v},default:function(){return x}});var a=n(85893),i=n(68001),r=n(67294),o=n(99009),s=n(7673),l=n(52415),c=n.n(l),d=n(41664),u=n.n(d),m=n(51657),p=n(68056),f=n(86501),h=n(71953);let[g,_]=[(0,m.Z)(),(0,m.Z)()];var v=!0;function x(e){var t,n,l,d,m,v,x,y,b;let{nft:N,contractMetadata:k}=e,[w,j]=(0,r.useState)(),{contract:C,isLoading:T}=(0,i.cqn)(s.YJ,"marketplace-v3"),{contract:E}=(0,i.cqn)(s.f2),{data:O,isLoading:I}=(0,i.aBe)(C,{tokenContract:s.f2,tokenId:N.metadata.id}),{data:P,isLoading:A}=(0,i.QQ5)(C,{tokenContract:s.f2,tokenId:N.metadata.id}),{data:Z,isLoading:V}=(0,i.pc1)(E,"Transfer",{queryFilter:{filters:{tokenId:N.metadata.id},order:"desc"}});async function F(){let e;if(!w){(0,f.ZP)("Please enter a bid value",{icon:"❌",style:h.Z,position:"bottom-center"});return}if(null==P?void 0:P[0])e=await (null==C?void 0:C.englishAuctions.makeBid(P[0].id,w));else if(null==O?void 0:O[0])e=await (null==C?void 0:C.offers.makeOffer({assetContractAddress:s.f2,tokenId:N.metadata.id,totalPrice:w}));else throw Error("No valid listing found for this NFT");return e}async function B(){let e;if(null==P?void 0:P[0])e=await (null==C?void 0:C.englishAuctions.buyoutAuction(P[0].id));else if(null==O?void 0:O[0])e=await (null==C?void 0:C.directListings.buyFromListing(O[0].id,1));else throw Error("No valid listing found for this NFT");return e}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f.x7,{position:"bottom-center",reverseOrder:!1}),(0,a.jsx)(o.Z,{maxWidth:"lg",children:(0,a.jsxs)("div",{className:c().container,children:[(0,a.jsxs)("div",{className:c().metadataContainer,children:[(0,a.jsx)(i.CHu,{metadata:N.metadata,className:c().image}),(0,a.jsxs)("div",{className:c().descriptionContainer,children:[(0,a.jsx)("h3",{className:c().descriptionTitle,children:"Description"}),(0,a.jsx)("p",{className:c().description,children:N.metadata.description}),(0,a.jsx)("h3",{className:c().descriptionTitle,children:"Traits"}),(0,a.jsx)("div",{className:c().traitsContainer,children:Object.entries((null==N?void 0:null===(t=N.metadata)||void 0===t?void 0:t.attributes)||{}).map(e=>{let[t,n]=e;return(0,a.jsxs)("div",{className:c().traitContainer,children:[(0,a.jsx)("p",{className:c().traitName,children:t}),(0,a.jsx)("p",{className:c().traitValue,children:(null==n?void 0:n.toString())||""})]},t)})}),(0,a.jsx)("h3",{className:c().descriptionTitle,children:"History"}),(0,a.jsx)("div",{className:c().traitsContainer,children:null==Z?void 0:Z.map((e,t)=>{var n,i,r,o;return(0,a.jsxs)("div",{className:c().eventsContainer,children:[(0,a.jsxs)("div",{className:c().eventContainer,children:[(0,a.jsx)("p",{className:c().traitName,children:"Event"}),(0,a.jsx)("p",{className:c().traitValue,children:t===Z.length-1?"Mint":"Transfer"})]}),(0,a.jsxs)("div",{className:c().eventContainer,children:[(0,a.jsx)("p",{className:c().traitName,children:"From"}),(0,a.jsxs)("p",{className:c().traitValue,children:[null===(n=e.data.from)||void 0===n?void 0:n.slice(0,4),"...",null===(i=e.data.from)||void 0===i?void 0:i.slice(-2)]})]}),(0,a.jsxs)("div",{className:c().eventContainer,children:[(0,a.jsx)("p",{className:c().traitName,children:"To"}),(0,a.jsxs)("p",{className:c().traitValue,children:[null===(r=e.data.to)||void 0===r?void 0:r.slice(0,4),"...",null===(o=e.data.to)||void 0===o?void 0:o.slice(-2)]})]}),(0,a.jsx)("div",{className:c().eventContainer,children:(0,a.jsx)(u(),{className:c().txHashArrow,href:"".concat(s.t0,"/tx/").concat(e.transaction.transactionHash),target:"_blank",children:"↗"})})]},e.transaction.transactionHash)})})]})]}),(0,a.jsxs)("div",{className:c().listingContainer,children:[k&&(0,a.jsxs)("div",{className:c().contractMetadataContainer,children:[(0,a.jsx)(i.W85,{src:k.image,className:c().collectionImage}),(0,a.jsx)("p",{className:c().collectionName,children:k.name})]}),(0,a.jsx)("h1",{className:c().title,children:N.metadata.name}),(0,a.jsxs)("p",{className:c().collectionName,children:["Token ID #",N.metadata.id]}),(0,a.jsxs)(u(),{href:"/profile/".concat(N.owner),className:c().nftOwnerContainer,children:[(0,a.jsx)("div",{className:c().nftOwnerImage,style:{background:"linear-gradient(90deg, ".concat(g,", ").concat(_,")")}}),(0,a.jsxs)("div",{className:c().nftOwnerInfo,children:[(0,a.jsx)("p",{className:c().label,children:"Current Owner"}),(0,a.jsxs)("p",{className:c().nftOwnerAddress,children:[N.owner.slice(0,8),"...",N.owner.slice(-4)]})]})]}),(0,a.jsx)("div",{className:c().pricingContainer,children:(0,a.jsxs)("div",{className:c().pricingInfo,children:[(0,a.jsx)("p",{className:c().label,children:"Price"}),(0,a.jsx)("div",{className:c().pricingValue,children:T||I||A?(0,a.jsx)(p.Z,{width:"120",height:"24"}):(0,a.jsx)(a.Fragment,{children:O&&O[0]?(0,a.jsxs)(a.Fragment,{children:[null===(n=O[0])||void 0===n?void 0:n.currencyValuePerToken.displayValue," "+(null===(l=O[0])||void 0===l?void 0:l.currencyValuePerToken.symbol)]}):P&&P[0]?(0,a.jsxs)(a.Fragment,{children:[null===(d=P[0])||void 0===d?void 0:d.buyoutCurrencyValue.displayValue," "+(null===(m=P[0])||void 0===m?void 0:m.buyoutCurrencyValue.symbol)]}):"Not for sale"})}),(0,a.jsx)("div",{children:A?(0,a.jsx)(p.Z,{width:"120",height:"24"}):(0,a.jsx)(a.Fragment,{children:P&&P[0]&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:c().label,style:{marginTop:12},children:"Bids starting from"}),(0,a.jsxs)("div",{className:c().pricingValue,children:[null===(v=P[0])||void 0===v?void 0:v.minimumBidCurrencyValue.displayValue," "+(null===(x=P[0])||void 0===x?void 0:x.minimumBidCurrencyValue.symbol)]})]})})})]})}),T||I||A?(0,a.jsx)(p.Z,{width:"100%",height:"164"}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.tnh,{contractAddress:s.YJ,action:async()=>await B(),className:c().btn,onSuccess:()=>{(0,f.ZP)("Purchase success!",{icon:"✅",style:h.Z,position:"bottom-center"})},onError:e=>{(0,f.ZP)("Purchase failed! Reason: ".concat(e.message),{icon:"❌",style:h.Z,position:"bottom-center"})},children:"Buy at asking price"}),(0,a.jsx)("div",{className:"".concat(c().listingTimeContainer," ").concat(c().or),children:(0,a.jsx)("p",{className:c().listingTime,children:"or"})}),(0,a.jsx)("input",{className:c().input,defaultValue:(null==P?void 0:null===(b=P[0])||void 0===b?void 0:null===(y=b.minimumBidCurrencyValue)||void 0===y?void 0:y.displayValue)||0,type:"number",step:1e-6,onChange:e=>{j(e.target.value)}}),(0,a.jsx)(i.tnh,{contractAddress:s.YJ,action:async()=>await F(),className:c().btn,onSuccess:()=>{(0,f.ZP)("Bid success!",{icon:"✅",style:h.Z,position:"bottom-center"})},onError:e=>{console.log(e),(0,f.ZP)("Bid failed! Reason: ".concat(e.message),{icon:"❌",style:h.Z,position:"bottom-center"})},children:"Place bid"})]})]})]})})]})}},51657:function(e,t,n){"use strict";function a(){let e="#";for(let t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}n.d(t,{Z:function(){return a}})},71953:function(e,t){"use strict";t.Z={borderRadius:"4px",background:"#222528",color:"#fff","white-space":"pre-wrap","word-break":"break-word"}},3853:function(e){e.exports={container:"Container_container__0SGNv",xs:"Container_xs__byb0N",sm:"Container_sm__Gz7TQ",md:"Container_md__HErVP",lg:"Container_lg__dEnf8",xl:"Container_xl__trH3_"}},73609:function(e){e.exports={skeleton:"Skeleton_skeleton__kQAlG",pulse:"Skeleton_pulse__n0deY"}},52415:function(e){e.exports={container:"Token_container__CNJxv",metadataContainer:"Token_metadataContainer__NXo6z",listingContainer:"Token_listingContainer__KEv8I",image:"Token_image__THR7w",input:"Token_input__mtVaC",contractMetadataContainer:"Token_contractMetadataContainer__W04ui",imageContainer:"Token_imageContainer__UKE4B",crossButton:"Token_crossButton__T99yY",collectionImage:"Token_collectionImage__Lpjxv",collectionName:"Token_collectionName__FH4Mn",title:"Token_title__eeB_J",nftOwnerContainer:"Token_nftOwnerContainer__15rAB",nftOwnerImage:"Token_nftOwnerImage__5IWAs",nftOwnerInfo:"Token_nftOwnerInfo__jLeIk",label:"Token_label__Tb918",nftOwnerAddress:"Token_nftOwnerAddress__P0d3_",descriptionContainer:"Token_descriptionContainer__ScydP",descriptionTitle:"Token_descriptionTitle__dbr58",traitsContainer:"Token_traitsContainer__BrwT9",traitContainer:"Token_traitContainer__U27l_",eventsContainer:"Token_eventsContainer__Zn60F",traitValue:"Token_traitValue__XwN_d",traitName:"Token_traitName__fuEIa",eventContainer:"Token_eventContainer__oHYks",txHashArrow:"Token_txHashArrow__r_yPm",pricingContainer:"Token_pricingContainer__Q0y0k",pricingInfo:"Token_pricingInfo__hnOl7",pricingValue:"Token_pricingValue__lAxuo",buyButton:"Token_buyButton__I9joZ",listingTimeContainer:"Token_listingTimeContainer__ZZbVs",listingTime:"Token_listingTime__qVFcG",or:"Token_or__myhNn",btn:"Token_btn__LsuZc"}},86501:function(e,t,n){"use strict";let a,i;n.d(t,{x7:function(){return ei},ZP:function(){return er}});var r,o=n(67294);let s={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,m=(e,t)=>{let n="",a="",i="";for(let r in e){let o=e[r];"@"==r[0]?"i"==r[1]?n=r+" "+o+";":a+="f"==r[1]?m(o,r):r+"{"+m(o,"k"==r[1]?"":t)+"}":"object"==typeof o?a+=m(o,t?t.replace(/([^,])+/g,e=>r.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):r):null!=o&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=m.p?m.p(r,o):r+":"+o+";")}return n+(t&&i?t+"{"+i+"}":i)+a},p={},f=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+f(e[n]);return t}return e},h=(e,t,n,a,i)=>{var r;let o=f(e),s=p[o]||(p[o]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(o));if(!p[s]){let t=o!==e?e:(e=>{let t,n,a=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(n=t[3].replace(u," ").trim(),a.unshift(a[0][n]=a[0][n]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);p[s]=m(i?{["@keyframes "+s]:t}:t,n?"":"."+s)}let l=n&&p.g?p.g:null;return n&&(p.g=p[s]),r=p[s],l?t.data=t.data.replace(l,r):-1===t.data.indexOf(r)&&(t.data=a?r+t.data:t.data+r),s},g=(e,t,n)=>e.reduce((e,a,i)=>{let r=t[i];if(r&&r.call){let e=r(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;r=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+a+(null==r?"":r)},"");function _(e){let t=this||{},n=e.call?e(t.p):e;return h(n.unshift?n.raw?g(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,l(t.target),t.g,t.o,t.k)}_.bind({g:1});let v,x,y,b=_.bind({k:1});function N(e,t){let n=this||{};return function(){let a=arguments;function i(r,o){let s=Object.assign({},r),l=s.className||i.className;n.p=Object.assign({theme:x&&x()},s),n.o=/ *go\d+/.test(l),s.className=_.apply(n,a)+(l?" "+l:""),t&&(s.ref=o);let c=e;return e[0]&&(c=s.as||e,delete s.as),y&&c[0]&&y(s),v(c,s)}return t?t(i):i}}var k=e=>"function"==typeof e,w=(e,t)=>k(e)?e(t):e,j=(a=0,()=>(++a).toString()),C=()=>{if(void 0===i&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");i=!e||e.matches}return i},T=new Map,E=e=>{if(T.has(e))return;let t=setTimeout(()=>{T.delete(e),Z({type:4,toastId:e})},1e3);T.set(e,t)},O=e=>{let t=T.get(e);t&&clearTimeout(t)},I=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&O(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:n}=t;return e.toasts.find(e=>e.id===n.id)?I(e,{type:1,toast:n}):I(e,{type:0,toast:n});case 3:let{toastId:a}=t;return a?E(a):e.toasts.forEach(e=>{E(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},P=[],A={toasts:[],pausedAt:void 0},Z=e=>{A=I(A,e),P.forEach(e=>{e(A)})},V={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},F=(e={})=>{let[t,n]=(0,o.useState)(A);(0,o.useEffect)(()=>(P.push(n),()=>{let e=P.indexOf(n);e>-1&&P.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var n,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(n=e[t.type])?void 0:n.duration)||(null==e?void 0:e.duration)||V[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},B=(e,t="blank",n)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||j()}),$=e=>(t,n)=>{let a=B(t,e,n);return Z({type:2,toast:a}),a.id},H=(e,t)=>$("blank")(e,t);H.error=$("error"),H.success=$("success"),H.loading=$("loading"),H.custom=$("custom"),H.dismiss=e=>{Z({type:3,toastId:e})},H.remove=e=>Z({type:4,toastId:e}),H.promise=(e,t,n)=>{let a=H.loading(t.loading,{...n,...null==n?void 0:n.loading});return e.then(e=>(H.success(w(t.success,e),{id:a,...n,...null==n?void 0:n.success}),e)).catch(e=>{H.error(w(t.error,e),{id:a,...n,...null==n?void 0:n.error})}),e};var S=(e,t)=>{Z({type:1,toast:{id:e,height:t}})},L=()=>{Z({type:5,time:Date.now()})},M=e=>{let{toasts:t,pausedAt:n}=F(e);(0,o.useEffect)(()=>{if(n)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(n<0){t.visible&&H.dismiss(t.id);return}return setTimeout(()=>H.dismiss(t.id),n)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,n]);let a=(0,o.useCallback)(()=>{n&&Z({type:6,time:Date.now()})},[n]),i=(0,o.useCallback)((e,n)=>{let{reverseOrder:a=!1,gutter:i=8,defaultPosition:r}=n||{},o=t.filter(t=>(t.position||r)===(e.position||r)&&t.height),s=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<s&&e.visible).length;return o.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+i,0)},[t]);return{toasts:t,handlers:{updateHeight:S,startPause:L,endPause:a,calculateOffset:i}}},z=N("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,D=N("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,Y=N("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,R=N("div")`
  position: absolute;
`,q=N("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,G=N("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,J=({toast:e})=>{let{icon:t,type:n,iconTheme:a}=e;return void 0!==t?"string"==typeof t?o.createElement(G,null,t):t:"blank"===n?null:o.createElement(q,null,o.createElement(D,{...a}),"loading"!==n&&o.createElement(R,null,"error"===n?o.createElement(z,{...a}):o.createElement(Y,{...a})))},Q=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,U=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,W=N("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,X=N("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,K=(e,t)=>{let n=e.includes("top")?1:-1,[a,i]=C()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Q(n),U(n)];return{animation:t?`${b(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=o.memo(({toast:e,position:t,style:n,children:a})=>{let i=e.height?K(e.position||t||"top-center",e.visible):{opacity:0},r=o.createElement(J,{toast:e}),s=o.createElement(X,{...e.ariaProps},w(e.message,e));return o.createElement(W,{className:e.className,style:{...i,...n,...e.style}},"function"==typeof a?a({icon:r,message:s}):o.createElement(o.Fragment,null,r,s))});r=o.createElement,m.p=void 0,v=r,x=void 0,y=void 0;var et=({id:e,className:t,style:n,onHeightUpdate:a,children:i})=>{let r=o.useCallback(t=>{if(t){let n=()=>{a(e,t.getBoundingClientRect().height)};n(),new MutationObserver(n).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return o.createElement("div",{ref:r,className:t,style:n},i)},en=(e,t)=>{let n=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...a}},ea=_`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ei=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:a,children:i,containerStyle:r,containerClassName:s})=>{let{toasts:l,handlers:c}=M(n);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...r},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(n=>{let r=n.position||t,s=en(r,c.calculateOffset(n,{reverseOrder:e,gutter:a,defaultPosition:t}));return o.createElement(et,{id:n.id,key:n.id,onHeightUpdate:c.updateHeight,className:n.visible?ea:"",style:s},"custom"===n.type?w(n.message,n):i?i(n):o.createElement(ee,{toast:n,position:r}))}))},er=H}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=62131)}),_N_E=e.O()}]);