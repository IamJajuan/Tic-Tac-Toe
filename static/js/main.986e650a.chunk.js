(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{23:function(e,t,n){e.exports={game:"Game_game__3BW-e"}},24:function(e,t,n){e.exports={board:"Board_board__1oBCK",turn:"Board_turn__MXL-J",title:"Board_title__52m9Q"}},30:function(e,t,n){e.exports={title:"GameModal_title__2KBcm",dialog:"GameModal_dialog___lyuC"}},33:function(e,t,n){e.exports={container:"Home_container__Mgayj",title:"Home_title__3qwX2"}},53:function(e,t,n){e.exports={square:"Square_square__18Cnv"}},55:function(e,t,n){e.exports={btn:"Button_btn__1vtC0"}},62:function(e,t,n){},63:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(52),u=n.n(a),s=(n(62),n(63),n(2)),i=n(57),o=n(34),l=n(4),j=function(){var e=Object(r.useState)(!0),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(Array(9).fill(null)),u=Object(l.a)(a,2),s=u[0],i=u[1],o=Object(r.useState)(!0),j=Object(l.a)(o,2),b=j[0],f=j[1];return{markSquare:function(e,t){i((function(n){return n.map((function(n,r){return r===e?t?"X":"O":n}))}))},toggleX:function(){c((function(e){return!e}))},toggleXTurn:function(){f((function(e){return!e}))},resetSquares:function(){return i(Array(9).fill(null))},squares:s,xTurn:b,isX:n}},b=n(53),f=n.n(b),h=n(1);var O=function(e){var t=e.value,n=e.index,r=e.handleClick,c=e.isX,a=e.yourTurn;return Object(h.jsx)("button",{onClick:function(){return a&&r(n,c)},className:f.a.square,children:t})},d=n(24),x=n.n(d),m=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(l.a)(t[n],3),c=r[0],a=r[1],u=r[2];if(e[c]&&e[c]===e[a]&&e[c]===e[u])return e[c]}return null},g=function(e){return e.includes(null)};var v=function(e){var t=e.squares,n=e.handleClick,r=e.xTurn,a=e.isX,u=a&&r||!a&&!r,s=null;g(t)||(s="It's a draw"),m(t)&&(s=u?"You lose":"You Won");var i="";return i=u?"Your Turn":r?"X Turn":"O Turn",Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsx)("h1",{className:x.a.title,children:" Tic-Tac-Toe"}),Object(h.jsx)("div",{className:x.a.board,children:t.map((function(e,t){return Object(h.jsx)(O,{yourTurn:u,isX:a,index:t,handleClick:n,value:e},t)}))}),Object(h.jsxs)("div",{className:x.a.turn,children:["     ",s||i," "]})]})},_=n(54),p=n.n(_),q=n(23),T=n.n(q),k=n(55),C=n.n(k);var S=function(e){var t=e.handleClick,n=e.text;return Object(h.jsx)("button",{className:C.a.btn,onClick:t,children:n})},X=n(30),y=n.n(X);var N=function(e){var t=e.handleRematch,n=e.wantRematch,a=Object(r.useState)("Would you like a rematch?"),u=Object(l.a)(a,2),s=u[0],i=u[1];return Object(r.useEffect)((function(){n&&i("Waiting on the other player")}),[n]),Object(h.jsxs)("dialog",{className:y.a.dialog,open:!0,children:[Object(h.jsx)("h2",{className:y.a.title,children:s}),!n&&Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsx)(S,{text:"Accept",handleClick:function(){return t(!0)}}),Object(h.jsx)(S,{text:"Decline",handleClick:function(){return t(!1)}})]})]})};function w(){var e=j(),t=Object(r.useState)(""),n=Object(l.a)(t,2),c=n[0],a=n[1],u=Object(r.useState)(""),b=Object(l.a)(u,2),f=b[0],O=b[1],d=Object(r.useState)([]),x=Object(l.a)(d,2),_=x[0],q=x[1],k=Object(r.useState)(!1),C=Object(l.a)(k,2),X=C[0],y=C[1],w=Object(s.f)(),B=Object(r.useState)(!1),G=Object(l.a)(B,2),M=G[0],R=G[1],P=e.resetSquares,F=e.squares,E=Object(r.useRef)();return Object(r.useEffect)((function(){var t=p()("http://localhost:3001/");return E.current=t,E.current.emit("Join Game"),E.current.on("Start Game",(function(e){a(e)})),E.current.on("Rematch",(function(e){q((function(t){return[].concat(Object(o.a)(t),[e])}))})),E.current.on("Join Game",(function(t){t||e.toggleX(),E.current.on("Mark",(function(t,n){e.markSquare(t,n),e.toggleXTurn()}))})),E.current.on("Leave Game",(function(e){O(e)})),function(){E.current.close()}}),[]),Object(r.useEffect)((function(){!m(F)&&g(F)||y(!0),_.includes(!1)?(E.current.emit("Leave Game",c,"Game Over, click to go to the main menu"),y(!1)):2===_.length&&(y(!1),P(),q([]),R(!1))}),[_,P,w,F,c]),c?Object(h.jsxs)("div",{className:T.a.game,children:[f&&Object(h.jsx)(S,{text:f,handleClick:function(){return w.push("/")}}),Object(h.jsx)(v,Object(i.a)({handleClick:function(t,n){m(e.squares)||!g(e.squares)||M||e.squares[t]||E.current.emit("Mark",c,t)}},e)),X&&Object(h.jsx)(N,{wantRematch:M,rematchRequests:_,handleRematch:function(e){M||(R(e),q((function(t){return[].concat(Object(o.a)(t),[e])})),E.current.emit("Rematch",e,c))}})]}):Object(h.jsx)("h2",{children:" Waiting for the other player "})}var B=n(33),G=n.n(B);function M(){var e=Object(s.f)();return Object(h.jsxs)("div",{className:G.a.container,children:[Object(h.jsx)("h1",{className:G.a.title,children:"Tic-Tac-Toe"}),Object(h.jsx)(S,{text:"Single Player",handleClick:function(){return e.push("/SinglePlayer")}}),Object(h.jsx)(S,{text:"Two Player",handleClick:function(){return e.push("/TwoPlayer")}})]})}function R(){var e=j(),t=e.markSquare,n=e.toggleXTurn,c=Object(r.useCallback)((function(r,c){m(e.squares)||!g(e.squares)||e.squares[r]||(t(r,c),n())}),[t,n,e.squares]);return Object(r.useEffect)((function(){if(e.isX&&!e.xTurn||!e.isX&&e.xTurn){var t=function(e){for(var t=[],n=0;n<e.length;n++)e[n]||t.push(n);var r=Math.random()*t.length;return t[r=Math.floor(r)]}(e.squares);c(t,!e.isX)}}),[e.isX,e.xTurn,e.squares,c]),Object(h.jsxs)("div",{className:T.a.game,children:[Object(h.jsx)(v,{isX:e.isX,xTurn:e.xTurn,handleClick:c,squares:e.squares}),Object(h.jsx)(S,{handleClick:e.resetSquares,text:"Reset"})]})}var P=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(s.c,{children:[Object(h.jsx)(s.a,{exact:!0,path:"/TwoPlayer",children:Object(h.jsx)(w,{})}),Object(h.jsx)(s.a,{exact:!0,path:"/SinglePlayer",children:Object(h.jsx)(R,{})}),Object(h.jsx)(s.a,{exact:!0,path:"/",children:Object(h.jsx)(M,{})})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,100)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,u=t.getTTFB;n(e),r(e),c(e),a(e),u(e)}))},E=n(17);u.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(E.a,{children:Object(h.jsx)(P,{})})}),document.getElementById("root")),F()}},[[99,1,2]]]);
//# sourceMappingURL=main.986e650a.chunk.js.map