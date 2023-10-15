"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6364],{58808:function(t,r,e){e.d(r,{S:function(){return n}});var a=e(5749);class n{get chainId(){return this._chainId}constructor(t,r,e){this.contractWrapper=t,this.storage=r,this.erc721=new a.aD(this.contractWrapper,this.storage,e),this._chainId=e}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc721.getAll(t)}async getOwned(t){return t&&(t=await (0,a.cG)(t)),this.erc721.getOwned(t)}async getOwnedTokenIds(t){return t&&(t=await (0,a.cG)(t)),this.erc721.getOwnedTokenIds(t)}async totalSupply(){return this.erc721.totalCirculatingSupply()}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}transfer=(0,a.dt)(async(t,r)=>this.erc721.transfer.prepare(t,r));setApprovalForAll=(0,a.dt)(async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r));setApprovalForToken=(0,a.dt)(async(t,r)=>a.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await (0,a.cG)(t),r]}))}},56460:function(t,r,e){e.d(r,{h:function(){return s}});var a=e(49242),n=e(5749);async function s(t,r,e){let s=t.getProvider(),o=new n.ds(s,r,a,{},t.storage),c=await t.getSignerAddress(),i=t.address,p=await o.read("allowance",[c,i]);return p.gte(e)}},76364:function(t,r,e){e.r(r),e.d(r,{Multiwrap:function(){return c}});var a=e(61744),n=e(5749),s=e(56460),o=e(58808);e(13550),e(64063),e(2162),e(77191),e(54098),e(54146);class c extends o.S{static contractRoles=n.dO;constructor(t,r,e){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new n.ds(t,r,s,a,e);super(i,e,o),this.abi=n.e.parse(s||[]),this.metadata=new n.ah(this.contractWrapper,n.dP,this.storage),this.app=new n.b0(this.contractWrapper,this.metadata,this.storage),this.roles=new n.ai(this.contractWrapper,c.contractRoles),this.encoder=new n.ag(this.contractWrapper),this.estimator=new n.aQ(this.contractWrapper),this.events=new n.aR(this.contractWrapper),this.royalties=new n.aj(this.contractWrapper,this.metadata),this.owner=new n.aV(this.contractWrapper)}async getWrappedContents(t){let r=await this.contractWrapper.read("getWrappedContents",[t]),e=[],s=[],o=[];for(let t of r)switch(t.tokenType){case 0:{let r=await (0,n.bb)(this.contractWrapper.getProvider(),t.assetContract);e.push({contractAddress:t.assetContract,quantity:a.formatUnits(t.totalAmount,r.decimals)});break}case 1:s.push({contractAddress:t.assetContract,tokenId:t.tokenId});break;case 2:o.push({contractAddress:t.assetContract,tokenId:t.tokenId,quantity:t.totalAmount.toString()})}return{erc20Tokens:e,erc721Tokens:s,erc1155Tokens:o}}wrap=(0,n.dt)(async(t,r,e)=>{let a=await (0,n.dQ)(r,this.storage),s=await (0,n.cG)(e||await this.contractWrapper.getSignerAddress()),o=await this.toTokenStructList(t);return n.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"wrap",args:[o,a,s],parse:t=>{let r=this.contractWrapper.parseLogs("TokensWrapped",t?.logs);if(0===r.length)throw Error("TokensWrapped event not found");let e=r[0].args.tokenIdOfWrappedToken;return{id:e,receipt:t,data:()=>this.get(e)}}})});unwrap=(0,n.dt)(async(t,r)=>{let e=await (0,n.cG)(r||await this.contractWrapper.getSignerAddress());return n.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"unwrap",args:[t,e]})});async toTokenStructList(t){let r=[],e=this.contractWrapper.getProvider(),a=await this.contractWrapper.getSignerAddress();if(t.erc20Tokens)for(let a of t.erc20Tokens){let t=await (0,n.ba)(e,a.quantity,a.contractAddress),o=await (0,s.h)(this.contractWrapper,a.contractAddress,t);if(!o)throw Error(`ERC20 token with contract address "${a.contractAddress}" does not have enough allowance to transfer.

You can set allowance to the multiwrap contract to transfer these tokens by running:

await sdk.getToken("${a.contractAddress}").setAllowance("${this.getAddress()}", ${a.quantity});

`);r.push({assetContract:a.contractAddress,totalAmount:t,tokenId:0,tokenType:0})}if(t.erc721Tokens)for(let e of t.erc721Tokens){let t=await (0,n.dC)(this.contractWrapper.getProvider(),this.getAddress(),e.contractAddress,e.tokenId,a);if(!t)throw Error(`ERC721 token "${e.tokenId}" with contract address "${e.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getNFTCollection("${e.contractAddress}").setApprovalForToken("${this.getAddress()}", ${e.tokenId});

`);r.push({assetContract:e.contractAddress,totalAmount:0,tokenId:e.tokenId,tokenType:1})}if(t.erc1155Tokens)for(let e of t.erc1155Tokens){let t=await (0,n.dC)(this.contractWrapper.getProvider(),this.getAddress(),e.contractAddress,e.tokenId,a);if(!t)throw Error(`ERC1155 token "${e.tokenId}" with contract address "${e.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getEdition("${e.contractAddress}").setApprovalForAll("${this.getAddress()}", true);

`);r.push({assetContract:e.contractAddress,totalAmount:e.quantity,tokenId:e.tokenId,tokenType:2})}return r}async prepare(t,r,e){return n.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}}}]);