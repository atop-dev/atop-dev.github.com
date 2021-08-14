(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[789],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5507:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],c={},l={unversionedId:"concept/economy",id:"concept/economy",isDocsHomePage:!1,title:"Token Economy",description:"ATOP Coin",source:"@site/docs/concept/economy.md",sourceDirName:"concept",slug:"/concept/economy",permalink:"/docs/concept/economy",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"General Concepts",permalink:"/docs/concept/general"},next:{title:"Node Topology",permalink:"/docs/infra/mainnet"}},s=[{value:"ATOP Coin",id:"atop-coin",children:[]},{value:"Rewards",id:"rewards",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"atop-coin"},"ATOP Coin"),(0,a.kt)("p",null,"The ATOP blockchain has its own native token known as ATOP coin. It is designed to serve the following purposes in the network."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Transaction Fee. The ATOP coin will be used to pay fees for all transactions in the ATOP OFP network."),(0,a.kt)("li",{parentName:"ul"},"Staking. ATOP coin will be used as a staking token to secure the PoS blockchain."),(0,a.kt)("li",{parentName:"ul"},"Service Fee. ATOP coin will be used to pay service fee for coming financial services such as remittance, payment, insurance, etc.")),(0,a.kt)("br",null),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"700",src:"/img/economy.png",alt:"economy"})),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"rewards"},"Rewards"),(0,a.kt)("p",null,"The validator and its delegators can share the following rewards by proportion:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Inflation"),"\nInflation exists to incentivize ATOP coin holders to stake. The more staked ATOP coins are, more secure the network become(Read more about Staking)."),(0,a.kt)("p",{parentName:"li"},"Inflation will be distributed every block. Inflation rate in ATOP blockchain for the first year will be 13%. This ration could be adjusted by parameter-change proposals. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Delegator Reward"),"\nATOP coin holders can delegate their coins to a specific validator who can contribute to keep ATOP network secure and stable instead of coin holders. By delegating their own ATOP coins, holders can acquire the revenue in proportion to the amount of their delegated ATOP coins. 70% of total revenue is given to delegators.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Validator Reward"),"\nEach validator receives revenue in proportion to its total stake. However, before this revenue is distributed to its delegators, the validator can apply a commission for providing staking services. 30% of total revenue is given to validators.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Fee"),"\nEach transaction needs a fee for compensating validators. These fees can be paid with ATOP coin. Fees are distributed to validators in proportion to their stake. A minimum fee is set in ATOP network."))),(0,a.kt)("h1",{id:""}))}u.isMDXComponent=!0}}]);