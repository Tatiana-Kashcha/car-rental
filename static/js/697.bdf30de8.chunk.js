"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[697],{697:function(e,t,r){r.r(t);var n=r(861),a=r(439),i=r(757),u=r.n(i),c=r(791),s=r(599),o=r(677),l=r(215),f=r(16),h=r(742),m=r(124),v=r(741),g=r(863),p=r(184);t.default=function(){var e=(0,m.r)(),t=(0,a.Z)(e,1)[0],r=(0,c.useState)([]),i=(0,a.Z)(r,2),d=i[0],x=i[1],k=(0,c.useState)([]),S=(0,a.Z)(k,2),Z=S[0],b=S[1],j=(0,c.useState)(""),w=(0,a.Z)(j,2),F=w[0],y=w[1],P=(0,c.useState)(""),C=(0,a.Z)(P,2),T=C[0],B=C[1],L=(0,c.useState)(""),M=(0,a.Z)(L,2),_=M[0],D=M[1],E=(0,c.useState)(""),J=(0,a.Z)(E,2),O=J[0],Y=J[1],$=(0,c.useState)(!1),q=(0,a.Z)($,2),z=q[0],A=q[1];(0,c.useEffect)((function(){A(!0);var e=function(){var e=(0,n.Z)(u().mark((function e(){var r,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=t.map((function(e){return(0,s.m)(e)})),e.next=4,Promise.all(r);case 4:n=e.sent,a=n.map((function(e){return e.data})),x(a),b(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:return e.prev=13,A(!1),h.Loading.remove(),e.finish(13);case 17:case"end":return e.stop()}}),e,null,[[0,10,13,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var G=d.filter((function(e){return e.make.includes(F)})),H=G.filter((function(e){return e.rentalPrice===T})),I=H.filter((function(e){var t=e.mileage;return t>_&t<O})),K=G.filter((function(e){var t=e.mileage;return t>_&t<O}));return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(o.$,{children:[z&&h.Loading.arrows(),!t.length&&(0,p.jsx)(f.v,{text:"You don't have any favorite cars yet!"}),t.length>0&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(v.J,{data:d,handleSubmit:function(e){e.preventDefault(),!T&(!_||!O)?b(G):T?_&&O?(b(I),console.log({inputBrand:F,inputPrice:T,mileageFrom:_,mileageTo:O})):b(H):b(K)},handleChange:function(e){var t=e.target,r=t.name,n=t.value;switch(r){case"inputBrand":y(n);break;case"inputPrice":B(n);break;case"carMileageFrom":D(n);break;case"carMileageTo":Y(n)}},resetFilters:function(){y(""),B(""),D(""),Y(""),(0,g.S)(),b(d)},mileageFrom:_,mileageTo:O}),!Z.length&&(0,p.jsx)(f.v,{text:"Sorry, there are no machines with such parameters!"}),(0,p.jsx)(l.O,{data:Z})]})]})})}}}]);
//# sourceMappingURL=697.bdf30de8.chunk.js.map