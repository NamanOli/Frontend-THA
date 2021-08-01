(this.webpackJsonpcart=this.webpackJsonpcart||[]).push([[0],{20:function(t,e,n){t.exports=n(32)},25:function(t,e,n){},26:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var a=n(3),c=n.n(a),o=n(17),r=n.n(o),i=(n(25),n(9)),s=n(10),l=n(12),u=n(11),d=(n(26),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.props.product,n=e.qty,a=e.price,o=e.title,r=this.props.product;return c.a.createElement("div",{className:"cart-item"},c.a.createElement("div",{className:"left-block"},c.a.createElement("img",{style:{height:110,width:110,borderRadius:5,background:"#ccc"},src:r.img})),c.a.createElement("div",{className:"right-block"},c.a.createElement("div",{style:{fontSize:25}}," ",o," "),c.a.createElement("div",{style:{color:"#777"}},a),c.a.createElement("div",{style:{color:"#777"}},"Qty: ",n),c.a.createElement("div",{className:"cart-item-actions"},c.a.createElement("img",{alt:"add",src:"https://image.flaticon.com/icons/svg/1665/1665578.svg",className:"action-icons",onClick:function(){return t.props.onIncreaseQuantity(r)}}),c.a.createElement("img",{alt:"minus",src:"https://image.flaticon.com/icons/svg/1665/1665612.svg",className:"action-icons",onClick:function(){return t.props.onDecreaseQuantity(r)}}),c.a.createElement("img",{alt:"delete",src:"https://image.flaticon.com/icons/svg/1214/1214428.svg",className:"action-icons",onClick:function(){return t.props.onDeleteProduct(r.id)}}))))}}]),n}(c.a.Component)),p=function(t){var e=t.products;return c.a.createElement("div",{className:"cart"},e.map((function(e){return c.a.createElement(d,{key:e.id,product:e,onIncreaseQuantity:t.onIncreaseQuantity,onDecreaseQuantity:t.onDecreaseQuantity,onDeleteProduct:t.onDeleteProduct})})))},m={nav:{height:70,background:"#4267b2",display:"flex",justifyContent:"flex-end",alignItems:"center"},cartIcon:{height:32,marginRight:20},cartIconContainer:{position:"relative"},cartCount:{background:"yellow",borderRadius:"50%",padding:"4px 8px",position:"absolute",right:0,top:-9}},h=function(t){return console.log("props",t),c.a.createElement("div",{style:m.nav},c.a.createElement("div",{style:m.cartIconContainer},c.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/1170/1170678.svg",style:m.cartIcon}),c.a.createElement("span",{style:m.cartCount},t.count)))},f=n(18),g=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).handleIncreaseQuantity=function(e){var n=t.state.products,a=n.indexOf(e);t.db.collection("products").doc(n[a].id).update({qty:n[a].qty+1}).then((function(){console.log("Document updated sucessfully")})).catch((function(t){console.log(t)}))},t.handleDecreaseQuantity=function(e){var n=t.state.products,a=n.indexOf(e);0!==n[a].qty&&t.db.collection("products").doc(n[a].id).update({qty:n[a].qty-1}).then((function(){console.log("Document updated sucessfully")})).catch((function(t){console.log(t)}))},t.handleDeleteProduct=function(e){t.state.products;t.db.collection("products").doc(e).delete().then((function(){console.log("Deleted sucessfully")})).catch((function(t){console.log(t)}))},t.getcountOfCartItems=function(){var e=t.state.products,n=0;return e.forEach((function(t){n+=t.qty})),n},t.getcartTotal=function(){var e=t.state.products,n=0;return e.map((function(t){return t.qty>0&&(n+=t.qty*t.price),""})),n},t.addProduct=function(){t.db.collection("products").add({img:"",price:900,qty:3,title:"Washing Machine"}).then((function(t){t.get().then((function(t){console.log("Product has been added",t.data())}))})).catch((function(t){console.log(t)}))},t.state={products:[],loading:!0},t.db=f.a.firestore(),t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.db.collection("products").orderBy("price","desc").onSnapshot((function(e){var n=e.docs.map((function(t){var e=t.data();return e.id=t.id,e}));t.setState({products:n,loading:!1})}))}},{key:"render",value:function(){var t=this.state,e=t.products,n=t.loading;return c.a.createElement("div",{className:"App"},c.a.createElement(h,{count:this.getcountOfCartItems()}),c.a.createElement(p,{onIncreaseQuantity:this.handleIncreaseQuantity,onDecreaseQuantity:this.handleDecreaseQuantity,onDeleteProduct:this.handleDeleteProduct,products:e}),n&&c.a.createElement("h1",null,"Loading Products..."),c.a.createElement("div",{style:{padding:10,fontSize:20}},"TOTAL : ",this.getcartTotal()))}}]),n}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=n(19);n(31);y.a.initializeApp({apiKey:"AIzaSyACMQgM6ohz3aLExcTKaJHdWsEyPho_77M",authDomain:"cart-e3981.firebaseapp.com",projectId:"cart-e3981",storageBucket:"cart-e3981.appspot.com",messagingSenderId:"585301107083",appId:"1:585301107083:web:e3df3c79242e7730ea8f8e"}),r.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.efb053d7.chunk.js.map