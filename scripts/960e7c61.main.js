/**
 * @license almond 0.3.0 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

var requirejs,require,define;(function(e){function h(e,t){return f.call(e,t)}function p(e,t){var n,r,i,s,o,a,f,l,h,p,d,v=t&&t.split("/"),m=u.map,g=m&&m["*"]||{};if(e&&e.charAt(0)===".")if(t){v=v.slice(0,v.length-1),e=e.split("/"),o=e.length-1,u.nodeIdCompat&&c.test(e[o])&&(e[o]=e[o].replace(c,"")),e=v.concat(e);for(h=0;h<e.length;h+=1){d=e[h];if(d===".")e.splice(h,1),h-=1;else if(d===".."){if(h===1&&(e[2]===".."||e[0]===".."))break;h>0&&(e.splice(h-1,2),h-=2)}}e=e.join("/")}else e.indexOf("./")===0&&(e=e.substring(2));if((v||g)&&m){n=e.split("/");for(h=n.length;h>0;h-=1){r=n.slice(0,h).join("/");if(v)for(p=v.length;p>0;p-=1){i=m[v.slice(0,p).join("/")];if(i){i=i[r];if(i){s=i,a=h;break}}}if(s)break;!f&&g&&g[r]&&(f=g[r],l=h)}!s&&f&&(s=f,a=l),s&&(n.splice(0,a,s),e=n.join("/"))}return e}function d(t,r){return function(){var i=l.call(arguments,0);return typeof i[0]!="string"&&i.length===1&&i.push(null),n.apply(e,i.concat([t,r]))}}function v(e){return function(t){return p(t,e)}}function m(e){return function(t){s[e]=t}}function g(n){if(h(o,n)){var r=o[n];delete o[n],a[n]=!0,t.apply(e,r)}if(!h(s,n)&&!h(a,n))throw new Error("No "+n);return s[n]}function y(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function b(e){return function(){return u&&u.config&&u.config[e]||{}}}var t,n,r,i,s={},o={},u={},a={},f=Object.prototype.hasOwnProperty,l=[].slice,c=/\.js$/;r=function(e,t){var n,r=y(e),i=r[0];return e=r[1],i&&(i=p(i,t),n=g(i)),i?n&&n.normalize?e=n.normalize(e,v(t)):e=p(e,t):(e=p(e,t),r=y(e),i=r[0],e=r[1],i&&(n=g(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},i={require:function(e){return d(e)},exports:function(e){var t=s[e];return typeof t!="undefined"?t:s[e]={}},module:function(e){return{id:e,uri:"",exports:s[e],config:b(e)}}},t=function(t,n,u,f){var l,c,p,v,y,b=[],w=typeof u,E;f=f||t;if(w==="undefined"||w==="function"){n=!n.length&&u.length?["require","exports","module"]:n;for(y=0;y<n.length;y+=1){v=r(n[y],f),c=v.f;if(c==="require")b[y]=i.require(t);else if(c==="exports")b[y]=i.exports(t),E=!0;else if(c==="module")l=b[y]=i.module(t);else if(h(s,c)||h(o,c)||h(a,c))b[y]=g(c);else{if(!v.p)throw new Error(t+" missing "+c);v.p.load(v.n,d(f,!0),m(c),{}),b[y]=s[c]}}p=u?u.apply(s[t],b):undefined;if(t)if(l&&l.exports!==e&&l.exports!==s[t])s[t]=l.exports;else if(p!==e||!E)s[t]=p}else t&&(s[t]=u)},requirejs=require=n=function(s,o,a,f,l){if(typeof s=="string")return i[s]?i[s](o):g(r(s,o).f);if(!s.splice){u=s,u.deps&&n(u.deps,u.callback);if(!o)return;o.splice?(s=o,o=a,a=null):s=e}return o=o||function(){},typeof a=="function"&&(a=f,f=l),f?t(e,s,o,a):setTimeout(function(){t(e,s,o,a)},4),n},n.config=function(e){return n(e)},requirejs._defined=s,define=function(e,t,n){t.splice||(n=t,t=[]),!h(s,e)&&!h(o,e)&&(o[e]=[e,t,n])},define.amd={jQuery:!0}})(),define("bower_components/almond/almond",function(){}),define("scripts/modules/PubSub",[],function(){var e={},t=function(t,n){return e[t]||(e[t]=[]),e[t].push({context:this,callback:n}),this},n=function(t,n){if(!e.hasOwnProperty(t))return!1;for(var r=0,i=e[t].length;r<i;r++)if(e[t][r].callback===n)return e[t].splice(r,1),!0;return!1},r=function(t){if(!e[t]||e[t].length===0)return!1;var n=Array.prototype.slice.call(arguments,1);for(var r=0,i=e[t].length;r<i;r++){var s=e[t][r];s.callback.apply(s.context,n)}return this};return{channels:e,publish:r,subscribe:t,unsubscribe:n,installTo:function(e){e.subscribe=t,e.publish=r}}}),define("scripts/modules/CardModule",[],function(){function e(e,r){this.faceValue=e,this.value=n(e),this.suit=r,this.name=t(e)}function t(e){switch(e){case 1:return"A";case 11:return"J";case 12:return"Q";case 13:return"K";default:return e.toString()}}function n(e){return e>10?10:e}return e}),define("scripts/modules/DeckModule",["scripts/modules/CardModule"],function(e){function t(e){e=e||{},this.deckType=e.deckType||"52-card",this.cards=e.cards||n(this.deckType),this.topHand=e.topHand||undefined,this.bottomHand=e.bottomHand||undefined}function n(){return r()}function r(){var e=[];return e=e.concat(i("hearts")),e=e.concat(i("clubs")),e=e.concat(i("diams")),e=e.concat(i("spades")),e}function i(t){var n=[];for(var r=1;r<14;r++)n.push(new e(r,t));return n}return t.prototype.shuffle=function(){this.cards.length<52&&(this.cards=n(this.deckType));for(var e,t,r=this.cards.length;r;e=Math.floor(Math.random()*r),t=this.cards[--r],this.cards[r]=this.cards[e],this.cards[e]=t);return this},t.prototype.cut=function(){return this.cards.pop()},t.prototype.deal=function(){this.topHand=[],this.bottomHand=[];while(this.topHand.length<6)this.topHand.push(this.cards.pop()),this.bottomHand.push(this.cards.pop());return{topHand:this.topHand,bottomHand:this.bottomHand}},t.prototype.selectOne=function(e){var t=this.cards.splice(e,1)[0];return this.cards.push(t),t},t}),define("scripts/modules/PlayRulesModule",[],function(){function e(e){this.board=e.board}function t(e,t){return e+t.value>31}return e.prototype.isCardPlayable=function(e,n){return this.hasPlayableCards(e)?t(this.board.currentBoardValue,n)?!1:!0:!1},e.prototype.playableCards=function(e){var t=[];return e.hand.forEach(function(e){e.value<=31-this.board.currentBoardValue&&t.push(e)}.bind(this)),t},e.prototype.hasPlayableCards=function(e){return this.playableCards(e).length>0},e}),define("scripts/modules/BaseScoreKeeper",["scripts/modules/PubSub"],function(e){function t(){this.mediator=e}return t}),define("scripts/modules/PlayScoreKeeper",["scripts/modules/BaseScoreKeeper"],function(e){function t(){e.call(this)}return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.prototype.isTwoForHisHeels=function(e){return e.faceValue===11},t.prototype.TwoForHisHeels=function(e,t){this.isTwoForHisHeels(t)&&(this.mediator.publish("messages-add",e.name+" scored two for his heels"),e.currentPoints=e.points,e.points+=2)},t.prototype.playCount=function(e){return e.reduce(function(e,t){return typeof e=="number"?e+t.value:e.value+t.value})},t.prototype.is15=function(e){return this.playCount(e)===15},t.prototype.is31=function(e){return this.playCount(e)===31},t.prototype.hasAtLeastOnePair=function(e){return e.length>1?e[e.length-1].faceValue===e[e.length-2].faceValue:!1},t.prototype.isLastCard=function(e){return e.length===8},t.prototype.iterateCardsForRun=function(e){function i(e,t,n){return t===n.length-1?!0:e.faceValue+1===n[t+1].faceValue}function s(e,t){return e.faceValue<t.faceValue?-1:e.faceValue>t.faceValue?1:0}function o(){t=n.length}var t=0,n,r;for(var u=3;u<=e.length;u+=1){r=e.slice(e.length-u,e.length),n=r.sort(s);var a=n.every(i);a&&o()}return t},t.prototype.hasARun=function(e){function n(){return t>2}var t=this.iterateCardsForRun(e);return n()},t.prototype.scoreRun=function(e){var t=this.iterateCardsForRun(e);if(t>2)return t},t.prototype.scorePairs=function(e){var t=e[e.length-1],n=0;for(var r=e.length-2;r>=0;r--){if(t.faceValue!==e[r].faceValue)break;n++}return(n+1)*n},t.prototype.pointForGo=function(e){this.mediator.publish("messages-add",e.name+" scored 1 point."),e.currentPoints=e.points,e.points+=1},t.prototype.evaluatePlay=function(e,t,n){var r=0;this.is15(t)&&(r+=2),this.is31(t)&&(r+=2),this.hasAtLeastOnePair(t)&&(r+=this.scorePairs(t)),this.hasARun(t)&&(r+=this.scoreRun(t)),this.isLastCard(n)&&(r+=1),r===1?this.mediator.publish("messages-add",e.name+" scored "+r+" point."):r>1&&this.mediator.publish("messages-add",e.name+" scored "+r+" points."),r!==0&&(e.currentPoints=e.points),e.points+=r},t}),define("scripts/modules/PlayerModule",["scripts/modules/PlayRulesModule","scripts/modules/PlayScoreKeeper","scripts/modules/PubSub"],function(e,t,n){function r(r){this.name=r.name,this.possessive=r.possessive,this.hand=r.hand||[],this.handInMemory=r.handInMemory||[],this.crib=r.crib||[],this.cardsForCrib=r.cardsForCrib||[],this.currentPoints=r.currentPoints||0,this.points=r.points||0,this.board=r.board,this.playRules=new e({board:r.board}),this.scoreKeeper=new t,this.mediator=n}return r.prototype.placeCardsInCrib=function(e){function t(t){n.call(this,t),e.crib.push(this.hand.splice(this.hand.indexOf(t),1)[0])}function n(e){this.hand[this.hand.indexOf(e)].selected=""}this.cardsForCrib.length===2&&(this.cardsForCrib.forEach(t.bind(this)),this.cardsForCrib=[])},r.prototype.selectOneFromDeck=function(e,t){var n=e.selectOne(t);return this.scoreKeeper.TwoForHisHeels(this,n),n},r.prototype.playCard=function(e){var t=this.hand.slice(),n=t.splice(e,1)[0];if(!this.playRules.isCardPlayable(this,n))throw this.playRules.hasPlayableCards(this)?new Error("Invalid Playable Card"):new Error("No Playable Cards");this.board.placeCard(n,this),this.scoreKeeper.evaluatePlay(this,this.board.playedCards,this.board.totalPlayedCardsForRound),this.board.currentBoardValue===31&&this.board.resetBoard(),this.hand.splice(e,1)},r.prototype.announceGo=function(){if(!!this.playRules.hasPlayableCards(this))throw new Error("Playable Cards");this.mediator.publish("messages-add",this.name+" said GO"),this.board.announceGo(this)},r.prototype.isWinner=function(){var e=this.points>=121;return e&&this.mediator.publish("winner",this),e},r.prototype.restoreHand=function(){this.hand=this.handInMemory},r}),define("scripts/modules/PlayerAiModule",["scripts/modules/PlayerModule"],function(e){function t(t){e.call(this,t)}return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.prototype.placeCardsInCrib=function(e){for(var t=0;t<2;t++){var n=Math.floor(Math.random()*this.hand.length);e.crib.push(this.hand.splice(n,1)[0])}},t.prototype.playCard=function(){var t=this.hand.filter(function(e){return this.playRules.isCardPlayable(this,e)}.bind(this))[0];return t?e.prototype.playCard.call(this,this.hand.indexOf(t)):this.announceGo()},t}),define("scripts/modules/BoardModule",[],function(){function e(e){this.currentBoardValue=e.currentBoardValue||0,this.totalPlayedCardsForRound=e.totalPlayedCardsForRound||[],this.playedCards=e.playedCards||[],this.playersWhoSaidGo=e.playersWhoSaidGo||[],this.scoreKeeper=e.scoreKeeper}return e.prototype.display=function(){return this.currentBoardValue>0?"inline-block":"none"},e.prototype.placeCard=function(e){this.playedCards.push(e),this.totalPlayedCardsForRound.push(e),this.currentBoardValue+=e.value},e.prototype.announceGo=function(e){function t(){return this.playersWhoSaidGo.indexOf(e.name)===-1&&this.playersWhoSaidGo.length>0}t.call(this)?(this.resetBoard(),this.scoreKeeper.pointForGo(e)):this.playersWhoSaidGo.push(e.name)},e.prototype.clearBoard=function(){this.totalPlayedCardsForRound=[],this.resetBoard()},e.prototype.resetBoard=function(){this.currentBoardValue=0,this.playedCards=[],this.playersWhoSaidGo=[]},e}),define("scripts/modules/GameModule",["scripts/modules/DeckModule","scripts/modules/PlayerModule","scripts/modules/PlayerAiModule","scripts/modules/BoardModule","scripts/modules/PlayScoreKeeper"],function(e,t,n,r,i){function s(s){this.$deck=new e(s.$deck);var o={scoreKeeper:new i};for(var u in s.$board)o[u]=s.$board[u];this.$board=new r(o);var a={name:"you",possessive:"your",board:this.$board};for(u in s.$player1)a[u]=s.$player1[u];this.$player1=new t(a);var f={name:"Opponent",possessive:"their",board:this.$board};for(u in s.$player2)f[u]=s.$player2[u];this.$player2=new n(f),s.$cribOwner&&(this.$cribOwner=[this.$player1,this.$player2].filter(function(e){return e.name===s.$cribOwner})[0]),this.$messages=s.$messages||[],this.$player1HandVisible=s.$player1HandVisible||!0,this.$player2HandVisible=s.$player2HandVisible||!0,this.countStateStep=s.countStateStep||undefined,this.topCard=s.topCard||undefined,this.$showTopCard=s.$showTopCard||undefined,this.$action=s.$action||undefined}return s}),define("jquery",[],function(){function e(e){return new t(e)}function t(e){typeof e=="string"?(this.selector=e,this.element=document.querySelector(e)):typeof e=="object"&&(this.element=e)}return t.prototype.html=function(e){if(!this.element)return;return e&&(this.element.innerHTML=e),this.element.innerHTML},t.prototype.addClass=function(e){if(this.element)return this.element.classList.add(e);return},t.prototype.on=function(e,t){if(this.element)return this.element.addEventListener(e,t);return},t.prototype.off=function(e,t){if(this.element)return this.element.removeEventListener(e,t);return},e}),function(e,t){if(typeof exports=="object"&&exports)t(exports);else{var n={};t(n),typeof define=="function"&&define.amd?define("mustache",n):e.Mustache=n}}(this,function(e){function n(e,n){return t.call(e,n)}function i(e){return!n(r,e)}function u(e){return typeof e=="function"}function a(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function l(e){return String(e).replace(/[&<>"'\/]/g,function(e){return f[e]})}function c(e){if(!o(e)||e.length!==2)throw new Error("Invalid tags: "+e);return[new RegExp(a(e[0])+"\\s*"),new RegExp("\\s*"+a(e[1]))]}function g(t,n){function E(){if(l&&!g)while(f.length)delete u[f.pop()];else f=[];l=!1,g=!1}n=n||e.tags,t=t||"",typeof n=="string"&&(n=n.split(p));var r=c(n),s=new w(t),o=[],u=[],f=[],l=!1,g=!1,S,x,T,N,C,k;while(!s.eos()){S=s.pos,T=s.scanUntil(r[0]);if(T)for(var L=0,A=T.length;L<A;++L)N=T.charAt(L),i(N)?f.push(u.length):g=!0,u.push(["text",N,S,S+1]),S+=1,N==="\n"&&E();if(!s.scan(r[0]))break;l=!0,x=s.scan(m)||"name",s.scan(h),x==="="?(T=s.scanUntil(d),s.scan(d),s.scanUntil(r[1])):x==="{"?(T=s.scanUntil(new RegExp("\\s*"+a("}"+n[1]))),s.scan(v),s.scanUntil(r[1]),x="&"):T=s.scanUntil(r[1]);if(!s.scan(r[1]))throw new Error("Unclosed tag at "+s.pos);C=[x,T,S,s.pos],u.push(C);if(x==="#"||x==="^")o.push(C);else if(x==="/"){k=o.pop();if(!k)throw new Error('Unopened section "'+T+'" at '+S);if(k[1]!==T)throw new Error('Unclosed section "'+k[1]+'" at '+S)}else x==="name"||x==="{"||x==="&"?g=!0:x==="="&&(r=c(n=T.split(p)))}k=o.pop();if(k)throw new Error('Unclosed section "'+k[1]+'" at '+s.pos);return b(y(u))}function y(e){var t=[],n,r;for(var i=0,s=e.length;i<s;++i)n=e[i],n&&(n[0]==="text"&&r&&r[0]==="text"?(r[1]+=n[1],r[3]=n[3]):(t.push(n),r=n));return t}function b(e){var t=[],n=t,r=[],i,s;for(var o=0,u=e.length;o<u;++o){i=e[o];switch(i[0]){case"#":case"^":n.push(i),r.push(i),n=i[4]=[];break;case"/":s=r.pop(),s[5]=i[2],n=r.length>0?r[r.length-1][4]:t;break;default:n.push(i)}}return t}function w(e){this.string=e,this.tail=e,this.pos=0}function E(e,t){this.view=e==null?{}:e,this.cache={".":this.view},this.parent=t}function S(){this.cache={}}var t=RegExp.prototype.test,r=/\S/,s=Object.prototype.toString,o=Array.isArray||function(e){return s.call(e)==="[object Array]"},f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},h=/\s*/,p=/\s+/,d=/\s*=/,v=/\s*\}/,m=/#|\^|\/|>|\{|&|=|!/;w.prototype.eos=function(){return this.tail===""},w.prototype.scan=function(e){var t=this.tail.match(e);if(t&&t.index===0){var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n}return""},w.prototype.scanUntil=function(e){var t=this.tail.search(e),n;switch(t){case-1:n=this.tail,this.tail="";break;case 0:n="";break;default:n=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=n.length,n},E.prototype.push=function(e){return new E(e,this)},E.prototype.lookup=function(e){var t;if(e in this.cache)t=this.cache[e];else{var n=this;while(n){if(e.indexOf(".")>0){t=n.view;var r=e.split("."),i=0;while(t!=null&&i<r.length)t=t[r[i++]]}else t=n.view[e];if(t!=null)break;n=n.parent}this.cache[e]=t}return u(t)&&(t=t.call(this.view)),t},S.prototype.clearCache=function(){this.cache={}},S.prototype.parse=function(e,t){var n=this.cache,r=n[e];return r==null&&(r=n[e]=g(e,t)),r},S.prototype.render=function(e,t,n){var r=this.parse(e),i=t instanceof E?t:new E(t);return this.renderTokens(r,i,n,e)},S.prototype.renderTokens=function(t,n,r,i){function f(e){return a.render(e,n,r)}var s="",a=this,l,c;for(var h=0,p=t.length;h<p;++h){l=t[h];switch(l[0]){case"#":c=n.lookup(l[1]);if(!c)continue;if(o(c))for(var d=0,v=c.length;d<v;++d)s+=this.renderTokens(l[4],n.push(c[d]),r,i);else if(typeof c=="object"||typeof c=="string")s+=this.renderTokens(l[4],n.push(c),r,i);else if(u(c)){if(typeof i!="string")throw new Error("Cannot use higher-order sections without the original template");c=c.call(n.view,i.slice(l[3],l[5]),f),c!=null&&(s+=c)}else s+=this.renderTokens(l[4],n,r,i);break;case"^":c=n.lookup(l[1]);if(!c||o(c)&&c.length===0)s+=this.renderTokens(l[4],n,r,i);break;case">":if(!r)continue;c=u(r)?r(l[1]):r[l[1]],c!=null&&(s+=this.renderTokens(this.parse(c),n,r,c));break;case"&":c=n.lookup(l[1]),c!=null&&(s+=c);break;case"name":c=n.lookup(l[1]),c!=null&&(s+=e.escape(c));break;case"text":s+=l[1]}}return s},e.name="mustache.js",e.version="0.8.1",e.tags=["{{","}}"];var x=new S;e.clearCache=function(){return x.clearCache()},e.parse=function(e,t){return x.parse(e,t)},e.render=function(e,t,n){return x.render(e,t,n)},e.to_html=function(t,n,r,i){var s=e.render(t,n,r);if(!u(i))return s;i(s)},e.escape=l,e.Scanner=w,e.Context=E,e.Writer=S}),define("scripts/gameStates/BaseState",["jquery","mustache","scripts/modules/PubSub"],function(e,t,n){function r(e,t){this.game=e,this.name=t,this.mediator=n,e&&(this.p1=e.$player1,this.p2=e.$player2,this.data=this.game)}function i(e){return e<31?e:e>=31&&e<61?61-(e-30):e>=61&&e<91?e-60:e>=91&&e<121?61-(e-90):0}function s(t){var n={leadPoint:i(t.$player1.points),currentPoint:i(t.$player1.currentPoints)},r={leadPoint:i(t.$player2.points),currentPoint:i(t.$player2.currentPoints)};e("#cribbageBoard ul:first-of-type li:nth-child("+r.leadPoint+")").addClass("player2-board-peg"),e(" #cribbageBoard ul:first-of-type li:nth-child("+r.currentPoint+")").addClass("player2-board-peg"),e("#cribbageBoard ul:nth-of-type(2) li:nth-child("+n.leadPoint+")").addClass("player1-board-peg"),e(" #cribbageBoard ul:nth-of-type(2) li:nth-child("+n.currentPoint+")").addClass("player1-board-peg")}return r.prototype.templates=function(){return{page:e("#stateTemplate").html(),p1Hand:e("#visibleHandTemplate").html(),p2Hand:e("#hiddenHandTemplate").html(),p1Score:e("#scoreboardTemplate").html(),p2Score:e("#scoreboardTemplate").html(),play:e("#playTemplate").html(),deck:e("#hiddenDeckTemplate").html(),crib:e("#hiddenHandTemplate").html(),controls:e("#controlsTemplate").html(),messages:"{{#$messages}}<li>{{.}}</li>{{/$messages}}"}},r.prototype.init=function(){this.render()},r.prototype.deck=function(){this.render()},r.prototype.selectCard=function(){this.render()},r.prototype.action=function(){this.render()},r.prototype.render=function(){var n=t.render(this.templates().page,this.data,this.templates());e("#content").html(n),this.bindEvents(),this.mediator.publish("render",this.name,this.game),this.mediator.publish("messages-clear"),this.data&&this.data.$player1&&s(this.data)},r.prototype.renderOnly=function(){this.render(),this.unbindEvents()},r.prototype.bindEvents=function(){e("#deck").on("click",function(t){this.unbindEvents();var n=[].slice.call(t.target.parentNode.children).indexOf(t.target);e(t.target).addClass("selected"),this.deck(n)}.bind(this)),e("#bottomHand").on("click",function(t){this.unbindEvents();var n=t.target,r;while(n.nodeName!=="LI")n.nodeName==="A"&&(r=n),n=n.parentNode;var i=[].slice.call(e("#bottomHand").element.children).indexOf(n);this.selectCard({index:i,card:r,event:t})}.bind(this)),e("#controls button").on("click",function(){this.unbindEvents(),this.action()}.bind(this)),e("a.home-link").on("click",function(){this.mediator.publish("transition","Home")}.bind(this)),e("a.help-link").on("click",function(){this.mediator.publish("transition","Info")}.bind(this)),e("a.back-link").on("click",function(){this.mediator.publish("transition","Back")}.bind(this))},r.prototype.unbindEvents=function(){e("#deck").off("click"),e("#bottomHand").off("click","li"),e("#controls").off("click","button"),e("a.home-link").off("click")},r}),define("scripts/gameStates/DrawState",["jquery","scripts/gameStates/BaseState"],function(e,t){function n(e){t.call(this,e,"Draw")}n.prototype=Object.create(t.prototype),n.prototype.constructor=n;var r=function(){if(this.p1.hand[0].faceValue<this.p2.hand[0].faceValue)return this.p1;if(this.p1.hand[0].faceValue>this.p2.hand[0].faceValue)return this.p2};return n.prototype.init=function(){this.mediator.publish("messages-add","Click the deck to start"),this.render()},n.prototype.templates=function(){var n=t.prototype.templates();return n.p2Hand=e("#visibleHandTemplate").html(),n},n.prototype.deck=function(){this.game.$deck.shuffle(),this.game.$player1HandVisible=!0,this.game.$player2HandVisible=!0,this.p1.hand=[this.game.$deck.cut()],this.p2.hand=[this.game.$deck.cut()],this.game.$cribOwner=r.call(this),this.game.$cribOwner?(this.mediator.publish("messages-add",this.game.$cribOwner.name+" won"),this.renderOnly(),this.mediator.publish("transition","Deal",!0)):(this.mediator.publish("messages-add","It was a tie, draw again"),this.render())},n}),define("scripts/gameStates/DealState",["jquery","scripts/gameStates/BaseState","scripts/modules/DeckModule"],function(e,t,n){function r(e){t.call(this,e,"Deal"),this.game.$deck=new n}function i(e,t){return e.faceValue>t.faceValue}return r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.prototype.templates=function(){var n=t.prototype.templates();return n.p2Hand=e("#visibleHandTemplate").html(),n},r.prototype.init=function(){this.game.$action={text:"..."},this.mediator.publish("messages-add","Dealing cards"),this.renderOnly(),this.game.$player2HandVisible=!1,this.game.$deck.shuffle();var e=this.game.$deck.deal();this.p1.hand=e.bottomHand.sort(i),this.p2.hand=e.topHand.sort(i),this.mediator.publish("transition","Crib",!0)},r}),define("scripts/gameStates/CribState",["scripts/gameStates/BaseState"],function(e){function t(t){e.call(this,t,"Crib")}return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.prototype.init=function(){this.game.$action={text:"Pick"},this.mediator.publish("messages-add","Pick two cards for "+this.game.$cribOwner.possessive+" crib"),this.p2.hand.length===6&&(this.p2.placeCardsInCrib(this.game.$cribOwner),this.p2.handInMemory=this.p2.hand.slice()),this.render()},t.prototype.selectCard=function(e){function t(){u[u.indexOf(o[0])].selected="",u[e.index].selected="selected",o.splice(0,1),o.push(this.game.$player1.hand[e.index])}function n(){this.game.$player1.hand[e.index].selected="",o.splice(o.indexOf(e.index),1)}function r(){o.push(u[e.index]),u[e.index].selected="selected"}function i(){return o.length>1&&o.indexOf(e.index)===-1}function s(){return o.filter(function(t){return t.suit===u[e.index].suit&&t.value===u[e.index].value}).length>0}var o=this.game.$player1.cardsForCrib,u=this.game.$player1.hand;s.apply(this)?n.apply(this):i()?t.apply(this):r.apply(this),o.length===2?(this.mediator.publish("messages-add","When you're ready, continue"),this.game.$action={text:"Cont."}):this.mediator.publish("messages-add","Pick one more card"),this.render()},t.prototype.action=function(){this.game.$player1.cardsForCrib.length===2?(this.p1.placeCardsInCrib(this.game.$cribOwner),this.p1.handInMemory=this.p1.hand.slice(),this.mediator.publish("transition","PrePlay")):(this.mediator.publish("messages-add","Pick two cards for "+this.game.$cribOwner.possessive+" crib"),this.render())},t}),define("scripts/gameStates/PrePlayState",["scripts/gameStates/BaseState","jquery"],function(e,t){function n(t){e.call(this,t,"PrePlay")}function r(e,t){var n=this.game.$cribOwner.selectOneFromDeck(this.game.$deck,e);this.game.topCard=n,this.game.$cribOwner.isWinner()?this.mediator.publish("transition","Summary"):(this.game.$showTopCard=!0,t&&this.render(),this.mediator.publish("transition","Play",!0))}return n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.prototype.templates=function(){var n=e.prototype.templates();return this.game.$showTopCard?n.deck=t("#visibleDeckTemplate").html():n.deck=t("#hiddenStraitDeckTemplate").html(),n},n.prototype.init=function(){this.game.$action={text:"..."};if(this.game.$cribOwner!==this.game.$player1){this.mediator.publish("messages-add","They will reveal top card");var e=Math.floor(Math.random()*this.game.$deck.cards.length);this.render(),r.call(this,e,!1)}else this.mediator.publish("messages-add","Reveal top card"),this.render()},n.prototype.deck=function(e){r.call(this,e,!0)},n}),define("scripts/gameStates/PlayState",["jquery","scripts/gameStates/BaseState"],function(e,t){function n(e){t.call(this,e,"Play"),this.nextState="Play"}function r(){this.game.currentPlayer=this.p2,u.call(this)||this.mediator.publish("messages-add",this.p2.possessive+" turn")}function i(){this.game.currentPlayer||(this.game.$cribOwner===this.p1?this.game.currentPlayer=this.p2:this.game.currentPlayer=this.p1)}function s(){try{this.p2.playCard(),this.game.currentPlayer=this.p1,u.call(this)||this.mediator.publish("messages-add",this.p1.possessive+" turn"),this.p2.isWinner()&&this.mediator.publish("transition","Summary",!0)}catch(e){console.log(e)}}function o(){u.call(this)?(this.mediator.publish("messages-add","Round over!"),this.game.$action={text:"Ok"},this.nextState="Count",this.game.currentPlayer=undefined):this.p1.playRules.hasPlayableCards(this.p1)||(this.game.$action={text:"Go"})}function u(){return this.p1.hand.length===0&&this.p2.hand.length===0}return n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.prototype.templates=function(){var n=t.prototype.templates();return n.deck=e("#visibleDeckTemplate").html(),n},n.prototype.init=function(){this.game.$action={text:"Go"},u.call(this)||(i.call(this),this.game.currentPlayer===this.p2?s.call(this):this.mediator.publish("messages-add","Select a card to play")),o.call(this),this.render()},n.prototype.selectCard=function(e){try{this.p1.playCard(e.index),r.call(this)}catch(t){t.message==="No Playable Cards"?this.mediator.publish("messages-add","No Playable Cards, Press 'Go!'"):t.message==="Invalid Playable Card"&&this.mediator.publish("messages-add","Try another card")}this.p1.isWinner()?this.mediator.publish("transition","Summary",!0):u.call(this)?this.mediator.publish("transition","Play",!1):(this.renderOnly(),this.mediator.publish("transition","Play",!0))},n.prototype.action=function(){if(this.nextState==="Play")try{this.p1.announceGo(),r.call(this)}catch(e){e.message==="Playable Cards"&&this.mediator.publish("messages-add","You can't go, you have playable cards.")}else this.mediator.publish("board-clear");this.renderOnly(),this.p1.isWinner()?this.mediator.publish("transition","Summary",!1):this.mediator.publish("transition",this.nextState,!0),u.call(this)&&(this.nextState="Play")},n}),define("scripts/modules/CountScoreKeeper",["scripts/modules/BaseScoreKeeper"],function(e){function t(){e.call(this)}function n(e,t,r,i,s,o,u,a){if(i===r){var f=0;for(var l=0;l<r;l++)f+=s[l].value;f===a&&u.push(s.slice(0,s.length));return}if(o>=t)return;s[i]=e[o],n(e,t,r,i+1,s,o+1,u,a),n(e,t,r,i,s,o+1,u,a)}return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.prototype.get15s=function(e,t){var r=e.concat(t),i=[],s=[];for(var o=0;o<=r.length;o++)n(r,r.length,o,0,s,0,i,15);return i.length*2},t.prototype.getPairs=function(e,t){var n=[],r=e.concat(t);return r.forEach(function(e,t,r){for(var i=t+1;i<r.length;i++)e.faceValue===r[i].faceValue&&n.push([e,r[i]])}),n.length*2},t.prototype.getRuns=function(e,t){function i(e,t){var n=function(e,t,r,i){if(e===0){r.length>0&&(i[i.length]=r);return}for(var s=0;s<t.length;s++)n(e-1,t.slice(s+1),r.concat([t[s]]),i);return},r=[];for(var i=t;i<e.length;i++)n(i,e,[],r);return r.push(e),r}function s(e,t){return e.faceValue<t.faceValue?-1:e.faceValue>t.faceValue?1:0}function o(e){return e.sort(s),e}function u(e,t,n){return t===n.length-1?!0:e.faceValue+1===n[t+1].faceValue}var n=0,r=e.concat(t),a=i(r,3);a.forEach(o);var f=a.filter(function(e){return e.every(u)}),l=0;f.forEach(function(e){e.length>l&&(l=e.length)});var c=f.filter(function(e){return e.length===l});return c.forEach(function(e){n+=e.length}),n},t.prototype.getHandFlush=function(e,t){function n(e,t,n){return e.suit===n[0].suit}var r=e.slice(0,e.length);return r.push(t),r.every(n)?5:e.every(n)?4:0},t.prototype.getNobs=function(e,t){var n=e.some(function(e){return e.faceValue===11&&e.suit===t.suit});return n?1:0},t.prototype.evaluateHand=function(e,t){var n=0;n+=this.get15s(e.hand,t),n+=this.getPairs(e.hand,t),n+=this.getRuns(e.hand,t),n+=this.getHandFlush(e.hand,t),n+=this.getNobs(e.hand,t),n!==0&&(e.currentPoints=e.points),e.points+=n,this.mediator.publish("messages-add",e.name+" scored "+n+" points.")},t}),define("scripts/gameStates/CountState",["jquery","scripts/gameStates/BaseState","scripts/modules/CountScoreKeeper"],function(e,t,n){function r(e){t.call(this,e,"Count"),e.countStateStep=e.countStateStep||0,this.scoreKeeper=new n}function i(){var e=0;this.game.countStateStep===0?s.call(this,e):this.game.countStateStep===1?o.call(this,e):this.game.countStateStep===2?u.call(this):a.call(this)}function s(e){c.call(this)?l.call(this,e):f.call(this,e),this.game.countStateStep+=1,this.render()}function o(e){c.call(this)?(f.call(this,e),this.p2.hand=[]):(l.call(this,e),this.p1.hand=[]),this.game.countStateStep+=1,this.render()}function u(){this.game.$cribOwner.hand=this.game.$cribOwner.crib,this.game.$cribOwner.crib=[],this.scoreKeeper.evaluateHand(this.game.$cribOwner,this.game.topCard),this.game.$action={text:"Cont."},this.game.countStateStep+=1,this.render()}function a(){c.call(this)?this.game.$cribOwner=this.p2:this.game.$cribOwner=this.p1,h.call(this),this.game.$showTopCard=!1,this.game.countStateStep=0,this.render(),(this.game.$cribOwner.isWinner()||this.p2.isWinner())&&this.mediator.publish("transition","Summary",!0),this.mediator.publish("transition","Deal")}function f(e){return h.call(this),this.scoreKeeper.evaluateHand(this.p1,this.game.topCard),this.p1.isWinner()&&this.mediator.publish("transition","Summary",!0),e}function l(e){return p.call(this),this.scoreKeeper.evaluateHand(this.p2,this.game.topCard),this.p2.isWinner()&&this.mediator.publish("transition","Summary",!0),e}function c(){return this.game.$cribOwner===this.p1}function h(){this.game.$player2HandVisible=!1,this.game.$player1HandVisible=!0}function p(){this.game.$player2HandVisible=!0,this.game.$player1HandVisible=!1}return r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.prototype.templates=function(){var n=t.prototype.templates();return n.deck=e("#visibleDeckTemplate").html(),n.p2Hand=e("#visibleHandTemplate").html(),n},r.prototype.init=function(){this.p1.restoreHand(),this.p2.restoreHand(),i.call(this)},r.prototype.action=function(){i.call(this)},r}),define("scripts/gameStates/SummaryState",["jquery","scripts/gameStates/BaseState"],function(e,t){function n(e){t.call(this,e,"Summary")}return n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.prototype.templates=function(){var n=t.prototype.templates();return n.page=e("#summaryTemplate").html(),n},n.prototype.bindEvents=function(){e("#newGameButton").on("click",function(){this.mediator.publish("start")}.bind(this)),e("#homeButton").on("click",function(){this.mediator.publish("transition","Home")}.bind(this))},n}),define("scripts/gameStates/HomeState",["jquery","scripts/gameStates/BaseState","scripts/modules/DeckModule"],function(e,t,n){function r(e){t.call(this,e,"Home"),this.data=(new n).shuffle().cards.splice(0,6)}return r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.prototype.templates=function(){var n=t.prototype.templates();return n.page=e("#homeTemplate").html(),n.continue=this.game?'<button id="continueGameButton">Continue Game</button>':"",n},r.prototype.bindEvents=function(){e("#newGameButton").on("click",function(){this.mediator.publish("start")}.bind(this)),e("#continueGameButton").on("click",function(){this.mediator.publish("continue")}.bind(this))},r}),define("scripts/gameStates/InfoState",["jquery","scripts/gameStates/BaseState"],function(e,t){function n(e){t.call(this,e,"Info")}return n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.prototype.templates=function(){var n=t.prototype.templates();return n.page=e("#infoTemplate").html(),n},n}),define("scripts/gameStates/StateRegistry",["scripts/gameStates/DrawState","scripts/gameStates/DealState","scripts/gameStates/CribState","scripts/gameStates/PrePlayState","scripts/gameStates/PlayState","scripts/gameStates/CountState","scripts/gameStates/SummaryState","scripts/gameStates/HomeState","scripts/gameStates/InfoState"],function(DrawState,DealState,CribState,PrePlayState,PlayState,CountState,SummaryState,HomeState,InfoState){function StateManager(){this.states=[]}return StateManager.prototype.initState=function(stateName,game){var state;state=this.states.filter(function(e){return e.name===stateName})[0];if(!state){try{state=eval("new "+stateName+"State(game)")}catch(e){throw new Error(stateName+"State Not Found")}this.states.push(state)}return state},StateManager}),define("scripts/modules/StorageModule",[],function(){function e(e){return localStorage.getItem(e)}function t(e,t){return localStorage.setItem(e,t)}function n(e){return{name:e.$player1.name,possessive:e.$player1.possessive,hand:e.$player1.hand,handInMemory:e.$player1.handInMemory,crib:e.$player1.crib,cardsForCrib:e.$player1.cardsForCrib,points:e.$player1.points,currentPoints:e.$player1.currentPoints}}function r(e){return{name:e.$player2.name,possessive:e.$player2.possessive,hand:e.$player2.hand,handInMemory:e.$player2.handInMemory,crib:e.$player2.crib,cardsForCrib:e.$player2.cardsForCrib,points:e.$player2.points,currentPoints:e.$player2.currentPoints}}function i(e){if(e.$cribOwner)return e.$cribOwner.name}function s(e){return{currentBoardValue:e.$board.currentBoardValue,totalPlayedCardsForRound:e.$board.totalPlayedCardsForRound,playedCards:e.$board.playedCards,playersWhoSaidGo:e.$board.playersWhoSaidGo}}return{loadGame:function(){return{game:JSON.parse(e("game")),state:e("state")}},saveGame:function(e,o){t("game",JSON.stringify({$deck:e.$deck,$player1:n(e),$player2:r(e),$cribOwner:i(e),$player1HandVisible:e.$player1HandVisible,$player2HandVisible:e.$player2HandVisible,countStateStep:e.countStateStep,topCard:e.topCard,showTopCard:e.$showTopCard,$board:s(e),$messages:e.$messages,$action:e.$action})),t("state",o)}}}),define("scripts/modules/Mediator",["scripts/modules/PubSub","scripts/modules/GameModule","scripts/gameStates/StateRegistry","scripts/modules/StorageModule"],function(e,t,n,r){function i(){e.installTo(this),e.subscribe("App:Start",this.appInit),e.subscribe("start",this.startGame),e.subscribe("continue",this.continueGame),e.subscribe("transition",this.transitionTo),e.subscribe("messages-add",this.setMessages),e.subscribe("messages-clear",this.clearMessages),e.subscribe("winner",this.setWinner),e.subscribe("board-clear",this.clearBoard),e.subscribe("render",this.saveGame)}return i.prototype.appInit=function(){this.stateRegistry=new n;var i=r.loadGame();i.game?(this.game=new t(i.game),e.publish("transition",i.state)):e.publish("transition","Home")},i.prototype.startGame=function(){this.game=new t({}),this.game.$board.clearBoard(),this.stateRegistry=new n,e.publish("transition","Draw")},i.prototype.continueGame=function(){var i=r.loadGame();this.game=new t(i.game),this.stateRegistry=new n,e.publish("transition",i.state)},i.prototype.transitionTo=function(e,t){function i(){n=this.stateRegistry.initState(e,this.game),n.init()}var n;e==="Back"&&(e=r.loadGame().state),t?setTimeout(i.bind(this),1e3):i.call(this)},i.prototype.setMessages=function(e){function t(e){return e.charAt(0).toUpperCase()+e.substr(1)}e=t(e),this.game.$messages.indexOf(e)===-1&&this.game.$messages.push(e)},i.prototype.clearMessages=function(){this.game&&(this.game.$messages=[])},i.prototype.setWinner=function(e){this.game.winner=e},i.prototype.clearBoard=function(){this.game.$board.clearBoard()},i.prototype.saveGame=function(e,t){e!=="Home"&&e!=="Info"&&r.saveGame(t,e)},i}),define("scripts/app",["scripts/modules/Mediator"],function(e){function t(){this.mediator=new e}return t.prototype.init=function(){this.mediator.publish("App:Start")},t}),require(["scripts/app"],function(e){var t=new e;t.init()}),define("scripts/main",function(){});