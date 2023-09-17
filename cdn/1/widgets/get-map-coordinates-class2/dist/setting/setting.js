System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui"],(function(e,t){var s={},o={},i={};return{setters:[function(e){s.FormattedMessage=e.FormattedMessage,s.React=e.React,s.css=e.css,s.jsx=e.jsx},function(e){o.MapWidgetSelector=e.MapWidgetSelector,o.SettingRow=e.SettingRow,o.SettingSection=e.SettingSection},function(e){i.Switch=e.Switch}],execute:function(){e((()=>{var e={891:e=>{"use strict";e.exports=s},726:e=>{"use strict";e.exports=i},756:e=>{"use strict";e.exports=o}},t={};function n(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var a={};return n.p=window.jimuConfig.baseUrl,(()=>{"use strict";n.r(a),n.d(a,{__set_webpack_public_path__:()=>i,default:()=>o});var e=n(891),t=n(756),s=n(726);class o extends e.React.PureComponent{constructor(){super(...arguments),this.onShowScalePropertyChange=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("showScale",e.currentTarget.checked)})},this.onShowZoomPropertyChange=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("showZoom",e.currentTarget.checked)})},this.onShowTiltPropertyChange=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("showTilt",e.currentTarget.checked)})},this.onShowRotationPropertyChange=e=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("showRotation",e.currentTarget.checked)})},this.onMapWidgetSelected=e=>{this.props.onSettingChange({id:this.props.id,useMapWidgetIds:e})}}render(){const o=e.css`
      .widget-setting-get-map-coordinates {
        .checkbox-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
      }
    `;return(0,e.jsx)("div",{css:o},(0,e.jsx)("div",{className:"widget-setting-get-map-coordinates"},(0,e.jsx)(t.SettingSection,{className:"map-selector-section",title:this.props.intl.formatMessage({id:"mapWidgetLabel",defaultMessage:"Select Map Widget"})},(0,e.jsx)(t.SettingRow,null,(0,e.jsx)(t.MapWidgetSelector,{onSelect:this.onMapWidgetSelected,useMapWidgetIds:this.props.useMapWidgetIds}))),(0,e.jsx)(t.SettingSection,{title:this.props.intl.formatMessage({id:"settingsLabel",defaultMessage:"Settings"})},(0,e.jsx)(t.SettingRow,null,(0,e.jsx)("div",{className:"w-100 showZoom"},(0,e.jsx)("div",{className:"checkbox-row"},(0,e.jsx)("label",null,(0,e.jsx)(e.FormattedMessage,{id:"showZoom",defaultMessage:"Show Zoom"})),(0,e.jsx)(s.Switch,{checked:this.props.config&&this.props.config.showZoom||!1,onChange:this.onShowZoomPropertyChange})))),(0,e.jsx)(t.SettingRow,null,(0,e.jsx)("div",{className:"w-100 showScale"},(0,e.jsx)("div",{className:"checkbox-row"},(0,e.jsx)("label",null,(0,e.jsx)(e.FormattedMessage,{id:"showScale",defaultMessage:"Show Scale"})),(0,e.jsx)(s.Switch,{checked:this.props.config&&this.props.config.showScale||!1,onChange:this.onShowScalePropertyChange})))),(0,e.jsx)(t.SettingRow,null,(0,e.jsx)("div",{className:"w-100 showTilt"},(0,e.jsx)("div",{className:"checkbox-row"},(0,e.jsx)("label",null,(0,e.jsx)(e.FormattedMessage,{id:"showTilt",defaultMessage:"Show Tilt"})),(0,e.jsx)(s.Switch,{checked:this.props.config&&this.props.config.showTilt||!1,onChange:this.onShowTiltPropertyChange})))),(0,e.jsx)(t.SettingRow,null,(0,e.jsx)("div",{className:"w-100 showTilt"},(0,e.jsx)("div",{className:"checkbox-row"},(0,e.jsx)("label",null,(0,e.jsx)(e.FormattedMessage,{id:"showRotation",defaultMessage:"Show Rotation"})),(0,e.jsx)(s.Switch,{checked:this.props.config&&this.props.config.showRotation||!1,onChange:this.onShowRotationPropertyChange})))))))}}function i(e){n.p=e}})(),a})())}}}));