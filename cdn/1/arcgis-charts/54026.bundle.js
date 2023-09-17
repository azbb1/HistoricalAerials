"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[54026],{54026:(e,a,t)=>{t.r(a),t.d(a,{additionalProperty:()=>y,anyOfValues:()=>$,bubbleChartValidateMsg:()=>L,default:()=>F,defaultError:()=>r,defaultInvalidChart:()=>s,duplicateSeriesID:()=>h,enumValues:()=>v,gaugeCannotExceedLimit:()=>q,histogramEmptyField:()=>b,invalidSeriesType:()=>P,layerLoadFailure:()=>d,lineChartMarkersCannotExceedLimit:()=>T,lineChartSeriesAndMarkersCannotExceedLimit:()=>I,maxItems:()=>C,minItems:()=>g,minLength:()=>p,negativeValueInDataForLogTransformation:()=>l,negativeValueInDataForSqrtTransformation:()=>u,nonNumericAggregation:()=>m,or:()=>x,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:()=>E,pieChartSlicesCannotExceedLimit:()=>S,queryError:()=>w,requiredProperty:()=>c,threePlusSeriesBarCountCannotExceedLimit:()=>n,twoSeriesBarCountCannotExceedLimit:()=>o,uniqueSeriesBarCountCannotExceedLimit:()=>i,whiteSpacePattern:()=>f});const r="An error occurred while loading the chart.",i="There are a total of ${ elementCount } bars in this chart. Bar charts with one series are limited to ${ totalLimit } bars. Choose a Category field with fewer unique values or apply a filter to your data.",o="Bar charts with two series are limited to ${ totalLimit } bars, or ${ seriesLimit } bars per series. Choose a Category field with fewer unique values or apply a filter to your data.",n="Bar charts with three or more series are limited to ${ totalLimit } bars, or ${ seriesLimit } bars per series. Choose a Category field with fewer unique values or apply a filter to your data.",s="There was an error creating the chart.",l="Cannot apply a log transformation to negative or zero values.",u="Cannot apply a square root transformation to negative values.",d="An error occurred while loading the layer. URL = ${ url }. Portal item ID = ${ portalItemId }.",h="${ dataPath } must be unique. The series named ${ seriesName } has an ID (${ seriesID }) that is already used by another series.",m="${ dataPath } cannot perform non-count aggregation on non-numeric field.",c="${ dataPath } is missing a property named ${ missingProperty }.",p="${ dataPath } must not be shorter than ${ limit } characters.",g="${ dataPath } must not have fewer than ${ limit } items.",C="${ dataPath } must not have more than ${ limit } items.",f="${ dataPath } must have at least one non-whitespace character.",y="${ dataPath } must not have ${ additionalProperty }.",v="${ dataPath } must be equal to one of these allowed values: ${ allowedValues }.",$="${ dataPath } must match the schema of one of these: ${ schemaOptions }.",L="Scatter plots with proportional symbols are not supported. Default symbol size has been applied.",w="Failure to read input data.",b="Histograms require at least two numeric values.",P="The expected series type at index ${ seriesIndex } is '${ expectedType }' but '${ receivedType }' was received instead",x="or",E="Ensure the sum total of the chosen numeric field(s) returns all positive values or all negative values.",S="There are a total of ${ sliceCount } slices in this chart. Pie charts are limited to ${ totalLimit } slices. Choose a Category field with fewer unique values, add fewer Numeric fields, or apply a filter to your data.",q="Feature-based gauges are limited to ${ totalLimit } features. Filter your data.",I="There are a total of ${ seriesCount } series and ${ elementCount } data points in this chart. Line charts are limited to ${ seriesLimit } series and ${ totalLimit } data points. Reduce the number of series and/or re-aggregate or filter your data.",T="Line charts are limited to ${ totalLimit } data points. Filter or re-aggregate your data and try again.";var F={defaultError:r,uniqueSeriesBarCountCannotExceedLimit:i,twoSeriesBarCountCannotExceedLimit:o,threePlusSeriesBarCountCannotExceedLimit:n,defaultInvalidChart:"There was an error creating the chart.",negativeValueInDataForLogTransformation:"Cannot apply a log transformation to negative or zero values.",negativeValueInDataForSqrtTransformation:"Cannot apply a square root transformation to negative values.",layerLoadFailure:d,duplicateSeriesID:h,nonNumericAggregation:m,requiredProperty:c,minLength:p,minItems:g,maxItems:C,whiteSpacePattern:f,additionalProperty:"${ dataPath } must not have ${ additionalProperty }.",enumValues:v,anyOfValues:$,bubbleChartValidateMsg:L,queryError:"Failure to read input data.",histogramEmptyField:"Histograms require at least two numeric values.",invalidSeriesType:P,or:"or",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"Ensure the sum total of the chosen numeric field(s) returns all positive values or all negative values.",pieChartSlicesCannotExceedLimit:S,gaugeCannotExceedLimit:q,lineChartSeriesAndMarkersCannotExceedLimit:I,lineChartMarkersCannotExceedLimit:T}}}]);