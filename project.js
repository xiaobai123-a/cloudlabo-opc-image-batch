/* Application fields and sample data. MIT License. */
const SPEC={
  "id": "B06",
  "slug": "image-batch",
  "name": "图片批处理工具",
  "desc": "批量调整尺寸、裁剪、转换格式、添加文字水印并统一命名。",
  "fields": [
    {
      "key": "images",
      "label": "选择PNG / JPEG / WebP图片",
      "type": "upload",
      "value": [],
      "mode": "image"
    },
    {
      "key": "width",
      "label": "输出宽度",
      "type": "number",
      "value": 1200,
      "min": 1
    },
    {
      "key": "height",
      "label": "输出高度",
      "type": "number",
      "value": 1200,
      "min": 1
    },
    {
      "key": "fit",
      "label": "缩放方式",
      "type": "select",
      "value": "留白完整显示",
      "options": [
        "留白完整显示",
        "居中裁剪"
      ]
    },
    {
      "key": "format",
      "label": "导出格式",
      "type": "select",
      "value": "PNG",
      "options": [
        "PNG",
        "JPEG",
        "WebP"
      ]
    },
    {
      "key": "background",
      "label": "背景颜色",
      "type": "color",
      "value": "#ffffff"
    },
    {
      "key": "watermark",
      "label": "右下角文字水印",
      "type": "text",
      "value": "示例预览"
    },
    {
      "key": "prefix",
      "label": "导出文件名前缀",
      "type": "text",
      "value": "product"
    }
  ],
  "tables": [],
  "sampleFiles": "image",
  "limits": "不生成图片、不去背景；单张输出尺寸上限4096，使用浏览器Canvas编码。",
  "dirname": "image-batch",
  "example": {
    "_files": {
      "images": [
        {
          "name": "sample-cup.svg",
          "type": "image/svg+xml",
          "size": 645,
          "data": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIiB2aWV3Qm94PSIwIDAgODAwIDgwMCI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiNlOGVlZTIiLz48ZWxsaXBzZSBjeD0iNDAwIiBjeT0iNjUwIiByeD0iMTc1IiByeT0iMjgiIGZpbGw9IiNjZWQ5YzgiLz48cmVjdCB4PSIyNzgiIHk9IjIwMyIgd2lkdGg9IjI0NCIgaGVpZ2h0PSI0MjQiIHJ4PSI2NSIgZmlsbD0iI2ZkZmJmNSIgc3Ryb2tlPSIjOWFhZDllIiBzdHJva2Utd2lkdGg9IjQiLz48cmVjdCB4PSIyNzMiIHk9IjE3NSIgd2lkdGg9IjI1NCIgaGVpZ2h0PSI3NSIgcng9IjIzIiBmaWxsPSIjMjQ0YjNkIi8+PHBhdGggZD0iTTM0NSAxOTVINDU1IiBzdHJva2U9IiM3NDhkNzMiIHN0cm9rZS13aWR0aD0iOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTMyNCAyOTBWNTQwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjE1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSI0MDAiIGN5PSI0MDEiIHI9IjM5IiBmaWxsPSIjZDRkZWM5Ii8+PHBhdGggZD0iTTM4MSA0MDRxMTkgLTQyIDM5IDBxLTE5IDQyIC0zOSAwIiBmaWxsPSIjNjg4MzY1Ii8+PC9zdmc+"
        }
      ]
    },
    "width": 1200,
    "height": 1200,
    "fit": "留白完整显示",
    "format": "PNG",
    "background": "#ffffff",
    "watermark": "示例预览",
    "prefix": "product"
  },
  "inputTitle": "图片与处理设置",
  "outputTitle": "图片预览",
  "action": "处理图片"
};
