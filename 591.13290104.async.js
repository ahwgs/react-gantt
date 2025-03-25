"use strict";(self.webpackChunkrc_gantt=self.webpackChunkrc_gantt||[]).push([[591],{99873:function(de,G,b){b.r(G),b.d(G,{EGanttSightValues:function(){return ce},default:function(){return Qr},enUS:function(){return Gr},ruRU:function(){return $r},zhCN:function(){return qe}});var tt=b(26068),q=b.n(tt),rt=b(25570),u=b(59496),L=b(94310),at=(0,u.createContext)({}),z=at,nt=b(82187),N=b.n(nt),it=b(335),be=b.n(it),ot=b(15558),me=b.n(ot);function Ce(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,e=arguments.length>2?arguments[2]:void 0,a=0;return y.reduce(function(r,i){return i._depth=t,i._parent=e,i._index=a,a+=1,[].concat(me()(r),[i],me()(i.children&&!i.collapsed?Ce(i.children,t+1,i):[]))},[])}function st(y){for(var t=0,e=0,a=[y];a.length>0;){var r=a.shift();if(r){var i=r.translateX,s=i===void 0?0:i,l=r.width,d=l===void 0?0:l;if(t===0&&(t=s||0),s&&(t=Math.min(s,t),e=Math.max(s+d,e)),r.task.children&&r.task.children.length>0){var f=be()(r.task.children),g;try{for(f.s();!(g=f.n()).done;){var x=g.value;x._bar&&a.push(x._bar)}}catch(h){f.e(h)}finally{f.f()}}}}return{translateX:t,width:e-t}}var lt=function(){var y=0;return function(){return y++}}();function Ye(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,e=arguments.length>2?arguments[2]:void 0,a=[],r=be()(y),i;try{for(r.s();!(i=r.n()).done;){var s=i.value,l={key:lt(),record:s,content:"",group:s.group,startDate:s[t]||"",endDate:s[e]||"",collapsed:s.collapsed||!1,children:Ye(s.children||[],t,e)};a.push(l)}}catch(d){r.e(d)}finally{r.f()}return a}var n=b(4637),ye=8,dt=function(t){var e=t.data,a=(0,u.useContext)(z),r=a.prefixCls,i=a.renderGroupBar,s=e.translateY,l=st(e),d=l.translateX,f=l.width;return(0,n.jsx)("div",{role:"none",className:N()("".concat(r,"-group-bar")),style:{transform:"translate(".concat(d,"px, ").concat(s,"px)")},children:(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"".concat(r,"-bar"),children:i?i(e,{width:f,height:ye}):(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:f+1,height:ye+8,viewBox:"0 0 ".concat(f+1," ").concat(ye+8),children:(0,n.jsx)("path",{fill:e.record.background||"#7B809E",d:`
              M`.concat(f-2,`,0.5
              l-`).concat(f-4,`,0
              c-0.41421,0 -0.78921,0.16789 -1.06066,0.43934
              c-0.27145,0.27145 -0.43934,0.64645 -0.43934,1.06066
              l0,13.65
              l6,-7
              l`).concat(f-12,`,0
              l6,7
              l0,-13.65
              c-0.03256,-0.38255 -0.20896,-0.724 -0.47457,-0.97045
              c-0.26763,-0.24834 -0.62607,-0.40013 -1.01995,-0.40013z
            `)})})})})})},ct=(0,L.Pi)(dt),ht=b(48305),oe=b.n(ht),re=b(9284),ut=b(67825),ft=b.n(ut),vt=b(87995),pt=b(17069),ke=b.n(pt),gt=b(25298),Te=b.n(gt),mt=b(82092),k=b.n(mt),yt=ke()(function y(t){var e=this,a=t.scroller,r=t.rate,i=r===void 0?5:r,s=t.space,l=s===void 0?50:s,d=t.onAutoScroll,f=t.reachEdge;Te()(this,y),k()(this,"rate",void 0),k()(this,"space",void 0),k()(this,"scroller",null),k()(this,"autoScrollPos",0),k()(this,"clientX",null),k()(this,"scrollTimer",null),k()(this,"onAutoScroll",void 0),k()(this,"reachEdge",void 0),k()(this,"handleDraggingMouseMove",function(g){e.clientX=g.clientX}),k()(this,"handleScroll",function(g){e.reachEdge(g)||(g==="left"?(e.autoScrollPos-=e.rate,e.onAutoScroll(-e.rate)):g==="right"&&(e.autoScrollPos+=e.rate,e.onAutoScroll(e.rate)))}),k()(this,"start",function(){e.autoScrollPos=0,document.addEventListener("mousemove",e.handleDraggingMouseMove);var g=function x(){if(e.scroller&&e.clientX!==null){var h,c;e.clientX+e.space>((h=e.scroller)===null||h===void 0?void 0:h.getBoundingClientRect().right)?e.handleScroll("right"):e.clientX-e.space<((c=e.scroller)===null||c===void 0?void 0:c.getBoundingClientRect().left)&&e.handleScroll("left")}e.scrollTimer=requestAnimationFrame(x)};e.scrollTimer=requestAnimationFrame(g)}),k()(this,"stop",function(){document.removeEventListener("mousemove",e.handleDraggingMouseMove),e.scrollTimer&&cancelAnimationFrame(e.scrollTimer)}),this.scroller=a||null,this.rate=i,this.space=l,this.onAutoScroll=d,this.reachEdge=f}),xt=yt,wt=["type","onBeforeResize","onResize","onResizeEnd","minWidth","grid","defaultSize","scroller","autoScroll","onAutoScroll","reachEdge","clickStart","children","disabled"],xe=function(t,e){return Math.round(t/e)*e},Dt=function(t){var e=t.type,a=t.onBeforeResize,r=t.onResize,i=t.onResizeEnd,s=t.minWidth,l=s===void 0?0:s,d=t.grid,f=t.defaultSize,g=f.x,x=f.width,h=t.scroller,c=t.autoScroll,v=c===void 0?!0:c,m=t.onAutoScroll,p=t.reachEdge,T=p===void 0?function(){return!1}:p,w=t.clickStart,M=w===void 0?!1:w,Y=t.children,j=t.disabled,W=j===void 0?!1:j,P=ft()(t,wt),S=(0,u.useState)(!1),A=oe()(S,2),V=A[0],Z=A[1],_=(0,re.Z)(function(I){Q(),m&&m(I)}),K=(0,u.useMemo)(function(){return new xt({scroller:h,onAutoScroll:_,reachEdge:T})},[_,h,T]),X=(0,u.useRef)({clientX:0,width:x,x:g}),ee=(0,u.useRef)({clientX:0}),Q=(0,re.Z)(function(){if(!W){var I=ee.current.clientX-X.current.clientX+K.autoScrollPos;switch(e){case"left":{var U=X.current.width-I;l!==void 0&&(U=Math.max(U,l)),d&&(U=xe(U,d));var ae=U-X.current.width,he=X.current.x-ae;r({width:U,x:he});break}case"right":{var $=X.current.width+I;l!==void 0&&($=Math.max($,l)),d&&($=xe($,d));var ne=X.current.x;r({width:$,x:ne});break}case"move":{var ie=X.current.width,ue=I;d&&(ue=xe(I,d));var O=X.current.x+ue;r({width:ie,x:O});break}}}}),R=(0,re.Z)(function(I){W||(V||(Z(!0),M||a&&a()),ee.current.clientX=I.clientX,Q())}),te=(0,re.Z)(function(){W||(K.stop(),window.removeEventListener("mousemove",R),window.removeEventListener("mouseup",te),V&&(Z(!1),i&&i({x:X.current.x,width:X.current.width})))}),J=(0,re.Z)(function(I){W||(I.stopPropagation(),v&&h&&K.start(),M&&(a&&a(),Z(!0)),X.current.clientX=I.clientX,X.current.x=g,X.current.width=x,window.addEventListener("mousemove",R),window.addEventListener("mouseup",te))});return(0,n.jsxs)("div",q()(q()({role:"none",onMouseDown:J},P),{},{children:[V&&(0,vt.createPortal)((0,n.jsx)("div",{style:{position:"fixed",top:0,left:0,bottom:0,right:0,zIndex:9999,cursor:W?"not-allowed":"col-resize"}}),document.body),Y]}))},fe=(0,L.Pi)(Dt),bt=8,je=0,Ct=function(t){return t},Yt=function(t){var e=t.data,a=(0,u.useContext)(z),r=a.store,i=a.prefixCls,s=a.renderInvalidBar,l=s===void 0?Ct:s,d=(0,u.useRef)(null),f=e.translateY,g=e.translateX,x=e.width,h=e.dateTextFormat,c=e.record,v=(0,u.useState)(!1),m=oe()(v,2),p=m[0],T=m[1],w=c||{},M=w.disabled,Y=M===void 0?!1:M,j=r.translateX,W=r.rowHeight,P=f,S="".concat(i,"-invalid-task-bar"),A=(0,u.useCallback)(function(){var R;e.stepGesture!=="moving"&&(je=((R=d.current)===null||R===void 0||(R=R.getBoundingClientRect())===null||R===void 0?void 0:R.left)||0,T(!0))},[e.stepGesture]),V=(0,u.useCallback)(function(){e.stepGesture!=="moving"&&(T(!1),r.handleInvalidBarLeave())},[e.stepGesture,r]),Z=(0,u.useCallback)(function(R){if(e.stepGesture!=="moving"){var te=j+(R.clientX-je),J=r.startXRectBar(te),I=J.left,U=J.width;r.handleInvalidBarHover(e,I,Math.ceil(U))}},[e,r,j]),_=function(){r.handleInvalidBarDragStart(e)},K=(0,u.useCallback)(function(R){var te=R.width,J=R.x;r.updateBarSize(e,{width:te,x:J})},[e,r]),X=(0,u.useCallback)(function(R){r.handleInvalidBarDragEnd(e,R)},[e,r]),ee=(0,u.useCallback)(function(R){r.setTranslateX(r.translateX+R)},[r]),Q=(0,re.Z)(function(R){return R==="left"&&r.translateX<=0});return Y?null:(0,n.jsxs)(fe,{onMouseMove:Z,onMouseEnter:A,onMouseLeave:V,onResize:K,onResizeEnd:X,defaultSize:{x:g,width:x},minWidth:30,grid:30,type:"right",scroller:r.chartElementRef.current||void 0,onAutoScroll:ee,reachEdge:Q,onBeforeResize:_,clickStart:!0,children:[(0,n.jsx)("div",{ref:d,className:S,style:{left:j,height:W,transform:"translateY(".concat(P-(W-bt)/2,"px")}}),p&&l((0,n.jsxs)("div",{className:"".concat(S,"-block"),"aria-haspopup":"true","aria-expanded":"false",style:{left:g,width:Math.ceil(x),transform:"translateY(".concat(P,"px)"),backgroundColor:"#7B90FF",borderColor:"#7B90FF"},children:[(0,n.jsx)("div",{className:"".concat(S,"-date"),style:{right:Math.ceil(x+6)},children:h(g)}),(0,n.jsx)("div",{className:"".concat(S,"-date"),style:{left:Math.ceil(x+6)},children:h(g+x-x/r.pxUnitAmp)})]}),e)]})},kt=(0,L.Pi)(Yt),Tt=b(16483),B=b.n(Tt),jt=40,Mt=56,Bt=8,se=0,St=30,qr=.5,Rt=b(90228),pe=b.n(Rt),Wt=b(87999),Me=b.n(Wt),Ot=b(7278),E=b.n(Ot),zt=b(33766),C=b.n(zt),_r=b(69217),At=b(79771),Lt=b.n(At),Xt=b(73697),Et=b.n(Xt),Pt=b(83627),Ht=b.n(Pt),Nt=b(7907),It=b.n(Nt),Ft=b(88777),Ut=b.n(Ft),Gt=b(92098),$t=b.n(Gt),Vt=b(66292),Zt=b.n(Vt),Kt=b(33170),we=b.n(Kt),Qt=b(38209),Jt=b.n(Qt),D=b(48236),ce=function(y){return y[y.day=2880]="day",y[y.week=3600]="week",y[y.month=14400]="month",y[y.quarter=86400]="quarter",y[y.halfYear=115200]="halfYear",y}({}),ea,o,Be,Se,Re,We,Oe,ze,Ae,Le,Xe,Ee,Pe,He,Ne,Ie,Fe,Ue,Ge,$e,Ve,Ze;B().extend($t()),B().extend(Ut()),B().extend(It()),B().extend(Lt()),B().extend(Et()),B().extend(Ht());var Ke=864e5,De=function(t){return[{type:"day",label:t.day,value:ce.day},{type:"week",label:t.week,value:ce.week},{type:"month",label:t.month,value:ce.month},{type:"quarter",label:t.quarter,value:ce.quarter},{type:"halfYear",label:t.halfYear,value:ce.halfYear}]};function Qe(y){var t=[0,6];return t.includes(B()(y).weekday())}var qt=(o=function(){function y(t){var e=this,a=t.rowHeight,r=t.disabled,i=r===void 0?!1:r,s=t.customSights,l=t.locale,d=t.columnsWidth;Te()(this,y),k()(this,"locale",q()({},et)),k()(this,"_wheelTimer",void 0),k()(this,"scrollTimer",void 0),E()(this,"data",Be,this),E()(this,"originData",Se,this),E()(this,"columns",Re,this),E()(this,"dependencies",We,this),E()(this,"scrolling",Oe,this),E()(this,"scrollTop",ze,this),E()(this,"collapse",Ae,this),E()(this,"tableWidth",Le,this),E()(this,"viewWidth",Xe,this),E()(this,"width",Ee,this),E()(this,"height",Pe,this),E()(this,"bodyWidth",He,this),E()(this,"translateX",Ne,this),E()(this,"sightConfig",Ie,this),E()(this,"showSelectionIndicator",Fe,this),E()(this,"selectionIndicatorTop",Ue,this),E()(this,"dragging",Ge,this),E()(this,"draggingType",$e,this),E()(this,"disabled",Ve,this),k()(this,"viewTypeList",De(this.locale)),k()(this,"gestureKeyPress",!1),k()(this,"mainElementRef",(0,u.createRef)()),k()(this,"chartElementRef",(0,u.createRef)()),k()(this,"isPointerPress",!1),k()(this,"startDateKey","startDate"),k()(this,"endDateKey","endDate"),k()(this,"autoScrollPos",0),k()(this,"clientX",0),k()(this,"rowHeight",void 0),k()(this,"onUpdate",function(){return Promise.resolve(!0)}),k()(this,"isRestDay",Qe),k()(this,"getWidthByDate",function(v,m){return(m.valueOf()-v.valueOf())/e.pxUnitAmp}),k()(this,"startXRectBar",function(v){var m=B()(v*e.pxUnitAmp),p=function(){var j=m.startOf("day"),W=m.endOf("day"),P=j/e.pxUnitAmp,S=(W-j)/e.pxUnitAmp;return{left:P,width:S}},T=function(){m.weekday()===0&&(m=m.add(-1,"week"));var j=m.weekday(1).startOf("day").valueOf()/e.pxUnitAmp,W=(7*24*60*60*1e3-1e3)/e.pxUnitAmp;return{left:j,width:W}},w=function(){var j=m.startOf("month").valueOf(),W=m.endOf("month").valueOf(),P=j/e.pxUnitAmp,S=(W-j)/e.pxUnitAmp;return{left:P,width:S}},M={day:p,week:T,month:T,quarter:w,halfYear:w};return M[e.sightConfig.type]()}),E()(this,"handleWheel",Ze,this),k()(this,"handleScroll",function(v){var m=v.currentTarget.scrollTop;e.scrollY(m)}),k()(this,"scrollY",Jt()(function(v){e.scrollTop=v},100)),k()(this,"handleMouseMove",Zt()(function(v){e.isPointerPress||e.showSelectionBar(v)},5)),k()(this,"getHovered",function(v){var m=v-v%e.rowHeight;return e.selectionIndicatorTop>=m&&e.selectionIndicatorTop<=m+e.rowHeight}),this.width=1320,this.height=418,this.viewTypeList=s.length?s:De(l);var f=s.length?s[0]:De(l)[0],g=B()(this.getStartDate()).valueOf()/(f.value*1e3),x=this.width,h=704,c=d!=null?d:500;this.viewWidth=h,this.tableWidth=c,this.translateX=g,this.sightConfig=f,this.bodyWidth=x,this.rowHeight=a,this.disabled=i,this.locale=l}return ke()(y,[{key:"getStartDate",value:function(){return B()().subtract(10,"day").toString()}},{key:"setIsRestDay",value:function(e){this.isRestDay=e||Qe}},{key:"setData",value:function(e,a,r){this.startDateKey=a,this.endDateKey=r,this.originData=e,this.data=Ye(e,a,r)}},{key:"toggleCollapse",value:function(){this.tableWidth>0?(this.tableWidth=0,this.viewWidth=this.width-this.tableWidth):this.initWidth()}},{key:"setRowCollapse",value:function(e,a){e.collapsed=a}},{key:"setOnUpdate",value:function(e){this.onUpdate=e}},{key:"setColumns",value:function(e){this.columns=e}},{key:"setDependencies",value:function(e){this.dependencies=e}},{key:"setHideTable",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;e?(this.tableWidth=0,this.viewWidth=this.width-this.tableWidth):this.initWidth()}},{key:"handlePanMove",value:function(e){this.scrolling=!0,this.setTranslateX(e)}},{key:"handlePanEnd",value:function(){this.scrolling=!1}},{key:"syncSize",value:function(e){if(!(!e.height||!e.width)){var a=e.width,r=e.height;this.height!==r&&(this.height=r),this.width!==a&&(this.width=a,this.initWidth())}}},{key:"handleResizeTableWidth",value:function(e){var a=this.columns.filter(function(r){return r.width>0});this.columns.length!==a.length&&(this.tableWidth=e,this.viewWidth=this.width-this.tableWidth)}},{key:"initWidth",value:function(){this.tableWidth=this.totalColumnWidth||250,this.viewWidth=this.width-this.tableWidth,this.viewWidth<200&&(this.viewWidth=200,this.tableWidth=this.width-this.viewWidth)}},{key:"setTranslateX",value:function(e){this.translateX=Math.max(e,0)}},{key:"switchSight",value:function(e){var a=we()(this.viewTypeList,{type:e});a&&(this.sightConfig=a,this.setTranslateX(B()(this.getStartDate()).valueOf()/(a.value*1e3)))}},{key:"scrollToToday",value:function(){var e=this.todayTranslateX-this.viewWidth/2;this.setTranslateX(e)}},{key:"getTranslateXByDate",value:function(e){return B()(e).startOf("day").valueOf()/this.pxUnitAmp}},{key:"todayTranslateX",get:function(){return B()().startOf("day").valueOf()/this.pxUnitAmp}},{key:"scrollBarWidth",get:function(){var e=30;return Math.max(this.viewWidth/this.scrollWidth*160,e)}},{key:"scrollLeft",get:function(){var e=this.viewWidth/this.scrollWidth,a=B()(this.translateAmp).toString(),r=(this.viewWidth-this.scrollBarWidth)/2,i=r+e*(this.getTranslateXByDate(a)-this.getTranslateXByDate(this.getStartDate()));return Math.min(Math.max(i,0),this.viewWidth-this.scrollBarWidth)}},{key:"scrollWidth",get:function(){var e=this.viewWidth+200;return Math.max(Math.abs(this.viewWidth+this.translateX-this.getTranslateXByDate(this.getStartDate())),e)}},{key:"bodyClientHeight",get:function(){return this.height-Mt-1}},{key:"getColumnsWidth",get:function(){var e;if(this.columns.length===1&&((e=this.columns[0])===null||e===void 0?void 0:e.width)<200)return[200];var a=this.columns.reduce(function(s,l){return s+(l.width||0)},0),r=this.columns.reduce(function(s,l){return s+(l.width?0:l.flex||1)},0),i=this.tableWidth-a;return this.columns.map(function(s){return s.width?s.width:s.flex?i*(s.flex/r):i*(1/r)})}},{key:"totalColumnWidth",get:function(){return this.getColumnsWidth.reduce(function(e,a){return e+(a||0)},0)}},{key:"bodyScrollHeight",get:function(){var e=this.getBarList.length*this.rowHeight+se;return e<this.bodyClientHeight&&(e=this.bodyClientHeight),e}},{key:"pxUnitAmp",get:function(){return this.sightConfig.value*1e3}},{key:"translateAmp",get:function(){var e=this.translateX;return this.pxUnitAmp*e}},{key:"getDurationAmp",value:function(){var e=this.viewWidth;return this.pxUnitAmp*e}},{key:"getMajorList",value:function(){for(var e={day:this.locale.majorFormat.day,week:this.locale.majorFormat.week,month:this.locale.majorFormat.month,quarter:this.locale.majorFormat.quarter,halfYear:this.locale.majorFormat.halfYear},a=this.translateAmp,r=a+this.getDurationAmp(),i=this.sightConfig.type,s=e[i],l=function(p){return i==="day"||i==="week"?p.add(1,"month"):p.add(1,"year")},d=function(p){return i==="day"||i==="week"?p.startOf("month"):p.startOf("year")},f=function(p){return i==="day"||i==="week"?p.endOf("month"):p.endOf("year")},g=B()(a),x=[];g.isBetween(a-1,r+1);){var h=g.format(s),c=g,v=f(c);x.length>0&&(c=d(g)),x.push({label:h,startDate:c,endDate:v}),c=d(g),g=l(c)}return this.majorAmp2Px(x)}},{key:"majorAmp2Px",value:function(e){var a=this.pxUnitAmp;return e.map(function(r){var i=r.startDate,s=r.endDate,l=r.label,d=i.valueOf()/a,f=(s.valueOf()-i.valueOf())/a;return{label:l,left:d,width:f,key:i.format("YYYY-MM-DD HH:mm:ss")}})}},{key:"getMinorList",value:function(){for(var e=this,a={day:this.locale.minorFormat.day,week:this.locale.minorFormat.week,month:this.locale.minorFormat.month,quarter:this.locale.minorFormat.quarter,halfYear:this.locale.minorFormat.halfYear},r=new Set([0,1,2,3,4,5]),i=this.translateAmp,s=i+this.getDurationAmp(),l=a[this.sightConfig.type],d=function(w){var M={day:function(){return w.add(1,"day")},week:function(){return w.add(1,"week")},month:function(){return w.add(1,"month")},quarter:function(){return w.add(1,"quarter")},halfYear:function(){return w.add(6,"month")}};return M[e.sightConfig.type]()},f=function(w){var M={day:function(){return w.startOf("day")},week:function(){return w.weekday(1).hour(0).minute(0).second(0)},month:function(){return w.startOf("month")},quarter:function(){return w.startOf("quarter")},halfYear:function(){return r.has(w.month())?w.month(0).startOf("month"):w.month(6).startOf("month")}};return M[e.sightConfig.type]()},g=function(w){var M={day:function(){return w.endOf("day")},week:function(){return w.weekday(7).hour(23).minute(59).second(59)},month:function(){return w.endOf("month")},quarter:function(){return w.endOf("quarter")},halfYear:function(){return r.has(w.month())?w.month(5).endOf("month"):w.month(11).endOf("month")}};return M[e.sightConfig.type]()},x=function(w){return e.sightConfig.type==="halfYear"?w.format(l)+(r.has(w.month())?e.locale.firstHalf:e.locale.secondHalf):w.format(l)},h=B()(i),c=[];h.isBetween(i-1,s+1);){var v=x(h),m=f(h),p=g(m);c.push({label:v.split("-").pop(),startDate:m,endDate:p}),h=d(m)}return this.minorAmp2Px(c)}},{key:"minorAmp2Px",value:function(e){var a=this,r=this.pxUnitAmp;return e.map(function(i){var s=i.startDate,l=i.endDate,d=i.label,f=s.valueOf()/r,g=(l.valueOf()-s.valueOf())/r,x=!1;return a.sightConfig.type==="day"&&(x=a.isRestDay(s.toString())),{label:d,left:f,width:g,isWeek:x,key:s.format("YYYY-MM-DD HH:mm:ss")}})}},{key:"getTaskBarThumbVisible",value:function(e){var a=e.width,r=e.translateX,i=e.invalidDateRange;if(i)return!1;var s=this.translateX+this.viewWidth;return r+a<this.translateX||r-s>0}},{key:"scrollToBar",value:function(e,a){var r=e.translateX,i=e.width,s=this.translateX+this.viewWidth/2,l=r+i,d=Math.abs(l-s),f=this.translateX+d;a==="left"&&(f=this.translateX-d),this.setTranslateX(f)}},{key:"getBarList",get:function(){var e=this,a=this.pxUnitAmp,r=this.data,i=11*a,s=8,l=se+this.rowHeight/2-s/2,d=this.rowHeight,f=function(v){return B()(v*a).format("YYYY-MM-DD")},g=function(v,m){var p=B()(v*a),T=B()(m*a);return"".concat(p.diff(T,"day")+1)},x=Ce(r),h=x.map(function(c,v){var m=c.startDate&&c.endDate,p=B()(c.startDate||0).startOf("day").valueOf(),T=B()(c.endDate||0).endOf("day").valueOf();Math.abs(T-p)<i&&(p=B()(c.startDate||0).startOf("day").valueOf(),T=B()(c.endDate||0).endOf("day").add(i,"millisecond").valueOf());var w=m?(T-p)/a:0,M=m?p/a:0,Y=l+v*d,j=c._parent,W=q()(q()({},c.record),{},{disabled:e.disabled}),P={key:c.key,task:c,record:W,translateX:M,translateY:Y,width:w,label:c.content,stepGesture:"end",invalidDateRange:!c.endDate||!c.startDate,dateTextFormat:f,getDateWidth:g,loading:!1,_group:c.group,_collapsed:c.collapsed,_depth:c._depth,_index:c._index,_parent:j,_childrenCount:c.children?c.children.length:0};return c._bar=P,P});return(0,D.LO)(h)}},{key:"getVisibleRows",get:function(){var e=this.bodyClientHeight,a=Math.ceil(e/this.rowHeight)+10,r=Math.max(Math.ceil(this.scrollTop/this.rowHeight)-5,0);return{start:r,count:a}}},{key:"handleMouseLeave",value:function(){this.showSelectionIndicator=!1}},{key:"showSelectionBar",value:function(e){var a,r,i=((a=this.mainElementRef.current)===null||a===void 0?void 0:a.scrollTop)||0,s=((r=this.mainElementRef.current)===null||r===void 0?void 0:r.getBoundingClientRect())||{top:0},l=s.top,d=this.getBarList.length*this.rowHeight,f=e.clientY-l+i;if(f-d>se)this.showSelectionIndicator=!1;else{var g=Math.floor((f-se)/this.rowHeight)*this.rowHeight+se;this.showSelectionIndicator=!0,this.selectionIndicatorTop=g}}},{key:"handleDragStart",value:function(e,a){this.dragging=e,this.draggingType=a,e.stepGesture="start",this.isPointerPress=!0}},{key:"handleDragEnd",value:function(){this.dragging&&(this.dragging.stepGesture="end",this.dragging=null),this.draggingType=null,this.isPointerPress=!1}},{key:"handleInvalidBarLeave",value:function(){this.handleDragEnd()}},{key:"handleInvalidBarHover",value:function(e,a,r){e.translateX=a,e.width=r,this.handleDragStart(e,"create")}},{key:"handleInvalidBarDragStart",value:function(e){e.stepGesture="moving"}},{key:"handleInvalidBarDragEnd",value:function(e,a){e.invalidDateRange=!1,this.handleDragEnd(),this.updateTaskDate(e,a,"create")}},{key:"updateBarSize",value:function(e,a){var r=a.width,i=a.x;e.width=r,e.translateX=Math.max(i,0),e.stepGesture="moving"}},{key:"getMovedDay",value:function(e){return Math.round(e/Ke)}},{key:"updateTaskDate",value:function(){var t=Me()(pe()().mark(function a(r,i,s){var l,d,f,g,x,h,c,v,m,p,T,w;return pe()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:if(l=r.translateX,d=r.width,f=r.task,g=r.record,x=r.task.startDate,h=r.task.endDate,c=x,v=h,s==="move"?(m=this.getMovedDay((l-i.x)*this.pxUnitAmp),c=B()(x).add(m,"day").format("YYYY-MM-DD HH:mm:ss"),v=B()(h).add(m,"day").hour(23).minute(59).second(59).format("YYYY-MM-DD HH:mm:ss")):s==="left"?(p=this.getMovedDay((l-i.x)*this.pxUnitAmp),c=B()(x).add(p,"day").format("YYYY-MM-DD HH:mm:ss")):s==="right"?(T=this.getMovedDay((d-i.width)*this.pxUnitAmp),v=B()(h).add(T,"day").hour(23).minute(59).second(59).format("YYYY-MM-DD HH:mm:ss")):s==="create"&&(c=B()(l*this.pxUnitAmp).format("YYYY-MM-DD HH:mm:ss"),v=B()((l+d)*this.pxUnitAmp).subtract(1).hour(23).minute(59).second(59).format("YYYY-MM-DD HH:mm:ss")),!(c===x&&v===h)){Y.next=8;break}return Y.abrupt("return");case 8:return(0,D.z)(function(){r.loading=!0}),Y.next=11,this.onUpdate((0,D.ZN)(g),c,v);case 11:w=Y.sent,w?(0,D.z)(function(){f.startDate=c,f.endDate=v}):(r.width=i.width,r.translateX=i.x);case 13:case"end":return Y.stop()}},a,this)}));function e(a,r,i){return t.apply(this,arguments)}return e}()},{key:"isToday",value:function(e){var a=B()().format("YYYY-MM-DD"),r=B()(e).format("YYYY-MM-DD");return r===a}}]),y}(),Be=C()(o.prototype,"data",[D.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Se=C()(o.prototype,"originData",[D.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Re=C()(o.prototype,"columns",[D.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),We=C()(o.prototype,"dependencies",[D.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Oe=C()(o.prototype,"scrolling",[D.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),ze=C()(o.prototype,"scrollTop",[D.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Ae=C()(o.prototype,"collapse",[D.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Le=C()(o.prototype,"tableWidth",[D.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Xe=C()(o.prototype,"viewWidth",[D.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ee=C()(o.prototype,"width",[D.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Pe=C()(o.prototype,"height",[D.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),He=C()(o.prototype,"bodyWidth",[D.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ne=C()(o.prototype,"translateX",[D.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ie=C()(o.prototype,"sightConfig",[D.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Fe=C()(o.prototype,"showSelectionIndicator",[D.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Ue=C()(o.prototype,"selectionIndicatorTop",[D.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Ge=C()(o.prototype,"dragging",[D.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),$e=C()(o.prototype,"draggingType",[D.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Ve=C()(o.prototype,"disabled",[D.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),C()(o.prototype,"setData",[D.aD],Object.getOwnPropertyDescriptor(o.prototype,"setData"),o.prototype),C()(o.prototype,"toggleCollapse",[D.aD],Object.getOwnPropertyDescriptor(o.prototype,"toggleCollapse"),o.prototype),C()(o.prototype,"setRowCollapse",[D.aD],Object.getOwnPropertyDescriptor(o.prototype,"setRowCollapse"),o.prototype),C()(o.prototype,"setOnUpdate",[D.aD],Object.getOwnPropertyDescriptor(o.prototype,"setOnUpdate"),o.prototype),C()(o.prototype,"setColumns",[D.aD],Object.getOwnPropertyDescriptor(o.prototype,"setColumns"),o.prototype),C()(o.prototype,"setDependencies",[D.aD],Object.getOwnPropertyDescriptor(o.prototype,"setDependencies"),o.prototype),C()(o.prototype,"setHideTable",[D.aD],Object.getOwnPropertyDescriptor(o.prototype,"setHideTable"),o.prototype),C()(o.prototype,"handlePanMove",[D.aD],Object.getOwnPropertyDescriptor(o.prototype,"handlePanMove"),o.prototype),C()(o.prototype,"handlePanEnd",[D.aD],Object.getOwnPropertyDescriptor(o.prototype,"handlePanEnd"),o.prototype),C()(o.prototype,"syncSize",[D.aD],Object.getOwnPropertyDescriptor(o.prototype,"syncSize"),o.prototype),C()(o.prototype,"handleResizeTableWidth",[D.aD],Object.getOwnPropertyDescriptor(o.prototype,"handleResizeTableWidth"),o.prototype),C()(o.prototype,"initWidth",[D.aD],Object.getOwnPropertyDescriptor(o.prototype,"initWidth"),o.prototype),C()(o.prototype,"setTranslateX",[D.aD],Object.getOwnPropertyDescriptor(o.prototype,"setTranslateX"),o.prototype),C()(o.prototype,"switchSight",[D.aD],Object.getOwnPropertyDescriptor(o.prototype,"switchSight"),o.prototype),C()(o.prototype,"scrollToToday",[D.aD],Object.getOwnPropertyDescriptor(o.prototype,"scrollToToday"),o.prototype),C()(o.prototype,"todayTranslateX",[D.Fl],Object.getOwnPropertyDescriptor(o.prototype,"todayTranslateX"),o.prototype),C()(o.prototype,"scrollBarWidth",[D.Fl],Object.getOwnPropertyDescriptor(o.prototype,"scrollBarWidth"),o.prototype),C()(o.prototype,"scrollLeft",[D.Fl],Object.getOwnPropertyDescriptor(o.prototype,"scrollLeft"),o.prototype),C()(o.prototype,"scrollWidth",[D.Fl],Object.getOwnPropertyDescriptor(o.prototype,"scrollWidth"),o.prototype),C()(o.prototype,"bodyClientHeight",[D.Fl],Object.getOwnPropertyDescriptor(o.prototype,"bodyClientHeight"),o.prototype),C()(o.prototype,"getColumnsWidth",[D.Fl],Object.getOwnPropertyDescriptor(o.prototype,"getColumnsWidth"),o.prototype),C()(o.prototype,"totalColumnWidth",[D.Fl],Object.getOwnPropertyDescriptor(o.prototype,"totalColumnWidth"),o.prototype),C()(o.prototype,"bodyScrollHeight",[D.Fl],Object.getOwnPropertyDescriptor(o.prototype,"bodyScrollHeight"),o.prototype),C()(o.prototype,"pxUnitAmp",[D.Fl],Object.getOwnPropertyDescriptor(o.prototype,"pxUnitAmp"),o.prototype),C()(o.prototype,"translateAmp",[D.Fl],Object.getOwnPropertyDescriptor(o.prototype,"translateAmp"),o.prototype),C()(o.prototype,"getBarList",[D.Fl],Object.getOwnPropertyDescriptor(o.prototype,"getBarList"),o.prototype),Ze=C()(o.prototype,"handleWheel",[D.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e){e.deltaX!==0&&(e.preventDefault(),e.stopPropagation()),t._wheelTimer&&clearTimeout(t._wheelTimer),Math.abs(e.deltaX)>0&&(t.scrolling=!0,t.setTranslateX(t.translateX+e.deltaX)),t._wheelTimer=window.setTimeout(function(){t.scrolling=!1},100)}}}),C()(o.prototype,"getVisibleRows",[D.Fl],Object.getOwnPropertyDescriptor(o.prototype,"getVisibleRows"),o.prototype),C()(o.prototype,"showSelectionBar",[D.aD],Object.getOwnPropertyDescriptor(o.prototype,"showSelectionBar"),o.prototype),C()(o.prototype,"handleDragStart",[D.aD],Object.getOwnPropertyDescriptor(o.prototype,"handleDragStart"),o.prototype),C()(o.prototype,"handleDragEnd",[D.aD],Object.getOwnPropertyDescriptor(o.prototype,"handleDragEnd"),o.prototype),C()(o.prototype,"handleInvalidBarLeave",[D.aD],Object.getOwnPropertyDescriptor(o.prototype,"handleInvalidBarLeave"),o.prototype),C()(o.prototype,"handleInvalidBarHover",[D.aD],Object.getOwnPropertyDescriptor(o.prototype,"handleInvalidBarHover"),o.prototype),C()(o.prototype,"handleInvalidBarDragStart",[D.aD],Object.getOwnPropertyDescriptor(o.prototype,"handleInvalidBarDragStart"),o.prototype),C()(o.prototype,"handleInvalidBarDragEnd",[D.aD],Object.getOwnPropertyDescriptor(o.prototype,"handleInvalidBarDragEnd"),o.prototype),C()(o.prototype,"updateBarSize",[D.aD],Object.getOwnPropertyDescriptor(o.prototype,"updateBarSize"),o.prototype),C()(o.prototype,"updateTaskDate",[D.aD],Object.getOwnPropertyDescriptor(o.prototype,"updateTaskDate"),o.prototype),o),_t=qt,er=function(t){var e=t.data,a=(0,u.useContext)(z),r=a.store,i=a.getBarColor,s=a.renderBar,l=a.onBarClick,d=a.prefixCls,f=a.barHeight,g=a.alwaysShowTaskBar,x=a.renderLeftText,h=a.renderRightText,c=e.width,v=e.translateX,m=e.translateY,p=e.invalidDateRange,T=e.stepGesture,w=e.dateTextFormat,M=e.record,Y=e.loading,j=e.getDateWidth,W=M||{},P=W.disabled,S=P===void 0?!1:P,A="".concat(d,"-task-bar"),V=r.selectionIndicatorTop,Z=r.showSelectionIndicator,_=r.rowHeight,K=r.locale,X=(0,u.useMemo)(function(){if(!Z)return!1;var O=se+_/2-f/2;return V===m-O},[Z,V,m,_,f]),ee=(0,u.useMemo)(function(){return v+c>=B()().valueOf()/r.pxUnitAmp?["#95DDFF","#64C7FE"]:["#FD998F","#F96B5D"]},[r.pxUnitAmp,v,c]),Q=function(ve){return function(){S||r.handleDragStart(e,ve)}},R=(0,u.useCallback)(function(O){var ve=O.width,ge=O.x;S||r.updateBarSize(e,{width:ve,x:ge})},[e,r,S]),te=(0,u.useCallback)(function(O){r.handleDragEnd(),r.updateTaskDate(e,O,"left")},[e,r]),J=(0,u.useCallback)(function(O){r.handleDragEnd(),r.updateTaskDate(e,O,"right")},[e,r]),I=(0,u.useCallback)(function(O){r.handleDragEnd(),r.updateTaskDate(e,O,"move")},[e,r]),U=(0,u.useCallback)(function(O){r.setTranslateX(r.translateX+O)},[r]),ae=X&&!Y,he=(0,u.useCallback)(function(O){O.stopPropagation(),l&&l(e.record)},[e.record,l]),$=(0,re.Z)(function(O){return O==="left"&&r.translateX<=0}),ne=(0,u.useMemo)(function(){return Ke/r.pxUnitAmp},[r.pxUnitAmp]),ie=-(c/r.pxUnitAmp),ue=(0,u.useMemo)(function(){var O=Number(j(v+c+ie,v));return"".concat(O," ").concat(O>1?K.days:K.day)},[v,c,ie,v]);return(0,n.jsxs)("div",{role:"none",className:N()(A,k()(k()({},"".concat(A,"-invalid-date-range"),p),"".concat(A,"-overdue"),!p)),style:{transform:"translate(".concat(v,"px, ").concat(m,"px)")},onClick:he,children:[Y&&(0,n.jsx)("div",{className:"".concat(A,"-loading")}),(0,n.jsxs)("div",{children:[ae&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(fe,{className:N()("".concat(A,"-resize-handle"),"".concat(A,"-resize-handle-left"),k()({},"".concat(A,"-resize-handle-disabled"),S)),style:{left:-14},onResize:R,onResizeEnd:te,defaultSize:{x:v,width:c},minWidth:30,grid:ne,type:"left",scroller:r.chartElementRef.current||void 0,onAutoScroll:U,reachEdge:$,onBeforeResize:Q("left"),disabled:S}),(0,n.jsx)(fe,{className:N()("".concat(A,"-resize-handle"),"".concat(A,"-resize-handle-right"),k()({},"".concat(A,"-resize-handle-disabled"),S)),style:{left:c+1},onResize:R,onResizeEnd:J,defaultSize:{x:v,width:c},minWidth:30,grid:ne,type:"right",scroller:r.chartElementRef.current||void 0,onAutoScroll:U,reachEdge:$,onBeforeResize:Q("right"),disabled:S}),(0,n.jsx)("div",{className:N()("".concat(A,"-resize-bg"),"".concat(A,"-resize-bg-compact")),style:{width:c+30,left:-14}})]}),(0,n.jsx)(fe,{className:"".concat(A,"-bar"),onResize:R,onResizeEnd:I,defaultSize:{x:v,width:c},minWidth:30,grid:ne,type:"move",scroller:r.chartElementRef.current||void 0,onAutoScroll:U,reachEdge:$,onBeforeResize:Q("move"),children:s?s(e,{width:c+1,height:f+1}):(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:c+1,height:f+1,viewBox:"0 0 ".concat(c+1," ").concat(f+1),children:(0,n.jsx)("path",{fill:M.backgroundColor||i&&i(M).backgroundColor||ee[0],stroke:M.borderColor||i&&i(M).borderColor||ee[1],d:`
              M`.concat(c-2,`,0.5
              l-`).concat(c-5,`,0
              c-0.41421,0 -0.78921,0.16789 -1.06066,0.43934
              c-0.27145,0.27145 -0.43934,0.64645 -0.43934,1.06066
              l0,5.3

              c0.03256,0.38255 0.20896,0.724 0.47457,0.97045
              c0.26763,0.24834 0.62607,0.40013 1.01995,0.40013
              l4,0

              l`).concat(c-12,`,0

              l4,0
              c0.41421,0 0.78921,-0.16789 1.06066,-0.43934
              c0.27145,-0.27145 0.43934,-0.64645 0.43934,-1.06066

              l0,-5.3
              c-0.03256,-0.38255 -0.20896,-0.724 -0.47457,-0.97045
              c-0.26763,-0.24834 -0.62607,-0.40013 -1.01995,-0.40013z
            `)})})})]}),(ae||S||g)&&(0,n.jsx)("div",{className:"".concat(A,"-label"),style:{left:c/2-10},children:ue}),(T==="moving"||ae||g)&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"".concat(A,"-date-text"),style:{left:c+16},children:h?h(e):w(v+c+ie)}),(0,n.jsx)("div",{className:"".concat(A,"-date-text"),style:{right:c+16},children:x?x(e):w(v)})]})]})},tr=(0,L.Pi)(er),rr=function(){var t=(0,u.useContext)(z),e=t.store,a=e.getBarList,r=e.getVisibleRows,i=r.count,s=r.start;return(0,n.jsx)(n.Fragment,{children:a.slice(s,s+i).map(function(l){return l._group?(0,n.jsx)(ct,{data:l},l.key):l.invalidDateRange?(0,n.jsx)(kt,{data:l},l.key):(0,n.jsx)(tr,{data:l},l.key)})})},ar=(0,L.Pi)(rr),nr=function(t){var e=t.data,a=(0,u.useContext)(z),r=a.store,i=a.renderBarThumb,s=a.prefixCls,l=a.getBarColor,d="".concat(s,"-task-bar-thumb"),f=r.translateX,g=r.viewWidth,x=e.translateX,h=e.translateY,c=e.label,v=e.record,m=(0,u.useMemo)(function(){var M=f+g;return x-M>0?"right":"left"},[x,f,g]),p=(0,u.useMemo)(function(){return m==="right"?f+g-5:f+2},[m,f,g]),T=(0,u.useCallback)(function(M){M.stopPropagation(),r.scrollToBar(e,m)},[e,r,m]),w=(0,u.useMemo)(function(){return v.backgroundColor||l&&l(v).backgroundColor},[v]);return(0,n.jsxs)("div",{role:"none",className:N()(d,k()(k()({},"".concat(d,"-left"),m==="left"),"".concat(d,"-right"),m==="right")),style:{left:p,top:h-5},onClick:T,children:[m==="left"&&(0,n.jsx)("div",{className:"".concat(d,"-circle-left"),style:{backgroundColor:w}}),i?i(e.record,m):c,m==="right"&&(0,n.jsx)("div",{className:"".concat(d,"-circle-right"),style:{backgroundColor:w}})]})},ir=(0,L.Pi)(nr),or=function(){var t=(0,u.useContext)(z),e=t.store,a=e.getBarList,r=e.getVisibleRows,i=r.count,s=r.start;return(0,n.jsx)(n.Fragment,{children:a.slice(s,s+i).map(function(l){return e.getTaskBarThumbVisible(l)?(0,n.jsx)(ir,{data:l},l.key):null})})},sr=(0,L.Pi)(or),F=10,Je=10;function lr(y,t,e){var a=y.x,r=y.y,i=t.x,s=t.y,l=e==="finish_finish"||e==="start_start";return l?e==="start_start"?[{x:Math.min(a-F,i-F),y:r},{x:Math.min(a-F,i-F),y:s}]:[{x:Math.max(a+F,i+F),y:r},{x:Math.max(a+F,i+F),y:s}]:[{x:e==="finish_start"?a+F:a-F,y:r},{x:e==="finish_start"?a+F:a-F,y:s-Je},{x:e==="finish_start"?i-F:i+F,y:s-Je},{x:e==="finish_start"?i-F:i+F,y:s}]}var dr=function(t){var e=t.data,a=(0,u.useContext)(z),r=a.store,i=a.barHeight,s=e.from,l=e.to,d=e.type,f=e.color,g=f===void 0?"#f87872":f,x=r.getBarList,h=we()(x,function(j){return j.record.id===s}),c=we()(x,function(j){return j.record.id===l});if(!h||!c)return null;var v=i/2,m=function(){return[{x:d==="finish_finish"||d==="finish_start"?h.translateX+h.width:h.translateX,y:h.translateY+v},{x:d==="finish_finish"||d==="start_finish"?c.translateX+c.width:c.translateX,y:c.translateY+v}]}(),p=oe()(m,2),T=p[0],w=p[1],M=[].concat(me()(lr(T,w,d)),[w]),Y=d==="start_finish"||d==="finish_finish"?-1:1;return(0,n.jsxs)("g",{stroke:g,className:"task-dependency-line",children:[(0,n.jsx)("path",{style:{stroke:g},d:`
          M`.concat(T.x,",").concat(T.y,`
          `).concat(M.map(function(j){return"L".concat(j.x,",").concat(j.y)}).join(`
`),`
          L`).concat(w.x,",").concat(w.y,`
          `),strokeWidth:"1",fill:"none"}),(0,n.jsx)("path",{name:"arrow",strokeWidth:"1",fill:g,d:`
        M`.concat(w.x,",").concat(w.y,` 
        L`).concat(w.x-4*Y,",").concat(w.y-3*Y,` 
        L`).concat(w.x-4*Y,",").concat(w.y+3*Y,` 
        Z`)})]})},cr=(0,L.Pi)(dr),hr=function(){var t=(0,u.useContext)(z),e=t.store,a=e.dependencies;return(0,n.jsx)(n.Fragment,{children:a.map(function(r){return(0,n.jsx)(cr,{data:r},JSON.stringify(r))})})},ur=(0,L.Pi)(hr),fr=function(){var t=(0,u.useContext)(z),e=t.store,a=e.dragging,r=e.draggingType,i=e.bodyScrollHeight;if(!a)return null;var s=a.width,l=a.translateX,d=l,f=l+s,g=r==="left"||r==="move",x=r==="right"||r==="move";return(0,n.jsxs)("g",{fill:"#DAE0FF",stroke:"#7B90FF",children:[g&&(0,n.jsx)("path",{d:"M".concat(d,",0 L").concat(d,",").concat(i)}),(0,n.jsx)("rect",{x:d,y:"0",width:s,height:i,strokeWidth:"0"}),x&&(0,n.jsx)("path",{d:"M".concat(f,",0 L").concat(f,",").concat(i)})]})},vr=(0,L.Pi)(fr),pr=function(){var t=(0,u.useContext)(z),e=t.store,a=t.prefixCls;return(0,n.jsx)("div",{className:"".concat(a,"-today"),style:{transform:"translate(".concat(e.todayTranslateX,"px)")},children:(0,n.jsx)("div",{className:"".concat(a,"-today_line"),style:{height:e.bodyScrollHeight}})})},gr=(0,L.Pi)(pr),mr=function(){var t=(0,u.useContext)(z),e=t.store,a=t.prefixCls,r=e.tableWidth,i=e.viewWidth,s=e.bodyScrollHeight,l=e.translateX,d=e.chartElementRef,f=e.getMinorList(),g=(0,u.useCallback)(function(h){h.persist(),e.handleMouseMove(h)},[e]),x=(0,u.useCallback)(function(){e.handleMouseLeave()},[e]);return(0,u.useEffect)(function(){var h=d.current;return h&&h.addEventListener("wheel",e.handleWheel),function(){h&&h.removeEventListener("wheel",e.handleWheel)}},[d,e]),(0,n.jsxs)("div",{ref:d,className:"".concat(a,"-chart"),onMouseMove:g,onMouseLeave:x,style:{left:r,width:i,height:s},children:[(0,n.jsxs)("svg",{className:"".concat(a,"-chart-svg-renderer"),xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:i,height:s,viewBox:"".concat(l," 0 ").concat(i," ").concat(s),children:[(0,n.jsx)("defs",{children:(0,n.jsx)("pattern",{id:"repeat",width:"4.5",height:"10",patternUnits:"userSpaceOnUse",patternTransform:"rotate(70 50 50)",children:(0,n.jsx)("line",{stroke:"#c6c6c6",strokeWidth:"1px",y2:"10"})})}),f.map(function(h){return h.isWeek?(0,n.jsxs)("g",{stroke:"#f0f0f0",children:[(0,n.jsx)("path",{d:"M".concat(h.left,",0 L").concat(h.left,",").concat(s)}),(0,n.jsx)("rect",{fill:"url(#repeat)",opacity:"0.5",strokeWidth:"0",x:h.left,y:0,width:h.width,height:s})]},h.key):(0,n.jsx)("g",{stroke:"#f0f0f0",children:(0,n.jsx)("path",{d:"M".concat(h.left,",0 L").concat(h.left,",").concat(s)})},h.key)}),(0,n.jsx)(vr,{}),(0,n.jsx)(ur,{})]}),(0,n.jsxs)("div",{className:"".concat(a,"-render-chunk"),style:{height:s,transform:"translateX(-".concat(l,"px")},children:[(0,n.jsx)(sr,{}),(0,n.jsx)(ar,{}),(0,n.jsx)(gr,{})]})]})},yr=(0,u.memo)((0,L.Pi)(mr));function xr(y,t){var e=t.initSize,a=t.minWidth,r=t.maxWidth,i=(0,u.useState)(!1),s=oe()(i,2),l=s[0],d=s[1],f=(0,u.useRef)({left:0}),g=(0,u.useRef)(e),x=(0,re.Z)(function(){var v=Me()(pe()().mark(function m(p){var T,w;return pe()().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:T=p.clientX-f.current.left,w=g.current.width+T,a!==void 0&&(w=Math.max(w,a)),r!==void 0&&(w=Math.min(w,r)),y({width:w});case 5:case"end":return Y.stop()}},m)}));return function(m){return v.apply(this,arguments)}}()),h=(0,u.useCallback)(function(){window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",h),d(!1)},[x]),c=(0,u.useCallback)(function(v){f.current.left=v.clientX,g.current=e,window.addEventListener("mousemove",x),window.addEventListener("mouseup",h),d(!0)},[x,h,e]);return[c,l]}var wr=function(){var t=(0,u.useContext)(z),e=t.store,a=t.tableCollapseAble,r=t.prefixCls,i="".concat(r,"-divider"),s=e.tableWidth,l=(0,u.useCallback)(function(v){v.stopPropagation(),e.toggleCollapse()},[e]),d=s,f=(0,u.useCallback)(function(v){var m=v.width;e.handleResizeTableWidth(m)},[e]),g=xr(f,{initSize:{width:s},minWidth:200,maxWidth:e.width*.6}),x=oe()(g,2),h=x[0],c=x[1];return(0,n.jsxs)("div",{role:"none",className:N()(i,k()({},"".concat(i,"_only"),!a)),style:{left:d-1},onMouseDown:s===0?void 0:h,children:[c&&(0,n.jsx)("div",{style:{position:"fixed",top:0,left:0,bottom:0,right:0,zIndex:9999,cursor:"col-resize"}}),(0,n.jsx)("hr",{}),a&&(0,n.jsx)("div",{className:"".concat(i,"-icon-wrapper"),role:"none",onMouseDown:function(m){return m.stopPropagation()},onClick:l,children:(0,n.jsx)("i",{className:N()("".concat(i,"-arrow"),k()({},"".concat(i,"-reverse"),d<=0))})})]})},Dr=(0,L.Pi)(wr),br=function(){var t=(0,u.useContext)(z),e=t.store,a=t.prefixCls,r=e.tableWidth,i=e.viewWidth,s=e.scrollBarWidth,l="".concat(a,"-scroll_bar"),d=(0,u.useState)(!1),f=oe()(d,2),g=f[0],x=f[1],h=(0,u.useRef)({scrollLeft:0,left:0,translateX:0}),c=(0,re.Z)(function(p){var T=p.clientX-h.current.left;e.setTranslateX(T*(e.viewWidth/e.scrollBarWidth)+h.current.translateX)}),v=(0,u.useCallback)(function(){window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",v),x(!1)},[c]),m=(0,u.useCallback)(function(p){h.current.left=p.clientX,h.current.translateX=e.translateX,h.current.scrollLeft=e.scrollLeft,window.addEventListener("mousemove",c),window.addEventListener("mouseup",v),x(!0)},[c,v,e.scrollLeft,e.translateX]);return(0,n.jsxs)("div",{role:"none",className:l,style:{left:r,width:i},onMouseDown:m,children:[g&&(0,n.jsx)("div",{style:{position:"fixed",top:0,left:0,bottom:0,right:0,zIndex:9999,cursor:"col-resize"}}),(0,n.jsx)("div",{className:"".concat(l,"-thumb"),style:{width:s,left:e.scrollLeft}})]})},Cr=(0,u.memo)((0,L.Pi)(br)),Yr=function(){var t=(0,u.useContext)(z),e=t.store,a=t.scrollTop,r=t.prefixCls,i=e.scrollTop,s=(0,u.useCallback)(function(){e.mainElementRef.current&&(e.mainElementRef.current.scrollTop=0)},[e.mainElementRef]);if(i<=100||!e.mainElementRef.current)return null;var l="".concat(r,"-scroll_top");return(0,n.jsx)("div",{className:l,style:a instanceof Object?a:void 0,onClick:s})},kr=(0,L.Pi)(Yr),Tr=function(){var t=(0,u.useContext)(z),e=t.store,a=t.prefixCls,r=e.showSelectionIndicator,i=e.selectionIndicatorTop,s=e.rowHeight,l="".concat(a,"-selection-indicator");return r?(0,n.jsx)("div",{className:l,style:{height:s,top:i}}):null},jr=(0,L.Pi)(Tr),Mr=function(t){var e=t.onClick,a=t.collapsed,r=t.level,i=t.prefixCls,s=i===void 0?"":i,l="".concat(s,"-row-toggler");return(0,n.jsx)("div",{role:"none",onClick:e,className:l,children:(0,n.jsx)("div",{className:N()(l,k()({},"".concat(l,"-collapsed"),a)),children:(0,n.jsx)("i",{"data-level":r,children:r<=0?(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",children:(0,n.jsx)("path",{d:"M296.704 409.6a14.9504 14.9504 0 0 0-10.752 4.608 15.5648 15.5648 0 0 0 0.1536 21.7088l210.8416 212.0704a24.832 24.832 0 0 0 35.584-0.256l205.5168-211.968a15.5136 15.5136 0 0 0 4.352-10.752c0-8.4992-6.7584-15.4112-15.104-15.4112h-430.592z"})}):(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",children:(0,n.jsx)("path",{d:"M296.704 409.6a14.9504 14.9504 0 0 0-10.752 4.608 15.5648 15.5648 0 0 0 0.1536 21.7088l210.8416 212.0704a24.832 24.832 0 0 0 35.584-0.256l205.5168-211.968a15.5136 15.5136 0 0 0 4.352-10.752c0-8.4992-6.7584-15.4112-15.104-15.4112h-430.592z"})})})})})},Br=Mr,Sr=function(){var t=(0,u.useContext)(z),e=t.store,a=t.onRow,r=t.tableIndent,i=t.expandIcon,s=t.prefixCls,l=t.onExpand,d=e.columns,f=e.rowHeight,g=e.getColumnsWidth,x=e.getBarList,h=e.getVisibleRows,c=h.count,v=h.start,m="".concat(s,"-table-body");return x.length===0?(0,n.jsx)("div",{style:{textAlign:"center",color:" rgba(0,0,0,0.65)",marginTop:30},children:"\u6682\u65E0\u6570\u636E"}):(0,n.jsx)(n.Fragment,{children:x.slice(v,v+c).map(function(p,T){var w=p._parent,M=w==null?void 0:w._parent,Y=!1;return M!=null&&M.children&&M.children[M.children.length-1]===p._parent&&(Y=!0),(0,n.jsx)("div",{role:"none",className:"".concat(m,"-row"),style:{height:f,top:(T+v)*f+se},onClick:function(){a==null||a.onClick(p.record)},children:d.map(function(j,W){return(0,n.jsxs)("div",{className:"".concat(m,"-cell"),style:q()({width:g[W],minWidth:j.minWidth,maxWidth:j.maxWidth,textAlign:j.align?j.align:"left",paddingLeft:W===0?r*(p._depth+1)+10:12},j.style),children:[W===0&&new Array(p._depth).fill(0).map(function(P,S){return(0,n.jsx)("div",{className:N()("".concat(m,"-row-indentation"),k()(k()({},"".concat(m,"-row-indentation-hidden"),Y&&S===p._depth-2),"".concat(m,"-row-indentation-both"),S===p._depth-1)),style:{top:-(f/2)+1,left:r*S+15,width:r*1.5+5}},S)}),W===0&&p._childrenCount>0&&(0,n.jsx)("div",{style:{position:"absolute",left:r*p._depth+15,background:"white",zIndex:9,transform:"translateX(-52%)",padding:1},children:i?i({level:p._depth,collapsed:p._collapsed,onClick:function(S){S.stopPropagation(),l&&l(p.task.record,!p._collapsed),e.setRowCollapse(p.task,!p._collapsed)}}):(0,n.jsx)(Br,{prefixCls:s,level:p._depth,collapsed:p._collapsed,onClick:function(S){S.stopPropagation(),l&&l(p.task.record,!p._collapsed),e.setRowCollapse(p.task,!p._collapsed)}})}),(0,n.jsx)("span",{className:"".concat(m,"-ellipsis"),children:j.render?j.render(p.record):p.record[j.name]})]},j.name)})},p.key)})})},Rr=(0,L.Pi)(Sr),Wr=function(){var t=(0,u.useContext)(z),e=t.store,a=t.prefixCls,r=e.columns,i=e.getColumnsWidth,s=e.getBarList;if(s.length===0)return null;var l="".concat(a,"-table-body");return(0,n.jsx)("div",{role:"none",className:"".concat(l,"-border_row"),children:r.map(function(d,f){return(0,n.jsx)("div",{className:"".concat(l,"-cell"),style:q()({width:i[f],minWidth:d.minWidth,maxWidth:d.maxWidth,textAlign:d.align?d.align:"left"},d.style)},d.name)})})},Or=(0,L.Pi)(Wr),zr=function(){var t=(0,u.useContext)(z),e=t.store,a=t.prefixCls,r=(0,u.useCallback)(function(l){l.persist(),e.handleMouseMove(l)},[e]),i=(0,u.useCallback)(function(){e.handleMouseLeave()},[e]),s="".concat(a,"-table-body");return(0,n.jsxs)("div",{className:s,style:{width:e.tableWidth,height:e.bodyScrollHeight},onMouseMove:r,onMouseLeave:i,children:[(0,n.jsx)(Or,{}),(0,n.jsx)(Rr,{})]})},Ar=(0,L.Pi)(zr),Lr=function(){var t=(0,u.useContext)(z),e=t.store,a=t.prefixCls,r=e.columns,i=e.tableWidth,s=i,l=e.getColumnsWidth,d="".concat(a,"-table-header");return(0,n.jsx)("div",{className:d,style:{width:s,height:56},children:(0,n.jsx)("div",{className:"".concat(d,"-head"),style:{width:s,height:56},children:(0,n.jsx)("div",{className:"".concat(d,"-row"),style:{height:56},children:r.map(function(f,g){return(0,n.jsx)("div",{className:"".concat(d,"-cell"),style:q()({width:l[g],minWidth:f.minWidth,maxWidth:f.maxWidth,textAlign:f.align?f.align:"left"},f.style),children:(0,n.jsx)("div",{className:"".concat(d,"-head-cell"),children:(0,n.jsx)("span",{className:"".concat(d,"-ellipsis"),children:f.label})})},f.name)})})})})},Xr=(0,L.Pi)(Lr),Er=function(){var t=(0,u.useContext)(z),e=t.store,a=t.prefixCls,r="".concat(a,"-time-axis"),i=e.sightConfig,s=e.isToday,l=e.getMajorList(),d=e.getMinorList(),f=(0,u.useCallback)(function(h){var c=h.x;e.handlePanMove(-c)},[e]),g=(0,u.useCallback)(function(){e.handlePanEnd()},[e]),x=(0,u.useCallback)(function(h){var c=h.key,v=i.type;return v==="day"&&s(c)},[i,s]);return(0,n.jsx)(fe,{onResize:f,onResizeEnd:g,defaultSize:{x:-e.translateX,width:0},type:"move",children:(0,n.jsx)("div",{className:r,style:{left:e.tableWidth,width:e.viewWidth},children:(0,n.jsxs)("div",{className:"".concat(r,"-render-chunk"),style:{transform:"translateX(-".concat(e.translateX,"px")},children:[l.map(function(h){return(0,n.jsx)("div",{className:"".concat(r,"-major"),style:{width:h.width,left:h.left},children:(0,n.jsx)("div",{className:"".concat(r,"-major-label"),children:h.label})},h.key)}),d.map(function(h){return(0,n.jsx)("div",{className:N()("".concat(r,"-minor")),style:{width:h.width,left:h.left},children:(0,n.jsx)("div",{className:N()("".concat(r,"-minor-label"),k()({},"".concat(r,"-today"),x(h))),children:h.label})},h.key)})]})})})},Pr=(0,L.Pi)(Er),Hr=b(15742),Nr=function(){var t=(0,u.useContext)(z),e=t.store,a=t.prefixCls,r=e.sightConfig,i=e.scrolling,s=e.viewTypeList,l=(0,u.useState)(!1),d=oe()(l,2),f=d[0],g=d[1],x=(0,u.useRef)(null);(0,Hr.Z)(function(){g(!1)},x);var h=(0,u.useCallback)(function(){g(!0)},[]),c=(0,u.useCallback)(function(p){e.switchSight(p.type),g(!1)},[e]),v=r.type,m=(0,u.useCallback)(function(p){return p===v},[v]);return(0,n.jsxs)("div",{className:"".concat(a,"-time-axis-scale-select"),ref:x,children:[(0,n.jsxs)("div",{role:"none",className:"".concat(a,"-trigger"),onClick:h,children:[(0,n.jsx)("div",{className:"".concat(a,"-text"),children:r.label}),(0,n.jsx)("span",{className:"dropdown-icon",children:(0,n.jsx)("svg",{id:"at-triangle-down-s",viewBox:"0 0 1024 1024",children:(0,n.jsx)("path",{d:"M296.704 409.6a14.9504 14.9504 0 0 0-10.752 4.608 15.5648 15.5648 0 0 0 0.1536 21.7088l210.8416 212.0704a24.832 24.832 0 0 0 35.584-0.256l205.5168-211.968a15.5136 15.5136 0 0 0 4.352-10.752c0-8.4992-6.7584-15.4112-15.104-15.4112h-430.592z"})})})]}),(0,n.jsx)("div",{className:N()("".concat(a,"-shadow"),k()({},"".concat(a,"-scrolling"),i))}),f&&(0,n.jsx)("div",{className:N()("next-overlay-wrapper","opened"),children:(0,n.jsx)("div",{className:N()("next-overlay-inner"),"aria-hidden":"false",style:{position:"absolute",right:15,top:60},children:(0,n.jsx)("div",{className:"next-loading-wrap",children:(0,n.jsx)("ul",{role:"listbox",className:N()("next-menu"),"aria-multiselectable":"false",children:s.map(function(p){return(0,n.jsxs)("li",{role:"none",onClick:function(){c(p)},className:N()("next-menu-item",{"next-selected":m(p.type)}),children:[m(p.type)&&(0,n.jsx)("i",{className:"".concat(a,"-selected_icon"),children:(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",children:(0,n.jsx)("path",{d:"M413.7472 768a29.5936 29.5936 0 0 1-21.6576-9.472l-229.5296-241.152a33.3824 33.3824 0 0 1 0-45.5168 29.696 29.696 0 0 1 43.4176 0l207.7696 218.368 404.2752-424.7552a29.5936 29.5936 0 0 1 43.4176 0 33.3824 33.3824 0 0 1 0 45.568l-425.984 447.488A29.5936 29.5936 0 0 1 413.696 768"})})}),(0,n.jsx)("span",{className:"next-menu-item-text","aria-selected":"true",children:p.label})]},p.type)})})})})})]})},Ir=(0,L.Pi)(Nr),Fr=function(){var t=(0,u.useContext)(z),e=t.store,a=t.prefixCls,r=e.scrolling,i=e.translateX,s=e.tableWidth,l=e.viewWidth,d=e.todayTranslateX,f=e.locale,g="".concat(a,"-time-indicator"),x=d<i?"left":"right",h=x==="left"?s:"unset",c=x==="right"?111:"unset",v=(0,u.useMemo)(function(){var p=d<i,T=d>i+l;return p||T?"block":"none"},[d,i,l]),m=(0,u.useCallback)(function(){e.scrollToToday()},[e]);return(0,n.jsx)("button",{onClick:m,className:N()(g,k()({},"".concat(g,"-scrolling"),r)),type:"button","data-role":"button",style:{left:h,right:c,display:v},children:(0,n.jsx)("span",{children:f.today})})},Ur=(0,L.Pi)(Fr),Gr=Object.freeze({today:"Today",day:"Day",days:"Days",week:"Week",month:"Month",quarter:"Quarter",halfYear:"Half year",firstHalf:"First half",secondHalf:"Second half",majorFormat:{day:"YYYY, MMMM",week:"YYYY, MMMM",month:"YYYY",quarter:"YYYY",halfYear:"YYYY"},minorFormat:{day:"D",week:"wo [week]",month:"MMMM",quarter:"[Q]Q",halfYear:"YYYY-"}}),qe=Object.freeze({today:"\u4ECA\u5929",day:"\u65E5\u89C6\u56FE",days:"\u5929\u6570",week:"\u5468\u89C6\u56FE",month:"\u6708\u89C6\u56FE",quarter:"\u5B63\u89C6\u56FE",halfYear:"\u5E74\u89C6\u56FE",firstHalf:"\u4E0A\u534A\u5E74",secondHalf:"\u4E0B\u534A\u5E74",majorFormat:{day:"YYYY\u5E74MM\u6708",week:"YYYY\u5E74MM\u6708",month:"YYYY\u5E74",quarter:"YYYY\u5E74",halfYear:"YYYY\u5E74"},minorFormat:{day:"YYYY-MM-D",week:"YYYY-w\u5468",month:"YYYY-MM\u6708",quarter:"YYYY-\u7B2CQ\u5B63",halfYear:"YYYY-"}}),$r=Object.freeze({today:"\u0421\u0435\u0433\u043E\u0434\u043D\u044F",day:"\u0414\u0435\u043D\u044C",days:"\u0414\u043D\u0438",week:"\u041D\u0435\u0434\u0435\u043B\u044F",month:"\u041C\u0435\u0441\u044F\u0446",quarter:"\u041A\u0432\u0430\u0440\u0442\u0430\u043B",halfYear:"\u041F\u043E\u043B\u0443\u0433\u043E\u0434\u0438\u0435",firstHalf:"\u041F\u0435\u0440\u0432\u043E\u0435 \u043F\u043E\u043B\u0443\u0433\u043E\u0434\u0438\u0435",secondHalf:"\u0412\u0442\u043E\u0440\u043E\u0435 \u043F\u043E\u043B\u0443\u0433\u043E\u0434\u0438\u0435",majorFormat:{day:"MMMM YYYY",week:"MMMM YYYY",month:"YYYY",quarter:"YYYY",halfYear:"YYYY"},minorFormat:{day:"D",week:"wo [\u043D\u0435\u0434\u0435\u043B\u044F]",month:"MMMM",quarter:"[\u041A]Q",halfYear:"YYYY-"}}),_e="gantt",Vr=function(t){var e=t.children,a=(0,u.useContext)(z),r=a.store,i=(0,u.useRef)(null),s=(0,rt.Z)(i);return(0,u.useEffect)(function(){r.syncSize(s)},[s,r]),(0,n.jsx)("div",{className:"".concat(_e,"-body"),ref:i,children:e})},et=q()({},qe),Zr=function(t){var e=t.data,a=t.columns,r=t.dependencies,i=r===void 0?[]:r,s=t.onUpdate,l=t.startDateKey,d=l===void 0?"startDate":l,f=t.endDateKey,g=f===void 0?"endDate":f,x=t.isRestDay,h=t.getBarColor,c=t.showBackToday,v=c===void 0?!0:c,m=t.showUnitSwitch,p=m===void 0?!0:m,T=t.unit,w=t.onRow,M=t.tableIndent,Y=M===void 0?St:M,j=t.expandIcon,W=t.renderBar,P=t.renderInvalidBar,S=t.renderGroupBar,A=t.onBarClick,V=t.tableCollapseAble,Z=V===void 0?!0:V,_=t.renderBarThumb,K=t.scrollTop,X=K===void 0?!0:K,ee=t.rowHeight,Q=ee===void 0?jt:ee,R=t.columnsWidth,te=t.innerRef,J=t.disabled,I=J===void 0?!1:J,U=t.alwaysShowTaskBar,ae=U===void 0?!0:U,he=t.renderLeftText,$=t.renderRightText,ne=t.onExpand,ie=t.customSights,ue=ie===void 0?[]:ie,O=t.locale,ve=O===void 0?q()({},et):O,ge=t.hideTable,le=ge===void 0?!1:ge,H=(0,u.useMemo)(function(){return new _t({rowHeight:Q,disabled:I,customSights:ue,locale:ve,columnsWidth:R})},[Q]);(0,u.useEffect)(function(){H.setData(e,d,g)},[e,g,d,H]),(0,u.useEffect)(function(){H.setColumns(a)},[a,H]),(0,u.useEffect)(function(){H.setOnUpdate(s)},[s,H]),(0,u.useEffect)(function(){H.setDependencies(i)},[i,H]),(0,u.useEffect)(function(){H.setHideTable(le)},[le]),(0,u.useEffect)(function(){x&&H.setIsRestDay(x)},[x,H]),(0,u.useEffect)(function(){T&&H.switchSight(T)},[T,H]),(0,u.useImperativeHandle)(te,function(){return{backToday:function(){return H.scrollToToday()},getWidthByDate:H.getWidthByDate}});var Jr=u.useMemo(function(){return{prefixCls:_e,store:H,getBarColor:h,showBackToday:v,showUnitSwitch:p,onRow:w,tableIndent:Y,expandIcon:j,renderBar:W,renderInvalidBar:P,renderGroupBar:S,onBarClick:A,tableCollapseAble:Z,renderBarThumb:_,scrollTop:X,barHeight:Bt,alwaysShowTaskBar:ae,renderLeftText:he,renderRightText:$,onExpand:ne,hideTable:le}},[H,h,v,p,w,Y,j,W,P,S,A,Z,_,X,ae,he,$,ne,le]);return(0,n.jsx)(z.Provider,{value:Jr,children:(0,n.jsxs)(Vr,{children:[(0,n.jsxs)("header",{children:[!le&&(0,n.jsx)(Xr,{}),(0,n.jsx)(Pr,{})]}),(0,n.jsxs)("main",{ref:H.mainElementRef,onScroll:H.handleScroll,children:[(0,n.jsx)(jr,{}),!le&&(0,n.jsx)(Ar,{}),(0,n.jsx)(yr,{})]}),!le&&(0,n.jsx)(Dr,{}),v&&(0,n.jsx)(Ur,{}),p&&(0,n.jsx)(Ir,{}),(0,n.jsx)(Cr,{}),X&&(0,n.jsx)(kr,{})]})})},Kr=Zr,Qr=Kr},5:function(de,G){G.Z=`import dayjs from 'dayjs';\r
import RcGantt from 'rc-gantt';\r
import React from 'react';\r
\r
interface Data {\r
  name: string;\r
  startDate: string;\r
  endDate: string;\r
}\r
\r
const node = {\r
  name: '\u4E00\u4E2A\u540D\u79F0\u4E00\u4E2A\u540D\u79F0\u4E00\u4E2A\u540D\u79F0\u4E00\u4E2A\u540D\u79F0',\r
  startDate: dayjs().format('YYYY-MM-DD'),\r
  endDate: dayjs().add(1, 'week').format('YYYY-MM-DD'),\r
  collapsed: true,\r
};\r
\r
const childList = [\r
  {\r
    ...node,\r
    children: [{ ...node, children: [{ ...node }] }],\r
  },\r
  {\r
    ...node,\r
  },\r
];\r
\r
const data = Array.from({ length: 100 }).fill({\r
  ...node,\r
  children: childList,\r
}) as Data[];\r
\r
const onExpand = (record, collapsed) => {\r
  console.log('onExpand', record, collapsed);\r
};\r
\r
const App = () => (\r
  <div style={{ width: '100%', height: 500 }}>\r
    <RcGantt<Data>\r
      data={data}\r
      onExpand={onExpand}\r
      columns={[\r
        {\r
          name: 'name',\r
          label: '\u540D\u79F0',\r
        },\r
      ]}\r
      onUpdate={async () => true}\r
    />\r
  </div>\r
);\r
\r
export default App;\r
`},29337:function(de,G){G.Z=`import dayjs from 'dayjs';\r
import RcGantt from 'rc-gantt';\r
import React from 'react';\r
\r
interface Data {\r
  name: string;\r
  startDate: string;\r
  endDate: string;\r
}\r
\r
const data = Array.from({ length: 100 }).fill({\r
  name: '\u4E00\u4E2A\u540D\u79F0\u4E00\u4E2A\u540D\u79F0\u4E00\u4E2A\u540D\u79F0\u4E00\u4E2A\u540D\u79F0',\r
  startDate: dayjs().format('YYYY-MM-DD'),\r
  endDate: dayjs().add(1, 'week').format('YYYY-MM-DD'),\r
}) as Data[];\r
\r
const App = () => (\r
  <div style={{ width: '100%', height: 500 }}>\r
    <RcGantt<Data>\r
      data={data}\r
      columns={[\r
        {\r
          name: 'name',\r
          label: '\u540D\u79F0',\r
          width: 200,\r
        },\r
        {\r
          name: 'startDate',\r
          label: '\u5F00\u59CB\u65F6\u95F4',\r
        },\r
        {\r
          name: 'endDate',\r
          label: '\u7ED3\u675F\u65F6\u95F4',\r
          render: (record) => <span>{record.endDate}</span>,\r
        },\r
      ]}\r
      tableIndent={0}\r
      onUpdate={async () => true}\r
    />\r
  </div>\r
);\r
\r
export default App;\r
`},85934:function(de,G){G.Z=`import dayjs from 'dayjs';\r
import RcGantt, { Gantt, GanttRef } from 'rc-gantt';\r
import React, { useRef, useState } from 'react';\r
\r
const data = Array.from({ length: 100 }).fill({\r
  name: '\u4E00\u4E2A\u540D\u79F0\u4E00\u4E2A\u540D\u79F0\u4E00\u4E2A\u540D\u79F0\u4E00\u4E2A\u540D\u79F0',\r
  startDate: dayjs().format('YYYY-MM-DD'),\r
  endDate: dayjs().add(1, 'week').format('YYYY-MM-DD'),\r
});\r
\r
const Button = ({\r
  active,\r
  children,\r
  onClick,\r
  ...resetProps\r
}: {\r
  active: boolean;\r
  children: React.ReactNode;\r
  onClick: React.MouseEventHandler<HTMLButtonElement>;\r
}) => (\r
  <button\r
    onClick={onClick}\r
    style={active ? { background: '#096dd9', color: '#fff' } : {}}\r
    {...resetProps}\r
  >\r
    {children}\r
  </button>\r
);\r
\r
const App = () => {\r
  const [val1, setVal1] = useState(true);\r
\r
  const [val3, setVal3] = useState(false);\r
\r
  const [val2, setVal2] = useState<Gantt.Sight>('day');\r
\r
  const ref = useRef<GanttRef>();\r
\r
  const sightList: Gantt.Sight[] = [\r
    'day',\r
    'halfYear',\r
    'month',\r
    'quarter',\r
    'week',\r
  ];\r
\r
  const onBackToday = () => {\r
    if (ref && ref.current) ref.current.backToday();\r
  };\r
\r
  return (\r
    <div style={{ width: '100%', height: 600 }}>\r
      <div style={{ width: '100%', height: 500 }}>\r
        <RcGantt\r
          data={data}\r
          innerRef={ref}\r
          columns={[\r
            {\r
              name: 'name',\r
              label: '\u540D\u79F0',\r
              width: 100,\r
            },\r
          ]}\r
          tableIndent={0}\r
          onUpdate={async () => true}\r
          getBarColor={() => ({\r
            backgroundColor: 'red',\r
            borderColor: 'yellow',\r
          })}\r
          hideTable={val3}\r
          alwaysShowTaskBar={val1}\r
          unit={val2}\r
        />\r
\r
        <div style={{ display: 'flex', flexDirection: 'column' }}>\r
          <div>\r
            <input\r
              checked={val1}\r
              onChange={(e) => setVal1(e.target.checked)}\r
              type="checkbox"\r
            />\r
            alwaysShowTaskBar \u662F\u5426\u6C38\u8FDC\u5C55\u793A\u5DE6\u53F3\u4FA7\u6587\u6848\r
          </div>\r
          <div style={{ display: 'flex', marginTop: 10 }}>\r
            <span style={{ marginRight: 20 }}>unit \u5F53\u524D\u89C6\u56FE</span>\r
            {sightList.map((s: Gantt.Sight) => (\r
              <Button key={s} onClick={() => setVal2(s)} active={s === val2}>\r
                {s}\r
              </Button>\r
            ))}\r
          </div>\r
          <div style={{ display: 'flex', marginTop: 10 }}>\r
            <span style={{ marginRight: 20 }}>unit \u5F53\u524D\u89C6\u56FE</span>\r
            <Button active onClick={() => setVal3(!val3)}>\r
              \u662F\u5426\u9690\u85CF\u5DE6\u4FA7\u8868\u683C\uFF1A{val3 ? '\u9690\u85CF' : '\u5C55\u793A'}\r
            </Button>\r
          </div>\r
          <div style={{ display: 'flex', marginTop: 10 }}>\r
            <Button active onClick={onBackToday}>\r
              \u8FD4\u56DE\u4ECA\u65E5\r
            </Button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
};\r
export default App;\r
`},27579:function(de,G){G.Z=`import dayjs from 'dayjs';\r
import RcGantt, { Gantt } from 'rc-gantt';\r
import React from 'react';\r
\r
interface Data {\r
  name: string;\r
  startDate: string;\r
  endDate: string;\r
}\r
\r
const data = [\r
  {\r
    name: '\u4E00\u4E2A\u540D\u79F0\u4E00\u4E2A\u540D\u79F0\u4E00\u4E2A\u540D\u79F0\u4E00\u4E2A\u540D\u79F0',\r
    startDate: dayjs().format('YYYY-MM-DD'),\r
    endDate: dayjs().add(1, 'week').format('YYYY-MM-DD'),\r
    id: '1',\r
  },\r
  {\r
    name: '\u4E00\u4E2A\u540D\u79F0\u4E00\u4E2A\u540D\u79F0\u4E00\u4E2A\u540D\u79F0\u4E00\u4E2A\u540D\u79F0',\r
    startDate: dayjs().add(1, 'week').format('YYYY-MM-DD'),\r
    endDate: dayjs().add(2, 'week').format('YYYY-MM-DD'),\r
    id: '2',\r
  },\r
  {\r
    name: '\u4E00\u4E2A\u540D\u79F0\u4E00\u4E2A\u540D\u79F0\u4E00\u4E2A\u540D\u79F0\u4E00\u4E2A\u540D\u79F0',\r
    startDate: dayjs().add(2, 'week').format('YYYY-MM-DD'),\r
    endDate: dayjs().add(3, 'week').format('YYYY-MM-DD'),\r
    id: '3',\r
  },\r
];\r
\r
const dependencies: Gantt.Dependence[] = [\r
  {\r
    from: '1',\r
    to: '2',\r
    type: 'finish_start',\r
    color: 'blue',\r
  },\r
  {\r
    from: '2',\r
    to: '3',\r
    type: 'finish_start',\r
  },\r
];\r
\r
const App = () => (\r
  <div style={{ width: '100%', height: 500 }}>\r
    <RcGantt<Data>\r
      dependencies={dependencies}\r
      data={data}\r
      columns={[\r
        {\r
          name: 'name',\r
          label: '\u540D\u79F0',\r
        },\r
      ]}\r
      onUpdate={async () => true}\r
    />\r
  </div>\r
);\r
\r
export default App;\r
`},87625:function(de,G){G.Z=`import dayjs from 'dayjs';
import type { Gantt } from 'rc-gantt';
import RcGantt, { EGanttSightValues } from 'rc-gantt';
import React from 'react';

interface Data {
  name: string;
  startDate: string;
  endDate: string;
}

const data = Array.from({ length: 100 }).fill({
  name: '\u4E00\u4E2A\u540D\u79F0\u4E00\u4E2A\u540D\u79F0\u4E00\u4E2A\u540D\u79F0\u4E00\u4E2A\u540D\u79F0',
  startDate: dayjs().format('YYYY-MM-DD'),
  endDate: dayjs().add(1, 'week').format('YYYY-MM-DD'),
}) as Data[];

const customSights: Gantt.SightConfig[] = [
  {
    label: '\u81EA\u5B9A\u4E49\u65E5',
    value: EGanttSightValues.day,
    type: 'day',
  },
  {
    label: '\u81EA\u5B9A\u4E49\u5468',
    value: EGanttSightValues.week,
    type: 'week',
  },
];

const App = () => (
  <div style={{ width: '100%', height: 500 }}>
    <RcGantt<Data>
      data={data}
      columns={[
        {
          name: 'name',
          label: '\u540D\u79F0',
          width: 100,
        },
      ]}
      customSights={customSights}
      onUpdate={async (row, startDate, endDate) => {
        return true;
      }}
    />
  </div>
);

export default App;
`},3687:function(de,G){G.Z=`import dayjs from 'dayjs';\r
import RcGantt from 'rc-gantt';\r
import React from 'react';\r
\r
const data = Array.from({ length: 100 }).fill({\r
  name: '\u4E00\u4E2A\u540D\u79F0\u4E00\u4E2A\u540D\u79F0\u4E00\u4E2A\u540D\u79F0\u4E00\u4E2A\u540D\u79F0',\r
  startDate: dayjs().format('YYYY-MM-DD'),\r
  endDate: dayjs().add(1, 'week').format('YYYY-MM-DD'),\r
});\r
\r
const App = () => (\r
  <div style={{ width: '100%', height: 500 }}>\r
    <RcGantt\r
      data={data}\r
      columns={[\r
        {\r
          name: 'name',\r
          label: '\u540D\u79F0',\r
          width: 100,\r
        },\r
      ]}\r
      tableIndent={0}\r
      renderLeftText={() => <span>\u5DE6\u4FA7\u81EA\u5B9A\u4E49\u6E32\u67D3</span>}\r
      renderRightText={() => <span>\u5DE6\u4FA7\u81EA\u5B9A\u4E49\u6E32\u67D3</span>}\r
      onUpdate={async () => true}\r
      getBarColor={() => ({\r
        backgroundColor: 'red',\r
        borderColor: 'yellow',\r
      })}\r
      renderBar={(barInfo, { width, height }) => (\r
        <div style={{ width, height, backgroundColor: 'red' }}>\r
          renderBar{barInfo.label}\r
        </div>\r
      )}\r
    />\r
  </div>\r
);\r
\r
export default App;\r
`}}]);
