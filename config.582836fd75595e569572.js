(self.webpackChunkyacd=self.webpackChunkyacd||[]).push([[497],{9546:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return X}});t(82526),t(57327),t(89554),t(21249),t(47042),t(49337),t(54747);var n=t(96156),a=t(34699),o=t(85893),l=t(45697),i=t.n(l),s=t(67294),c=t(6055),u=t(92669),d=t(81125),p=t(25904),f="_2drigWG08z",v="_3qy5-MPwaw",b="_1sbDIR8sCY",j="_1Hvw0QbyvH",y=t(82569),h=t(68970),O=t(86010),g="_3uy3l7xDdI",x="_2hwDLKbh5f",m="_1OeAkW2Cff";function w(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function P(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?w(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function k(e){var r=e.OptionComponent,t=e.optionPropsList,n=e.selectedIndex,a=e.onChange;return(0,o.jsx)("div",{className:g,children:t.map((function(e,t){var l=(0,O.Z)(x,{[m]:t===n}),i=function(e){e.preventDefault(),t!==n&&a(t)};return(0,o.jsx)("div",{className:l,tabIndex:0,role:"menuitem",onKeyDown:i,onClick:i,children:(0,o.jsx)(r,P({},e))},t)}))})}var C=t(85295),D=t(26512),N=t(97148),S=t(66728),E=t(35227);function I(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function Z(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?I(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var A={legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}},T=[23e3,35e3,46e3,33e3,9e4,68e3,23e3,45e3],L=[184e3,183e3,196e3,182e3,19e4,186e3,182e3,189e3],_=T;function M(e){var r=e.id,t=E.A8.read(),n=(0,s.useMemo)((function(){return{labels:_,datasets:[Z(Z(Z({},E.IE),E.Eu[r].up),{},{data:T}),Z(Z(Z({},E.IE),E.Eu[r].down),{},{data:L})]}}),[r]),a="chart-"+r;return(0,S.Z)(t,a,n,null,A),(0,o.jsx)("div",{style:{width:130,padding:5},children:(0,o.jsx)("canvas",{id:a})})}function R(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function U(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?R(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var G=s.useEffect,W=s.useState,$=s.useCallback,B=s.useRef,H=s.useMemo,K=[{id:0},{id:1},{id:2},{id:3}],Y=[{label:"Global",value:"Global"},{label:"Rule",value:"Rule"},{label:"Direct",value:"Direct"}],q=[{label:"info",value:"info"},{label:"warning",value:"warning"},{label:"error",value:"error"},{label:"debug",value:"debug"},{label:"silent",value:"silent"}],z=[{key:"port",label:"HTTP Proxy Port"},{key:"socks-port",label:"SOCKS5 Proxy Port"},{key:"mixed-port",label:"Mixed Port"},{key:"redir-port",label:"Redir Port"}],Q=(0,C.$j)((function(e){return{selectedChartStyleIndex:(0,c.AM)(e),latencyTestUrl:(0,c.Bg)(e),apiConfig:(0,c.Y$)(e)}}))((function(e){var r=e.dispatch,t=e.configs,n=e.selectedChartStyleIndex,l=e.latencyTestUrl,i=e.apiConfig,s=W(t),c=(0,a.Z)(s,2),O=c[0],g=c[1],x=B(t);G((function(){x.current!==t&&g(t),x.current=t}),[t]);var m=$((function(){r((0,d.h7)("apiConfig"))}),[r]),w=$((function(e,r){g(U(U({},O),{},{[e]:r}))}),[O]),P=$((function(e){var t=e;w("allow-lan",t),r((0,u.wf)(i,{"allow-lan":t}))}),[i,r,w]),S=$((function(e){var t=e.target,n=t.name,a=t.value;switch(t.name){case"mode":case"log-level":w(n,a),r((0,u.wf)(i,{[n]:a}));break;case"redir-port":case"socks-port":case"mixed-port":case"port":if(""!==t.value){var o=parseInt(t.value,10);if(o<0||o>65535)return}w(n,a);break;default:return}}),[i,r,w]),E=(0,C.WX)(),I=E.selectChartStyleIndex,Z=E.updateAppConfig,A=$((function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"port":case"socks-port":case"mixed-port":case"redir-port":var o=parseInt(a,10);if(o<0||o>65535)return;r((0,u.wf)(i,{[n]:o}));break;case"latencyTestUrl":Z(n,a);break;default:throw new Error("unknown input name "+n)}}),[i,r,Z]),T=H((function(){var e=O.mode;return"string"==typeof e&&e[0].toUpperCase()+e.slice(1)}),[O.mode]);return(0,o.jsxs)("div",{children:[(0,o.jsx)(y.Z,{title:"Config"}),(0,o.jsxs)("div",{className:f,children:[z.map((function(e){return void 0!==O[e.key]?(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:j,children:e.label}),(0,o.jsx)(h.Z,{name:e.key,value:O[e.key],onChange:S,onBlur:A})]},e.key):null})),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:j,children:"Allow LAN"}),(0,o.jsx)(D.Z,{name:"allow-lan",checked:O["allow-lan"],onChange:P})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:j,children:"Mode"}),(0,o.jsx)(N.Z,{options:Y,name:"mode",value:T,onChange:S})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:j,children:"Log Level"}),(0,o.jsx)(N.Z,{options:q,name:"log-level",value:O["log-level"],onChange:S})]})]}),(0,o.jsx)("div",{className:b,children:(0,o.jsx)("div",{})}),(0,o.jsxs)("div",{className:v,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:j,children:"Chart Style"}),(0,o.jsx)(k,{OptionComponent:M,optionPropsList:K,selectedIndex:n,onChange:I})]}),(0,o.jsxs)("div",{style:{maxWidth:360},children:[(0,o.jsx)("div",{className:j,children:"Latency Test URL"}),(0,o.jsx)(h.N,{name:"latencyTestUrl",type:"text",value:l,onBlur:A})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:j,children:"Action"}),(0,o.jsx)(p.Z,{label:"Switch backend",onClick:m})]})]})]})})),X=(0,C.$j)((function(e){return{configs:(0,u.G_)(e),apiConfig:(0,c.Y$)(e)}}))((function(e){var r=e.dispatch,t=e.configs,n=e.apiConfig;return G((function(){r((0,u.Tj)(n))}),[r,n]),(0,o.jsx)(Q,{configs:t})}));Q.propTypes={configs:i().object}}}]);
//# sourceMappingURL=config.582836fd75595e569572.js.map