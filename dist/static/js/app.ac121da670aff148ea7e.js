webpackJsonp([1],{"+Zdb":function(t,e){},"1/oy":function(t,e){},"9KeQ":function(t,e){},"9M+g":function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),o=n("e6fC"),i=(n("Jmt5"),n("9M+g"),n("QxPg")),a=n("1P+R");i.a.library.add(a.a);var l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},l,!1,function(t){n("Xjcg")},null,null).exports,c=n("NYxO"),u=n("BYKG"),h=n("mvHQ"),p=n.n(h),f=function(t){return t.snapshotPointer>=1},d=function(t){return t.snapshots.length-1>t.snapshotPointer},v={undoIsPossible:f,redoIsPossible:d,clearIsPossible:function(t){return f(t)||d(t)}},x=Object(u.List)(new Array(1e4).fill(null)),m={pixels:x,snapshotPointer:0,snapshots:[x]},P={fillPixel:function(t,e){var n=e.index,s=e.color;t.pixels=t.pixels.set(n,s)},fillPixels:function(t,e){t.pixels=e.reduce(function(t,e){return t.set(e.index,e.color)},t.pixels)},clearAll:function(t){t.snapshotPointer=0,t.snapshots=[x],t.pixels=t.snapshots[t.snapshotPointer]},makeSnapshot:function(t){t.snapshotPointer+=1,t.snapshots.length=t.snapshotPointer,t.snapshots.push(t.pixels)},prevSnapshot:function(t){t.snapshotPointer-=1,t.pixels=t.snapshots[t.snapshotPointer]},nextSnapshot:function(t){t.snapshotPointer+=1,t.pixels=t.snapshots[t.snapshotPointer]}};s.a.use(c.a);var C=new c.a.Store({plugins:[function(t){var e=localStorage.getItem("pixart:pixels");if(e){var n=Object(u.List)(JSON.parse(e));t.state.pixels=n,t.state.snapshots=[n]}t.subscribe(function(t,e){"makeSnapshot"!==t.type&&"clearAll"!==t.type||localStorage.setItem("pixart:pixels",p()(e.pixels.toJS()))})}],state:m,actions:{},getters:v,mutations:P}),b=n("/ocq"),g=n("d7EF"),M=n.n(g),_=n("Dd8w"),w=n.n(_),I=n("IaC6"),k=n.n(I),O={name:"Canvas",props:{scale:{type:Number,default:5},width:{type:Number,default:100},height:{type:Number,default:100},pixels:{type:Object,default:function(){return Object(u.List)()}}},mounted:function(){this.context=this.$refs.canvas.getContext("2d"),this.renderCanvas()},watch:{pixels:function(){this.renderCanvas()}},methods:{getFlatIndex:function(t,e){return t+e*this.width},getPixelCoordinates:function(t){return[Math.floor((t.pageX-this.$refs.canvas.offsetLeft+this.$refs.canvasWrapper.scrollLeft)/this.scale),Math.floor((t.pageY-this.$refs.canvas.offsetTop+this.$refs.canvasWrapper.scrollTop)/this.scale)]},onClick:function(t){this.$emit("onClick",this.getPixelCoordinates(t))},onMouseDown:function(){this.$emit("onMouseDown")},onMouseMove:function(t){this.$emit("onMouseMove",this.getPixelCoordinates(t))},onMouseUp:function(){this.$emit("onMouseUp")},renderPixel:function(t,e){var n=this.pixels.get(this.getFlatIndex(t,e));n||(n=(t+e)%2==0?"#e7e7e7":"white"),this.context.fillStyle=n,this.context.fillRect(t,e,1,1)},renderPixels:function(){this.context.clearRect(0,0,this.width,this.height);for(var t=0;t<this.width;t+=1)for(var e=0;e<this.height;e+=1)this.renderPixel(t,e)},renderCanvas:function(){this.renderPixels()}}},z={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"canvasWrapper",staticClass:"Canvas-wrapper"},[n("canvas",{ref:"canvas",style:"width: "+t.scale*t.width+"px; height: "+t.scale*t.height+"px;",attrs:{width:t.width,height:t.height},on:{click:t.onClick,mousedown:t.onMouseDown,mousemove:t.onMouseMove,mouseup:t.onMouseUp}})])},staticRenderFns:[]};var $=n("VU/8")(O,z,!1,function(t){n("+Zdb")},"data-v-037b235a",null).exports,S=function(t,e,n){return t+e*n},y={name:"CanvasPanel",components:{Canvas:$},props:["scale","color"],data:function(){return{paint:!1,lastPixel:null}},computed:Object(c.d)({pixels:function(t){return t.pixels}}),methods:w()({},Object(c.c)(["fillPixel","fillPixels","makeSnapshot"]),{fillPixelWithColor:function(t){var e=M()(t,2),n=e[0],s=e[1];this.fillPixel({index:S(n,s,100),color:this.color.hex})},fillPixelsWithColor:function(t){var e=this;this.fillPixels(t.map(function(t){var n=t.x,s=t.y;return{index:S(n,s,100),color:e.color.hex}}))},fillLine:function(t,e){var n=M()(t,2),s=n[0],o=n[1],i=M()(e,2),a=i[0],l=i[1],r=k()(s,o,a,l);this.fillPixelsWithColor(r)},onClick:function(t){this.fillPixelWithColor(t)},onMouseDown:function(){this.paint=!0},onMouseMove:function(t){this.paint&&(this.lastPixel?(this.fillLine(this.lastPixel,t),this.lastPixel=t):this.lastPixel=t)},onMouseUp:function(){this.paint=!1,this.lastPixel=null,this.makeSnapshot()}})},j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Canvas",{attrs:{pixels:this.pixels,scale:this.scale},on:{onClick:this.onClick,onMouseDown:this.onMouseDown,onMouseMove:this.onMouseMove,onMouseUp:this.onMouseUp}})],1)},staticRenderFns:[]};var R=n("VU/8")(y,j,!1,function(t){n("Zzja")},"data-v-3504e1ec",null).exports,U=n("Zzkc"),D={name:"RightPanel",components:{Chrome:U.Chrome,Compact:U.Compact},data:function(){return{color:{hex:"#000"}}},methods:{updateValue:function(t){this.$emit("input",t)}}},F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"RightPanel-wrapper"},[n("Chrome",{on:{input:t.updateValue},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),t._v(" "),n("small",{staticClass:"form-text text-muted"},[t._v("Choose any color you want")]),t._v(" "),n("Compact",{on:{input:t.updateValue},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)},staticRenderFns:[]};var V=n("VU/8")(D,F,!1,function(t){n("Q0DI")},"data-v-c007cd54",null).exports,A={name:"TopPanel",props:["scale"],computed:w()({},Object(c.b)(["undoIsPossible","redoIsPossible","clearIsPossible"]),{scaleText:function(){return 100*this.scale+"%"}}),methods:w()({},Object(c.c)(["prevSnapshot","nextSnapshot","clearAll"]),{zoomOut:function(){this.scale>.5&&this.$emit("zoomOut")},zoomIn:function(){this.scale<20&&this.$emit("zoomIn")},undo:function(){this.prevSnapshot()},redo:function(){this.nextSnapshot()},clearConfirm:function(){confirm("Clear canvas?")&&this.clearAll()}})},T={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-button-group",{attrs:{size:"sm"}},[n("b-button",{on:{click:t.zoomOut}},[n("i",{staticClass:"fas fa-search-minus"})]),t._v(" "),n("span",{staticClass:"zoom-indicator"},[t._v(t._s(t.scaleText))]),t._v(" "),n("b-button",{on:{click:t.zoomIn}},[n("i",{staticClass:"fas fa-search-plus"})]),t._v(" "),n("b-button",{attrs:{disabled:!t.undoIsPossible},on:{click:t.undo}},[n("i",{staticClass:"fas fa-undo-alt"}),t._v("\n      Undo\n    ")]),t._v(" "),n("b-button",{attrs:{disabled:!t.redoIsPossible},on:{click:t.redo}},[n("i",{staticClass:"fas fa-redo-alt"}),t._v("\n      Redo\n  ")]),t._v(" "),n("b-button",{attrs:{disabled:!t.clearIsPossible},on:{click:t.clearConfirm}},[n("i",{staticClass:"fas fa-trash-alt"}),t._v("\n    Clear\n  ")])],1)],1)},staticRenderFns:[]};var W={name:"Index",components:{CanvasPanel:R,RightPanel:V,TopPanel:n("VU/8")(A,T,!1,function(t){n("Oixq")},"data-v-54896566",null).exports},data:function(){return{scale:5,color:{hex:"#000"}}},methods:{zoomIn:function(){this.scale+=.5},zoomOut:function(){this.scale-=.5}}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"top-panel"},[n("TopPanel",{attrs:{scale:t.scale},on:{zoomIn:t.zoomIn,zoomOut:t.zoomOut}})],1),t._v(" "),n("div",[n("CanvasPanel",{attrs:{scale:t.scale,color:t.color}})],1),t._v(" "),n("div",[n("RightPanel",{model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)])},staticRenderFns:[]};var L=n("VU/8")(W,E,!1,function(t){n("9KeQ")},"data-v-56645edc",null).exports;s.a.use(b.a);var N=new b.a({routes:[{path:"/",name:"Index",component:L}]});s.a.config.productionTip=!1,s.a.use(o.a),new s.a({el:"#app",router:N,store:C,components:{App:r},template:"<App/>"})},Oixq:function(t,e){},Q0DI:function(t,e){},Xjcg:function(t,e){},Zzja:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ac121da670aff148ea7e.js.map