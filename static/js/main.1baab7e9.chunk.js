(this.webpackJsonprouterproject=this.webpackJsonprouterproject||[]).push([[0],{12:function(e){e.exports=JSON.parse('{"Clothes":{"Not Clothes":[{"id":2,"name":"small toy","price":"6.00","img":"../images/watergun.jpeg"},{"id":3,"name":"big toy","price":"24.99","img":"../images/train.jpg"}]},"Electronics":{"Video Games":[{"id":4,"name":"Dark Souls","price":"60.00","img":"../images/game.webp"}]},"Groceries":{"Fish":[{"id":6,"name":"green fish","price":"29.50","img":"../images/fish1.webp"}],"Meat":[{"id":7,"name":"steak","price":"13.99","img":"../images/new-york-strip.jpg"}],"Fruit":[{"id":0,"name":"peach","price":"3.20","img":"../images/Peach-Free-Download-PNG.png"},{"id":1,"name":"apple","price":"2.62","img":"../images/apple.png"},{"id":5,"name":"banana","price":".68","img":"../images/banana.jpg"}],"Canned Goods":[{"id":8,"name":"canned  tomato","price":".98","img":"../images/canned-tomato.png"}]}}')},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(18),i=c.n(a),s=(c(25),c(9)),o=c(8),d=c(13),j=(c(26),c(7)),u=c(2),l=(c(27),c(0));function b(e){var t=[],c=0;return function(){for(var c in e.productsInCart)t.push(e.productsInCart[c])}(),0==t.length?Object(l.jsx)(m,{}):Object(l.jsxs)("div",{id:"Cart",children:[Object(l.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),Object(l.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),Object(l.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap",rel:"stylesheet"}),Object(l.jsx)("div",{className:"cartBuffer",children:"Shopping Cart"}),Object(l.jsx)("div",{className:"cartItems",children:t.map((function(t){return function(e){c+=parseFloat(e)}(t.product.price*t.count),Object(l.jsxs)("div",{className:"cartItem",children:[Object(l.jsxs)("div",{className:"cartUpper",children:[Object(l.jsx)("p",{children:t.product.name}),Object(l.jsxs)("p",{children:["$",t.product.price]}),Object(l.jsxs)("div",{className:"cartCounts",children:[Object(l.jsx)("button",{className:"cartButton",onClick:function(){return e.addOrRemoveProduct(t.product,-1)},children:"-"}),t.count,Object(l.jsx)("button",{className:"cartButton",onClick:function(){return e.incrementProduct({id:t.product.id},1)},children:"+"})]})]}),Object(l.jsx)("div",{className:"cartImageContainer",children:Object(l.jsx)("img",{className:"cartImage",src:t.product.img})})]})}))}),Object(l.jsx)("div",{className:"cartBuffer"}),Object(l.jsx)("div",{id:"checkoutButtonContainer",children:Object(l.jsx)("button",{className:"checkoutButton",onClick:function(){alert("Check out!")},children:"Checkout"})}),Object(l.jsxs)("div",{children:["Order Total: $",c.toFixed(2)]}),Object(l.jsx)("div",{id:"CartPageCover",onClick:function(){p()}})]})}function m(){return Object(l.jsxs)("div",{id:"Cart",children:["Cart is empty!",Object(l.jsx)("div",{id:"CartPageCover",onClick:function(){p()}})]})}function p(){document.getElementById("Cart").classList.remove("checkingOut")}var O=c(12),h=(c(29),c(30),O),g=["Groceries","Clothes","Electronics"];var x=function(e){return Object(n.useEffect)((function(){return e.setPage(e.sideBar),function(){e.setPage("")}}),[]),e.isSubMenu?Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{id:"productsHeader",children:e.title}),Object(l.jsx)("div",{id:"products",children:e.productArray.map((function(t,c){return Object(l.jsxs)("div",{className:"product",children:[t.name,Object(l.jsx)("div",{className:"productImageContainer",children:Object(l.jsx)("img",{className:"productImage",src:"../".concat(t.img)})}),Object(l.jsx)("button",{onClick:function(){return e.addOrRemoveProduct(t,1)},children:"Add to Cart"})]},c)}))})]},Math.random()):Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{id:"productsHeader",children:e.title}),Object(l.jsx)("div",{id:"products",children:Object.entries(e.productArray).map((function(t,c){return t[1].map((function(t,c){return Object(l.jsxs)("div",{className:"product",children:[t.name,Object(l.jsx)("div",{className:"productImageContainer",children:Object(l.jsx)("img",{className:"productImage",src:"../".concat(t.img)})}),Object(l.jsx)("button",{onClick:function(){return e.addOrRemoveProduct(t,1)},children:"Add to Cart"})]},c)}))}))})]},Math.random())};function f(e){return e.page?Object(l.jsx)("div",{id:"sideBar",children:Object.entries(e.page[1]).map((function(t,c){return Object(l.jsx)(j.b,{to:"/Products/".concat(e.page[0],"/").concat(t[0]),children:Object(l.jsxs)("div",{className:"sideBarCategory",children:[t[0],Object.entries(t[1]).map((function(e,t){return Object(l.jsx)("div",{className:"sideBarProduct",children:e[1].name},t)}))]})},c)}))}):Object(l.jsx)("div",{})}var v=O;function C(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)(f,{page:e.page}),Object(l.jsx)("nav",{id:"productsHeader",children:g.map((function(e,t){return Object(l.jsxs)("div",{className:"productBlockHeader",children:[Object(l.jsx)(j.b,{to:"/Products/".concat(e),children:Object(l.jsx)("div",{children:e})}),Object(l.jsx)(k,{block:v[e],page:e})]},t)}))}),Object(l.jsx)(N,{})]})}function N(){return window.location.href.length>42?Object(l.jsx)("div",{id:"SplashImageContainer",children:Object(l.jsx)("img",{id:"SplashImage",src:"../../images/supermarket.jpg"})}):Object(l.jsx)("div",{id:"SplashImageContainer",children:Object(l.jsx)("img",{id:"SplashImage",src:"../images/supermarket.jpg"})})}function k(e){return Object(l.jsx)("div",{className:"productBlock",children:Object.keys(e.block).map((function(t,c){return Object(l.jsx)(j.b,{to:"/Products/".concat(e.page,"/").concat(t),children:Object(l.jsxs)("div",{className:"productBlockTitle",children:[t,e.block[t].map((function(e){return Object(l.jsx)("div",{className:"productBlockSubTitle",children:e.name},Math.random())}))]})},c)}))})}function P(e){return Object(l.jsx)("div",{children:"Hey Contact"})}function B(){return Object(l.jsx)("div",{children:"Home Page!"})}var I=c.p+"static/media/Cheeseburger.81fdb64b.jpg";c(36);function y(e){return Object(l.jsxs)("nav",{id:"NavBar",children:[Object(l.jsx)("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"}),Object(l.jsx)("h3",{className:"NavLogoWrapper",children:Object(l.jsx)("img",{className:"NavLogo",src:I,alt:""})}),Object(l.jsx)(j.b,{to:"/Contact",children:Object(l.jsx)("li",{className:"navItem",children:"Contact"})}),Object(l.jsx)(j.b,{to:"/",children:Object(l.jsx)("li",{className:"navItem",children:"Home"})}),Object(l.jsxs)("button",{className:"navItem",onClick:function(e){e.stopPropagation(),document.getElementById("Cart").classList.toggle("checkingOut")},children:[Object(l.jsx)("i",{className:"fa fa-shopping-cart"})," ",e.totalProducts]})]})}var S=function(e){return Object.entries(h).map((function(t,c){return Object.entries(t[1]).map((function(c,n){return Object(l.jsx)(u.a,{exact:!0,path:"/Products/".concat(t[0],"/").concat(c[0]),children:Object(l.jsx)(x,{isSubMenu:!0,sideBar:t,title:c[0],productArray:c[1],addOrRemoveProduct:e.addOrRemoveProduct,setPage:e.updatePage})},n)}))}))},w=function(){var e=Object(n.useState)({}),t=Object(d.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(0),i=Object(d.a)(a,2),m=i[0],p=i[1],O=Object(n.useState)(""),g=Object(d.a)(O,2),f=g[0],v=g[1],N=function(e){v(e)},k=function(e,t){if(t>0&&c[e.id])r(Object(o.a)(Object(o.a)({},c),{},Object(s.a)({},e.id,{count:c[e.id].count+t,product:e})));else if(t<0&&c[e.id].count>1)r(Object(o.a)(Object(o.a)({},c),{},Object(s.a)({},e.id,{count:c[e.id].count+t,product:e})));else if(t<0&&1==c[e.id].count){var n=c;delete n[e.id],r(n)}else c[e.id]||r(Object(o.a)(Object(o.a)({},c),{},Object(s.a)({},e.id,{count:1,product:e})));p(m+t)};return Object(l.jsxs)(j.a,{children:[Object(l.jsx)(y,{totalProducts:m}),Object(l.jsx)(C,{addOrRemoveProduct:k,page:f}),Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{exact:!0,path:"/",component:B}),Object(l.jsx)(u.a,{exact:!0,path:"/Contact",children:Object(l.jsx)(P,{})}),Object.entries(h).map((function(e,t){return Object(l.jsx)(u.a,{exact:!0,path:"/Products/".concat(e[0]),children:Object(l.jsx)(x,{isSubMenu:!1,sideBar:e,title:e[0],productArray:e[1],addOrRemoveProduct:k,setPage:N})},t)})),Object(l.jsx)(S,{addOrRemoveProduct:k,updatePage:N})]}),Object(l.jsx)(b,{addOrRemoveProduct:k,productsInCart:c,incrementProduct:function(e){var t=c[e.id].product;r(Object(o.a)(Object(o.a)({},c),{},Object(s.a)({},e.id,{count:c[e.id].count+1,product:t}))),p(m+1)}})]})};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.1baab7e9.chunk.js.map