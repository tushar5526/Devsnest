(this.webpackJsonpday22=this.webpackJsonpday22||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(8),s=n.n(a),r=n(3),i=(n(7),n(0)),o=function(e){var t=e.templates,n=e.setMeme;return Object(i.jsx)("div",{className:"templates",children:t.map((function(e){return Object(i.jsx)("div",{className:"template",onClick:function(){return n(e)},children:Object(i.jsx)("div",{style:{backgroundImage:"url(".concat(e.url,")")},className:"image"})},e.id)}))})},u=n(9),m=n(4);var j=function(e){var t=e.meme,n=e.setMeme,a=Object(c.useState)({template_id:t.id,username:"tushar5526",password:"qwerty@123",boxes:[]}),s=Object(r.a)(a,2),o=s[0],j=s[1];return Object(i.jsxs)("div",{className:"meme",children:[Object(i.jsx)("img",{src:t.url,alt:""}),Object(i.jsx)("div",{children:Object(u.a)(Array(t.box_count)).map((function(e,t){return Object(i.jsx)("input",{onChange:function(e){var n=o.boxes;n[t]={text:e.target.value},j(Object(m.a)(Object(m.a)({},o),{},{boxes:n}))}},t)}))}),Object(i.jsx)("button",{onClick:function(){var e="https://api.imgflip.com/caption_image?template_id=".concat(o.template_id,"&username=").concat(o.username,"&password=").concat(o.password);o.boxes.map((function(t,n){e+="&boxes[".concat(n,"][text]=").concat(t.text)})),fetch(e).then((function(e){return e.json()})).then((function(e){e.success&&n(Object(m.a)(Object(m.a)({},t),{},{url:e.data.url}))}))},children:"Generate Meme"}),Object(i.jsx)("button",{onClick:function(){return n(null)},children:"Choose template"})]})};var l=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),u=Object(r.a)(s,2),m=u[0],l=u[1];return Object(c.useEffect)((function(){fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){a(e.data.memes)}))}),[]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h1",{children:"Meme Generator"}),null===m?Object(i.jsx)(o,{templates:n,setMeme:l}):Object(i.jsx)(j,{meme:m,setMeme:l})]})};s.a.render(Object(i.jsx)(l,{}),document.getElementById("root"))},7:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.660509a0.chunk.js.map