webpackJsonp([1],{"+Zdb":function(t,e){},"1/oy":function(t,e){},"3r02":function(t,e){},"9KeQ":function(t,e){},"9M+g":function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),s=n("e6fC"),i=(n("Jmt5"),n("9M+g"),n("QxPg")),a=n("1P+R");i.a.library.add(a.a);var l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},l,!1,function(t){n("Xjcg")},null,null).exports,c=n("NYxO"),u=n("BYKG"),h=Object(u.List)(new Array(1e4).fill(null)),p={pixels:h,snapshotPointer:0,snapshots:[h]},f={fillPixel:function(t,e){var n=e.index,o=e.color;t.pixels=t.pixels.set(n,o)},fillPixels:function(t,e){t.pixels=e.reduce(function(t,e){return t.set(e.index,e.color)},t.pixels)},makeSnapshot:function(t){t.snapshotPointer+=1,t.snapshots.length=t.snapshotPointer,t.snapshots.push(t.pixels)},prevSnapshot:function(t){t.snapshotPointer-=1,t.pixels=t.snapshots[t.snapshotPointer]},nextSnapshot:function(t){t.snapshotPointer+=1,t.pixels=t.snapshots[t.snapshotPointer]}};o.a.use(c.a);var d=new c.a.Store({state:p,actions:{},getters:{undoIsPossible:function(t){return t.snapshotPointer>=1},redoIsPossible:function(t){return t.snapshots.length-1>t.snapshotPointer}},mutations:f}),v=n("/ocq"),m=n("d7EF"),x=n.n(m),P=n("Dd8w"),C=n.n(P),b=n("IaC6"),g=n.n(b),M={name:"Canvas",props:{scale:{type:Number,default:5},width:{type:Number,default:100},height:{type:Number,default:100},pixels:{type:Object,default:function(){return Object(u.List)()}}},mounted:function(){this.context=this.$refs.canvas.getContext("2d"),this.renderCanvas()},watch:{pixels:function(){this.renderCanvas()}},methods:{getFlatIndex:function(t,e){return t+e*this.width},getPixelCoordinates:function(t){return[Math.floor((t.pageX-this.$refs.canvas.offsetLeft+this.$refs.canvasWrapper.scrollLeft)/this.scale),Math.floor((t.pageY-this.$refs.canvas.offsetTop+this.$refs.canvasWrapper.scrollTop)/this.scale)]},onClick:function(t){this.$emit("onClick",this.getPixelCoordinates(t))},onMouseDown:function(){this.$emit("onMouseDown")},onMouseMove:function(t){this.$emit("onMouseMove",this.getPixelCoordinates(t))},onMouseUp:function(){this.$emit("onMouseUp")},renderPixel:function(t,e){var n=this.pixels.get(this.getFlatIndex(t,e));n||(n=(t+e)%2==0?"#e7e7e7":"white"),this.context.fillStyle=n,this.context.fillRect(t,e,1,1)},renderPixels:function(){this.context.clearRect(0,0,this.width,this.height);for(var t=0;t<this.width;t+=1)for(var e=0;e<this.height;e+=1)this.renderPixel(t,e)},renderCanvas:function(){this.renderPixels()}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"canvasWrapper",staticClass:"Canvas-wrapper"},[n("canvas",{ref:"canvas",style:"width: "+t.scale*t.width+"px; height: "+t.scale*t.height+"px;",attrs:{width:t.width,height:t.height},on:{click:t.onClick,mousedown:t.onMouseDown,mousemove:t.onMouseMove,mouseup:t.onMouseUp}})])},staticRenderFns:[]};var _=n("VU/8")(M,w,!1,function(t){n("+Zdb")},"data-v-037b235a",null).exports,I=function(t,e,n){return t+e*n},k={name:"CanvasPanel",components:{Canvas:_},props:["scale","color"],data:function(){return{paint:!1,lastPixel:null}},computed:Object(c.d)({pixels:function(t){return t.pixels}}),methods:C()({},Object(c.c)(["fillPixel","fillPixels","makeSnapshot"]),{fillPixelWithColor:function(t){var e=x()(t,2),n=e[0],o=e[1];this.fillPixel({index:I(n,o,100),color:this.color.hex})},fillPixelsWithColor:function(t){var e=this;this.fillPixels(t.map(function(t){var n=t.x,o=t.y;return{index:I(n,o,100),color:e.color.hex}}))},fillLine:function(t,e){var n=x()(t,2),o=n[0],s=n[1],i=x()(e,2),a=i[0],l=i[1],r=g()(o,s,a,l);this.fillPixelsWithColor(r)},onClick:function(t){this.fillPixelWithColor(t)},onMouseDown:function(){this.paint=!0},onMouseMove:function(t){this.paint&&(this.lastPixel?(this.fillLine(this.lastPixel,t),this.lastPixel=t):this.lastPixel=t)},onMouseUp:function(){this.paint=!1,this.lastPixel=null,this.makeSnapshot()}})},z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Canvas",{attrs:{pixels:this.pixels,scale:this.scale},on:{onClick:this.onClick,onMouseDown:this.onMouseDown,onMouseMove:this.onMouseMove,onMouseUp:this.onMouseUp}})],1)},staticRenderFns:[]};var $=n("VU/8")(k,z,!1,function(t){n("Zzja")},"data-v-3504e1ec",null).exports,O=n("Zzkc"),R={name:"RightPanel",components:{Chrome:O.Chrome,Compact:O.Compact},data:function(){return{color:{hex:"#000"}}},methods:{updateValue:function(t){this.$emit("input",t)}}},j={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"RightPanel-wrapper"},[n("Chrome",{on:{input:t.updateValue},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),t._v(" "),n("small",{staticClass:"form-text text-muted"},[t._v("Choose any color you want")]),t._v(" "),n("Compact",{on:{input:t.updateValue},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)},staticRenderFns:[]};var y=n("VU/8")(R,j,!1,function(t){n("Q0DI")},"data-v-c007cd54",null).exports,U={name:"TopPanel",props:["scale"],computed:C()({},Object(c.b)(["undoIsPossible","redoIsPossible"]),{scaleText:function(){return 100*this.scale+"%"}}),methods:C()({},Object(c.c)(["prevSnapshot","nextSnapshot"]),{zoomOut:function(){this.scale>.5&&this.$emit("zoomOut")},zoomIn:function(){this.scale<20&&this.$emit("zoomIn")},undo:function(){this.prevSnapshot()},redo:function(){this.nextSnapshot()}})},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-button-group",{attrs:{size:"sm"}},[n("b-button",{on:{click:t.zoomOut}},[n("i",{staticClass:"fas fa-minus"})]),t._v(" "),n("span",{staticClass:"zoom-indicator"},[t._v(t._s(t.scaleText))]),t._v(" "),n("b-button",{on:{click:t.zoomIn}},[n("i",{staticClass:"fas fa-plus"})])],1),t._v(" "),n("b-button-group",{attrs:{size:"sm"}},[n("b-button",{attrs:{disabled:!t.undoIsPossible},on:{click:t.undo}},[n("i",{staticClass:"fas fa-undo-alt"}),t._v("\n      Undo\n    ")]),t._v(" "),n("b-button",{attrs:{disabled:!t.redoIsPossible},on:{click:t.redo}},[n("i",{staticClass:"fas fa-redo-alt"}),t._v("\n      Redo\n  ")])],1)],1)},staticRenderFns:[]};var D={name:"Index",components:{CanvasPanel:$,RightPanel:y,TopPanel:n("VU/8")(U,S,!1,function(t){n("3r02")},"data-v-8f8d9df8",null).exports},data:function(){return{scale:5,color:{hex:"#000"}}},methods:{zoomIn:function(){this.scale+=.5},zoomOut:function(){this.scale-=.5}}},F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"top-panel"},[n("TopPanel",{attrs:{scale:t.scale},on:{zoomIn:t.zoomIn,zoomOut:t.zoomOut}})],1),t._v(" "),n("div",[n("CanvasPanel",{attrs:{scale:t.scale,color:t.color}})],1),t._v(" "),n("div",[n("RightPanel",{model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)])},staticRenderFns:[]};var V=n("VU/8")(D,F,!1,function(t){n("9KeQ")},"data-v-56645edc",null).exports;o.a.use(v.a);var T=new v.a({routes:[{path:"/",name:"Index",component:V}]});o.a.config.productionTip=!1,o.a.use(s.a),new o.a({el:"#app",router:T,store:d,components:{App:r},template:"<App/>"})},Q0DI:function(t,e){},Xjcg:function(t,e){},Zzja:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c0ca81cc869a7ae8bc2a.js.map