(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{218:function(t,e,s){"use strict";var i={name:"CMessage",computed:{msgList:function(){return this.$store.state.message.list}},data:function(){return{}}},n=(s(284),s(2)),a=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"c-message",class:{"c-message--active":t.msgList.length}},t._l(t.msgList,(function(e,i){return s("transition",{key:i,attrs:{appear:"",name:"c-message--transition"}},[s("div",{staticClass:"c-message__list",class:"c-message__list--"+e.type,style:{zIndex:i+1}},[t._v(t._s(e.content))])])})),1)}),[],!1,null,null,null).exports,r=(s(18),{data:function(){return{head:this.$route.params.title||"\u9648\u4e00\u53d1\u513f"}},methods:{getTitle:function(){switch(this.$route.name){case"playlist-id":return this.$route.params.id?"\u6b4c\u5355: ".concat(this.$route.params.id):"\u6b4c\u5355\u4e0d\u5b58\u5728";case"search-keyword":return this.$route.params.keyword?"\u641c\u7d22: ".concat(this.$route.params.keyword):"\u641c\u7d22";default:return"\u9648\u4e00\u53d1\u513f"}}}}),o=(s(285),Object(n.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"c-header"},[s("div",{staticClass:"container"},["index"!==t.$route.name?s("div",{staticClass:"c-header__back",on:{click:function(e){return t.$router.back()}}},[t._v("\xab \u8fd4\u56de")]):t._e(),s("div",{staticClass:"c-header__nav"},[s("nuxt-link",{staticClass:"link",attrs:{to:"/"}},[t._v(t._s(t.getTitle()))])],1),"search-keyword"!==t.$route.name?s("nuxt-link",{staticClass:"c-header__search",attrs:{to:"/search"}},[t._v("\u641c\u7d22 \xbb")]):t._e()],1)])}),[],!1,null,null,null).exports),c=s(94),l=s.n(c),u={name:"CFooter",data:function(){return{showHelp:!1}},mounted:function(){var t=this;(new l.a).bind(["h"],(function(){t.showHelp=!t.showHelp}))},methods:{}},d=(s(286),Object(n.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"c-footer"},[s("div",{staticClass:"slogan"},[t._v("\u6211\u9648\u4e00\u53d1\u513f\u6700\u725b\u903c")]),s("div",{staticClass:"copyright"},[t._v("\xa9 2020"),s("a",{staticClass:"link",on:{click:function(e){t.showHelp=!0}}},[t._v("\u5e2e\u52a9")]),s("a",{staticClass:"link",attrs:{href:"https://github.com/maicong/chenyifa"}},[t._v("\u6e90\u7801")]),s("nuxt-link",{staticClass:"link",attrs:{to:"/changelog"}},[t._v("\u66f4\u65b0")]),s("nuxt-link",{staticClass:"link",attrs:{to:"/terms"}},[t._v("\u58f0\u660e")])],1),s("div",{staticClass:"help",class:{"help--show":t.showHelp}},[s("div",{staticClass:"help-content"},[s("div",{staticClass:"help-content-close",on:{click:function(e){t.showHelp=!1}}},[t._v("+")]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("kbd",[this._v("H")]),e("em",[this._v("\u5e2e\u52a9")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("kbd",[this._v("Enter")]),e("em",[this._v("\u64ad\u653e\u3001\u6682\u505c")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("kbd",[this._v("W")]),e("span",[this._v("\u6216")]),e("kbd",[this._v("\u2191")]),e("em",[this._v("\u4e0a\u4e00\u9996")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("kbd",[this._v("S")]),e("span",[this._v("\u6216")]),e("kbd",[this._v("\u2193")]),e("em",[this._v("\u4e0b\u4e00\u9996")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("kbd",[this._v("A")]),e("span",[this._v("\u6216")]),e("kbd",[this._v("\u2190")]),e("em",[this._v("\u540e\u9000")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("kbd",[this._v("D")]),e("span",[this._v("\u6216")]),e("kbd",[this._v("\u2192")]),e("em",[this._v("\u5feb\u8fdb")])])}],!1,null,null,null).exports),h=(s(31),s(28),s(20)),m=s(41),v=s.n(m),f=s(14),p=s.n(f),g=s(164),_=s.n(g),b=s(11),y=s.n(b),C=s(95),w=s.n(C),k=s(204),$=s.n(k),x=s(205),S=s.n(x),T=s(206),L=s.n(T),A=s(207),E=s.n(A),P={name:"CPlayer",data:function(){return{ap:null,waitTime:0,waitTimer:null,isBindKeyboard:!1,isPhone:!1}},watch:{"$store.state.initAudios":function(t,e){L()(t,e)||this.initPlayer(t.slice())},"$store.state.addAudios":function(t){var e=this.ap.list.audios,s=S()([].concat(Object(h.a)(e),Object(h.a)(t)),"songid"),i=$()(s,e,"songid");this.ap.list.add(i),this.listenRemove()},"$store.state.playID":function(t,e){w()([e,this.current.songid],t)||this.switchSongid(t)}},mounted:function(){var t=this.$storage.lsGet("__audioList");this.isPhone=/(Phone|iPod|iPad|Android|Mobile)/.test(navigator.userAgent),this.initPlayer(t)},computed:{current:function(){return this.ap.list.audios[this.ap.list.index]}},methods:{initPlayer:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s=this.$refs.aplayer,i=this.$storage.lsGet("__lastSongid")||null;y()(e)?(this.ap=new E.a({container:s,audio:e,mini:!1,autoplay:!this.isPhone,lrcType:this.isPhone?.7:1,volume:.85,loop:"all",order:"list",preload:"auto",listMaxHeight:"265px",storageName:"__playerSetting"}),this.switchSongid(i),this.listenRemove(),s.classList.remove("aplayer-arrow"),document.querySelector(".aplayer-list").classList.add("aplayer-list-hide"),this.ap.on("waiting",(function(){t.waitTimer&&t.clearTimer(),t.waitTimer=setInterval((function(){t.waitTime>3&&!y()(t.$store.state.message.list)&&t.$msg("\u6b4c\u66f2\u52a0\u8f7d\u8fc7\u6162\uff0c\u8bf7\u8ba9\u5979\u7f13\u5b58\u4e00\u4f1a\u513f"),t.waitTime++}),1e3)})),this.ap.on("canplay",(function(){t.clearTimer(),t.ap.pause||t.isPhone||t.ap.play()})),this.ap.on("play",(function(){t.$store.commit("setPlayID",t.current.songid),t.$storage.lsSet("__lastSongid",t.current.songid)})),this.ap.on("ended",(function(){t.ap.skipForward()})),this.ap.on("timeupdate",(function(){t.current&&(document.title="\u6b63\u5728\u64ad\u653e: < ".concat(t.current.name," - \u9648\u4e00\u53d1\u513f > - \u6b4c\u5355\u300c ").concat(t.current.additional.song_tag.album," \u300d "))})),this.ap.on("listswitch",(function(e){e.index;t.clearTimer(),document.querySelector(".aplayer-lrc-contents").style="transform:translateY(0)",t.current&&t.$storage.lsSet("__lastSongid",t.current.songid)})),this.ap.on("noticeshow",(function(e){t.clearTimer(),t.$msg(e.text,"error")})),this.bindKeyboard()):this.$storage.lsDel("__lastSongid")},clearTimer:function(){this.waitTime=0,clearInterval(this.waitTimer)},switchSongid:function(t){if(t){if(!this.ap)return;var e=_()(this.ap.list.audios,{songid:t});e>-1&&(this.ap.seek(0),this.ap.list.switch(e))}},listenRemove:function(){var t=this,e=document.querySelectorAll(".aplayer-list-index");p()(Array.from(e),(function(e){e.onclick=function(s){var i=v()(e.textContent);t.ap.list.remove(i-1),t.$storage.lsSet("__audioList",t.ap.list.audios),s.stopPropagation()}})),this.$storage.lsSet("__audioList",this.ap.list.audios)},bindKeyboard:function(){var t=this;if(this.ap&&!this.isBindKeyboard){var e=new l.a;e.bind("enter",(function(){t.ap.toggle()})),e.bind(["up","w"],(function(){t.ap.skipBack()})),e.bind(["down","s"],(function(){t.ap.skipForward()})),e.bind(["left","a"],(function(){0!==t.ap.audio.currentTime&&t.ap.seek(t.ap.audio.currentTime-1)})),e.bind(["right","d"],(function(){t.ap.audio.currentTime!==t.ap.audio.duration&&t.ap.seek(t.ap.audio.currentTime+1)})),this.isBindKeyboard=!0}}}},j=(s(342),{name:"LayoutDefault",components:{CMessage:a,CHeader:o,CFooter:d,CPlayer:Object(n.a)(P,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"c-player"},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.ap,expression:"ap"}],ref:"aplayer",staticClass:"aplayer"})])}),[],!1,null,null,null).exports},beforeMount:function(){var t=this;this.$msg("\u6b63\u5728\u66f4\u65b0\u9a8c\u8bc1\u4fe1\u606f\uff0c\u671f\u95f4\u6b4c\u66f2\u53ef\u80fd\u65e0\u6cd5\u64ad\u653e...");var e=document.createElement("iframe");e.src="".concat("http://magict.cn:5000/webapi","/auth.cgi?api=SYNO.API.Auth&version=3&method=login&account=cyfwlp&passwd=5267373&session=AudioStation&format=cookie"),e.style.display="none",e.onload=function(){t.$msg("\u9a8c\u8bc1\u4fe1\u606f\u5df2\u66f4\u65b0\uff0c\u5c3d\u60c5\u542c\u6b4c\u5427~~","ok")},e.onerror=function(){t.$msg("\u9a8c\u8bc1\u4fe1\u606f\u66f4\u65b0\u5931\u8d25\uff0c\u6b4c\u66f2\u65e0\u6cd5\u64ad\u653e\uff0c\u8bf7\u5237\u65b0\u91cd\u8bd5\uff01","error")},document.body.appendChild(e)},watch:{"$cyfe.isOffline":function(t){t?this.$msg("\u7f51\u7edc\u94fe\u63a5\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u540e\u91cd\u8bd5","error"):this.$msg("\u7f51\u7edc\u5df2\u6062\u590d\u6b63\u5e38","ok")},"$route.name":function(){this.$refs.body&&(this.$refs.body.scrollTop=0)}},mounted:function(){this.$nextTick((function(){var t=new Image;t.src=s(343),t.onload=function(){document.body.style.backgroundImage="url(".concat(t.src,")")}}))}}),O=Object(n.a)(j,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("c-message"),e("c-header"),e("div",{ref:"body",staticClass:"c-body"},[e("nuxt"),e("c-footer")],1),e("keep-alive",[e("c-player")],1)],1)}),[],!1,null,null,null);e.a=O.exports},219:function(t,e,s){"use strict";var i={name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout((function(){return t.startTimer()}),this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout((function(){t.show=!1,t.$nextTick((function(){t.percent=0,t.reversed=!1}))}),500),this},fail:function(t){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval((function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100||t.percent<=0)&&(t.skipTimerCount=1,t.reversed=!t.reversed))}),100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},n=(s(281),s(2)),a=Object(n.a)(i,void 0,void 0,!1,null,null,null);e.a=a.exports},280:function(t,e,s){"use strict";var i=s(79);s.n(i).a},281:function(t,e,s){"use strict";var i=s(80);s.n(i).a},282:function(t,e,s){},283:function(t,e,s){},284:function(t,e,s){"use strict";var i=s(81);s.n(i).a},285:function(t,e,s){"use strict";var i=s(82);s.n(i).a},286:function(t,e,s){"use strict";var i=s(83);s.n(i).a},342:function(t,e,s){"use strict";var i=s(85);s.n(i).a},384:function(t,e,s){"use strict";var i=s(87);s.n(i).a},385:function(t,e,s){"use strict";var i=s(88);s.n(i).a},386:function(t,e,s){"use strict";var i=s(89);s.n(i).a},389:function(t,e,s){"use strict";var i=s(90);s.n(i).a},390:function(t,e,s){"use strict";var i=s(91);s.n(i).a},394:function(t,e,s){"use strict";s.r(e);var i={name:"Terms",head:function(){return{title:"\u514d\u8d23\u58f0\u660e - \u9648\u4e00\u53d1\u513f"}}},n=(s(385),s(2)),a=Object(n.a)(i,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page page-terms"},[s("div",{staticClass:"container"},[s("div",{staticClass:"main"},[s("div",{staticClass:"title"},[t._v("\u514d\u8d23\u58f0\u660e")]),s("div",{staticClass:"terms"},[s("div",{staticClass:"terms-item"},[s("div",{staticClass:"name"},[t._v("\u5173\u4e8e\u6b4c\u624b")]),s("div",{staticClass:"content"},[t._v("\u6b4c\u624b\u662f\u5bf9\u4e8e\u6b4c\u66f2\u548c\u5176\u4ed6\u58f0\u4e50\u4f5c\u54c1\u6f14\u5531\u8005\u7684\u79f0\u547c\uff0c\u4e5f\u4f5c\u4e3a\u804c\u4e1a\u540d\u4f7f\u7528\u3002\u5728\u4e2d\u56fd\u5927\u9646\u5219\u88ab\u5b9a\u4e49\u4e3a\u6f14\u5458\u7c7b\u7684\u6b4c\u5531\u6f14\u5458\u3002\u90a3\u4e9b\u7b26\u5408\u5173\u6ce8\u5ea6\u548c\u77e5\u540d\u5ea6\u7684\u6b4c\u624b\u53c8\u88ab\u79f0\u4f5c\u201c\u6b4c\u661f\u201d\u3002\u8fbe\u5230\u4e00\u5b9a\u827a\u672f\u9020\u8be3\u548c\u6210\u5c31\u8005\u5219\u5c0a\u79f0\u4e3a\u201c\u6b4c\u5531\u5bb6\uff08\u6b4c\u5531\u827a\u672f\u5bb6\uff09\u201d\u6216\u4e50\u961f\u7684\u201c\u58f0\u4e50\u5bb6\uff08\u58f0\u4e50\u827a\u672f\u5bb6\uff09\u201d\u3002\u6839\u636e\u5531\u6cd5\uff0c\u6b4c\u624b\u53c8\u5206\u4e3a\u7f8e\u58f0\u3001\u6c11\u65cf\u3001\u6d41\u884c\u7b49\u56db\u5927\u6f14\u5531\u6d3e\u7cfb\u3002")])]),s("div",{staticClass:"terms-item"},[s("div",{staticClass:"name"},[t._v("\u5173\u4e8e\u7c89\u4e1d")]),s("div",{staticClass:"content"},[t._v("\u7c89\u4e1d\u662f\u6307\u5bf9\u4e8e\u5404\u7c7b\u7ec4\u7ec7\u3001\u4eba\u7269\u3001\u4ea7\u54c1\u3001\u827a\u672f\u54c1\u3001\u4fe1\u5ff5\u6216\u6d41\u884c\u8d8b\u52bf\u62b1\u6709\u6781\u5ea6\u3001\u65e0\u6cd5\u6291\u5236\u7684\u559c\u7231\u4e0e\u652f\u6301\u7684\u4eba\u3002\u72ec\u7279\u4e8b\u7269\u7684\u7231\u597d\u8005\u4e00\u822c\u4f1a\u8bbe\u7acb\u81ea\u5df1\u7684\u7231\u597d\u8005\u533a\u57df\u3002\u4ed6\u4eec\u4f1a\u5f00\u529e\u7231\u597d\u8005\u4ff1\u4e50\u90e8\u3001\u4e3e\u529e\u7c89\u4e1d\u4f1a\u3001\u521b\u529e\u7231\u597d\u8005\u6742\u5fd7\u3001\u5199\u7c89\u4e1d\u4fe1\u6216\u53c2\u4e0e\u7c7b\u4f3c\u7684\u6d3b\u52a8\u3002")])]),s("div",{staticClass:"terms-item"},[s("div",{staticClass:"name"},[t._v("\u5173\u4e8e\u672c\u7ad9")]),s("div",{staticClass:"content"},[t._v("\u672c\u7ad9\u4e3a\u7c89\u4e1d\u81ea\u53d1\u642d\u5efa\u7684\u9488\u5bf9\u67d0\u6b4c\u624b\u7684\u4e2a\u4eba\u6027\u8d28\u542c\u6b4c\u7f51\u7ad9\uff0c\u4e00\u5207\u97f3\u9891\u8d44\u6e90\u5747\u6765\u81ea\u4e92\u8054\u7f51\uff0c\u89c6\u8bbf\u95ee\u538b\u529b\u4e0d\u5b9a\u671f\u5173\u505c\uff0c\u5e76\u4e0d\u4fdd\u8bc1 24 \u5c0f\u65f6\u5728\u7ebf\u3002\u672c\u7ad9\u627f\u8bfa\u4e0d\u6536\u8d39\uff0c\u4e0d\u63d0\u4f9b\u97f3\u9891\u552e\u5356\u670d\u52a1\uff0c\u5982\u6709\u7591\u95ee\u8bf7\u8054\u7cfb s2ng@qq.com\uff0c\u4f46\u6700\u7ec8\u89e3\u91ca\u6743\u5f52\u672c\u7ad9\u6240\u6709\u3002")])]),s("div",{staticClass:"terms-item"},[s("div",{staticClass:"name"},[t._v("\u5173\u4e8e\u4e0b\u8f7d")]),s("div",{staticClass:"content"},[t._v("\u5982\u9700\u4e0b\u8f7d\uff0c\u8bf7\u524d\u5f80 \xa0"),s("a",{attrs:{href:"https://67373.loadream.com/",target:"_blank"}},[t._v("67373.loadream.com")])])]),s("div",{staticClass:"terms-item"},[s("div",{staticClass:"name"},[t._v("\u7279\u522b\u9e23\u8c22")]),s("div",{staticClass:"content"},[s("a",{attrs:{href:"https://www.loadream.com/",target:"_blank"}},[t._v("\u7ae5\u8bdd\u9547")]),s("a",{attrs:{href:"https://www.loadream.com/loadream-1088-1-1.html",target:"_blank"}},[t._v("DS audio")]),s("a",{attrs:{href:"https://huati.weibo.com/1362650",target:"_blank"}},[t._v("#\u9648\u4e00\u53d1\u513f\u8d85\u8bdd#")]),s("a",{attrs:{href:"https://www.weibo.com/u/1693163742",target:"_blank"}},[t._v("@\u841d\u83fd\u83fd")]),s("a",{attrs:{href:"https://www.youtube.com/channel/UC5ibEE0btMSv_D9A6ZllY4A",target:"_blank"}},[t._v("\u6700\u611b\u9648\u4e00\u53d1\u513f")])])])])])])])}],!1,null,null,null);e.default=a.exports},395:function(t,e,s){"use strict";s.r(e);s(33),s(35),s(25),s(31),s(28),s(18),s(29),s(30),s(13),s(38),s(32);var i=s(3),n=s(126),a=s.n(n),r=s(11),o=s.n(r);function c(t,e){var s;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(s=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);"Object"===s&&t.constructor&&(s=t.constructor.name);if("Map"===s||"Set"===s)return Array.from(t);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){s&&(t=s);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,o=!1;return{s:function(){s=t[Symbol.iterator]()},n:function(){var t=s.next();return r=t.done,t},e:function(t){o=!0,a=t},f:function(){try{r||null==s.return||s.return()}finally{if(o)throw a}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,i=new Array(e);s<e;s++)i[s]=t[s];return i}var u={name:"Playlist",head:function(){return{title:"\u6b4c\u5355: ".concat(this.id," - \u9648\u4e00\u53d1\u513f")}},data:function(){return{id:this.$route.params.id,songs:[],audios:[],loadText:"\u52a0\u8f7d\u4e2d..."}},asyncData:function(t){return Object(i.a)(regeneratorRuntime.mark((function e(){var s,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.params,i=t.error,s.id){e.next=4;break}return i({statusCode:404,message:"\u554a\u54a7\uff01\u627e\u4e0d\u5230\u8fd9\u4e2a\u6b4c\u5355\uff01"}),e.abrupt("return");case 4:return e.abrupt("return",{id:s.id});case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){this.getSongList(),s(391).add(document.querySelector(".songs-item--head"))},methods:{getSongList:function(){var t=s(223)("./songs-".concat(this.id,".json"))||[];if(!o()(t))return this.loadText="\u6682\u65e0\u6b4c\u66f2\u4fe1\u606f",void this.$msg("Emmmm\uff0c\u8fd9\u4e2a\u6b4c\u5355\u597d\u50cf\u662f\u7a7a\u7684\uff01");this.songs=t,this.getAudioList(t)},getAudioList:function(t){var e,i=[],n=s(224),a=c(t);try{for(a.s();!(e=a.n()).done;){var r=e.value;i.push({songid:r.id,name:r.title.replace(/([\s-]+)?\u9648\u4e00\u53d1\u513f/g,""),artist:"\u9648\u4e00\u53d1\u513f",url:"".concat("http://magict.cn:5000/webapi","/AudioStation/stream.cgi?api=SYNO.AudioStation.Stream&method=stream&version=1&id=").concat(r.id,"&seek_position=0"),cover:n,lrc:"[00:00.00] \u6b22\u8fce\u6295\u9012\u6b4c\u8bcd\u5230\u4e0b\u9762\u90ae\u7bb1 [00:05.00] s2ng@qq.com",additional:r.additional})}}catch(u){a.e(u)}finally{a.f()}var l=this.$storage.lsGet("__audioList");o()(l)||this.$store.commit("initAudios",i),this.audios=i},getName:function(t){return t.replace(/([\s-]+)?\u9648\u4e00\u53d1\u513f/g,"")},sec2minute:function(t){var e=parseInt(t/60/60%60),s=parseInt(t/60%60),i=parseInt(t%60),n=[e,s,i];return e||(n=[s,i]),n.join(":").replace(/\b(\d)\b/g,"0$1")},getBitrate:function(t){return t/1e3},shiwchPlayID:function(t){window._czc&&window._czc.push(["_trackEvent","\u64ad\u653e",this.id,t.title]),this.add2Playlist(t,!1),this.$store.commit("setPlayID",t.id),this.$msg("\u5207\u6362\u5230\u5355\u66f2 < ".concat(this.getName(t.title)," >"),"ok")},playThisList:function(){window._czc&&window._czc.push(["_trackEvent","\u64ad\u653e",this.id,"\u5168\u90e8"]),this.$store.commit("initAudios",this.audios),this.$msg("\u5207\u6362\u5230\u6b4c\u5355\u300c ".concat(this.id," \u300d"),"ok")},add2Playlist:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if("all"===t)this.$store.commit("setAddAudios",this.audios),e&&this.$msg("\u6b4c\u5355\u300c ".concat(this.id," \u300d\u5df2\u6dfb\u52a0\u5230\u64ad\u653e\u5217\u8868"),"ok");else{var s=a()(this.audios,{songid:t.id});this.$store.commit("setAddAudios",[s]),e&&this.$msg("\u5355\u66f2 < ".concat(this.getName(t.title)," > \u5df2\u6dfb\u52a0\u5230\u64ad\u653e\u5217\u8868"),"ok")}},download:function(t){this.$msg("\u62b1\u6b49\uff0c\u4e0b\u8f7d\u529f\u80fd\u8fd8\u672a\u5b8c\u6210\uff01")}}},d=(s(386),s(2)),h=Object(d.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page page-playlist"},[s("div",{staticClass:"container"},[s("div",{staticClass:"action"},[s("div",{staticClass:"btn btn-play",on:{click:function(e){return t.playThisList()}}},[t._v("\u64ad\u653e\u5f53\u524d\u6b4c\u5355")]),s("div",{staticClass:"btn btn-add",on:{click:function(e){return t.add2Playlist("all")}}},[t._v("\u6dfb\u52a0\u5230\u64ad\u653e\u5217\u8868")]),t.songs.length?s("div",{staticClass:"length"},[t._v(t._s("\uff08 \u6b4c\u66f2\u6570: "+t.songs.length+" \uff09"))]):t._e()]),s("div",{staticClass:"songs"},[t._m(0),t._l(t.songs,(function(e,i){return t.songs.length?s("div",{staticClass:"songs-item",class:{"songs-item--active":t.$store.state.playID===e.id}},[s("div",{staticClass:"index"},[t._v(t._s(i+1))]),s("div",{staticClass:"label",on:{click:function(s){return t.shiwchPlayID(e)}}},[t._v(t._s(t.getName(e.title)))]),s("div",{staticClass:"bitrate"},[t._v(t._s(t.getBitrate(e.additional.song_audio.bitrate))+"kbps")]),s("div",{staticClass:"duration"},[t._v(t._s(t.sec2minute(e.additional.song_audio.duration)))]),s("div",{staticClass:"action"},[s("div",{staticClass:"btn",on:{click:function(s){return t.add2Playlist(e)}}},[t._v("\u6dfb\u52a0")])])]):t._e()})),t.songs.length?t._e():s("div",{staticClass:"songs-item songs-item--none"},[s("div",{staticClass:"text"},[t._v(t._s(t.loadText))])])],2)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"songs-item songs-item--head"},[e("div",{staticClass:"index"},[this._v("\u5e8f\u53f7")]),e("div",{staticClass:"label"},[this._v("\u6807\u9898")]),e("div",{staticClass:"bitrate"},[this._v("\u6bd4\u7279\u7387")]),e("div",{staticClass:"duration"},[this._v("\u65f6\u957f")])])}],!1,null,null,null);e.default=h.exports},396:function(t,e,s){"use strict";s.r(e);var i=s(133),n={name:"Index",head:function(){return{title:"\u9648\u4e00\u53d1\u513f"}},data:function(){return{albumList:i||[]}},methods:{goPlayList:function(t){this.$router.push({name:"playlist-id",params:{id:t}})}}},a=(s(390),s(2)),r=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page page-index"},[s("div",{staticClass:"container main"},[s("div",{staticClass:"title"},[t._v("\u300a \u5c0f\u6a58\u732b\u7231\u5531\u6b4c \u300b")]),t.albumList&&t.albumList.length?s("div",{staticClass:"album"},t._l(t.albumList,(function(e){return s("div",{staticClass:"album-item",on:{click:function(s){return t.goPlayList(e.name)}}},[s("div",{staticClass:"name"},[t._v(t._s(e.name))])])})),0):t._e(),t.albumList&&t.albumList.length?t._e():s("div",{staticClass:"album album--none"},[s("div",{staticClass:"text"},[t._v("\u6682\u65e0\u6b4c\u5355\u54e6")])])])])}),[],!1,null,null,null);e.default=r.exports},397:function(t,e,s){"use strict";s.r(e);var i={name:"Changelog",head:function(){return{title:"\u66f4\u65b0\u65e5\u5fd7 - \u9648\u4e00\u53d1\u513f"}},data:function(){return{list:[{time:"2020.07.10",name:"v2.1 \u4f18\u5316\u6570\u636e\u8c03\u7528\u5f62\u5f0f"},{time:"2019.12.02",name:"v2.0 \u7531 DS audio \u63d0\u4f9b\u5b8c\u6574\u6b4c\u5355\u6570\u636e\uff0c\u65b0\u7248\u8bd5\u8fd0\u884c"},{time:"2019.11.30",name:"v1.1 \u5468\u672b\u7206\u809d\u5236\u4f5c\u65b0\u7248"},{time:"2019.02.20",name:"v1.1 \u6536\u5f55\u66f4\u591a\u6b4c\u66f2\uff0c\u53d1\u5e03\u7b2c\u4e8c\u7248"},{time:"2019.02.01",name:"v1.0 \u66f4\u6362\u57df\u540d\u4e3a chenyifa.org"},{time:"2019.01.10",name:"v1.0 \u5171\u4eab\u7ed9\u670b\u53cb\uff0c\u7ebf\u4e0a\u7b2c\u4e00\u7248\u53d1\u5e03"},{time:"2018.11.07",name:"v0.1 \u4e3a\u4e86\u65b9\u4fbf\u542c\u6b4c\uff0c\u8c03\u53d6\u7f51\u4e0a\u6b4c\u5355\u5e76\u672c\u5730\u5316"}]}}},n=(s(384),s(2)),a=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page page-changelog"},[s("div",{staticClass:"container"},[s("div",{staticClass:"main"},[s("div",{staticClass:"title"},[t._v("\u66f4\u65b0\u65e5\u5fd7")]),s("div",{staticClass:"list"},t._l(t.list,(function(e){return s("div",{staticClass:"list-item"},[s("kbd",{staticClass:"time"},[t._v(t._s(e.time))]),s("div",{staticClass:"name"},[t._v(" "+t._s(e.name))])])})),0)])])])}),[],!1,null,null,null);e.default=a.exports},398:function(t,e,s){"use strict";s.r(e);s(33),s(35),s(25),s(31),s(28),s(29),s(30),s(13),s(38);var i=s(20),n=(s(18),s(32),s(3)),a=s(126),r=s.n(a),o=s(387),c=s.n(o),l=s(388),u=s.n(l),d=s(11),h=s.n(d);function m(t,e){var s;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(s=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);"Object"===s&&t.constructor&&(s=t.constructor.name);if("Map"===s||"Set"===s)return Array.from(t);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){s&&(t=s);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,o=!1;return{s:function(){s=t[Symbol.iterator]()},n:function(){var t=s.next();return r=t.done,t},e:function(t){o=!0,a=t},f:function(){try{r||null==s.return||s.return()}finally{if(o)throw a}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,i=new Array(e);s<e;s++)i[s]=t[s];return i}var f={name:"Search",head:function(){return{title:"\u641c\u7d22: ".concat(this.keyword," - \u9648\u4e00\u53d1\u513f")}},data:function(){return{keyword:this.$route.params.keyword,statusList:[],songs:[],audios:[],chunkList:[],isSearch:!1,loadText:"\u641c\u7d22"}},methods:{onSearch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var n,a,r,o,l,d,v,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.keyword){e.next=3;break}return t.$msg("\u8bf7\u8f93\u5165\u5173\u952e\u8bcd\u641c\u7d22"),e.abrupt("return");case 3:if(!t.isSearch){e.next=5;break}return e.abrupt("return");case 5:if(t.isSearch=!0,t.loadText="\u641c\u7d22\u4e2d",t.statusList=[],n=s(133)||[],h()(n)){e.next=15;break}return window._czc&&window._czc.push(["_trackEvent","\u641c\u7d22",t.keyword,"\u6b4c\u5355\u4e3a\u7a7a"]),t.$msg("\u641c\u7d22\u5931\u8d25\uff0c\u6b4c\u5355\u4e3a\u7a7a"),t.isSearch=!1,t.loadText="\u641c\u7d22",e.abrupt("return");case 15:a=[],r=m(n);try{for(r.s();!(o=r.n()).done;)l=o.value,d=s(223)("./songs-".concat(l.name,".json"))||[],v=u()(d,(function(e){return e.title.indexOf(t.keyword)>-1})),a=[].concat(Object(i.a)(a),Object(i.a)(v))}catch(p){r.e(p)}finally{r.f()}if(window._czc&&window._czc.push(["_trackEvent","\u641c\u7d22",t.keyword,h()(a)]),h()(a)){e.next=24;break}return t.statusList.push("<strong>\u6682\u65e0\u641c\u7d22\u7ed3\u679c\uff0c\u6362\u4e2a\u5173\u952e\u8bcd\u8bd5\u8bd5</strong>"),t.isSearch=!1,t.loadText="\u641c\u7d22",e.abrupt("return");case 24:t.statusList.push("<strong>\u627e\u5230 ".concat(h()(a)," \u9996\u76f8\u5173\u6b4c\u66f2</strong>")),t.chunkList=c()(a,500),t.songs=t.chunkList.shift(),t.audios=t.getAudioList(t.songs),f=t.$storage.lsGet("__audioList"),h()(f)||t.$store.commit("initAudios",t.audios),t.isSearch=!1,t.loadText="\u641c\u7d22";case 32:case"end":return e.stop()}}),e)})))()},showMore:function(){if(this.chunkList.length){var t=this.chunkList.shift();this.songs=[].concat(Object(i.a)(this.songs),Object(i.a)(t)),this.audios=[].concat(Object(i.a)(this.audios),Object(i.a)(this.getAudioList(t)))}},getAudioList:function(t){var e,i=[],n=s(224),a=m(t);try{for(a.s();!(e=a.n()).done;){var r=e.value;i.push({songid:r.id,name:r.title.replace(/([\s-]+)?\u9648\u4e00\u53d1\u513f/g,""),artist:"\u9648\u4e00\u53d1\u513f",url:"".concat("http://magict.cn:5000/webapi","/stream?id=").concat(r.id),cover:n,lrc:"[00:00.00] \u6b22\u8fce\u6295\u9012\u6b4c\u8bcd\u5230\u4e0b\u9762\u90ae\u7bb1 [00:05.00] s2ng@qq.com",additional:r.additional})}}catch(o){a.e(o)}finally{a.f()}return i},getName:function(t){return t.replace(/([\s-]+)?\u9648\u4e00\u53d1\u513f/g,"")},sec2minute:function(t){var e=parseInt(t/60/60%60),s=parseInt(t/60%60),i=parseInt(t%60),n=[e,s,i];return e||(n=[s,i]),n.join(":").replace(/\b(\d)\b/g,"0$1")},shiwchPlayID:function(t){this.add2Playlist(t,!1),this.$store.commit("setPlayID",t.id),this.$msg("\u5207\u6362\u5230\u5355\u66f2 < ".concat(this.getName(t.title),">"),"ok")},playThisList:function(){this.$store.commit("initAudios",this.audios),this.$msg("\u5207\u6362\u5230\u5f53\u524d ".concat(this.songs.length," \u9996\u6b4c\u66f2"),"ok")},add2Playlist:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if("all"===t)this.$store.commit("setAddAudios",this.audios),e&&this.$msg("\u5f53\u524d ".concat(this.songs.length," \u9996\u6b4c\u66f2\u5df2\u6dfb\u52a0\u5230\u64ad\u653e\u5217\u8868"),"ok");else{var s=r()(this.audios,{songid:t.id});this.$store.commit("setAddAudios",[s]),e&&this.$msg("\u5355\u66f2 < ".concat(this.getName(t.title)," > \u5df2\u6dfb\u52a0\u5230\u64ad\u653e\u5217\u8868"),"ok")}},download:function(t){this.$msg("\u62b1\u6b49\uff0c\u4e0b\u8f7d\u529f\u80fd\u8fd8\u672a\u5b8c\u6210\uff01")}}},p=(s(389),s(2)),g=Object(p.a)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page page-search"},[s("div",{staticClass:"container"},[s("div",{staticClass:"search-bar"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-bar__value",attrs:{type:"text",placeholder:"\u8bf7\u8f93\u5165\u5173\u952e\u8bcd\u641c\u7d22"},domProps:{value:t.keyword},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSearch()},input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),s("button",{staticClass:"search-bar__btn",attrs:{disabled:t.isSearch},on:{click:function(e){return t.onSearch()}}},[t._v(t._s(t.loadText))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.statusList.length,expression:"statusList.length"}],staticClass:"search-status"},t._l(t.statusList,(function(e){return s("div",{staticClass:"search-status__item",domProps:{innerHTML:t._s(e)}})})),0),t.songs.length?s("div",{staticClass:"action"},[s("div",{staticClass:"btn btn-play",on:{click:function(e){return t.playThisList()}}},[t._v("\u64ad\u653e\u5f53\u524d\u6b4c\u5355")]),s("div",{staticClass:"btn btn-add",on:{click:function(e){return t.add2Playlist("all")}}},[t._v("\u6dfb\u52a0\u5230\u64ad\u653e\u5217\u8868")]),t.songs.length?s("div",{staticClass:"length"},[t._v(t._s("\uff08\u5df2\u663e\u793a "+t.songs.length+" \u9996\uff09"))]):t._e()]):t._e(),t.songs.length?s("div",{staticClass:"songs"},[t._m(0),t._l(t.songs,(function(e,i){return s("div",{staticClass:"songs-item",class:{"songs-item--active":t.$store.state.playID===e.id}},[s("div",{staticClass:"index"},[t._v(t._s(i+1))]),s("div",{staticClass:"label",on:{click:function(s){return t.shiwchPlayID(e)}}},[t._v(t._s(t.getName(e.title)))]),s("div",{staticClass:"album"},[t._v(t._s(e.additional.song_tag.album))]),s("div",{staticClass:"duration"},[t._v(t._s(t.sec2minute(e.additional.song_audio.duration)))]),s("div",{staticClass:"action"},[s("div",{staticClass:"btn",on:{click:function(s){return t.add2Playlist(e)}}},[t._v("\u6dfb\u52a0")])])])})),t.chunkList.length>1?s("div",{staticClass:"songs-item songs-item--more",on:{click:function(e){return t.showMore()}}},[t._v("\u52a0\u8f7d\u66f4\u591a")]):t._e()],2):t._e()])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"songs-item songs-item--head"},[e("div",{staticClass:"index"},[this._v("\u5e8f\u53f7")]),e("div",{staticClass:"label"},[this._v("\u6807\u9898")]),e("div",{staticClass:"album"},[this._v("\u6b4c\u5355")]),e("div",{staticClass:"duration"},[this._v("\u65f6\u957f")])])}],!1,null,null,null);e.default=g.exports},399:function(t,e,s){"use strict";s.r(e);var i={name:"Faer",fetch:function(t){(0,t.error)({statusCode:404,message:"\u8f9e\u65e7\u8fce\u65b0\uff0c\u65b0\u7248\u591a\u4e86\u5f88\u591a\u6b4c\u66f2\u54e6\uff0c\u70b9\u4e0a\u9762\u7684\u201c\u9648\u4e00\u53d1\u513f\u201d\u8bd5\u8bd5\u5427\uff01"})}},n=s(2),a=Object(n.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=a.exports},50:function(t,e,s){"use strict";s(38);var i=s(14),n=s.n(i),a={props:{error:{type:Object}},head:function(){return{title:"\u60a8\u8bbf\u95ee\u7684\u5185\u5bb9\u4e0d\u5b58\u5728\uff01"}},methods:{transError:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\u672a\u5b9a\u4e49\u7684\u9519\u8bef",e={"This page could not be found":"\u62b1\u6b49\uff0c\u60a8\u8981\u8bbf\u95ee\u7684\u5185\u5bb9\u4e0d\u5b58\u5728","Unknown middleware":"\u672a\u77e5\u7684\u4e2d\u95f4\u4ef6"};return n()(e,(function(e,s){t=t.replace(s,e)})),t.replace(/Loading chunk (\d+) failed/,"\u6a21\u5757\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u5237\u65b0\u91cd\u8bd5")}}},r=(s(280),s(2)),o=Object(r.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page page-error"},[e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("p",[this._v(this._s(this.transError(this.error.message)))])])])])}),[],!1,null,null,null);e.a=o.exports},79:function(t,e,s){},80:function(t,e,s){},81:function(t,e,s){},82:function(t,e,s){},83:function(t,e,s){},85:function(t,e,s){},87:function(t,e,s){},88:function(t,e,s){},89:function(t,e,s){},90:function(t,e,s){},91:function(t,e,s){}}]);