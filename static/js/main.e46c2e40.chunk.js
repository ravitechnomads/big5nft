(this["webpackJsonpcandy-machine-ui"]=this["webpackJsonpcandy-machine-ui"]||[]).push([[0],{259:function(e,t,n){},260:function(e,t){},261:function(e,t){},288:function(e,t){},289:function(e,t){},315:function(e,t){},316:function(e,t){},318:function(e,t){},361:function(e,t,n){},362:function(e,t,n){"use strict";n.r(t);var r,a,i,c=n(4),s=n.n(c),o=n(33),u=n.n(o),l=(n(259),n(26)),b=n(8),d=n(2),p=n(15),f=n(122),g=n(1),h=n.n(g),m=n(92),x=n(401),v=n(411),y=n(396),j=n(409),k=n(402),O=n(397),w=n(29),S=n(225),T=n(155),P=n(88),M=n(47),A=n(236),E=n(393),K=n(416),R=n(21),C=Object(E.a)((function(e){return Object(K.a)({root:{display:"flex",padding:e.spacing(0),"& > *":{margin:e.spacing(.4),width:e.spacing(6),height:e.spacing(6),display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",background:"#384457",color:"white",borderRadius:5,fontSize:10}},done:{display:"flex",margin:0,marginBottom:e.spacing(.5),height:e.spacing(3.5),padding:e.spacing(1),flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",background:"#384457",color:"white",borderRadius:5,fontWeight:"bold",fontSize:18},item:{fontWeight:"bold",fontSize:18}})})),D=function(e){var t=e.date,n=e.status,r=e.style,a=e.onComplete,i=C();return t?Object(R.jsx)(A.a,{date:t,onComplete:a,renderer:function(e){var t=e.days,a=e.hours,c=e.minutes,s=e.seconds;return a+=24*t,e.completed?n?Object(R.jsx)("span",{className:i.done,children:n}):null:Object(R.jsxs)("div",{className:i.root,style:r,children:[Object(R.jsxs)(y.a,{elevation:0,children:[Object(R.jsx)("span",{className:i.item,children:a<10?"0".concat(a):a}),Object(R.jsx)("span",{children:"hrs"})]}),Object(R.jsxs)(y.a,{elevation:0,children:[Object(R.jsx)("span",{className:i.item,children:c<10?"0".concat(c):c}),Object(R.jsx)("span",{children:"mins"})]}),Object(R.jsxs)(y.a,{elevation:0,children:[Object(R.jsx)("span",{className:i.item,children:s<10?"0".concat(s):s}),Object(R.jsx)("span",{children:"secs"})]})]})}}):null},I=n(394),N=n(400),B=n(75),W=n(240),L=n(125),_=Object(m.default)(I.a)(r||(r=Object(f.a)(["\n  width: 100%;\n  height: 60px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n"]))),U=function(e){var t=e.onMint,n=e.candyMachine,r=e.isMinting,a=e.setIsMinting,i=e.isActive,s=Object(S.b)(),o=Object(W.b)(),u=Object(c.useState)(!1),l=Object(p.a)(u,2),b=l[0],f=l[1],g=Object(B.useGateway)(),m=g.requestGatewayToken,x=g.gatewayStatus,v=Object(c.useState)(-1),y=Object(p.a)(v,2),j=y[0],k=y[1],O=Object(c.useState)(!1),w=Object(p.a)(O,2),T=w[0],P=w[1],A=Object(c.useState)(!1),E=Object(p.a)(A,2),K=E[0],C=E[1];Object(c.useEffect)((function(){var e=function(){var e=Object(d.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.removeAccountChangeListener)(o.connection,j);case 2:return e.next=4,t();case 4:P(!1),f(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();b&&T&&e()}),[b,T,o.connection,t,j]);var D=function(e){var t=Object(c.useRef)();return Object(c.useEffect)((function(){t.current=e}),[e]),t.current}(x);return Object(c.useEffect)((function(){var e=[B.GatewayStatus.NOT_REQUESTED,B.GatewayStatus.REFRESH_TOKEN_REQUIRED],t=[].concat(e,[B.GatewayStatus.UNKNOWN]);e.find((function(e){return D===e}))&&!t.find((function(e){return x===e}))&&a(!0),console.log("change: ",B.GatewayStatus[x])}),[K,D,x]),Object(c.useEffect)((function(){K&&x===B.GatewayStatus.ACTIVE&&(console.log("Minting after token active"),C(!1),t())}),[K,x,t]),Object(R.jsx)(_,{disabled:r||!i,onClick:Object(d.a)(h.a.mark((function e(){var r,a,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===n||void 0===n||!n.state.isActive||null===n||void 0===n||!n.state.gatekeeper){e.next=35;break}if((r=n.state.gatekeeper.gatekeeperNetwork.toBase58())!==M.b){e.next=14;break}if(x!==B.GatewayStatus.ACTIVE){e.next=8;break}return e.next=6,t();case 6:e.next=12;break;case 8:return C(!0),e.next=11,m();case 11:console.log("after: ",x);case 12:e.next=33;break;case 14:if("ttib7tuX8PTWPqFsmUFQTj78MbRhUmqxidJRDv4hRRE"!==r&&"tibePmPaoTgrs929rWpu755EXaxC7M3SthVCf6GzjZt"!==r){e.next=31;break}return P(!0),e.next=18,Object(L.findGatewayToken)(o.connection,s.publicKey,n.state.gatekeeper.gatekeeperNetwork);case 18:if(null===(a=e.sent)||void 0===a||!a.isValid()){e.next=24;break}return e.next=22,t();case 22:e.next=29;break;case 24:return window.open("https://verify.encore.fans/?gkNetwork=".concat(r),"_blank"),e.next=27,Object(L.getGatewayTokenAddressForOwnerAndGatekeeperNetwork)(s.publicKey,n.state.gatekeeper.gatekeeperNetwork);case 27:i=e.sent,k(Object(L.onGatewayTokenChange)(o.connection,i,(function(){return f(!0)}),"confirmed"));case 29:e.next=33;break;case 31:throw P(!1),new Error("Unknown Gatekeeper Network: ".concat(r));case 33:e.next=38;break;case 35:return e.next=37,t();case 37:P(!1);case 38:case"end":return e.stop()}}),e)}))),variant:"contained",children:null!==n&&void 0!==n&&n.state.isSoldOut?"SOLD OUT":r?Object(R.jsx)(N.a,{}):null!==n&&void 0!==n&&n.state.isPresale||null!==n&&void 0!==n&&n.state.isWhitelistOnly?"WHITELIST MINT":"MINT"})};var F,G,Y=Object(m.default)(T.a)(a||(a=Object(f.a)(["\n  width: 100%;\n  height: 60px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n"]))),z=m.default.div(i||(i=Object(f.a)([""]))),q=function(e){var t;return e.state.isActive&&null!==(t=e.state.endSettings)&&void 0!==t&&t.endSettingType.date?Object(M.h)(e.state.endSettings.number):Object(M.h)(e.state.goLiveDate?e.state.goLiveDate:e.state.isPresale?new l.a((new Date).getTime()/1e3):void 0)},H=function(e){var t,n,r,a=Object(c.useState)(!1),i=Object(p.a)(a,2),s=i[0],o=i[1],u=Object(c.useState)(),f=Object(p.a)(u,2),g=f[0],m=f[1],T=Object(c.useState)({open:!1,message:"",severity:void 0}),A=Object(p.a)(T,2),E=A[0],K=A[1],C=Object(c.useState)(!1),I=Object(p.a)(C,2),N=I[0],W=I[1],L=Object(c.useState)(),_=Object(p.a)(L,2),F=_[0],G=_[1],H=Object(c.useState)(),V=Object(p.a)(H,2),J=V[0],Z=V[1],X=Object(c.useState)(!1),Q=Object(p.a)(X,2),$=Q[0],ee=Q[1],te=Object(c.useState)(!1),ne=Object(p.a)(te,2),re=ne[0],ae=ne[1],ie=Object(c.useState)(!1),ce=Object(p.a)(ie,2),se=ce[0],oe=ce[1],ue=Object(c.useState)(),le=Object(p.a)(ue,2),be=le[0],de=le[1],pe=Object(c.useState)(!0),fe=Object(p.a)(pe,2),ge=fe[0],he=fe[1],me=Object(c.useState)(),xe=Object(p.a)(me,2),ve=xe[0],ye=xe[1],je=e.rpcHost,ke=Object(S.b)(),Oe=e.network,we=Object(c.useMemo)((function(){if(ke&&ke.publicKey&&ke.signAllTransactions&&ke.signTransaction)return{publicKey:ke.publicKey,signAllTransactions:ke.signAllTransactions,signTransaction:ke.signTransaction}}),[ke]),Se=Object(c.useCallback)(Object(d.a)(h.a.mark((function t(){var n,r,a,i,c,s,o,u,b,d,f,g,x,v,y,j,k,O,S,T,A,E,R,C,D,I,N,B=arguments;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=B.length>0&&void 0!==B[0]?B[0]:"confirmed",we){t.next=3;break}return t.abrupt("return");case 3:if(void 0===e.error){t.next=6;break}return K({open:!0,message:e.error,severity:"error",hideDuration:null}),t.abrupt("return");case 6:if(r=new w.a(e.rpcHost,n),!e.candyMachineId){t.next=94;break}return t.prev=8,t.next=11,Object(P.d)(we,e.candyMachineId,r);case 11:if(u=t.sent,console.log("Candy machine state: ",u),b=!(null===u||void 0===u||!u.state.goLiveDate)&&(null===u||void 0===u?void 0:u.state.goLiveDate.toNumber())<(new Date).getTime()/1e3,d=!1,f=!1,g=u.state.price,null===u||void 0===u||!u.state.whitelistMintSettings){t.next=39;break}return u.state.whitelistMintSettings.presale&&(!u.state.goLiveDate||u.state.goLiveDate.toNumber()>(new Date).getTime()/1e3)&&(d=!0),u.state.whitelistMintSettings.discountPrice?(de(u.state.whitelistMintSettings.discountPrice),g=u.state.whitelistMintSettings.discountPrice):(de(void 0),u.state.whitelistMintSettings.presale||(u.state.isWhitelistOnly=!0)),x=new l.e.PublicKey(u.state.whitelistMintSettings.mint),t.next=23,Object(M.e)(x,we.publicKey);case 23:return v=t.sent[0],t.prev=24,t.next=27,r.getTokenAccountBalance(v);case 27:y=t.sent,f=parseInt(y.value.amount)>0,ee(f),u.state.isWhitelistOnly&&(b=f&&(d||b)),t.next=39;break;case 33:t.prev=33,t.t0=t.catch(24),ee(!1),u.state.isWhitelistOnly&&(b=!1),console.log("There was a problem fetching whitelist token balance"),console.log(t.t0);case 39:if(g=f?g:u.state.price,null===u||void 0===u||!u.state.tokenMint){t.next=62;break}return j=new l.e.PublicKey(u.state.tokenMint),t.next=44,Object(M.e)(j,we.publicKey);case 44:return k=t.sent[0],t.prev=45,t.next=48,r.getTokenAccountBalance(k);case 48:O=t.sent,S=new l.a(O.value.amount).gte(g),oe(S),b=b&&S,t.next=60;break;case 54:t.prev=54,t.t1=t.catch(45),oe(!1),b=!1,console.log("There was a problem fetching SPL token balance"),console.log(t.t1);case 60:t.next=70;break;case 62:return t.t2=l.a,t.next=65,r.getBalance(we.publicKey);case 65:t.t3=t.sent,T=new t.t2(t.t3),A=T.gte(g),oe(A),b=b&&A;case 70:return null!==u&&void 0!==u&&null!==(a=u.state.endSettings)&&void 0!==a&&a.endSettingType.date&&(G(Object(M.h)(u.state.endSettings.number)),u.state.endSettings.number.toNumber()<(new Date).getTime()/1e3&&(b=!1)),null!==u&&void 0!==u&&null!==(i=u.state.endSettings)&&void 0!==i&&i.endSettingType.amount?(E=Math.min(u.state.endSettings.number.toNumber(),u.state.itemsAvailable),u.state.itemsRedeemed<E?Z(E-u.state.itemsRedeemed):(Z(0),u.state.isSoldOut=!0)):Z(u.state.itemsRemaining),u.state.isSoldOut&&(b=!1),t.next=75,Object(P.e)(e.candyMachineId);case 75:return R=t.sent,C=Object(p.a)(R,1),D=C[0],t.next=80,r.getAccountInfo(D);case 80:I=t.sent,W(u.state.isActive=b),ae(u.state.isPresale=d),m(u),N=892+(I&&u.state.retainAuthority?182:0)+(u.state.tokenMint?66:0)+(u.state.whitelistMintSettings?34:0)+(null!==(c=u.state.whitelistMintSettings)&&void 0!==c&&null!==(s=c.mode)&&void 0!==s&&s.burnEveryTime?34:0)+(u.state.gatekeeper?33:0)+(null!==(o=u.state.gatekeeper)&&void 0!==o&&o.expireOnUse?66:0),he(N>1230),t.next=92;break;case 88:t.prev=88,t.t4=t.catch(8),t.t4 instanceof Error?t.t4.message==="Account does not exist ".concat(e.candyMachineId)?K({open:!0,message:"Couldn't fetch candy machine state from candy machine with address: ".concat(e.candyMachineId,", using rpc: ").concat(e.rpcHost,"! You probably typed the REACT_APP_CANDY_MACHINE_ID value in wrong in your .env file, or you are using the wrong RPC!"),severity:"error",hideDuration:null}):t.t4.message.startsWith("failed to get info about account")&&K({open:!0,message:"Couldn't fetch candy machine state with rpc: ".concat(e.rpcHost,"! This probably means you have an issue with the REACT_APP_SOLANA_RPC_HOST value in your .env file, or you are not using a custom RPC!"),severity:"error",hideDuration:null}):K({open:!0,message:"".concat(t.t4),severity:"error",hideDuration:null}),console.log(t.t4);case 92:t.next=95;break;case 94:K({open:!0,message:"Your REACT_APP_CANDY_MACHINE_ID value in the .env file doesn't look right! Make sure you enter it in as plain base-58 address!",severity:"error",hideDuration:null});case 95:case"end":return t.stop()}}),t,null,[[8,88],[24,33],[45,54]])}))),[we,e.candyMachineId,e.error,e.rpcHost]),Te=function(){var t=Object(d.a)(h.a.mark((function t(){var n,r,a,i,c,s,u,l,b,d,p=arguments;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=p.length>0&&void 0!==p[0]?p[0]:[],r=p.length>1&&void 0!==p[1]?p[1]:[],t.prev=2,o(!0),!(ke.connected&&null!==g&&void 0!==g&&g.program&&ke.publicKey)){t.next=40;break}if(!ge||void 0!==ve){t.next=25;break}return K({open:!0,message:"Please sign account setup transaction",severity:"info"}),t.next=9,Object(P.c)(g,ke.publicKey);case 9:if(i=t.sent,c={err:!0},!i.transaction){t.next=15;break}return t.next=14,Object(P.b)(i.transaction,e.txTimeout,e.connection,!0);case 14:c=t.sent;case 15:if(!c||c.err){t.next=20;break}ye(i),K({open:!0,message:"Setup transaction succeeded! Please sign minting transaction",severity:"info"}),t.next=23;break;case 20:return K({open:!0,message:"Mint failed! Please try again!",severity:"error"}),o(!1),t.abrupt("return");case 23:t.next=26;break;case 25:K({open:!0,message:"Please sign minting transaction",severity:"info"});case 26:return t.next=28,Object(P.f)(g,ke.publicKey,n,r,null!==(a=i)&&void 0!==a?a:ve);case 28:if(s=t.sent,u={err:!0},l=null,!s){t.next=39;break}return t.next=34,Object(P.b)(s.mintTxId,e.txTimeout,e.connection,!0);case 34:return u=t.sent,t.next=37,g.program.provider.connection.getAccountInfo(s.metadataKey,"processed");case 37:l=t.sent,console.log("Metadata status: ",!!l);case 39:u&&!u.err&&l?(Z(b=J-1),W(g.state.isActive=b>0),g.state.isSoldOut=0===b,ye(void 0),K({open:!0,message:"Congratulations! Mint succeeded!",severity:"success",hideDuration:7e3}),Se("processed")):u&&!u.err?(K({open:!0,message:"Mint likely failed! Anti-bot SOL 0.01 fee potentially charged! Check the explorer to confirm the mint failed and if so, make sure you are eligible to mint before trying again.",severity:"error",hideDuration:8e3}),Se()):(K({open:!0,message:"Mint failed! Please try again!",severity:"error"}),Se());case 40:t.next=48;break;case 42:t.prev=42,t.t0=t.catch(2),d=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(console.log(t.t0),d="SOLD OUT!",window.location.reload()):312===t.t0.code&&(d="Minting period hasn't started yet."):t.t0.message?t.t0.message.indexOf("0x137")?(console.log(t.t0),d="SOLD OUT!"):t.t0.message.indexOf("0x135")&&(d="Insufficient funds to mint. Please fund your wallet."):d="Transaction timeout! Please try again.",K({open:!0,message:d,severity:"error"}),Se();case 48:return t.prev=48,o(!1),t.finish(48);case 51:case"end":return t.stop()}}),t,null,[[2,42,48,51]])})));return function(){return t.apply(this,arguments)}}(),Pe=function(){var e=!N||re;e&&(g.state.isWhitelistOnly&&!$&&(e=!1),F&&Date.now()>=F.getTime()&&(e=!1)),re&&g.state.goLiveDate&&g.state.goLiveDate.toNumber()<=(new Date).getTime()/1e3&&ae(g.state.isPresale=!1),W(g.state.isActive=e)};return Object(c.useEffect)((function(){Se()}),[we,e.candyMachineId,e.connection,Se]),Object(c.useEffect)((function(){!function e(){setTimeout((function(){Se(),e()}),2e4)}()}),[Se]),Object(R.jsxs)(x.a,{style:{marginTop:100},children:[Object(R.jsx)(x.a,{maxWidth:"xs",style:{position:"relative"},children:Object(R.jsxs)(y.a,{style:{padding:24,paddingBottom:10,backgroundColor:"#151A1F",borderRadius:6},children:[ke.connected?Object(R.jsxs)(R.Fragment,{children:[g&&Object(R.jsxs)(k.a,{container:!0,direction:"row",justifyContent:"center",wrap:"nowrap",children:[Object(R.jsxs)(k.a,{item:!0,xs:3,children:[Object(R.jsx)(O.a,{variant:"body2",color:"textSecondary",children:"Remaining"}),Object(R.jsx)(O.a,{variant:"h6",color:"textPrimary",style:{fontWeight:"bold"},children:"".concat(J)})]}),Object(R.jsxs)(k.a,{item:!0,xs:4,children:[Object(R.jsx)(O.a,{variant:"body2",color:"textSecondary",children:$&&be?"Discount Price":"Price"}),Object(R.jsx)(O.a,{variant:"h6",color:"textPrimary",style:{fontWeight:"bold"},children:"\u25ce ".concat($&&be?M.d.asNumber(be):M.d.asNumber(g.state.price))})]}),Object(R.jsx)(k.a,{item:!0,xs:5,children:N&&F&&Date.now()<F.getTime()?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(D,{date:q(g),style:{justifyContent:"flex-end"},status:"COMPLETED",onComplete:Pe},"endSettings"),Object(R.jsx)(O.a,{variant:"caption",align:"center",display:"block",style:{fontWeight:"bold"},children:"TO END OF MINT"})]}):Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(D,{date:q(g),style:{justifyContent:"flex-end"},status:null!==g&&void 0!==g&&null!==(t=g.state)&&void 0!==t&&t.isSoldOut||F&&Date.now()>F.getTime()?"COMPLETED":re?"PRESALE":"LIVE",onComplete:Pe},"goLive"),re&&g.state.goLiveDate&&g.state.goLiveDate.toNumber()>(new Date).getTime()/1e3&&Object(R.jsx)(O.a,{variant:"caption",align:"center",display:"block",style:{fontWeight:"bold"},children:"UNTIL PUBLIC MINT"})]})})]}),Object(R.jsx)(z,{children:null!==g&&void 0!==g&&g.state.isActive&&null!==g&&void 0!==g&&g.state.gatekeeper&&ke.publicKey&&ke.signTransaction?Object(R.jsx)(B.GatewayProvider,{wallet:{publicKey:ke.publicKey||new w.c(P.a),signTransaction:ke.signTransaction},gatekeeperNetwork:null===g||void 0===g||null===(n=g.state)||void 0===n||null===(r=n.gatekeeper)||void 0===r?void 0:r.gatekeeperNetwork,clusterUrl:je,cluster:Oe,options:{autoShowModal:!1},children:Object(R.jsx)(U,{candyMachine:g,isMinting:s,setIsMinting:function(e){return o(e)},onMint:Te,isActive:N||re&&$&&se})}):Object(R.jsx)(U,{candyMachine:g,isMinting:s,setIsMinting:function(e){return o(e)},onMint:Te,isActive:N||re&&$&&se})})]}):Object(R.jsx)(Y,{children:"Connect Wallet"}),Object(R.jsx)(O.a,{variant:"caption",align:"center",display:"block",style:{marginTop:7,color:"grey"},children:"Powered by METAPLEX"})]})}),Object(R.jsx)(v.a,{open:E.open,autoHideDuration:void 0===E.hideDuration?6e3:E.hideDuration,onClose:function(){return K(Object(b.a)(Object(b.a)({},E),{},{open:!1}))},children:Object(R.jsx)(j.a,{onClose:function(){return K(Object(b.a)(Object(b.a)({},E),{},{open:!1}))},severity:E.severity,children:E.message})})]})},V=n(95),J=n(413),Z=n(414),X=n(415),Q=n(405),$=n(406),ee=n(408),te=n(410),ne=n(242),re=n(407),ae=Object(ne.a)({palette:{type:"dark"}}),ie=void 0;var ce=function(){try{return new l.e.PublicKey("3uZKoPn7imWJCDyTjUpWcGhivqC1Fm8kc4gMTXYTxNFc")}catch(e){return void console.log("Failed to construct CandyMachineId",e)}}(),se=null!==(F="mainnet-beta")?F:"devnet",oe=null!==(G="https://api.mainnet-beta.solana.com")?G:l.e.clusterApiUrl("devnet"),ue=new l.e.Connection(oe),le=function(){var e=Object(c.useMemo)((function(){return Object(w.i)(se)}),[]),t=Object(c.useMemo)((function(){return[Object(J.a)(),Object(Z.a)(),Object(X.a)(),Object(Q.a)({network:se}),Object($.a)({network:se})]}),[]);return Object(R.jsx)(re.a,{theme:ae,children:Object(R.jsx)(ee.a,{endpoint:e,children:Object(R.jsx)(te.a,{wallets:t,autoConnect:!0,children:Object(R.jsx)(T.b,{children:Object(R.jsx)(H,{candyMachineId:ce,connection:ue,txTimeout:V.a,rpcHost:oe,network:se,error:ie})})})})})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,417)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};n(361);u.a.render(Object(R.jsx)(s.a.StrictMode,{children:Object(R.jsx)(le,{})}),document.getElementById("root")),be()},47:function(e,t,n){"use strict";(function(e){n.d(t,"h",(function(){return u})),n.d(t,"d",(function(){return b})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"e",(function(){return g})),n.d(t,"f",(function(){return h})),n.d(t,"g",(function(){return m}));var r=n(2),a=n(1),i=n.n(a),c=n(26),s=n(45),o=n(29),u=function(e){if(e)return new Date(1e3*e.toNumber())},l=new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}),b={format:function(e){return e?l.format(e):"--"},asNumber:function(e){if(e)return e.toNumber()/o.b}},d=new c.e.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),p=new c.e.PublicKey("gatem74V238djXdzWnJf94Wo1DcnuGkfijbf3AuBhfs"),f="ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6",g=function(){var e=Object(r.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),s.b.toBuffer(),t.toBuffer()],d);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var t=Object(r.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),e.from("expire")],p);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(r.a)(i.a.mark((function t(n,r){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),e.from("gateway"),e.from([0,0,0,0,0,0,0,0]),r.toBuffer()],p);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}).call(this,n(5).Buffer)},88:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return y})),n.d(t,"c",(function(){return k})),n.d(t,"f",(function(){return O}));var r=n(15),a=n(2),i=n(1),c=n.n(i),s=n(26),o=n(45),u=n(29),l=n(95),b=n(47),d=new s.e.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"),p=new s.e.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),f=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,s,o,u,l=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>3&&void 0!==l[3]&&l[3],s=!1,o={slot:0,confirmations:0,err:null},u=0,e.next=6,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(u,l){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),l({timeout:!0}))}),n);case 1:if(s||!i){e.next=7;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,o=n&&n.value[0],s||(o?o.err?(console.log("REST error for",t,o),s=!0,l(o.err)):o.confirmations?(console.log("REST confirmation for",t,o),s=!0,u(o)):console.log("REST no confirmations for",t,o):console.log("REST null result for",t,o)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=5,w(2e3);case 5:e.next=1;break;case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 6:return o=e.sent,e.prev=7,e.next=10,r.removeSignatureListener(u);case 10:e.next=14;break;case 12:e.prev=12,e.t0=e.catch(7);case 14:return s=!0,console.log("Returning status",o),e.abrupt("return",o);case 17:case"end":return e.stop()}}),e,null,[[7,12]])})));return function(t,n,r){return e.apply(this,arguments)}}(),g=function(t,n,r,a){var i=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:s.e.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:s.e.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new s.e.TransactionInstruction({keys:i,programId:b.c,data:e.from([])})},h=function(){var e=Object(a.a)(c.a.mark((function e(t,n,i){var o,u,l,b,p,f,g,h,m,x,v,y,j;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=new s.c(i,t,{preflightCommitment:"processed"}),u=function(){var e=Object(a.a)(c.a.mark((function e(){var t,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.fetchIdl(d,o);case 2:return t=e.sent,r=new s.b(t,d,o),e.next=6,r.account.candyMachine.fetch(n);case 6:return a=e.sent,e.abrupt("return",[r,a]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(a.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.getSlot();case 2:return n=e.sent,e.next=5,i.getBlockTime(n);case 5:if(e.t1=t=e.sent,e.t0=null!==e.t1,!e.t0){e.next=9;break}e.t0=void 0!==t;case 9:if(!e.t0){e.next=13;break}e.t2=t,e.next=14;break;case 13:e.t2=(new Date).getTime()/1e3;case 14:return e.abrupt("return",e.t2);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=5,Promise.all([u(),l()]);case 5:return b=e.sent,p=Object(r.a)(b,2),f=Object(r.a)(p[0],2),g=f[0],h=f[1],m=p[1],x=h.data.itemsAvailable.toNumber(),v=h.itemsRedeemed.toNumber(),y=x-v,j=(new Date).getTime()/1e3-m,null!==h.data.goLiveDate?h.data.goLiveDate+j:null,e.abrupt("return",{id:n,program:g,state:{authority:h.authority,itemsAvailable:x,itemsRedeemed:v,itemsRemaining:y,isSoldOut:0===y,isActive:!1,isPresale:!1,isWhitelistOnly:!1,goLiveDate:h.data.goLiveDate,treasury:h.wallet,tokenMint:h.tokenMint,gatekeeper:h.data.gatekeeper,endSettings:h.data.endSettings,whitelistMintSettings:h.data.whitelistMintSettings,hiddenSettings:h.data.hiddenSettings,price:h.data.price,retainAuthority:h.data.retainAuthority}});case 17:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("metadata"),p.toBuffer(),n.toBuffer(),e.from("edition")],p);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("metadata"),p.toBuffer(),n.toBuffer()],p);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("candy_machine"),n.toBuffer()],d);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("collection"),n.toBuffer()],d);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(c.a.mark((function t(n,r){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("metadata"),p.toBuffer(),n.toBuffer(),e.from("collection_authority"),r.toBuffer()],p);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),k=function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,i,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.e.Keypair.generate(),e.next=3,Object(b.e)(r.publicKey,n);case 3:return a=e.sent[0],i=[r],e.t0=s.e.SystemProgram,e.t1=n,e.t2=r.publicKey,e.t3=o.a.span,e.next=11,t.program.provider.connection.getMinimumBalanceForRentExemption(o.a.span);case 11:return e.t4=e.sent,e.t5=o.b,e.t6={fromPubkey:e.t1,newAccountPubkey:e.t2,space:e.t3,lamports:e.t4,programId:e.t5},e.t7=e.t0.createAccount.call(e.t0,e.t6),e.t8=o.c.createInitMintInstruction(o.b,r.publicKey,0,n,n),e.t9=g(a,n,n,r.publicKey),e.t10=o.c.createMintToInstruction(o.b,r.publicKey,a,n,[],1),u=[e.t7,e.t8,e.t9,e.t10],e.t11=r,e.t12=a,e.next=23,Object(l.c)(t.program.provider.connection,t.program.provider.wallet,[u],[i],l.b.StopOnFailure,"singleGossip",(function(){}),(function(){return!1}),void 0,[],[]);case 23:return e.t13=e.sent.txs[0].txid,e.abrupt("return",{mint:e.t11,userTokenAccount:e.t12,transaction:e.t13});case 25:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(a.a)(c.a.mark((function e(t,n){var a,i,d,f,h,k,O,w,S,T,P,M,A,E,K,R,C,D,I,N,B,W,L,_,U,F,G,Y,z,q,H,V=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=V.length>2&&void 0!==V[2]?V[2]:[],d=V.length>3&&void 0!==V[3]?V[3]:[],f=V.length>4?V[4]:void 0,h=null!==(a=null===f||void 0===f?void 0:f.mint)&&void 0!==a?a:s.e.Keypair.generate(),e.next=6,Object(b.e)(h.publicKey,n);case 6:if(k=e.sent[0],!t.state.tokenMint){e.next=13;break}return e.next=10,Object(b.e)(t.state.tokenMint,n);case 10:e.t0=e.sent[0],e.next=14;break;case 13:e.t0=n;case 14:if(O=e.t0,w=t.id,S=[],T=[],P=[],console.log("SetupState: ",f),f){e.next=39;break}return P.push(h),e.t1=T.push,e.t2=T,e.t3=s.e.SystemProgram,e.t4=n,e.t5=h.publicKey,e.t6=o.a.span,e.next=30,t.program.provider.connection.getMinimumBalanceForRentExemption(o.a.span);case 30:e.t7=e.sent,e.t8=o.b,e.t9={fromPubkey:e.t4,newAccountPubkey:e.t5,space:e.t6,lamports:e.t7,programId:e.t8},e.t10=e.t3.createAccount.call(e.t3,e.t9),e.t11=o.c.createInitMintInstruction(o.b,h.publicKey,0,n,n),e.t12=g(k,n,n,h.publicKey),e.t13=o.c.createMintToInstruction(o.b,h.publicKey,k,n,[],1),e.t14=[e.t10,e.t11,e.t12,e.t13],e.t1.apply.call(e.t1,e.t2,e.t14);case 39:if(!t.state.gatekeeper){e.next=54;break}return e.t15=S,e.next=43,Object(b.g)(n,t.state.gatekeeper.gatekeeperNetwork);case 43:if(e.t16=e.sent[0],e.t17={pubkey:e.t16,isWritable:!0,isSigner:!1},e.t15.push.call(e.t15,e.t17),!t.state.gatekeeper.expireOnUse){e.next=54;break}return S.push({pubkey:b.a,isWritable:!1,isSigner:!1}),e.t18=S,e.next=51,Object(b.f)(t.state.gatekeeper.gatekeeperNetwork);case 51:e.t19=e.sent[0],e.t20={pubkey:e.t19,isWritable:!1,isSigner:!1},e.t18.push.call(e.t18,e.t20);case 54:if(!t.state.whitelistMintSettings){e.next=61;break}return M=new s.e.PublicKey(t.state.whitelistMintSettings.mint),e.next=58,Object(b.e)(M,n);case 58:A=e.sent[0],S.push({pubkey:A,isWritable:!0,isSigner:!1}),t.state.whitelistMintSettings.mode.burnEveryTime&&(S.push({pubkey:M,isWritable:!0,isSigner:!1}),S.push({pubkey:n,isWritable:!1,isSigner:!0}));case 61:return t.state.tokenMint&&(S.push({pubkey:O,isWritable:!0,isSigner:!1}),S.push({pubkey:n,isWritable:!1,isSigner:!0})),e.next=64,x(h.publicKey);case 64:return E=e.sent,e.next=67,m(h.publicKey);case 67:return K=e.sent,e.next=70,v(w);case 70:return R=e.sent,C=Object(r.a)(R,2),D=C[0],I=C[1],console.log(S.map((function(e){return e.pubkey.toBase58()}))),e.t21=T,e.next=78,t.program.instruction.mintNft(I,{accounts:{candyMachine:w,candyMachineCreator:D,payer:n,wallet:t.state.treasury,mint:h.publicKey,metadata:E,masterEdition:K,mintAuthority:n,updateAuthority:n,tokenMetadataProgram:p,tokenProgram:o.b,systemProgram:u.f.programId,rent:s.e.SYSVAR_RENT_PUBKEY,clock:s.e.SYSVAR_CLOCK_PUBKEY,recentBlockhashes:u.e,instructionSysvarAccount:s.e.SYSVAR_INSTRUCTIONS_PUBKEY},remainingAccounts:S.length>0?S:void 0});case 78:return e.t22=e.sent,e.t21.push.call(e.t21,e.t22),e.next=82,y(w);case 82:return N=e.sent,B=Object(r.a)(N,1),W=B[0],e.next=87,t.program.provider.connection.getAccountInfo(W);case 87:if(!e.sent||!t.state.retainAuthority){e.next=118;break}return e.prev=89,e.next=92,t.program.account.collectionPda.fetch(W);case 92:return L=e.sent,console.log(L),_=L.mint,e.next=97,j(_,W);case 97:if(U=e.sent,console.log(_),!_){e.next=113;break}return e.next=102,x(_);case 102:return F=e.sent,e.next=105,m(_);case 105:return G=e.sent,console.log("Collection PDA: ",W.toBase58()),console.log("Authority: ",t.state.authority.toBase58()),e.t23=T,e.next=111,t.program.instruction.setCollectionDuringMint({accounts:{candyMachine:w,metadata:E,payer:n,collectionPda:W,tokenMetadataProgram:p,instructions:s.e.SYSVAR_INSTRUCTIONS_PUBKEY,collectionMint:_,collectionMetadata:F,collectionMasterEdition:G,authority:t.state.authority,collectionAuthorityRecord:U}});case 111:e.t24=e.sent,e.t23.push.call(e.t23,e.t24);case 113:e.next=118;break;case 115:e.prev=115,e.t25=e.catch(89),console.error(e.t25);case 118:return Y=[T],z=[P],e.prev=120,e.next=123,Object(l.c)(t.program.provider.connection,t.program.provider.wallet,Y,z,l.b.StopOnFailure,"singleGossip",(function(){}),(function(){return!1}),void 0,i,d);case 123:return q=e.sent.txs.map((function(e){return e.txid})),H=q[0],e.abrupt("return",{mintTxId:H,metadataKey:E});case 128:e.prev=128,e.t26=e.catch(120),console.log(e.t26);case 131:return e.abrupt("return",null);case 132:case"end":return e.stop()}}),e,null,[[89,115],[120,128]])})));return function(t,n){return e.apply(this,arguments)}}(),w=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(5).Buffer)},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return b}));var r,a=n(12),i=n(2),c=n(1),s=n.n(c),o=n(29),u=n(110),l=6e4;!function(e){e[e.Sequential=0]="Sequential",e[e.Parallel=1]="Parallel",e[e.StopOnFailure=2]="StopOnFailure"}(r||(r={}));var b=function(){var e=Object(i.a)(s.a.mark((function e(t,n,i,c){var l,b,d,f,g,h,m,x,v,y,j,k,O,w,S,T,P,M,A=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=A.length>4&&void 0!==A[4]?A[4]:r.Parallel,b=A.length>5&&void 0!==A[5]?A[5]:"singleGossip",d=A.length>6&&void 0!==A[6]?A[6]:function(e,t){},f=A.length>7&&void 0!==A[7]?A[7]:function(e,t){return!1},g=A.length>8?A[8]:void 0,h=A.length>9&&void 0!==A[9]?A[9]:[],m=A.length>10&&void 0!==A[10]?A[10]:[],n.publicKey){e.next=9;break}throw new u.e;case 9:if(x=h,g){e.next=14;break}return e.next=13,t.getRecentBlockhash(b);case 13:g=e.sent;case 14:v=function(e){var t=i[e],r=c[e];if(0===t.length)return"continue";var s=new o.g;t.forEach((function(e){return s.add(e)})),s.recentBlockhash=g.blockhash,s.setSigners.apply(s,[n.publicKey].concat(Object(a.a)(r.map((function(e){return e.publicKey}))))),r.length>0&&s.partialSign.apply(s,Object(a.a)(r)),x.push(s)},y=0;case 16:if(!(y<i.length)){e.next=23;break}if("continue"!==v(y)){e.next=20;break}return e.abrupt("continue",20);case 20:y++,e.next=16;break;case 23:return x.push.apply(x,Object(a.a)(m)),j=x.filter((function(e){return e.signatures.find((function(e){return e.publicKey.equals(n.publicKey)}))})),k=x.filter((function(e){return!e.signatures.find((function(e){return e.publicKey.equals(n.publicKey)}))})),e.next=28,n.signAllTransactions(j);case 28:O=e.sent,O=k.concat(O),w=[],console.log("Signed txns length",O.length,"vs handed in length",i.length),S=s.a.mark((function e(n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=p({connection:t,signedTransaction:O[n]}),l===r.Parallel){e.next=22;break}return e.prev=2,e.next=5,a.then((function(e){var t=e.txid;e.slot;return d(t,n)}));case 5:w.push(a),e.next=20;break;case 8:if(e.prev=8,e.t0=e.catch(2),console.log("Failed at txn index:",n),console.log("Caught failure:",e.t0),f(O[n],n),l!==r.StopOnFailure){e.next=20;break}return e.t1=n,e.next=17,Promise.all(w);case 17:return e.t2=e.sent,e.t3={number:e.t1,txs:e.t2},e.abrupt("return",{v:e.t3});case 20:e.next=23;break;case 22:w.push(a);case 23:case"end":return e.stop()}}),e,null,[[2,8]])})),T=0;case 34:if(!(T<O.length)){e.next=42;break}return e.delegateYield(S(T),"t0",36);case 36:if("object"!==typeof(P=e.t0)){e.next=39;break}return e.abrupt("return",P.v);case 39:T++,e.next=34;break;case 42:if(l===r.Parallel){e.next=47;break}return e.next=45,Promise.all(w);case 45:return M=e.sent,e.abrupt("return",{number:O.length,txs:M});case 47:return e.t1=O.length,e.next=50,Promise.all(w);case 50:return e.t2=e.sent,e.abrupt("return",{number:e.t1,txs:e.t2});case 52:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),d=function(){return(new Date).getTime()/1e3};function p(e){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(s.a.mark((function e(t){var n,r,a,c,o,u,b,p,f,h,x,y,j;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.signedTransaction,r=t.connection,a=t.timeout,c=void 0===a?l:a,o=n.serialize(),u=d(),b=0,e.next=6,r.sendRawTransaction(o,{skipPreflight:!0});case 6:return p=e.sent,console.log("Started awaiting confirmation for",p),f=!1,Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f||!(d()-u<c)){e.next=6;break}return r.sendRawTransaction(o,{skipPreflight:!0}),e.next=4,v(500);case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)})))(),e.prev=10,e.next=13,m(p,c,r,"recent",!0);case 13:if(h=e.sent){e.next=16;break}throw new Error("Timed out awaiting confirmation on transaction");case 16:if(!h.err){e.next=19;break}throw console.error(h.err),new Error("Transaction failed: Custom instruction error");case 19:b=(null===h||void 0===h?void 0:h.slot)||0,e.next=47;break;case 22:if(e.prev=22,e.t0=e.catch(10),console.error("Timeout Error caught",e.t0),!e.t0.timeout){e.next=27;break}throw new Error("Timed out awaiting confirmation on transaction");case 27:return x=null,e.prev=28,e.next=31,g(r,n,"single");case 31:x=e.sent.value,e.next=36;break;case 34:e.prev=34,e.t1=e.catch(28);case 36:if(!x||!x.err){e.next=47;break}if(!x.logs){e.next=46;break}y=x.logs.length-1;case 39:if(!(y>=0)){e.next=46;break}if(!(j=x.logs[y]).startsWith("Program log: ")){e.next=43;break}throw new Error("Transaction failed: "+j.slice("Program log: ".length));case 43:--y,e.next=39;break;case 46:throw new Error(JSON.stringify(x.err));case 47:return e.prev=47,f=!0,e.finish(47);case 50:return console.log("Latency",p,d()-u),e.abrupt("return",{txid:p,slot:b});case 52:case"end":return e.stop()}}),e,null,[[10,22,47,50],[28,34]])})))).apply(this,arguments)}function g(e,t,n){return h.apply(this,arguments)}function h(){return(h=Object(i.a)(s.a.mark((function e(t,n,r){var a,i,c,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._recentBlockhash(t._disableBlockhashCaching);case 2:return n.recentBlockhash=e.sent,a=n.serializeMessage(),i=n._serialize(a),c=i.toString("base64"),o=[c,{encoding:"base64",commitment:r}],e.next=10,t._rpcRequest("simulateTransaction",o);case 10:if(!(u=e.sent).error){e.next=13;break}throw new Error("failed to simulate transaction: "+u.error.message);case 13:return e.abrupt("return",u.result);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t,n){return x.apply(this,arguments)}function x(){return x=Object(i.a)(s.a.mark((function e(t,n,r){var a,c,o,u,l,b=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=b.length>3&&void 0!==b[3]?b[3]:"recent",c=b.length>4&&void 0!==b[4]&&b[4],o=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(i.a)(s.a.mark((function e(b,d){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),d({timeout:!0}))}),n);try{l=r.onSignature(t,(function(e,t){o=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),d(u)):(console.log("Resolved via websocket",e),b(u))}),a)}catch(p){o=!0,console.error("WS error in setup",t,p)}case 2:if(o||!c){e.next=8;break}return Object(i.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],o||(u?u.err?(console.log("REST error for",t,u),o=!0,d(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),o=!0,b(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,v(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,e.prev=8,e.next=11,r.removeSignatureListener(l);case 11:e.next=15;break;case 13:e.prev=13,e.t0=e.catch(8);case 15:return o=!0,console.log("Returning status",u),e.abrupt("return",u);case 18:case"end":return e.stop()}}),e,null,[[8,13]])}))),x.apply(this,arguments)}function v(e){return new Promise((function(t){return setTimeout(t,e)}))}}},[[362,1,2]]]);
//# sourceMappingURL=main.e46c2e40.chunk.js.map