(function(t){function e(e){for(var o,n,i=e[0],c=e[1],l=e[2],d=0,v=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&v.push(r[n][0]),r[n]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],o=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(o=!1)}o&&(s.splice(e--,1),t=n(n.s=a[0]))}return t}var o={},r={app:0},s=[];function n(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=o,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"3da9":function(t,e,a){t.exports=a.p+"img/書籍MV.a6eef999.png"},4843:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("app-header"),a("v-main",[a("v-container",[a("router-view",{attrs:{books:t.books},on:{"add-book-list":t.addBooks}})],1)],1),a("app-footer")],1)},s=[],n=(a("fb6a"),a("a434"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",[o("v-navigation-drawer",{staticClass:"brown darken-4",attrs:{app:"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",{staticClass:"mx-auto"},[t.$store.state.isAuthenticated?o("div",[o("p",[o("v-btn",{attrs:{text:"",to:"/",dark:""}},[t._v("ホーム")])],1),o("p",[o("v-btn",{attrs:{text:"",to:"/search",dark:""}},[t._v("投稿する")])],1),o("p",[o("v-btn",{attrs:{text:"",to:"/profile",dark:""}},[t._v("マイページ")])],1),o("p",[o("v-btn",{attrs:{text:""},on:{click:t.logout}},[t._v("ログアウト")])],1)]):o("div",[o("v-btn",{attrs:{text:"",to:"/login"}},[t._v("ログイン")]),o("v-btn",{staticClass:"register",attrs:{text:"",to:"/register"}},[t._v("ユーザー登録")])],1)])],1),o("v-app-bar",{attrs:{app:"",color:"grey darken-4",dark:""}},[o("v-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){t.drawer=!t.drawer}}}),o("v-spacer",{staticClass:"hidden-md-and-up"}),o("router-link",{attrs:{to:"/"}},[o("v-toolbar-title",{attrs:{to:"/"}},[t._v(" "+t._s(t.appTitle)+" ")])],1),o("v-spacer",{staticClass:"hidden-sm-and-down"}),o("div",{staticClass:"hidden-md-and-up"},[o("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}})],1),t.$store.state.isAuthenticated?o("div",{staticClass:"hidden-sm-and-down"},[o("v-btn",{attrs:{text:"",to:"/",dark:""}},[t._v("ホーム")]),o("v-btn",{attrs:{text:"",to:"/search",dark:""}},[t._v("投稿する")]),o("v-btn",{attrs:{text:"",to:"/profile",dark:""}},[t._v("マイページ")]),o("v-btn",{attrs:{text:""},on:{click:t.logout}},[t._v("ログアウト")])],1):o("div",{staticClass:"hidden-sm-and-down"},[o("v-btn",{attrs:{text:"",to:"/login"}},[t._v("ログイン")]),o("v-btn",{staticClass:"register",attrs:{text:"",to:"/register"}},[t._v(" ユーザー登録 ")])],1)],1),o("v-img",{attrs:{src:a("3da9")}})],1)}),i=[],c={name:"AppHeader",data:function(){return{appTitle:"ROGO",drawer:!1}},methods:{logout:function(){this.$store.dispatch("userSignOut")}}},l=c,u=a("2877"),d=a("6544"),v=a.n(d),p=a("40dc"),m=a("5bc1"),f=a("8336"),b=a("132d"),h=a("adda"),k=a("8860"),g=a("f774"),w=a("2fa4"),_=a("2a7f"),x=Object(u["a"])(l,n,i,!1,null,null,null),y=x.exports;v()(x,{VAppBar:p["a"],VAppBarNavIcon:m["a"],VBtn:f["a"],VIcon:b["a"],VImg:h["a"],VList:k["a"],VNavigationDrawer:g["a"],VSpacer:w["a"],VToolbarTitle:_["a"]});var V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{padless:""}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" ©︎"+t._s((new Date).getFullYear())+" — youichi ogasawara ")])],1)},I=[],C={name:"AppFooter"},S=C,A=a("62ad"),$=a("553a"),B=Object(u["a"])(S,V,I,!1,null,null,null),O=B.exports;v()(B,{VCol:A["a"],VFooter:$["a"]});var N="books",P={name:"App",components:{AppHeader:y,AppFooter:O},data:function(){return{books:[]}},mounted:function(){if(localStorage.getItem(N))try{this.books=JSON.parse(localStorage.getItem(N))}catch(t){localStorage.removeItem(N)}},methods:{addBooks:function(t){this.books.push({id:this.books.length,title:t.title,image:t.image,discription:t.discription,readDate:"",memo:"",learn:"",important:"",examples:"",different:"",userId:this.$store.state.userId}),this.saveBooks(),this.goToEditPage(this.books.slice(-1)[0].id)},removeBook:function(t){this.books.splice(t,1),this.saveBooks()},saveBooks:function(){var t=JSON.stringify(this.books);localStorage.setItem(N,t)},goToEditPage:function(t){this.$router.push("/edit/".concat(t))}}},R=P,U=(a("034f"),a("7496")),j=a("a523"),T=a("f6c4"),E=Object(u["a"])(R,r,s,!1,null,null,null),F=E.exports;v()(E,{VApp:U["a"],VContainer:j["a"],VMain:T["a"]});var D=a("8c4f"),L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[t.$store.state.isAuthenticated?t._e():a("span",[a("p",{staticClass:"error-message"},[t._v(" ※投稿するには "),a("v-btn",{attrs:{small:"",outlined:"",color:"primary",to:"/login"}},[t._v(" ログイン ")]),t._v(" または "),a("v-btn",{attrs:{small:"",outlined:"",color:"error",to:"/register"}},[t._v(" ユーザー登録 ")]),t._v(" が必要です ")],1)]),t.$store.state.isAuthenticated?a("v-btn",{staticClass:"mx-auto",attrs:{to:"/search",block:"",color:"orange lighten-1"}},[t._v(" おすすめの一冊を投稿 ")]):t._e()],1)],1),a("v-row",t._l(t.books,(function(e,o){return a("v-col",{key:o,attrs:{cols:"12",sm:"6"}},[a("v-card",{staticClass:"mb-8"},[a("v-row",[a("v-col",{attrs:{cols:"5"}},[a("v-img",{attrs:{src:e.image}})],1),a("v-col",{attrs:{cols:"7"}},[a("v-card-title",[t._v(t._s(e.title))]),a("v-spacer"),a("v-card-actions",[a("v-btn",{staticClass:"mx-1",attrs:{to:{name:"BookEdit",params:{id:o}},color:"primary"}},[t._v(" 投稿をみる ")]),a("v-spacer"),e.userId===t.$store.state.userId?a("div",[a("v-btn",{attrs:{color:"error"},on:{click:function(e){return t.deliteLocalStorage(o)}}},[t._v(" 削除 ")])],1):t._e()],1)],1)],1)],1)],1)})),1)],1)},M=[],q="books",J={props:{books:Array},data:function(){return{booklikes:[],count:0,addClick:""}},methods:{addCount:function(){},saveBooks:function(){var t=JSON.stringify(this.books);localStorage.setItem(q,t)},deliteLocalStorage:function(t){var e="データを削除してもいいですか？";window.confirm(e)&&(this.books.splice(t,1),this.saveBooks(),this.books=[],window.location.reload())}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}},z=J,W=a("b0af"),H=a("99d9"),Y=a("0fd9"),G=Object(u["a"])(z,L,M,!1,null,null,null),K=G.exports;v()(G,{VBtn:f["a"],VCard:W["a"],VCardActions:H["a"],VCardTitle:H["c"],VCol:A["a"],VImg:h["a"],VRow:Y["a"],VSpacer:w["a"]});var X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{label:"本を検索する"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"3"}},[a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.search(t.keyword)}}},[t._v(" 検索する ")])],1),a("v-col",{attrs:{cols:"3"}},[a("v-btn",{attrs:{"color:":"",to:"/"}},[t._v("一覧に戻る ")])],1)],1),a("v-row",t._l(t.searchResults,(function(e,o){return a("v-col",{key:e.index,attrs:{cols:"12",md:"6"}},[a("v-card",{staticClass:"mx-auto"},[a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-img",{attrs:{src:e.image}})],1),a("v-col",{attrs:{cols:"8"}},[a("v-card-title",[t._v(" "+t._s(e.title)+" ")]),t._v(" "+t._s(e.description)+" "),a("v-spacer"),a("v-card-actions",[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",color:"indigo"},on:{click:function(e){return t.addBookList(o)}}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-plus ")])],1)],1)],1)],1)],1)],1)})),1)],1)},Q=[],Z=a("b85c"),tt=a("1da1"),et=(a("96cf"),a("2b3d"),a("d3b7"),a("3ca3"),a("ddb0"),a("a4d3"),a("e01a"),{name:"BookSearch",data:function(){return{keyword:"",searchResults:[]}},methods:{addBookList:function(t){this.$emit("add-book-list",this.searchResults[t])},search:function(t){var e=this;return Object(tt["a"])(regeneratorRuntime.mark((function a(){var o,r,s,n,i,c,l,u,d,v;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o="https://www.googleapis.com/books/v1/volumes?",r={q:"intitle:".concat(t),maxResults:40},s=new URLSearchParams(r),a.next=5,fetch(o+s).then((function(t){return t.json()}));case 5:n=a.sent,i=Object(Z["a"])(n.items);try{for(i.s();!(c=i.n()).done;)l=c.value,u=l.volumeInfo.title,d=l.volumeInfo.imageLinks,v=l.volumeInfo.description,e.searchResults.push({title:u||"",image:d?d.thumbnail:"",description:v?v.slice(0,40):""})}catch(p){i.e(p)}finally{i.f()}case 8:case"end":return a.stop()}}),a)})))()}}}),at=et,ot=a("8654"),rt=Object(u["a"])(at,X,Q,!1,null,null,null),st=rt.exports;v()(rt,{VBtn:f["a"],VCard:W["a"],VCardActions:H["a"],VCardTitle:H["c"],VCol:A["a"],VIcon:b["a"],VImg:h["a"],VRow:Y["a"],VSpacer:w["a"],VTextField:ot["a"]});var nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticClass:"mx-auto"},[a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-img",{attrs:{src:t.book.image}})],1),a("v-col",{attrs:{cols:"8"}},[a("v-card-title",[t._v(" タイトル："+t._s(t.book.title)+" ")]),t._v(" 読んだ日： "),a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{readonly:""},model:{value:t.book.date,callback:function(e){t.$set(t.book,"date",e)},expression:"book.date"}},"v-text-field",r,!1),o))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-date-picker",{attrs:{locale:"jp-ja","day-format":function(t){return new Date(t).getDate()}},on:{input:function(e){t.menu=!1}},model:{value:t.book.date,callback:function(e){t.$set(t.book,"date",e)},expression:"book.date"}})],1),t._v(" この本にはどんな情報が書かれているか："),a("v-textarea",{staticClass:"mx-2",attrs:{rows:"3"},model:{value:t.book.memo,callback:function(e){t.$set(t.book,"memo",e)},expression:"book.memo"}},[t._v(" "+t._s(t.book.memo)+" ")]),t._v(" 自分はこの本から何を学んだか："),a("v-textarea",{staticClass:"mx-2",attrs:{rows:"3"},model:{value:t.book.learn,callback:function(e){t.$set(t.book,"learn",e)},expression:"book.learn"}},[t._v(" "+t._s(t.book.learn)+" ")]),t._v(" この本がなぜ重要なのか："),a("v-textarea",{staticClass:"mx-2",attrs:{rows:"3"},model:{value:t.book.important,callback:function(e){t.$set(t.book,"important",e)},expression:"book.important"}},[t._v(" "+t._s(t.book.important)+" ")]),t._v(" テーマに対しどのような事例を出しているか："),a("v-textarea",{staticClass:"mx-2",attrs:{rows:"3"},model:{value:t.book.examples,callback:function(e){t.$set(t.book,"examples",e)},expression:"book.examples"}},[t._v(" "+t._s(t.book.examples)+" ")]),t._v(" この本が他の本と似ている所、違う要素は何か："),a("v-textarea",{staticClass:"mx-2",attrs:{rows:"3"},model:{value:t.book.different,callback:function(e){t.$set(t.book,"different",e)},expression:"book.different"}},[t._v(" "+t._s(t.book.different)+" ")]),a("v-card-actions",[a("v-btn",{attrs:{color:"secondary",to:"/"}},[t._v("一覧に戻る")]),t.book.userId===this.$store.state.userId?a("v-btn",{attrs:{color:"info"},on:{click:t.updateBookInfo}},[t._v(" 投稿する "+t._s(t.books.userId)+" ")]):t._e()],1)],1)],1)],1)],1)],1)],1)},it=[],ct="books",lt={name:"BookEdit",props:{books:Array},data:function(){return{book:"",date:"",menu:!1}},methods:{updateBookInfo:function(){console.log(this.$store.state.userId),this.saveBooks(),this.$router.push("/")},saveBooks:function(){var t=JSON.stringify(this.books);localStorage.setItem(ct,t)}},computed:{getStateUser:function(t){return t.user}},beforeRouteEnter:function(t,e,a){a((function(t){t.$nextTick((function(){t.book=t.books[t.$route.params.id],t.book.readDate?t.date=t.book.readDate:t.date=(new Date).toISOString().substr(0,10)}))}))}},ut=lt,dt=(a("80c3"),a("2e4b")),vt=a("e449"),pt=a("a844"),mt=Object(u["a"])(ut,nt,it,!1,null,"11cb4890",null),ft=mt.exports;v()(mt,{VBtn:f["a"],VCard:W["a"],VCardActions:H["a"],VCardTitle:H["c"],VCol:A["a"],VDatePicker:dt["a"],VImg:h["a"],VMenu:vt["a"],VRow:Y["a"],VTextField:ot["a"],VTextarea:pt["a"]});var bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-main",[a("v-card",{staticClass:"mx-auto mt-5",attrs:{width:"500"}},[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-card-title",[t._v("ログインフォーム")])],1),a("v-card-text",[a("v-text-field",{attrs:{name:"email",label:"Email",type:"email",rules:t.emailRules,"prepend-icon":"mdi-email",required:"","data-cy":"loginEmailField"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{name:"password",label:"Password",type:t.showPassword?"text":"password",rules:t.passwordRules,"prepend-icon":"mdi-lock","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off","data-cy":"loginPasswordField",required:""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{to:"/","color:":""}},[t._v(" トップへ戻る ")]),a("v-btn",{attrs:{color:"info",disabled:!t.valid,"data-cy":"loginSubmitBtn"},on:{click:t.submit}},[t._v(" ログイン ")])],1)],1)],1)],1)},ht=[],kt={name:"LogIn",data:function(){return{valid:!1,showPassword:!1,email:"",password:"",emailRules:[function(t){return!!t||"メールアドレスを入力してください"},function(t){return/.+@.+/.test(t)||"正しいメールアドレスを入力してください"}],passwordRules:[function(t){return!!t||"パスワードを入力してください"},function(t){return t.length>=6||"パスワードは6文字以上で入力してください"}]}},methods:{submit:function(){this.$refs.form.validate()&&this.$store.dispatch("userLogin",{email:this.email,password:this.password})}}},gt=kt,wt=a("ce7e"),_t=a("4bd4"),xt=a("71d9"),yt=Object(u["a"])(gt,bt,ht,!1,null,null,null),Vt=yt.exports;v()(yt,{VBtn:f["a"],VCard:W["a"],VCardActions:H["a"],VCardText:H["b"],VCardTitle:H["c"],VDivider:wt["a"],VForm:_t["a"],VMain:T["a"],VSpacer:w["a"],VTextField:ot["a"],VToolbar:xt["a"]});var It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-main",[a("v-card",{staticClass:"mx-auto mt-5",attrs:{width:"500"}},[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-card-title",[t._v("ユーザー登録")])],1),a("v-card-text",[a("v-text-field",{attrs:{name:"username",label:"Username",type:"text","prepend-icon":"mdi-account",required:"","data-cy":"userNameField"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),a("v-text-field",{attrs:{name:"email",label:"Email",type:"email",rules:t.emailRules,"prepend-icon":"mdi-email",required:"","data-cy":"registerEmailField"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{name:"password",label:"Password",type:t.showPassword?"text":"password",rules:t.passwordRules,"prepend-icon":"mdi-lock","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off","data-cy":"registerPasswordField",required:""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("p",{attrs:{"mr-4":""}},[t._v("既にアカウントをお持ちですか？ "),a("router-link",{attrs:{to:"/login"}},[t._v("ログインはこちらから")])],1),a("v-spacer"),a("v-btn",{attrs:{color:"error",disabled:!t.valid,"data-cy":"registerSubmitBtn"},on:{click:t.submit}},[t._v("登録")])],1)],1)],1)],1)},Ct=[],St={name:"Register",data:function(){return{valid:!1,showPassword:!1,userName:"",email:"",password:"",emailRules:[function(t){return!!t||"メールアドレスを入力してください"},function(t){return/.+@.+/.test(t)||"正しいメールアドレスを入力してください"}],passwordRules:[function(t){return!!t||"パスワードを入力してください"},function(t){return t.length>=6||"パスワードは6文字以上で入力してください"}]}},methods:{submit:function(){this.$refs.form.validate()&&this.$store.dispatch("userRegister",{userName:this.userName,email:this.email,password:this.password})}}},At=St,$t=(a("749b"),Object(u["a"])(At,It,Ct,!1,null,"74e78e8b",null)),Bt=$t.exports;v()($t,{VBtn:f["a"],VCard:W["a"],VCardActions:H["a"],VCardText:H["b"],VCardTitle:H["c"],VDivider:wt["a"],VForm:_t["a"],VMain:T["a"],VSpacer:w["a"],VTextField:ot["a"],VToolbar:xt["a"]});var Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[t.getStateUserName?a("p",[t._v("こんにちは！ "+t._s(t.getStateUserName)+"さん ")]):a("p",[t._v("こんにちは！ゲストユーザーさん")]),a("p",[a("v-btn",{attrs:{color:"orange lighten-1",to:"/search"}},[t._v(" 本を投稿する ")])],1),a("p",[a("v-btn",{staticClass:"delete-btn",attrs:{color:"error"},on:{click:t.deleteUser}},[t._v(" アカウントを削除 ")])],1),t._l(t.books,(function(e,o){return a("v-col",{key:o,attrs:{cols:"12",sm:"6",md:"6"}},[e.userId===t.$store.state.userId?a("v-card",{staticClass:"mb-8"},[a("v-row",[a("v-col",{attrs:{cols:"3"}},[a("v-img",{attrs:{src:e.image}})],1),a("v-col",{attrs:{cols:"9"}},[a("v-card-title",[t._v(t._s(e.title))]),a("v-spacer"),a("v-card-actions",[a("v-btn",{staticClass:"mx-1",attrs:{to:{name:"BookEdit",params:{id:o}},color:"primary"}},[t._v(" 編集する ")]),a("v-spacer"),a("v-btn",{attrs:{color:"error"},on:{click:function(e){return t.deliteLocalStorage(o)}}},[t._v(" 削除 ")])],1)],1)],1)],1):t._e()],1)}))],2)],1)],1)},Nt=[],Pt="books",Rt={props:{books:Array},name:"Profile",data:function(){return{user:this.$store.getters.getStateUser,userName:""}},methods:{deleteUser:function(){this.$store.dispatch("userDelete")},saveBooks:function(){var t=JSON.stringify(this.books);localStorage.setItem(Pt,t)},deliteLocalStorage:function(t){var e="データを削除してもいいですか？";window.confirm(e)&&(this.books.splice(t,1),this.saveBooks(),this.books=[],window.location.reload())}},computed:{getStateUser:function(){return this.$store.getters.getStateUser},getStateUserName:function(){return this.$store.getters.getUserName},isAuthenticated:function(){return this.$store.getters.isAuthenticated}}},Ut=Rt,jt=Object(u["a"])(Ut,Ot,Nt,!1,null,null,null),Tt=jt.exports;v()(jt,{VBtn:f["a"],VCard:W["a"],VCardActions:H["a"],VCardTitle:H["c"],VCol:A["a"],VImg:h["a"],VRow:Y["a"],VSpacer:w["a"]}),o["a"].use(D["a"]);var Et=[{path:"*",redirect:"/login"},{path:"/login",name:"LogIn",component:Vt},{path:"/",name:"BookIndex",component:K,meta:{requiresAuth:!0}},{path:"/search",name:"BookSearch",component:st},{path:"/edit/:id",name:"BookEdit",component:ft},{path:"/register",name:"Register",component:Bt},{path:"/profile",name:"Profile",component:Tt}],Ft=new D["a"]({mode:"history",base:"/",routes:Et}),Dt=Ft,Lt=a("2f62"),Mt=a("2591"),qt=a("0e44");o["a"].use(Lt["a"]);var Jt=new Lt["a"].Store({strict:!0,state:{user:null,drawer:!1,userName:"",userId:"",updateBookInfo:"",status:!1,isAuthenticated:!1,count:0},mutations:{setUser:function(t,e){t.user=e},onAuthStateChanged:function(t,e){t.user=e},onUserStatusChanged:function(t,e){t.status=e},setIsAuthenticated:function(t,e){t.isAuthenticated=e},addCount:function(t){t.count++},setUserName:function(t,e){t.userName=e,console.log(t.userName)},setUserId:function(t,e){t.userId=e,console.log(t.userId)},setUpdateBookInfo:function(t,e){t.updateBookInfo=e}},actions:{userRegister:function(t,e){var a=t.commit,o=e.email,r=e.password,s=e.userName;Mt["a"].auth().createUserWithEmailAndPassword(o,r).then((function(t){t.user.updateProfile({displayName:s}),a("setUserName",s),a("setUserId",t.user.uid),a("setIsAuthenticated",!0),Dt.push("/")})).catch((function(){a("setIsAuthenticated",!1),alert("登録済みです"),Dt.push("/register")}))},userLogin:function(t,e){var a=t.commit,o=e.email,r=e.password;Mt["a"].auth().signInWithEmailAndPassword(o,r).then((function(t){a("setUserName",t.user.displayName),a("setUserId",t.user.uid),a("setIsAuthenticated",!0),Dt.push("/")})).catch((function(){a("setIsAuthenticated",!1),alert("ログインに失敗しました"),Dt.push("/login")}))},userSignOut:function(t){var e=t.commit;Mt["a"].auth().signOut().then((function(){e("setIsAuthenticated",!1),Dt.push("app")})).catch((function(){e("setIsAuthenticated",!1),alert("ユーザー登録に失敗しました"),Dt.push("/login")}))},userDelete:function(t){var e=t.commit;Mt["a"].auth().currentUser.delete().then((function(){e("setIsAuthenticated",!1),alert("アカウントを削除しました"),Dt.push("/")})).catch((function(){e("setIsAuthenticated",!1),alert("アカウントを削除に失敗しました"),Dt.push("/")}))}},getters:{isSignedIn:function(t){return t.status},getStateUser:function(t){return t.user},getUserName:function(t){return t.userName},getUserId:function(t){return t.userId}},plugins:[Object(qt["a"])({key:"example",storage:window.sessionStorage})]}),zt=a("260b"),Wt={apiKey:"AIzaSyC9Nxu5MjTts_FnRYnIeqAvNc_Xo3WMtnU",authDomain:"vue-book-library-5d6d5.firebaseapp.com",projectId:"vue-book-library-5d6d5",storageBucket:"vue-book-library-5d6d5.appspot.com",messagingSenderId:"376703859489",appId:"1:376703859489:web:61e3d9b3618bcf24a99c60"};zt["a"].initializeApp(Wt);var Ht=zt["a"],Yt=a("f309");o["a"].use(Yt["a"]);var Gt=new Yt["a"]({});o["a"].config.productionTip=!1,new o["a"]({router:Dt,store:Jt,vuetify:Gt,firebase:Ht,render:function(t){return t(F)}}).$mount("#app")},"749b":function(t,e,a){"use strict";a("4843")},"80c3":function(t,e,a){"use strict";a("aae3")},"85ec":function(t,e,a){},aae3:function(t,e,a){}});
//# sourceMappingURL=app.d369169e.js.map