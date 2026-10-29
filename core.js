/* 图片批处理工具: deterministic business rules. MIT License. */
(function(){
'use strict';
const H=typeof module==='object'&&module.exports?require('./common.js'):globalThis.OPC;
const {clone,esc,num,money,lines,choices,required,tableRows,metric,note,safeName,csv,parseCSV,day,today,unique,replaceTokens,documentHTML,crc32,zipBytes}=H;
const process=function process(d){
 const images=d._files?.images||[];if(!images.length)throw Error('请先选择图片或载入示例');const w=num(d.width,'宽度',1),h=num(d.height,'高度',1);if(w>4096||h>4096||!Number.isInteger(w)||!Number.isInteger(h))throw Error('宽高必须为1—4096的整数');return {metrics:[metric('待处理图片',images.length),metric('输出尺寸',w+'×'+h)],columns:['原文件','输出名称'],rows:images.map((f,i)=>[f.name,safeName(d.prefix)+'-'+String(i+1).padStart(3,'0')+'.'+({PNG:'png',JPEG:'jpg',WebP:'webp'}[d.format])]),view:{kind:'batch',images,options:d}};
};
const api={process};
if(typeof module==='object'&&module.exports)module.exports=api;else globalThis.Core=api;
})();
