import{r as o,o as n,c as e,a as l,b as t,w as r,F as s,e as a}from"./app.e50d7488.js";const u={},d=l("h1",{id:"inbounds-协议",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#inbounds-协议","aria-hidden":"true"},"#"),a(" Inbounds 协议")],-1),c=l("blockquote",null,[l("p",null,"这个章节包含了目前所有可用于 Inbounds 的协议及具体配置细节.")],-1),p=l("h2",{id:"协议列表",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#协议列表","aria-hidden":"true"},"#"),a(" 协议列表")],-1),i=a("Dokodemo-door"),k=l("p",null,"Dokodemo door（任意门）可以监听一个本地端口，并把所有进入此端口的数据发送至指定服务器的一个端口，从而达到端口映射的效果。",-1),h=a("HTTP"),f=l("p",null,"HTTP 协议",-1),b=a("Socks"),m=a("标准 Socks 协议实现，兼容 "),g={href:"http://ftp.icm.edu.pl/packages/socks/socks4/SOCKS4.protocol",target:"_blank",rel:"noopener noreferrer"},S=a("Socks 4"),_=a("、Socks 4a 和 "),q={href:"http://ftp.icm.edu.pl/packages/socks/socks4/SOCKS4.protocol",target:"_blank",rel:"noopener noreferrer"},w=a("Socks 5"),j=a("。"),T=a("VLESS"),v=l("p",null,"VLESS 是一个无状态的轻量传输协议，可以作为 Xray 客户端和服务器之间的桥梁。",-1),L=a("VMess"),V=a("VMess"),x=a(" 是一个加密传输协议，，可以作为 Xray 客户端和服务器之间的桥梁。"),O=a("Trojan"),y={href:"https://trojan-gfw.github.io/trojan/protocol",target:"_blank",rel:"noopener noreferrer"},C=a("Trojan"),D=a(" 协议"),E=a("Shadowsocks"),H={href:"https://zh.wikipedia.org/wiki/Shadowsocks",target:"_blank",rel:"noopener noreferrer"},I=a("Shadowsocks"),K=a(" 协议。");u.render=function(a,u){const M=o("RouterLink"),P=o("OutboundLink");return n(),e(s,null,[d,c,p,l("blockquote",null,[l("p",null,[t(M,{to:"/en/config/inbounds/dokodemo.html"},{default:r((()=>[i])),_:1})])]),k,l("blockquote",null,[l("p",null,[t(M,{to:"/en/config/inbounds/http.html"},{default:r((()=>[h])),_:1})])]),f,l("blockquote",null,[l("p",null,[t(M,{to:"/en/config/inbounds/socks.html"},{default:r((()=>[b])),_:1})])]),l("p",null,[m,l("a",g,[S,t(P)]),_,l("a",q,[w,t(P)]),j]),l("blockquote",null,[l("p",null,[t(M,{to:"/en/config/inbounds/vless.html"},{default:r((()=>[T])),_:1})])]),v,l("blockquote",null,[l("p",null,[t(M,{to:"/en/config/inbounds/vmess.html"},{default:r((()=>[L])),_:1})])]),l("p",null,[t(M,{to:"/en/config/development/protocols/vmess.html"},{default:r((()=>[V])),_:1}),x]),l("blockquote",null,[l("p",null,[t(M,{to:"/en/config/inbounds/trojan.html"},{default:r((()=>[O])),_:1})])]),l("p",null,[l("a",y,[C,t(P)]),D]),l("blockquote",null,[l("p",null,[t(M,{to:"/en/config/inbounds/shadowsocks.html"},{default:r((()=>[E])),_:1})])]),l("p",null,[l("a",H,[I,t(P)]),K])],64)};export default u;