(this["webpackJsonptogether-with-touch"]=this["webpackJsonptogether-with-touch"]||[]).push([[0],{19:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var i=n(8),o=n.n(i),a=n(12),r=n.n(a),u=n(2),s=n.n(u),c=n(3),d=n(4),m=n(0),l=n(1),p=(n(19),n(5)),h=n(13),j=n(6),f=["C","D","E","F","G","A","B"],w=function(t,e){return t.map((function(n){var i=-1!==t.indexOf("C")?t.indexOf("C"):t.indexOf("C#"),o=t.indexOf(n)<i?e-1:e;return"".concat(n).concat(o)}))},b=function(t,e,n){var i=w(t,e),o=function(t,e){var n,o=i.indexOf(t)+e-1;if("undefined"!==typeof i[o])n=i[o];else{n=i[o-7];var a=parseInt(n.slice(1))+1;n="".concat(n.slice(0,1)).concat(a)}return n};return[n,o(n,3),o(n,5)]};p.l.bpm.value=150;var v=b(f,4,"A3"),g=b(f,4,"E4"),O=b(f,3,"F3"),x=b(f,3,"D3");v.push("A2","G4"),g.push("E2","G3"),O.push("F2","E4"),x.push("D2","C4"),console.log(v),console.log(g),console.log(O),console.log(x);var y=new p.j(p.k,{volume:-5,oscillator:{type:"sawtooth"}}).toDestination(),k=[{time:0,note:v,duration:"2n."},{time:"0:3",note:g,duration:"4n"},{time:"1:0",note:O,duration:"2n."},{time:"1:3",note:g,duration:"4n"},{time:"2:0",note:x,duration:"2n."},{time:"2:3",note:g,duration:"4n"},{time:"3:0",note:O,duration:"2n"},{time:"3:2",note:g,duration:"4n"},{time:"3:3",note:x,duration:"4n"},{time:"4:0",note:v,duration:"2n."},{time:"4:3",note:g,duration:"4n"},{time:"5:0",note:O,duration:"2n."},{time:"5:3",note:g,duration:"4n"},{time:"6:0",note:x,duration:"2n."},{time:"6:3",note:g,duration:"4n"},{time:"7:0",note:O,duration:"2n"},{time:"7:2",note:g,duration:"4n"},{time:"7:3",note:x,duration:"4n"}],A=(new p.h((function(t,e){y.triggerAttackRelease(e.note,e.duration,t)}),k).start(0),b(f,5,"A4")),D=b(f,5,"E5"),F=b(f,4,"F4"),G=b(f,4,"D4");v.push("A3","G5"),g.push("E3","D5"),O.push("F3","E5"),x.push("D3","C5");new p.j(p.k,{oscillator:{count:6,spread:80,type:"fatsawtooth"}}).toDestination();var C=[{time:0,note:A,duration:"2n."},{time:"0:3",note:D,duration:"4n"},{time:"1:0",note:F,duration:"2n."},{time:"1:3",note:D,duration:"4n"},{time:"2:0",note:G,duration:"2n."},{time:"2:3",note:D,duration:"4n"},{time:"3:0",note:F,duration:"2n"},{time:"3:2",note:D,duration:"4n"},{time:"3:3",note:G,duration:"4n"},{time:"4:0",note:A,duration:"2n."},{time:"4:3",note:D,duration:"4n"},{time:"5:0",note:F,duration:"2n."},{time:"5:3",note:D,duration:"4n"},{time:"6:0",note:G,duration:"2n."},{time:"6:3",note:D,duration:"4n"},{time:"7:0",note:F,duration:"2n"},{time:"7:2",note:D,duration:"4n"},{time:"7:3",note:G,duration:"4n"}],N=new p.j(p.k,{volume:-16,count:6,spread:80,oscillator:{type:"fatsawtooth"}}).toDestination(),S=(new p.h((function(t,e){N.triggerAttackRelease(e.note,e.duration,t,.5)}),C).start(0),new p.k({oscillator:{volume:5,count:3,spread:40,type:"fatsawtooth"}}).toDestination()),E=(new p.h((function(t,e){S.triggerAttackRelease(e.note,e.duration,t)}),[{time:0,note:"G4",duration:"8n"},{time:"0:0:2",note:"F4",duration:"8n"},{time:"0:1",note:"D4",duration:"8n."},{time:"0:2",note:"D4",duration:"8n"},{time:"0:2:2",note:"F4",duration:"8n."},{time:"0:3",note:"G4",duration:"8n"},{time:"0:3:2",note:"A4",duration:"2n"},{time:"2:0",note:"A4",duration:"8n"},{time:"2:0:2",note:"G4",duration:"8n"},{time:"2:1",note:"F4",duration:"8n"},{time:"2:2",note:"A4",duration:"8n"},{time:"2:2:2",note:"G4",duration:"8n"},{time:"2:3",note:"E4",duration:"8n"},{time:"2:3:2",note:"F4",duration:"2n"},{time:"4:0",note:"G4",duration:"8n"},{time:"4:0:2",note:"F4",duration:"8n"},{time:"4:1",note:"D4",duration:"8n"},{time:"4:2",note:"F4",duration:"8n"},{time:"4:2:2",note:"A4",duration:"8n"},{time:"4:3",note:"G4",duration:"8n"},{time:"4:3:2",note:"A4",duration:"2n"},{time:"5:2:2",note:"G4",duration:"8n"},{time:"5:3",note:"A4",duration:"8n"},{time:"5:3:2",note:"B4",duration:"8n"},{time:"6:0",note:"C5",duration:"8n"},{time:"6:1",note:"B4",duration:"8n"},{time:"6:1:2",note:"A4",duration:"8n"},{time:"6:2",note:"B4",duration:"8n"},{time:"6:2:2",note:"A4",duration:"8n"},{time:"6:3",note:"G4",duration:"8n"},{time:"6:3:2",note:"A4",duration:"1n"}]).start(0),new p.d({frequency:8e3}).toDestination()),B=new p.g({noise:{type:"white",playbackRate:3},envelope:{attack:.001,decay:.2,sustain:.15,release:.03}}).connect(E),R=(new p.h((function(t){B.triggerAttackRelease("4n",t)}),[{time:"0:2"},{time:"1:2"},{time:"2:2"},{time:"3:2"},{time:"4:2"},{time:"5:2"},{time:"6:2"},{time:"7:2"}]).start(0),new p.e({volume:6}).toDestination()),T=(new p.h((function(t){R.triggerAttackRelease("C1","8n",t)}),[{time:"0:0"},{time:"0:3:2"},{time:"1:1"},{time:"2:0"},{time:"2:1:2"},{time:"2:3:2"},{time:"3:0:2"},{time:"3:1:"},{time:"4:0"},{time:"4:3:2"},{time:"5:1"},{time:"6:0"},{time:"6:1:2"},{time:"6:3:2"},{time:"7:0:2"},{time:"7:1:"}]).start(0),new p.k({oscillator:{type:"triangle"}}).toDestination()),q=(new p.h((function(t,e){T.triggerAttackRelease(e.note,e.duration,t)}),[{time:0,note:"A0",duration:"2n"},{time:"0:3",note:"F0",duration:"2n."},{time:"1:3",note:"D0",duration:"2n."},{time:"2:3",note:"F0",duration:"1:1"}]).start(0),new p.f("pink").start()),I=new p.a({volume:-10,frequency:"4n",baseFrequency:40,octaves:4}).toDestination();q.connect(I);var M=new(function(){function t(){Object(m.a)(this,t)}return Object(l.a)(t,[{key:"start",value:function(){p.l.start(),I.start()}},{key:"stop",value:function(){p.l.stop(),I.stop()}},{key:"receive",value:function(t){if(t.includes("yes")){var e=new p.i({url:"https://tonejs.github.io/audio/drum-samples/loops/ominous.mp3",autostart:!0}),n=new p.d(400,"lowpass").toDestination(),i=new p.c(.125,.5).toDestination();e.connect(n),e.connect(i)}if(t.includes("no")){var o=new p.i({url:"https://tonejs.github.io/audio/berklee/gurgling_theremin_1.mp3",loop:!0,autostart:!0}),a=new p.b(.4).toDestination();o.connect(a)}}}]),t}()),H=new h.a;H.add({volume:.5},"volume",0,5);H.add({frequency:8e3},"frequency",0,8e3);H.add({modulation:1},"modulation",0,10);var J=function(){var t=Object(i.useState)(!1),e=Object(d.a)(t,2),n=e[0],o=e[1],a=Object(i.useState)("Hit enter to send"),r=Object(d.a)(a,2),u=r[0],m=(r[1],Object(i.useState)([])),l=Object(d.a)(m,2),h=l[0],f=l[1],w=function(t){var e=(new Date).toLocaleTimeString();f(h.concat(e+" "+t)),console.log(h)},b=function(){var t=Object(c.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.m();case 2:M.start(),o(!0),w("Sonic Generator started");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(c.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.m();case 2:o(!1),M.stop(),w("Sonic Generator stopped");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=Object(c.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.m();case 2:"Enter"===e.key&&(w("Received "+e.target.value),n=e.target.value.split(" "),M.receive(n),e.target.value="");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"Console",children:h.map((function(t,e){return Object(j.jsx)("p",{children:t},e)}))}),Object(j.jsxs)("div",{className:"Main",children:[Object(j.jsx)("div",{className:"Empty"}),Object(j.jsxs)("div",{className:"Content",children:[Object(j.jsx)("div",{className:"Title",children:"Together with Touch - Bangalore 2021"}),Object(j.jsxs)("div",{className:"Controls",children:[Object(j.jsx)("input",{type:"button",className:"Button",href:"#",onClick:b,disabled:n,value:"Start"}),Object(j.jsx)("input",{type:"button",className:"Button",onClick:v,disabled:!n,value:"Stop"})]})]}),Object(j.jsxs)("div",{className:"TestInput",children:[Object(j.jsx)("input",{type:"text",onKeyDown:g,placeholder:"Type something..."}),Object(j.jsx)("p",{children:u})]}),Object(j.jsxs)("div",{className:"Footer",children:[Object(j.jsxs)("p",{children:["A project at ",Object(j.jsx)("a",{href:"https://publicdomain.garden",children:"publicdomain.garden"})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("a",{href:"https://www.instagram.com/lenaheubusch/",children:"Lena Heubusch"})," x ",Object(j.jsx)("a",{href:"https://www.instagram.com/thestormfactory/",children:"Avril Stormy Unger"})," x ",Object(j.jsx)("a",{href:"#",children:"Nikhil Nagaraj"})," x ",Object(j.jsx)("a",{href:"https://www.instagram.com/mathscapes/",children:"Mathscapes"})," | Supported by ",Object(j.jsx)("a",{href:"https://www.instagram.com/goetheinstitutbangalore/",children:"Goethe Institute"}),", ",Object(j.jsx)("a",{href:"https://www.instagram.com/walkinstudios/",children:"Walkin Studios"})]})]})]})]})};r.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(J,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.080773f9.chunk.js.map