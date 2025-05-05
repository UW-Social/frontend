import{B as w,b as A,c as o,o as n,n as d,a as s,m as a,r as l,u as y,p as g,y as f,w as c,l as $,t as u,z as v,_ as b,x as S,F as C,A as D}from"./index-f8dHHPbV.js";import{s as h}from"./index-B_1vc9lj.js";var B=({dt:e})=>`
.p-card {
    background: ${e("card.background")};
    color: ${e("card.color")};
    box-shadow: ${e("card.shadow")};
    border-radius: ${e("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${e("card.caption.gap")};
}

.p-card-body {
    padding: ${e("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${e("card.body.gap")};
}

.p-card-title {
    font-size: ${e("card.title.font.size")};
    font-weight: ${e("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${e("card.subtitle.color")};
}
`,E={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},J=w.extend({name:"card",style:B,classes:E}),T={name:"BaseCard",extends:A,style:J,provide:function(){return{$pcCard:this,$parentInstance:this}}},k={name:"Card",extends:T,inheritAttrs:!1};function V(e,p,m,r,t,i){return n(),o("div",a({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(n(),o("div",a({key:0,class:e.cx("header")},e.ptm("header")),[l(e.$slots,"header")],16)):d("",!0),s("div",a({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(n(),o("div",a({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(n(),o("div",a({key:0,class:e.cx("title")},e.ptm("title")),[l(e.$slots,"title")],16)):d("",!0),e.$slots.subtitle?(n(),o("div",a({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[l(e.$slots,"subtitle")],16)):d("",!0)],16)):d("",!0),s("div",a({class:e.cx("content")},e.ptm("content")),[l(e.$slots,"content")],16),e.$slots.footer?(n(),o("div",a({key:1,class:e.cx("footer")},e.ptm("footer")),[l(e.$slots,"footer")],16)):d("",!0)],16)],16)}k.render=V;const W=["src"],H=y({__name:"EventCard",props:{event:{}},setup(e){function p(t){const i={year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"};return t.toLocaleDateString(void 0,i)}const m="/frontend/",r=t=>t.startsWith("http")?t:`${m}${t}`;return(t,i)=>(n(),g(f(k),{style:{width:"20rem",overflow:"hidden"}},{header:c(()=>[s("img",{alt:"Event Image",src:r(t.event.image||"/event.jpg"),class:"event-img"},null,8,W)]),title:c(()=>[v(u(t.event.title),1)]),subtitle:c(()=>[v(u(p(t.event.datetime))+" ",1),i[0]||(i[0]=s("br",null,null,-1)),v(" "+u(t.event.location),1)]),content:c(()=>[s("p",null,u(t.event.description),1)]),footer:c(()=>[s("div",null,[$(f(h),{label:"Details",severity:"secondary",outlined:""}),$(f(h),{label:"Join"})])]),_:1}))}}),I=b(H,[["__scopeId","data-v-1b3332f0"]]),N={class:"event-list"},z=y({__name:"EventsView",setup(e){const p=S([{id:1,title:"Hackathon",datetime:new Date("2023-10-15"),location:"Seattle, WA",description:"Join us for a weekend of coding and innovation!",maxAttendees:100,category:"Tech"},{id:2,title:"Hackathon",datetime:new Date("2023-10-15"),location:"Seattle, WA",description:"Join us for a weekend of coding and innovation!",maxAttendees:100,category:"Tech"},{id:3,title:"Hackathon",datetime:new Date("2023-10-15"),location:"Seattle, WA",description:"Join us for a weekend of coding and innovation!",maxAttendees:100,category:"Tech"},{id:4,title:"Hackathon",datetime:new Date("2023-10-15"),location:"Seattle, WA",description:"Join us for a weekend of coding and innovation!",maxAttendees:100,category:"Tech"},{id:5,title:"Hackathon",datetime:new Date("2023-10-15"),location:"Seattle, WA",description:"Join us for a weekend of coding and innovation!",maxAttendees:100,category:"Tech"}]);return(m,r)=>(n(),o("main",null,[r[0]||(r[0]=s("h1",null,"Events",-1)),s("div",N,[(n(!0),o(C,null,D(p.value,t=>(n(),g(I,{key:t.id,event:t},null,8,["event"]))),128))])]))}}),U=b(z,[["__scopeId","data-v-26d3442a"]]);export{U as default};
