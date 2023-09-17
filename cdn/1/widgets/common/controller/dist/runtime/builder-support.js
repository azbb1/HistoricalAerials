System.register(["jimu-core","jimu-ui","jimu-for-builder","jimu-layouts/layout-builder","jimu-layouts/layout-runtime","jimu-ui/advanced/setting-components","jimu-theme"],(function(e,t){var o={},a={},r={},l={},i={},n={},s={};return{setters:[function(e){o.BrowserSizeMode=e.BrowserSizeMode,o.ControllerPosition=e.ControllerPosition,o.Immutable=e.Immutable,o.LayoutItemType=e.LayoutItemType,o.React=e.React,o.ReactRedux=e.ReactRedux,o.WidgetState=e.WidgetState,o.WidgetType=e.WidgetType,o.appActions=e.appActions,o.classNames=e.classNames,o.css=e.css,o.getAppStore=e.getAppStore,o.hooks=e.hooks,o.jsx=e.jsx,o.lodash=e.lodash,o.polished=e.polished},function(e){a.Button=e.Button,a.Icon=e.Icon,a.Loading=e.Loading,a.NavButtonGroup=e.NavButtonGroup,a.Popper=e.Popper,a.Tooltip=e.Tooltip,a.defaultMessages=e.defaultMessages,a.utils=e.utils},function(e){r.appBuilderSync=e.appBuilderSync,r.getAppConfigAction=e.getAppConfigAction},function(e){l.CanvasPane=e.CanvasPane,l.DropArea=e.DropArea,l.LayoutBuilder=e.LayoutBuilder,l.addItemToLayout=e.addItemToLayout,l.withRnd=e.withRnd},function(e){i.LayoutContext=e.LayoutContext,i.PageContext=e.PageContext,i.searchUtils=e.searchUtils,i.utils=e.utils},function(e){n.WidgetListPopper=e.WidgetListPopper},function(e){s.getBuilderThemeVariables=e.getBuilderThemeVariables,s.styled=e.styled}],execute:function(){e((()=>{var e={25164:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" d="M4 4h2v1H4V4ZM8 4h2v1H8V4ZM14 4h-2v1h2V4ZM15 4h1v2h-1V4ZM16 8h-1v2h1V8ZM4 14h1v2H4v-2ZM5 6H4v2h1V6ZM4 10h1v2H4v-2ZM16 12h-1v2h1v-2ZM16 15v1h-2v-1h2ZM12 15h-2v1h2v-1ZM6 15h2v1H6v-1Z"></path><path fill="#000" fill-rule="evenodd" d="M18 0a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h16Zm0 1H2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" clip-rule="evenodd"></path></svg>'},55339:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746L8.746 8Z"></path></svg>'},48891:e=>{"use strict";e.exports=o},23137:e=>{"use strict";e.exports=r},77282:e=>{"use strict";e.exports=l},74758:e=>{"use strict";e.exports=i},34796:e=>{"use strict";e.exports=s},30726:e=>{"use strict";e.exports=a},77756:e=>{"use strict";e.exports=n}},t={};function c(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,c),r.exports}c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var o in t)c.o(t,o)&&!c.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var d={};return(()=>{"use strict";c.r(d),c.d(d,{default:()=>_});var e=c(48891),t=c(30726);const o="controller",a="_openwidget",r={sm:24,default:32,lg:48};e.ControllerPosition.TopRight;var l=c(23137),i=c(77282),n=c(74758);const s=(t,o)=>{const a=e.ReactRedux.useSelector((e=>e.widgetsRuntimeInfo)),r=u(t,o),l=v(r);return e.React.useMemo((()=>{const t={};return l.forEach((o=>{var r;const l=null!==(r=null==a?void 0:a[o])&&void 0!==r?r:{isClassLoaded:!1};t[o]=(0,e.Immutable)(l)})),(0,e.Immutable)(t)}),[l,a])},u=(t,o)=>e.ReactRedux.useSelector((e=>{var a,r,l,i;const s=null===(l=null===(r=null===(a=e.appConfig.widgets)||void 0===a?void 0:a[t])||void 0===r?void 0:r.layouts)||void 0===l?void 0:l[o],c=e.browserSizeMode,d=e.appConfig.mainSizeMode,u=n.searchUtils.findLayoutId(s,c,d);return null===(i=e.appConfig.layouts)||void 0===i?void 0:i[u]})),p=(t,o)=>{var a,r,l,i;const s=(0,e.getAppStore)().getState().appConfig,c=(0,e.getAppStore)().getState().browserSizeMode,d=null===(l=null===(r=null===(a=s.widgets)||void 0===a?void 0:a[t])||void 0===r?void 0:r.layouts)||void 0===l?void 0:l[o],u=n.searchUtils.findLayoutId(d,c,s.mainSizeMode);return null===(i=s.layouts)||void 0===i?void 0:i[u]},g=e=>{var t,o,a;let r=(null!==(a=null===(o=null===(t=null==e?void 0:e.order)||void 0===t?void 0:t.asMutable)||void 0===o?void 0:o.call(t))&&void 0!==a?a:[]).map((t=>{var o;return null===(o=e.content)||void 0===o?void 0:o[t]}));return r=r.filter((e=>e&&e.id&&e.widgetId&&!e.isPending)),r.map((e=>e.id))},v=e=>g(e).map((t=>{var o,a;return null===(a=null===(o=e.content)||void 0===o?void 0:o[t])||void 0===a?void 0:a.widgetId})),h=t=>{var o,a;const r=null==t?void 0:t.itemType,l=null===(o=null==t?void 0:t.manifest)||void 0===o?void 0:o.widgetType,i=null===(a=null==t?void 0:t.manifest)||void 0===a?void 0:a.name;return r!==e.LayoutItemType.Section&&l!==e.WidgetType.Layout&&"controller"!==i&&!n.utils.isWidgetPlaceholder(n.utils.getAppConfig(),t)},f=(t,o,a,r,n)=>{const s={layoutId:t.id};let c=(0,l.getAppConfigAction)();(0,i.addItemToLayout)(c.appConfig,o,s,a,r,n||0).then((t=>{c=(0,l.getAppConfigAction)(t.updatedAppConfig),(0,e.getAppStore)().dispatch(e.appActions.layoutChanged(c.appConfig,s))}))},m=e=>{const t=(0,l.getAppConfigAction)();t.removeWidget(e),t.exec()},y=e.css`
  max-width: 100vw !important;
  /* hide rnd-resize bar for the outermost layout item */
  .controller-configuration-container > * > * > .builder-layout-item > .select-wrapper > .action-area {
      > .rnd-resize-top,
      > .rnd-resize-right,
      > .rnd-resize-bottom,
      > .rnd-resize-left {
        display: none;
      }
    }

    .controller-configuration-container .builder-layout-item > .select-wrapper > .lock-layout-tip {
      display: none;
    }

  .selectable {
    > div {
      cursor: default;
    }
  }

  .widget-container {
    height: 100%;
    overflow: auto;
  }
`,b={width:150,height:150},w={width:300,height:300},R=()=>!1,S=o=>{const{reference:r,placement:n,disableResize:s=!1,widgetId:c,controllerId:d,onClose:p,onSizeChange:g,size:v,version:h}=o,f=e.React.useRef(null),[m,S]=e.React.useState(!!c),x=u(d,a),C=e.ReactRedux.useSelector((e=>e.browserSizeMode)),I=e.ReactRedux.useSelector((e=>{var t,o,r;return null===(r=null===(o=null===(t=e.appConfig.widgets)||void 0===t?void 0:t[d])||void 0===o?void 0:o.layouts)||void 0===r?void 0:r[a]})),j=((t,o,a)=>{var r;const l=e.ReactRedux.useSelector((e=>e.appRuntimeInfo.selection));return!!l&&(t===l.layoutId||o===l.layoutId||null!=(null===(r=a.current)||void 0===r?void 0:r.querySelector(`div.layout[data-layoutid="${o}"] div.layout[data-layoutid="${l.layoutId}"]`)))})(e.ReactRedux.useSelector((e=>{var t,o,a;return null===(a=null===(o=null===(t=e.appConfig.widgets[d].parent)||void 0===t?void 0:t[C])||void 0===o?void 0:o[0])||void 0===a?void 0:a.layoutId})),null==I?void 0:I[C],f),A=e.ReactRedux.useSelector((e=>{var t,o;return null===(o=null===(t=e.appConfig.widgets)||void 0===t?void 0:t[c])||void 0===o?void 0:o.label}));e.hooks.useUpdateEffect((()=>{S(!1),setTimeout((()=>{S(!!c)}),100)}),[c]),e.React.useEffect((()=>{j||null==p||p()}),[j,p]);const O=e.hooks.useLatest(x);return e.React.useEffect((()=>{c&&((t,o)=>{if(o){let a=(0,l.getAppConfigAction)().appConfig;const r=(e=>({type:"WIDGET",widgetId:e,bbox:{left:0,top:0,bottom:0,right:0},id:"0"}))(t);a=a.setIn(["layouts",o.id,"content",r.id],r).setIn(["layouts",o.id,"order"],[r.id]),(0,l.getAppConfigAction)(a).exec(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged((0,e.Immutable)({layoutId:o.id,layoutItemId:"0"})))}})(c,O.current)}),[c,O]),e.hooks.useUnmount((()=>{(e=>{if(e){let t=(0,l.getAppConfigAction)().appConfig;t=t.setIn(["layouts",e.id,"content"],{}).setIn(["layouts",e.id,"order"],[]),(0,l.getAppConfigAction)(t).exec()}})(O.current)})),(0,e.jsx)(e.React.Fragment,null,m&&(0,e.jsx)(t.Popper,{floating:!0,open:!0,headerTitle:A,onHeaderClose:p,minSize:b,onResize:e=>{g(c,e)},dragBounds:"body",defaultSize:v||w,css:y,version:h,className:"flex-grow-1",reference:r,disableResize:s,toggle:e=>{if("Escape"===(null==e?void 0:e.key)){null==p||p();const e=null==r?void 0:r.querySelector("button");null==e||e.focus()}},placement:n},(0,e.jsx)("div",{className:"widget-container controller-configuration-container d-flex p-1",ref:f},(0,e.jsx)(i.LayoutBuilder,{isItemAccepted:R,layouts:I,itemDraggable:!1,itemResizable:!0,showDefaultTools:!1}))))};var x=c(77756),C=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(o[a[r]]=e[a[r]])}return o};const I=(e,t,o)=>{let a=r[e];return t&&(a+=21),a+=2*j(e,o),a},j=(e,t)=>"circle"===t?"sm"===e?4:"default"===e?2:"lg"===e?0:void 0:6,A=e.React.forwardRef(((o,a)=>{var r;const{label:l,className:i,title:n,showLabel:s,showTooltip:c=!0,labelGrowth:d=0,icon:u,marker:p,onMarkerClick:g,avatar:v,autoFlip:h,active:f,editDraggable:m,disabled:y}=o,b=C(o,["label","className","title","showLabel","showTooltip","labelGrowth","icon","marker","onMarkerClick","avatar","autoFlip","active","editDraggable","disabled"]),w=v||{},{shape:R,style:S}=w,x=C(w,["shape","style"]),A=null==x?void 0:x.size,[O,k]=e.React.useState(null),P=((t,o,a,r)=>e.React.useMemo((()=>{const l=I(t,o,a),i=l+r,n=j(t,a);return e.css`
      display: flex;
      align-items:center;
      flex-direction: column;
      justify-content: ${o?"space-around":"center"};
      width: ${e.polished.rem(i)} !important;
      height: ${e.polished.rem(l)};
      .tool-drag-handler {
        cursor: auto;
      }
      .avatar {
        padding: ${n}px;
        position: relative;
        text-align: center;
        .marker {
          position: absolute;
          right: 0;
          top: 0;
          padding: 0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          .icon-btn-sizer {
            min-width: .625rem;
            min-height: .625rem;
          }
        }
      }
      .avatar-label {
        text-align: center;
        width: 100%;
        min-height: ${e.polished.rem(21)};
        cursor: default;
      }
    `}),[t,o,a,r]))(A,s,R,d),z=(0,e.jsx)(t.Button,Object.assign({icon:!0,active:f,disabled:y,className:"avatar-button",ref:a},x,{style:Object.assign({borderRadius:"circle"===R?"50%":void 0},S)}),(0,e.jsx)(t.Icon,{color:"string"!=typeof u&&(null===(r=u.properties)||void 0===r?void 0:r.color),icon:"string"!=typeof u?u.svg:u,autoFlip:h}));return(0,e.jsx)("div",Object.assign({},b,{className:(0,e.classNames)("avatar-card",`${i} avatar-card`),css:P}),(0,e.jsx)("div",{className:(0,e.classNames)({"no-drag-action":!m},"avatar tool-drag-handler"),onMouseEnter:()=>{k(!0)},onMouseLeave:()=>{k(!1)}},p&&O&&(0,e.jsx)(t.Button,{className:"marker",size:"sm",icon:!0,onClick:g},(0,e.jsx)(t.Icon,{size:8,icon:p})),c?(0,e.jsx)(t.Tooltip,{title:n||l,style:{pointerEvents:"none"}},z):z),s&&(0,e.jsx)("div",{className:(0,e.classNames)("avatar-label text-truncate",{active:f})},l))}));var O=c(55339),k=c.n(O);const P=(e,t,o)=>{let a=e,r=t;return r-a>o?r=e+o:r-a<o&&(a=0,r=a+o),[a,r]};const z=[],E=e.React.forwardRef(((o,a)=>{const{scrollRef:r,className:l,lists:i=z,createItem:n,vertical:s,itemLength:c,space:d,onChange:u,autoHideArrow:p,minLength:g=c,autoScrollEnd:v,autoSize:h,onScrollStatusChange:f}=o,m=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(o[a[r]]=e[a[r]])}return o}(o,["scrollRef","className","lists","createItem","vertical","itemLength","space","onChange","autoHideArrow","minLength","autoScrollEnd","autoSize","onScrollStatusChange"]),y=e.hooks.useTranslation(t.defaultMessages),[b,w]=e.hooks.useForwardRef(a),{start:R,end:S,disablePrevious:x,disableNext:C,hideArrow:I,scroll:j}=(t=>{var o;const{rootRef:a,lists:r,itemLength:l,autoSize:i,vertical:n,space:s,minLength:c,autoScrollEnd:d}=t,u=null!==(o=null==r?void 0:r.length)&&void 0!==o?o:0,p=e.hooks.useLatest(i),g=((t,o,a=0,r=a,l)=>{let i=((t,o=500,a=!1,r)=>{var l,i;const n=a?"clientHeight":"clientWidth",[s,c]=e.React.useState(null!==(i=null===(l=t.current)||void 0===l?void 0:l[n])&&void 0!==i?i:0),d=!r&&!window.jimuConfig.isInBuilder,u=e.hooks.useLatest((()=>{const e=t.current[n]||0;c(e)})),p=e.React.useMemo((()=>e.lodash.debounce((()=>{u.current()}),o)),[]);return e.React.useEffect((()=>{if(d)return;const e=t.current;e&&p();const o=new ResizeObserver(p);return o.observe(e),()=>{o.disconnect(),p.cancel()}}),[t,p,d]),s})(t,500,o,l);return i+=a,i=Math.max(i,r),i})(a,n,s,c,!i),v=e.React.useMemo((()=>p.current?u:Math.floor(g/l)),[p,u,l,g]),[h,f]=e.React.useState(P(0,0,v)[0]),[m,y]=e.React.useState(P(0,0,v)[1]),b=e.hooks.useLatest(h),w=e.hooks.useLatest(m),R=m-h>=u,S=0===h,x=m===u;e.React.useEffect((()=>{if(0===g)return;const[e,t]=P(w.current,b.current,v);f(e),y(t)}),[v,g,w,b]);const C=e.hooks.useEventCallback(((e,t=!0)=>{const o=t?1:v;let a=0,r=0;e?(a=h-o,a<0?(a=0,r=a+v):r=m-o):(r=m+o,r>u?(r=u,a=r-v):a=h+o),f(a),y(r)})),I=e.React.useRef([]),j=e.hooks.useEventCallback((()=>{const e=u>0&&I.current.length>0&&r[r.length-1]!==I.current[I.current.length-1];if(d&&e&&I.current.length>u){let e=0,t=0;t=u,e=t-v,e=Math.max(0,e),f(e),y(t)}}));return e.React.useEffect((()=>{j(),I.current=r}),[r,j]),{start:h,end:m,disablePrevious:S,disableNext:x,hideArrow:R,scroll:C}})({rootRef:b,lists:i,itemLength:c,autoSize:h,vertical:s,space:d,minLength:g,autoScrollEnd:v}),A=h?i:i.slice(R,S),O=!!h||I,k=((t,o,a,r,l)=>e.css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button.previous, button.next {
      flex-shrink: 0;
      display: ${l?"none":"block"};
    }
    .root {
      flex-direction: ${t?"column":"row"};
      width: 100%;
      height: 100%;
      min-width: ${e.polished.rem(a)};
      max-height: ${r?"100%":"calc(100% - 20px)"};
      max-width: ${r?"100%":"calc(100% - 20px)"};
      display: flex;
      justify-content: center;
      flex-wrap: nowrap;
      align-items: center;
      .scroll-list-item {
        &:not(:first-of-type) {
          margin-top: ${t?e.polished.rem(o):"unset"};
          margin-left: ${t?"unset":e.polished.rem(o)};
        }
      }
    }
`)(s,d,g,h,O);return e.React.useEffect((()=>{null==f||f(O,x,C)}),[C,x,O,f]),e.React.useEffect((()=>{t.utils.setRef(r,j)}),[j,r]),(0,e.jsx)(t.NavButtonGroup,Object.assign({},m,{css:k,type:"tertiary",vertical:s,onChange:e=>{null==u||u(e),j(e,!0)},disablePrevious:x,disableNext:C,previousAriaLabel:y("previous"),nextAriaLabel:y("next"),className:(0,e.classNames)("scroll-list",l)}),(0,e.jsx)("div",{className:"root scroll-list-root",ref:w},A.map((e=>n(e,"scroll-list-item")))))}));var L=c(25164),N=c.n(L),M=c(34796);const T=(0,M.styled)("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${e=>e.vertical?"column":"row"};
  .avatar-placeholder {
    &:not(:first-of-type) {
      margin-top: ${t=>t.vertical?e.polished.rem(t.space):"unset"};
      margin-left: ${t=>t.vertical?"unset":e.polished.rem(t.space)};
    }
  }
`,B=(e=>{const t=[];for(;e>0;)t.push(e),e--;return t})(3),W={type:"secondary",size:"lg",shape:"circle"},$=t=>{const{vertical:o,space:a,size:r="lg"}=t,l=e.React.useMemo((()=>Object.assign(Object.assign({},W),{size:r})),[r]);return e.React.createElement(T,{className:"list-placeholder",vertical:o,space:a},B.map(((t,o)=>e.React.createElement(A,{key:o,disabled:!0,className:"avatar-placeholder",icon:N(),label:"",showTooltip:!1,avatar:l}))))};const D=e.css`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    background: transparent;
    > .drop-area {
      width: 100%;
      height: 100%;
    }
    > .overlay {
      position: absolute;
      left: 0;
      bottom: 0;
      top: 0;
      right: 0;
      background: transparent;
      z-index: -1;
      &.hide {
        display: none;
      }
    }
  `,Z=e.React.forwardRef(((t,o)=>{const{widgetId:a,layout:r,layouts:l,vertical:s,childClass:c,placeholder:d,className:u}=t,p=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(o[a[r]]=e[a[r]])}return o}(t,["widgetId","layout","layouts","vertical","childClass","placeholder","className"]),{color:g,size:[v,h]}=d,m=e.React.useRef(null),y=e.React.useRef(null),b=e.React.useRef(null),w=e.React.useRef(null),R=e.React.useRef(null),[S,x]=e.React.useState(!1),C=e.hooks.useForkRef(m,o);return e.React.useEffect((()=>{y.current=new i.CanvasPane(R.current)}),[]),(0,e.jsx)("div",Object.assign({className:(0,e.classNames)("drop-zone",u),ref:C},p,{css:D}),(0,e.jsx)(i.DropArea,{style:D,className:"drop-area",layouts:l,highlightDragover:!0,onDragOver:(t,o,a,r)=>{let l=r;const i=w.current,n=m.current.offsetHeight,c=m.current.offsetWidth;if(i&&i.length)if(s){const{insertY:e,refId:t}=((e,t,o)=>{const a=t.top+t.height/2;let r,l,i=!1;if(o.some(((e,t)=>{if(e.top+e.height/2>a){if(0===t)r=e.top/2;else{const a=o[t-1];r=(e.top+a.top+a.height)/2}i=!0,l=e.id}return i})),!i){const t=o[o.length-1];r=(t.top+t.height+e.height)/2}return{insertY:r,refId:l}})(a,l,i);b.current=t,l={top:e-v/2+m.current.scrollTop,width:v,left:(c-v)/2+m.current.scrollLeft,height:h}}else{const{insertX:e,refId:t}=((e,t,o)=>{const a=t.left+t.width/2;let r,l,i=!1;if(o.some(((e,t)=>{if(e.left+e.width/2>a){if(0===t)r=e.left/2;else{const a=o[t-1];r=(e.left+a.left+a.width)/2}i=!0,l=e.id}return i})),!i){const t=o[o.length-1];r=(t.left+t.width+e.width)/2}return{insertX:r,refId:l}})(a,l,i);b.current=t,l={left:e-h/2+m.current.scrollLeft,width:h,top:(n-v)/2+m.current.scrollTop,height:v}}else l=s?{top:a.height/2-h/2,width:v,left:h/2,height:h}:{left:a.width/2-h/2,width:h,top:(n-v)/2+m.current.scrollTop,height:v};y.current.clear(),y.current.setColor(e.polished.rgba(g,1)),y.current.drawRect(l)},onDrop:(e,t,o)=>{y.current.clear();let a=0;b.current?a=r.order&&r.order.indexOf(b.current)||0:r.order&&(a=r.order.length),f(r,e,t,o,a),b.current=null,w.current=[]},onToggleDragoverEffect:e=>{e&&(b.current=null,(()=>{w.current=[];const e=m.current.getBoundingClientRect(),t=m.current.parentNode.querySelectorAll(`.${c}`);t&&t.length&&t.forEach((t=>{const o=t.getAttribute("data-layoutitemid");if(r.order&&r.order.includes(o)){const a=n.utils.relativeClientRect(t.getBoundingClientRect(),e);a.id=o,w.current.push(a)}})),s?w.current.sort(((e,t)=>e.top-t.top)):w.current.sort(((e,t)=>e.left-t.left))})(),y.current.setSize(m.current.clientWidth,m.current.clientHeight)),x(e)}}),(0,e.jsx)("canvas",{className:(0,e.classNames)("overlay",{hide:!S}),ref:R}))})),H=(0,i.withRnd)(!1)((o=>{var a,r;const{markerEnabled:l,onMarkerClick:i,widgetid:n,showLabel:s,showTooltip:c,labelGrowth:d,avatar:u,onClick:p,active:g,editDraggable:v,className:h}=o,f=e.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig.widgets)||void 0===t?void 0:t[n]}));return f?e.React.createElement(A,{"data-widgetid":n,className:`widget-avatar-card ${h}`,showLabel:s,showTooltip:c,labelGrowth:d,avatar:u,label:f.label,icon:f.icon,autoFlip:null===(r=null===(a=null==f?void 0:f.manifest)||void 0===a?void 0:a.properties)||void 0===r?void 0:r.flipIcon,marker:l?k():"",active:g,editDraggable:v,onMarkerClick:i,onClick:p}):e.React.createElement(t.Loading,null)})),G=t=>{const{className:o,draggable:a,layoutId:r,layoutItem:l,onClick:i,label:n,showLabel:s,showTooltip:c,labelGrowth:d,markerEnabled:u,avatar:p,active:g,removeWidget:v}=t;return e.React.createElement(H,{className:(0,e.classNames)(o,"layout-item","align-items-center"),layoutId:r,layoutItem:l,widgetid:l.widgetId,layoutItemId:l.id,label:n,markerEnabled:u,showLabel:s,showTooltip:c,labelGrowth:d,avatar:p,active:g,editDraggable:a,useDragHandler:!0,onClick:i,onMarkerClick:()=>{v(l.widgetId)}})};const V=e.React.forwardRef(((t,a)=>{const{widgetId:r,draggable:l,itemStyle:i,vertical:c,className:d,space:p,dropZoneRef:v,onItemClick:f,onClick:y,scrollRef:b,markerEnabled:w=!0,autoSize:R,placeholder:S}=t,x=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(o[a[r]]=e[a[r]])}return o}(t,["widgetId","draggable","itemStyle","vertical","className","space","dropZoneRef","onItemClick","onClick","scrollRef","markerEnabled","autoSize","placeholder"]),C=e.ReactRedux.useSelector((e=>{var t,a,l;return null===(l=null===(a=null===(t=e.appConfig.widgets)||void 0===t?void 0:t[r])||void 0===a?void 0:a.layouts)||void 0===l?void 0:l[o]})),j=u(r,o),A=g(j),O=(0,M.getBuilderThemeVariables)(),k=s(r,o),P=Object.keys(k).filter((t=>k[t].state===e.WidgetState.Opened)),z=((e,t)=>{const o=null==e?void 0:e.showLabel,a=null==e?void 0:e.labelGrowth,r=null==e?void 0:e.avatar.size,l=null==e?void 0:e.avatar.shape;return I(r,o,l)+t+a})(i,p),L={color:null==O?void 0:O.colors.palette.primary[700],size:[z,5]};return e.React.createElement(n.LayoutContext.Provider,{value:{isItemAccepted:h}},e.React.createElement("div",{ref:a,className:(0,e.classNames)(d,"layout controller-layout w-100 h-100 d-flex align-items-center justify-content-center"),"data-layoutid":j.id,onClick:y},e.React.createElement(Z,{widgetId:r,vertical:c,layout:j,childClass:`layout-${j.id}-item`,placeholder:L,layouts:C}),S||e.React.createElement(E,Object.assign({},x,{autoSize:R,scrollRef:b,className:"layout-item-list",vertical:c,itemLength:z,space:p,autoHideArrow:!0,lists:A,autoScrollEnd:!0,createItem:(t,o)=>{const a=j.content[t],r=a&&a.widgetId||"",n=P.includes(r);return e.React.createElement(G,Object.assign({},i,{key:t,className:(0,e.classNames)(`layout-${null==j?void 0:j.id}-item layout-item`,o),widgetid:r,layoutId:j.id,layoutItemId:t,draggable:l,markerEnabled:w,layoutItem:a,active:n,removeWidget:m,onClick:f}))}}))))}));const F=e.React.forwardRef(((t,o)=>{var a;const{showPlaceholder:r,itemStyle:l,space:i,vertical:n}=t,s=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(o[a[r]]=e[a[r]])}return o}(t,["showPlaceholder","itemStyle","space","vertical"]),c=n?i:l.labelGrowth;return e.React.createElement(V,Object.assign({className:"w-100 h-100",ref:o,itemStyle:l,space:i,vertical:n,placeholder:r?e.React.createElement($,{size:null===(a=l.avatar)||void 0===a?void 0:a.size,space:c,vertical:n}):void 0},s))})),U=e.css`
  width: 300px;
  height: 300px;
  overflow-y: auto;
`,_={Builder:t=>{var a,r,i,c,d,u;const{id:g,config:v,version:m,autoSize:y}=t,b=e.React.useMemo((()=>p(g,o)),[g]),w=e.hooks.useCheckSmallBrowserSizeMode(),R=null!==(r=null===(a=null==v?void 0:v.behavior)||void 0===a?void 0:a.arrangement)&&void 0!==r?r:"floating",C=null===(i=null==v?void 0:v.behavior)||void 0===i?void 0:i.vertical,I=null===(c=v.behavior)||void 0===c?void 0:c.size,j=C?"right-start":"bottom",{viewOnly:A}=e.React.useContext(n.PageContext),O=e.React.useRef(null),k=e.ReactRedux.useSelector((e=>e.widgetsState[g])),P=e.ReactRedux.useSelector((e=>{var t;return null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.currentDialogId})),z=null==k?void 0:k.showWidgetsPanel,E=e.ReactRedux.useSelector((e=>e.browserSizeMode)),L=e.React.useRef(),[N,M]=e.React.useState(null),T=s(g,o),B=!Object.keys(null!=T?T:{}).length,W=Object.keys(T).filter((t=>T[t].state===e.WidgetState.Opened)),$=null==W?void 0:W[0],D=null==I?void 0:I[$],Z="floating"===R||w;e.React.useEffect((()=>{(0,e.getAppStore)().dispatch(e.appActions.closeWidgets(W))}),[m]),e.React.useEffect((()=>{z&&E===e.BrowserSizeMode.Small&&(l.appBuilderSync.letBuilderShowPopperSelector("widget",{isPlaceholder:!1,isItemAccepted:h,onSelect:V}),(0,e.getAppStore)().dispatch(e.appActions.widgetStatePropChange(g,"showWidgetsPanel",!1)))}),[z]);const H=e.React.useCallback(((t,o,a)=>{(0,e.getAppStore)().dispatch(e.appActions.widgetStatePropChange(g,"hideArrow",t)),(0,e.getAppStore)().dispatch(e.appActions.widgetStatePropChange(g,"disablePrevious",o)),(0,e.getAppStore)().dispatch(e.appActions.widgetStatePropChange(g,"disableNext",a))}),[g]);e.React.useEffect((()=>{(0,e.getAppStore)().dispatch(e.appActions.widgetStatePropChange(g,"onArrowClick",L.current))}),[g]);const G=e.React.useCallback((()=>{(0,e.getAppStore)().dispatch(e.appActions.widgetStatePropChange(g,"showWidgetsPanel",!1))}),[g]);e.React.useEffect((()=>{P&&G()}),[G,P]);const V=e=>{var t,a;const r=p(g,o),l=null!==(a=null===(t=r.order)||void 0===t?void 0:t.length)&&void 0!==a?a:0;f(r,e,{},{},l)};return(0,e.jsx)("div",{className:"controller-builder w-100 h-100",ref:O,onClick:e=>{const t=e.target,o=O.current;t&&o&&o.contains(t)&&G()}},$&&Z&&(0,e.jsx)(S,{reference:N,version:m,disableResize:w,widgetId:$,controllerId:g,size:D,onClose:()=>(0,e.getAppStore)().dispatch(e.appActions.closeWidgets(W)),onSizeChange:(t,o)=>{if(!t)return;let a=(null==v?void 0:v.behavior.size)||(0,e.Immutable)({});a=a.set(t,o),(e=>{(0,l.getAppConfigAction)().editWidgetConfig(g,e).exec()})(v.setIn(["behavior","size"],a))},placement:j}),(0,e.jsx)(F,{autoSize:y,scrollRef:L,showPlaceholder:B,onScrollStatusChange:H,vertical:null===(d=null==v?void 0:v.behavior)||void 0===d?void 0:d.vertical,widgetId:g,onItemClick:t=>{var o;if(A)return;const a=t.currentTarget,r=null===(o=a.dataset)||void 0===o?void 0:o.widgetid;if(M(a),(null==W?void 0:W.length)&&(0,e.getAppStore)().dispatch(e.appActions.closeWidgets(W)),(0,e.getAppStore)().dispatch(e.appActions.openWidget(r,g)),!Z){t.stopPropagation();const o=Object.keys(b.content).find((e=>b.content[e].widgetId===r));(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:b.id,layoutItemId:o}))}},itemStyle:v.appearance.card,draggable:!0,markerEnabled:!A,space:null===(u=null==v?void 0:v.appearance)||void 0===u?void 0:u.space}),z&&E!==e.BrowserSizeMode.Small&&(0,e.jsx)(x.WidgetListPopper,{css:U,placement:"right-start",referenceElement:O.current,isAccepted:h,onSelect:V,onClose:e=>{(e=>{var t,o;if(!e)return!1;if("controller-add-widget"===(null===(t=e.dataset)||void 0===t?void 0:t.extname))return!0;const a=e.parentElement;return"controller-add-widget"===(null===(o=null==a?void 0:a.dataset)||void 0===o?void 0:o.extname)})(null==e?void 0:e.target)||G()}}))}}})(),d})())}}}));