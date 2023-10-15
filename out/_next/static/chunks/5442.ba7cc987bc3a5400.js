"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5442],{83287:function(e,t,n){n.d(t,{W:function(){return s}});var i=n(6475),r=n(54146);class s extends r.Z{constructor(e){let{chains:t=i.gL9,options:n}=e;super(),this.chains=t,this.options=n}getBlockExplorerUrls(e){let t=e.explorers?.map(e=>e.url)??[];return t.length>0?t:void 0}isChainUnsupported(e){return!this.chains.some(t=>t.chainId===e)}updateChains(e){this.chains=e}}},56856:function(e,t,n){n.d(t,{A:function(){return o},C:function(){return a},R:function(){return h},S:function(){return u},U:function(){return d},a:function(){return c}});var i=n(42009);class r extends Error{constructor(e,t){let{cause:n,code:i,data:r}=t;if(!Number.isInteger(i))throw Error('"code" must be an integer.');if(!e||"string"!=typeof e)throw Error('"message" must be a nonempty string.');super(`${e}. Cause: ${JSON.stringify(n)}`),this.cause=n,this.code=i,this.data=r}}class s extends r{constructor(e,t){let{cause:n,code:i,data:r}=t;if(!(Number.isInteger(i)&&i>=1e3&&i<=4999))throw Error('"code" must be an integer such that: 1000 <= code <= 4999');super(e,{cause:n,code:i,data:r})}}class o extends Error{constructor(){super(...arguments),(0,i._)(this,"name","AddChainError"),(0,i._)(this,"message","Error adding chain")}}class a extends Error{constructor(e){let{chainId:t,connectorId:n}=e;super(`Chain "${t}" not configured for connector "${n}".`),(0,i._)(this,"name","ChainNotConfigured")}}class c extends Error{constructor(){super(...arguments),(0,i._)(this,"name","ConnectorNotFoundError"),(0,i._)(this,"message","Connector not found")}}class h extends r{constructor(e){super("Resource unavailable",{cause:e,code:-32002}),(0,i._)(this,"name","ResourceUnavailable")}}class u extends s{constructor(e){super("Error switching chain",{cause:e,code:4902}),(0,i._)(this,"name","SwitchChainError")}}class d extends s{constructor(e){super("User rejected request",{cause:e,code:4001}),(0,i._)(this,"name","UserRejectedRequestError")}}},4646:function(e,t,n){n.d(t,{n:function(){return i}});function i(e){return"string"==typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"==typeof e?Number(e):e}},32252:function(e,t,n){n.d(t,{g:function(){return s},i:function(){return r}});var i=n(6475);function r(e){let t=new URL(e).hostname;return t.endsWith(".thirdweb.com")||"localhost"===t||"0.0.0.0"===t}function s(e){return(0,i.OZ$)(e).map(e=>{try{let t=new URL(e);return t.hostname.endsWith(".thirdweb.com")&&(t.pathname="",t.search=""),t.toString()}catch(t){return e}})}},95664:function(e,t,n){n.d(t,{_:function(){return m}});var i=n(42009),r=n(16074),s=n(50037),o=n(32252),a=n(19485),c=n(241),h=n(16441),u=n(83287),d=n(4646),l=n(56856);n(54146);var g=new WeakMap;class m extends u.W{constructor(e){let t={shimDisconnect:!0,getProvider:()=>{if((0,s.a)(globalThis.window))return globalThis.window.ethereum},...e.options};super({chains:e.chains,options:t}),(0,r._)(this,g,{writable:!0,value:void 0}),(0,i._)(this,"shimDisconnectKey","injected.shimDisconnect"),(0,i._)(this,"onAccountsChanged",async e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:a.getAddress(e[0])})}),(0,i._)(this,"onChainChanged",e=>{let t=(0,d.n)(e),n=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:n}})}),(0,i._)(this,"onDisconnect",async e=>{if(1013===e.code){let e=await this.getProvider();if(e)try{let e=await this.getAccount();if(e)return}catch{}}this.emit("disconnect"),this.options.shimDisconnect&&await this.connectorStorage.removeItem(this.shimDisconnectKey)});let n=t.getProvider();if("string"==typeof t.name)this.name=t.name;else if(n){let e=function(e){if(!e)return"Injected";let t=e=>e.isAvalanche?"Core Wallet":e.isBitKeep?"BitKeep":e.isBraveWallet?"Brave Wallet":e.isCoinbaseWallet?"Coinbase Wallet":e.isExodus?"Exodus":e.isFrame?"Frame":e.isKuCoinWallet?"KuCoin Wallet":e.isMathWallet?"MathWallet":e.isOneInchIOSWallet||e.isOneInchAndroidWallet?"1inch Wallet":e.isOpera?"Opera":e.isPortal?"Ripio Portal":e.isTally?"Tally":e.isTokenPocket?"TokenPocket":e.isTokenary?"Tokenary":e.isTrust||e.isTrustWallet?"Trust Wallet":e.isMetaMask?"MetaMask":void 0;if(e.providers?.length){let n=new Set,i=1;for(let r of e.providers){let e=t(r);e||(e=`Unknown Wallet #${i}`,i+=1),n.add(e)}let r=[...n];return r.length?r:r[0]??"Injected"}return t(e)??"Injected"}(n);t.name?this.name=t.name(e):"string"==typeof e?this.name=e:this.name=e[0]}else this.name="Injected";this.id="injected",this.ready=!!n,this.connectorStorage=e.connectorStorage}async connect(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{let t=await this.getProvider();if(!t)throw new l.a;this.setupListeners(),this.emit("message",{type:"connecting"});let n=await t.request({method:"eth_requestAccounts"}),i=a.getAddress(n[0]),r=await this.getChainId(),s=this.isChainUnsupported(r);if(e.chainId&&r!==e.chainId)try{await this.switchChain(e.chainId),r=e.chainId,s=this.isChainUnsupported(e.chainId)}catch(t){console.error(`Could not switch to chain id: ${e.chainId}`,t)}this.options.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");let o={account:i,chain:{id:r,unsupported:s},provider:t};return this.emit("connect",o),o}catch(e){if(this.isUserRejectedRequestError(e))throw new l.U(e);if(-32002===e.code)throw new l.R(e);throw e}}async disconnect(){let e=await this.getProvider();e?.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&await this.connectorStorage.removeItem(this.shimDisconnectKey))}async getAccount(){let e=await this.getProvider();if(!e)throw new l.a;let t=await e.request({method:"eth_accounts"});return a.getAddress(t[0])}async getChainId(){let e=await this.getProvider();if(!e)throw new l.a;return e.request({method:"eth_chainId"}).then(d.n)}async getProvider(){let e=this.options.getProvider();return e&&(0,r.a)(this,g,e),(0,r.b)(this,g)}async getSigner(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,n]=await Promise.all([this.getProvider(),this.getAccount()]);return new c.Q(t,e).getSigner(n)}async isAuthorized(){try{if(this.options.shimDisconnect&&!await this.connectorStorage.getItem(this.shimDisconnectKey))return!1;let e=await this.getProvider();if(!e)throw new l.a;let t=await this.getAccount();return!!t}catch{return!1}}async switchChain(e){let t=await this.getProvider();if(!t)throw new l.a;let n=h.hexValue(e);try{await t.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]});let i=this.chains.find(t=>t.chainId===e);if(i)return i;return{chainId:e,name:`Chain ${n}`,slug:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],chain:"",shortName:"",testnet:!0}}catch(r){let i=this.chains.find(t=>t.chainId===e);if(!i)throw new l.C({chainId:e,connectorId:this.id});if(4902===r.code||r?.data?.originalError?.code===4902)try{return await t.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:i.name,nativeCurrency:i.nativeCurrency,rpcUrls:(0,o.g)(i),blockExplorerUrls:this.getBlockExplorerUrls(i)}]}),i}catch(e){if(this.isUserRejectedRequestError(e))throw new l.U(r);throw new l.A}if(this.isUserRejectedRequestError(r))throw new l.U(r);throw new l.S(r)}}async setupListeners(){let e=await this.getProvider();e.on&&(e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect))}isUserRejectedRequestError(e){return 4001===e.code}}},5442:function(e,t,n){n.d(t,{ZerionConnector:function(){return s}});var i=n(95664),r=n(50037);n(54146);class s extends i._{constructor(e){let t={name:"Zerion",getProvider(){function e(e){let t=!!e?.isZerion;if(t)return e}if((0,r.a)(globalThis.window))return globalThis.window.ethereum?.providers?globalThis.window.ethereum.providers.find(e):e(globalThis.window.ethereum)},...e.options};super({chains:e.chains,options:t,connectorStorage:e.connectorStorage})}}}}]);