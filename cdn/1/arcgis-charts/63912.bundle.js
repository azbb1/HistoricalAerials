"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[63912],{63912:(e,i,s)=>{s.r(i),s.d(i,{default:()=>y});var t=s(36663),r=s(39994),n=s(76868),l=(s(13802),s(7283),s(7753),s(70375),s(40266)),a=s(15553),u=s(28854);let d=class extends u.default{initialize(){this.addHandles([(0,n.YP)((()=>this.view.scale),(()=>this._update()),n.nn)],"constructor")}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),i=this._commandsQueue.updating,s=null!=this._updatingRequiredFieldsPromise,t=!this._proxy||!this._proxy.isReady,n=this._pipelineIsUpdating,l=null==this.tileRenderer||this.tileRenderer?.updating,a=e&&(i||s||t||n||l);return(0,r.Z)("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${i}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${t}\n  -> updatingPipeline ${n}\n  -> updatingTileRenderer ${l}\n`),a}_injectOverrides(e){let i=super._injectOverrides(e);const s=this.view.scale,t=this.layer.sublayers.filter((e=>function(e,i){return!e.visible||0!==e.minScale&&i>e.minScale||0!==e.maxScale&&i<e.maxScale}(e,s))).map((e=>e.subtypeCode));if(!t.length)return i;i=null!=i?i:(new a.Z).toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return i.where=i.where?`(${i.where}) AND (${r})`:r,i}_setLayersForFeature(e){const i=this.layer.fieldsIndex.get(this.layer.subtypeField),s=e.attributes[i.name],t=this.layer.sublayers.find((e=>e.subtypeCode===s));e.layer=e.sourceLayer=t}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode,orderBy:null})))},i=this.layer.sublayers.map((e=>e.subtypeCode)).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${i})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...e,definitionExpression:t}}};d=(0,t._)([(0,l.j)("esri.views.2d.layers.SubtypeGroupLayerView2D")],d);const y=d}}]);