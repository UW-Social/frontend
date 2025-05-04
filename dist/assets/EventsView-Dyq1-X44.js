import{B as k,b as w,c as s,o as t,n as r,a as i,m as o,r as d,u as g,p as $,y as m,w as l,l as f,t as p,z as v,_ as h,x as A,F as S,A as C}from"./index-CBKJXgyq.js";import{s as y}from"./index-C2KQv89l.js";var D=({dt:e})=>`
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
`,B={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},E=k.extend({name:"card",style:D,classes:B}),J={name:"BaseCard",extends:w,style:E,provide:function(){return{$pcCard:this,$parentInstance:this}}},b={name:"Card",extends:J,inheritAttrs:!1};function T(e,c,n,a,u,z){return t(),s("div",o({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(t(),s("div",o({key:0,class:e.cx("header")},e.ptm("header")),[d(e.$slots,"header")],16)):r("",!0),i("div",o({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(t(),s("div",o({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(t(),s("div",o({key:0,class:e.cx("title")},e.ptm("title")),[d(e.$slots,"title")],16)):r("",!0),e.$slots.subtitle?(t(),s("div",o({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[d(e.$slots,"subtitle")],16)):r("",!0)],16)):r("",!0),i("div",o({class:e.cx("content")},e.ptm("content")),[d(e.$slots,"content")],16),e.$slots.footer?(t(),s("div",o({key:1,class:e.cx("footer")},e.ptm("footer")),[d(e.$slots,"footer")],16)):r("",!0)],16)],16)}b.render=T;const V=["src"],H=g({__name:"EventCard",props:{event:{}},setup(e){function c(n){const a={year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"};return n.toLocaleDateString(void 0,a)}return(n,a)=>(t(),$(m(b),{style:{width:"20rem",overflow:"hidden"}},{header:l(()=>[i("img",{alt:"Event Image",src:n.event.image||"/event.jpg",class:"event-img"},null,8,V)]),title:l(()=>[v(p(n.event.title),1)]),subtitle:l(()=>[v(p(c(n.event.datetime))+" ",1),a[0]||(a[0]=i("br",null,null,-1)),v(" "+p(n.event.location),1)]),content:l(()=>[i("p",null,p(n.event.description),1)]),footer:l(()=>[i("div",null,[f(m(y),{label:"Details",severity:"secondary",outlined:""}),f(m(y),{label:"Join"})])]),_:1}))}}),W=h(H,[["__scopeId","data-v-699e8de8"]]),I={class:"event-list"},N=g({__name:"EventsView",setup(e){const c=A([{id:1,title:"Hackathon",datetime:new Date("2023-10-15"),location:"Seattle, WA",description:"Join us for a weekend of coding and innovation!",maxAttendees:100,category:"Tech"},{id:2,title:"Hackathon",datetime:new Date("2023-10-15"),location:"Seattle, WA",description:"Join us for a weekend of coding and innovation!",maxAttendees:100,category:"Tech"},{id:3,title:"Hackathon",datetime:new Date("2023-10-15"),location:"Seattle, WA",description:"Join us for a weekend of coding and innovation!",maxAttendees:100,category:"Tech"},{id:4,title:"Hackathon",datetime:new Date("2023-10-15"),location:"Seattle, WA",description:"Join us for a weekend of coding and innovation!",maxAttendees:100,category:"Tech"},{id:5,title:"Hackathon",datetime:new Date("2023-10-15"),location:"Seattle, WA",description:"Join us for a weekend of coding and innovation!",maxAttendees:100,category:"Tech"}]);return(n,a)=>(t(),s("main",null,[a[0]||(a[0]=i("h1",null,"Events",-1)),i("div",I,[(t(!0),s(S,null,C(c.value,u=>(t(),$(W,{key:u.id,event:u},null,8,["event"]))),128))])]))}}),j=h(N,[["__scopeId","data-v-26d3442a"]]);export{j as default};
