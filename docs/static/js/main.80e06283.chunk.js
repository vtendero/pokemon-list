(this["webpackJsonpejercicio-1"]=this["webpackJsonpejercicio-1"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"bulbasaur","types":["poison","grass"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{"id":2,"name":"ivysaur","types":["poison","grass"],"evolution":"bulbasaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{"id":3,"name":"venusaur","types":["poison","grass"],"evolution":"ivysaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{"id":4,"name":"charmander","types":["fire"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{"id":6,"name":"charizard","types":["flying","fire"],"evolution":"charmeleon","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{"id":7,"name":"squirtle","types":["water"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{"id":10,"name":"caterpie","types":["bug"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}]')},,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),o=s.n(n),i=s(8),a=s.n(i),r=(s(14),s(7)),c=s(2),l=(s(15),s(0)),m=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("img",{className:"header__img",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png",alt:"Logo de pokemon"})})},p=s.p+"static/media/world.3683770c.jpg",u=(s(17),function(){return Object(l.jsxs)("footer",{className:"footer",children:[Object(l.jsxs)("div",{className:"footer__info",children:[Object(l.jsx)("small",{className:"footer__info--copy",children:"vtendero \xa9 2021"}),Object(l.jsx)("small",{className:"footer__info--motto",children:"dark mode coding"}),Object(l.jsxs)("section",{className:"footer__socialMedia",children:[Object(l.jsx)("a",{className:"footer__socialMedia--icon",title:"GitHub",href:"https://github.com/vtendero",target:"_blank",children:Object(l.jsx)("i",{className:"fab fa-github footer__socialMedia--icon"})}),Object(l.jsx)("a",{className:"footer__socialMedia--icon",title:"Linkedin",href:"https://www.linkedin.com/in/valle-tendero/",target:"_blank",children:Object(l.jsx)("i",{className:"fab fa-linkedin footer__socialMedia--icon"})})]})]}),Object(l.jsx)("img",{className:"footer__logo",src:p,alt:"Logo"})]})}),d=s(9),j=s(6),b=(s(18),function(e){var t=Object(j.useState)(""),s=Object(c.a)(t,2),n=s[0],o=s[1],i=Object(j.useState)(""),a=Object(c.a)(i,2),r=a[0],m=a[1],p=e.types.map((function(e,t){return Object(l.jsx)("li",{className:"pokemonList__item--types_item ".concat(e),children:e},t)}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{className:"pokemonList__item--image",src:e.url,alt:"imagen de ".concat(e.name)}),Object(l.jsx)("div",{className:"circle ".concat(n)}),Object(l.jsx)("div",{className:"line ".concat(n)}),Object(l.jsx)("h3",{className:"pokemonList__item--name",children:e.name}),Object(l.jsx)("ul",{className:"pokemonList__item--types",children:p}),Object(l.jsx)("div",{className:"pokemonList__item--heart ".concat(r),title:"A\xf1adir a favoritos",id:e.id,onClick:function(){e.handlePokemon(e.id),o(n?"":"fav-hide"),m(r?"":"fav-size")},children:"\u2764\ufe0e"})]})}),h=(s(19),function(e){var t=e.pokemons.map((function(t){return Object(l.jsx)("li",{className:"pokemonList__item",id:t.id,children:Object(l.jsx)(b,{id:t.id,name:t.name,url:t.url,types:t.types,handlePokemon:e.handlePokemon})},t.id.toString())}));return Object(l.jsx)("main",{className:"main",children:Object(l.jsx)("ul",{className:"pokemonList",children:t})})}),g=function(){var e=Object(n.useState)(d),t=Object(c.a)(e,1)[0],s=Object(n.useState)([]),o=Object(c.a)(s,2),i=o[0],a=o[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{}),Object(l.jsx)(h,{pokemons:t,handlePokemon:function(e){var s=t.find((function(t){return e===t.id})),n=i.findIndex((function(t){return e===t.id}));-1===n?(i.push(s),a(Object(r.a)(i))):(i.splice(n,1),a(Object(r.a)(i)))}}),Object(l.jsx)(u,{})]})};a.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.80e06283.chunk.js.map