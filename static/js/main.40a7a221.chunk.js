(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},50:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(20),r=n.n(o),i=(n(30),n(31),n(4)),s=n.n(i),l=n(8),A=n(5),d=n(21),j=n.n(d).a.create({baseURL:"https://api.themoviedb.org/3"}),h=(n(50),n(22)),u=n(25),b=n.n(u),O=n(0);var g=function(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,o=Object(c.useState)([]),r=Object(A.a)(o,2),i=r[0],d=r[1],u=Object(c.useState)(""),g=Object(A.a)(u,2),v=g[0],f=g[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get(n);case 2:return t=e.sent,d(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("h2",{children:t}),Object(O.jsx)("div",{className:"row__posters",children:i.map((function(e,t){return Object(O.jsx)("img",{onClick:function(){return function(e){console.log(e),v?f(""):b()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);f(t.get("v")),console.log(t.get("v")),console.log(v)})).catch((function(e){return console.log(e)}))}(e)},className:"row__poster ".concat(a&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(a?e.poster_path:e.backdrop_path),alt:"sfds"},e.id)}))}),v&&Object(O.jsx)(h.a,{videoId:v,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})})},v="2b9e1916beed0c5dcff29b36c55240db",f={fetchTrending:"/trending/all/week?api_key=".concat(v,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(v,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(v,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(v,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(v,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(v,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(v,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(v,"&with_genres=99")};n(73);var m=function(){var e,t,n=Object(c.useState)([]),a=Object(A.a)(n,2),o=a[0],r=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get(f.fetchNetflixOriginals);case 2:return t=e.sent,r(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(O.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===o||void 0===o?void 0:o.backdrop_path,'")'),backgroundPositio:"center center"},children:[Object(O.jsxs)("div",{className:"banner__contents",children:[Object(O.jsx)("h1",{className:"banner__title",children:(null===o||void 0===o?void 0:o.name)||(null===o||void 0===o?void 0:o.title)||(null===o||void 0===o?void 0:o.original_name)}),Object(O.jsxs)("div",{className:"banner__buttons",children:[Object(O.jsx)("button",{className:"banner__button",children:"Play"}),Object(O.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(O.jsx)("h1",{className:"banner__description",children:(e=null===o||void 0===o?void 0:o.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(O.jsx)("div",{className:"banner--fadeBottom"})]})};n(74);var p=function(){var e=Object(c.useState)(!1),t=Object(A.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(O.jsxs)("div",{className:"nav ".concat(n&&"nav__black"),children:[Object(O.jsx)("img",{className:"nav__logo",src:"https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=61",alt:"Netflix Logo"}),Object(O.jsx)("img",{className:"nav__avatar",src:"data:image/jpeg;base64,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",alt:"Netflix Logo"})]})};var I=function(){return Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)(p,{}),Object(O.jsx)(m,{}),Object(O.jsx)(g,{title:"NETFLIX ORIGINALS",fetchUrl:f.fetchNetflixOriginals,isLargeRow:!0}),Object(O.jsx)(g,{title:"Trending Now",fetchUrl:f.fetchTrending}),Object(O.jsx)(g,{title:"Top Rated",fetchUrl:f.fetchTopRated}),Object(O.jsx)(g,{title:"Action Movies",fetchUrl:f.fetchActionMovies}),Object(O.jsx)(g,{title:"Comedy Movies",fetchUrl:f.fetchComedyMovies}),Object(O.jsx)(g,{title:"Horror Movies",fetchUrl:f.fetchHorrorMovies}),Object(O.jsx)(g,{title:"Romance Movies",fetchUrl:f.fetchRomanceMovies}),Object(O.jsx)(g,{title:"Documentaries",fetchUrl:f.fetchDocumentaries})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(I,{})}),document.getElementById("root")),N()}},[[75,1,2]]]);
//# sourceMappingURL=main.40a7a221.chunk.js.map