# DocTool

## 简介

1. 用于模拟 Microsoft Office Word 生成页面。

2. 本插件基于 jQuery-3.4.1 实现。

3. 本插件使用 ES6 语法，可能与部分浏览器不兼容。

## 使用

### 1. 引入文件

css/docTool.css

js/docTool.js

### 2. 初始化

默认样式：A4 大小，宽 792px，高 1120px，上边距 94px，下边距 94px，左边距 118px，右边距 118px，背景底色为白色，字体为 Arial。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="container"></div>
</body>
</html>
```

- 初始化首页

```javascript
let doc = new DocTool("container");
// let doc = new DocTool("container", true);
```

- 不初始化首页

```javascript
let doc = new DocTool("container", false);
```

### 3. 页面调整

#### 1) 插入分页符

相当于添加一个空白页。

```javascript
doc.addPage();
```

#### 2) 删除最后一页

```javascript
doc.deleteLastPage();
```

#### 3) 删除第一页

```javascript
doc.deleteFirstPage();
```

#### 4) 删除指定页码的页

页码从 0 开始。

```javascript
let index = 0;
doc.deletePage(index);
```

#### 5) 删除全部页

```javascript
doc.deletePage();
```

#### 6) 改变页面大小

```javascript
doc.changePageSize("A4");   // 目前仅支持 A4 大小
```

#### 7) 设置自定义页面参数

应用于 css 样式，单位需要为“px”，参数类型可为 string 可为 number。

1.页面宽度

```javascript
doc.setPageWidth(width);
```

2.页面高度

```javascript
doc.setPageHeight(height);
```

3.页面上边距

```javascript
doc.setPagePaddingTop(paddingTop);
```

4.页面右边距

```javascript
doc.setPagePaddingRight(paddingRight);
```

5.页面下边距

```javascript
doc.setPagePaddingBottom(paddingBottom);
```

6.页面左边距

```javascript
doc.setPagePaddingLeft(paddingLeft);
```

### 4. 创建段落文本

#### 1) 标题

默认样式：字号 30px（24 号），加粗，居中，行高 54px（1.5 行），段前 18px（0.5 行）。

1.可通过第二个参数指定样式，该参数遵循 jQuery 的 css 语法。

```javascript
doc.createTitle("Title");
doc.createTitle("Title", {
    color: "#f00"
});
```

2.可通过相关方法修改标题样式。

- 方式一

```javascript
doc.setTitleFontSize("30px");
doc.setTitleFontWeight("bold");
doc.setTitleFontColor("#000");
doc.setTitleTextAlign("center");
doc.setTitleLineHeight("54px");
doc.setTitleParagraphPaddingTop("18px");
doc.setTitleParagraphPaddingBottom("0px");
```

- 方式二，该参数遵循 jQuery 的 css 语法

```javascript
doc.setTitleStyle({
    fontSize: "30px",
    fontWeight: "bold"
});
```

当调用方式二时，会覆盖方式一的全部设置，只有在方式二中传入空对象 {}，或清除自定义样式才能使方式一的设置生效。

3.可清除自定义样式。

- 清除设置并生效

```javascript
doc.clearTitleStyle();
```

- 仅清除设置

```javascript
doc.clearTitleStyleSetting();
```

#### 2) 副标题

默认样式：字号 23px（18 号），加粗，居中，行高 39px（1.5 行），段前 13px（0.5 行）。

1.可通过第二个参数指定样式，该参数遵循 jQuery 的 css 语法。

```javascript
doc.createSubTitle("SubTitle");
doc.createSubTitle("SubTitle", {
    color: "#f00"
});
```

2.可通过相关方法修改副标题样式。

- 方式一

```javascript
doc.setSubTitleFontSize("23px");
doc.setSubTitleFontWeight("bold");
doc.setSubTitleFontColor("#000");
doc.setSubTitleTextAlign("center");
doc.setSubTitleLineHeight("39px");
doc.setSubTitleParagraphPaddingTop("13px");
doc.setSubTitleParagraphPaddingBottom("0px");
```

- 方式二，该参数遵循 jQuery 的 css 语法

```javascript
doc.setSubTitleStyle({
    fontSize: "23px",
    fontWeight: "bold"
});
```

当调用调用方式二时，会覆盖方式一的全部设置，只有在方式二中传入空对象 {}，或清除自定义样式才能使方式一的设置生效

3.可清除自定义样式。

- 清除设置并生效

```javascript
doc.clearSubTitleStyle();
```

- 仅清除设置

```javascript
doc.clearSubTitleStyleSetting();
```

#### 3) 一级标题

默认样式：字号 20px（16 号），加粗，居左，行高 33px（1.5 行），段前 11px（0.5 行）。

1.可通过第二个参数指定样式，该参数遵循 jQuery 的 css 语法。

```javascript
doc.createH1("Title 1");
doc.createH1("Title 1", {
    color: "#f00"
});
```

2.可通过相关方法修改一级标题样式。

- 方式一

```javascript
doc.setH1FontSize("20px");
doc.setH1FontWeight("bold");
doc.setH1FontColor("#000");
doc.setH1TextAlign("center");
doc.setH1LineHeight("33px");
doc.setH1ParagraphPaddingTop("11px");
doc.setH1ParagraphPaddingBottom("0px");
```

- 方式二，该参数遵循 jQuery 的 css 语法

```javascript
doc.setH1Style({
    fontSize: "20px",
    fontWeight: "bold"
});
```

当调用调用方式二时，会覆盖方式一的全部设置，只有在方式二中传入空对象 {}，或清除自定义样式才能使方式一的设置生效

3.可清除自定义样式。

- 清除设置并生效

```javascript
doc.clearH1Style();
```

- 仅清除设置

```javascript
doc.clearH1StyleSetting();
```

#### 4) 二级标题

默认样式：字号 18px（14 号），加粗，居左，行高 31px（1.5 行），段前 10px（0.5 行）。

1.可通过第二个参数指定样式，该参数遵循 jQuery 的 css 语法

```javascript
doc.createH2("Title 2");
doc.createH2("Title 2", {
    color: "#f00"
});
```

2.可通过相关方法修改二级标题样式

- 方式一

```javascript
doc.setH2FontSize("18px");
doc.setH2FontWeight("bold");
doc.setH2FontColor("#000");
doc.setH2TextAlign("center");
doc.setH2LineHeight("31px");
doc.setH2ParagraphPaddingTop("10px");
doc.setH2ParagraphPaddingBottom("0px");
```

- 方式二，该参数遵循 jQuery 的 css 语法

```javascript
doc.setH2Style({
    fontSize: "30px",
    fontWeight: "bold"
});
```

当调用调用方式二时，会覆盖方式一的全部设置，只有在方式二中传入空对象 {}，或清除自定义样式才能使方式一的设置生效

3.可清除自定义样式。

- 清除设置并生效

```javascript
doc.clearH2Style();
```

- 仅清除设置

```javascript
doc.clearH2StyleSetting();
```

#### 5) 正文

默认样式：字号 14px（10.5 号），居左，行高 24px（1.5 行），段前 8px（0.5 行）。

1.可创建两种形式正文

- 方式一(仅一个参数)：普通文本，默认样式

```javascript
doc.createText("Text");
```

- 方式二(两个参数)：第一个参数为粗体文本，其余样式符合默认样式，第二个参数为普通文本符合默认样式

```javascript
doc.createText("Title", "Text");
```

2.可通过相关方法修改正文样式

- 方式一

```javascript
doc.setTextFontSize("14px");
doc.setTextFontWeight("normal");
doc.setTextFontColor("#000");
doc.setTextTextAlign("center");
doc.setTextLineHeight("24px");
doc.setTextParagraphPaddingTop("8px");
doc.setTextParagraphPaddingBottom("0px");
```

- 方式二，该参数遵循 jQuery 的 css 语法

```javascript
doc.setTextStyle({
    fontSize: "14px",
    fontWeight: "bold"
});
```

当调用调用方式二时，会覆盖方式一的全部设置，只有在方式二中传入空对象 {}，或清除自定义样式才能使方式一的设置生效

3.可清除自定义样式。

- 清除设置并生效

```javascript
doc.clearTextStyle();
```

- 仅清除设置

```javascript
doc.clearTextStyleSetting();
```

#### 6) 自定义文本

默认样式：无。

- 方式一：创建无样式的文本

```javascript
doc.createCustomText("Text");
```

- 方式二：创建指定 css 类的文本

```javascript
doc.createCustomText("Title", "docText");
doc.createCustomText("Title", ["docText", "docH1"]);
```

- 方式三：创建指定样式的文本，第三个参数该参数遵循 jQuery 的 css 语法

```javascript
doc.createCustomText("Title", "", {
    fontSize: "14px",
    fontWeight: "bold"
});
doc.createCustomText("Title", [], {
    fontSize: "14px",
    fontWeight: "bold"
});
doc.createCustomText("Title", undefined, {
    fontSize: "14px",
    fontWeight: "bold"
});
```

第二个和第三个参数可同时使用

### 5. 创建图片

#### 1) 通过图片 base64 创建图片行

默认样式：居中

- 方式一：带 mimeType 前缀的 base64

```javascript
let base64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTA2LTI3VDE1OjQwOjEzKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wMy0yM1QxNzozNzozNiswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wMy0yM1QxNzozNzozNiswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MTk3YWUwYi1jMmNkLTUzNDEtODE0Mi1mMjU5YjAwZTMyZTkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiODQwYjc0ZC02MmUxLWY5NDgtYjUxNS0wNWNhZWFmMjZjNDYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZTE2ZDAwZC1iZDllLTI0NDUtYmE2Mi0wNTU3ZDk5YTQ0NjgiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjRlMTZkMDBkLWJkOWUtMjQ0NS1iYTYyLTA1NTdkOTlhNDQ2OCIgc3RFdnQ6d2hlbj0iMjAxOC0wNi0yN1QxNTo0MDoxMyswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MTk3YWUwYi1jMmNkLTUzNDEtODE0Mi1mMjU5YjAwZTMyZTkiIHN0RXZ0OndoZW49IjIwMjAtMDMtMjNUMTc6Mzc6MzYrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4eR08FAAAD3ElEQVQ4EQXBzY/cZQHA8e/zMr/f/HZmttPd7XZgd/uyWxIImgAVjB4AvXJRLnIw/gEKRgInCFwIBzCYGBOPJiZg4kUkRElM6s0EOEACoZfGAg0VEFba7svszszzfP18UFGxiBbmzqjuU93jV798i83+dSf9z4WLpuYu4Wl3Bns6n6JSlYWiohJUAKBCjRxFuGvtIz/Z/QFt2iWVEdO0Ry4RQgUjmTUefPIFapFUb/HX3z0VWgAAFZWFc+bHQuxMEWNYNXYI93qu1Z88+nefe15JmHut22e2XDt12u9/735P3/0jVVSCCgDsYlllvPSoB/V1Tg6/5J2PDNu3j6G27Ezw6s1AP8PKeEI7GtEJx2XB1Vmfeu1yAEBFRefUWrk5+5w33/oHi5noDdaWdWc4kzCy1yChcfvCjtubm/7mlZf882uvSrdlrVUVVFSsUovUKlo4Vrrxt+3HxsCKiYFEvO/eBxwujZz/95rObjgOuHbnI5ZSVKEsZNJ+6iBe8rZOL154w4Vf8P57QoukkTHh2d7X6mfs35Iyl1MP/8J28oC5wT5oERW0sH7ytzZ0kpNDkIzbK5c81x2YI9LD82f/4sbosvCsC/8DHW6dWXdn57yRgSoqFKfEVezRmRLGFmPEwCkn3cyUkjHiifyEgbEp4fbg2C73DRlz6LsxeUEVFayyvXrN2MMWhFVzCiZGxjiU9meGiDFgDI0xRmNGwpKAd57+l7OFqKigolIVZ/LVTOgjYSw9/PVLb5tbzDRuntiTFUwNhoSv/00W7qGiooKKin7DsQdMVn5u02IGzy4Xy5GGjJmRG83UM91n0sfYIIydFlFRUUF3WXjEtMpk+HtTyMaE7XJrVeZ+zVJCeq3ro5kqWz0NYWCI2A2+49SPUVFhMRfdh4QhYUgYM27v/FHdxyJdRHJyfajVOdY5mWRI2Iu4fOJxVVQgLBkTxtCa6Dx9+4vePJIUGnsMjCPMaWAOfe+/559Wp6jcLNchtBKHLgXUggpb+VDItkO8bVnn82MsBVI0xMYYMSZkgMVPcSE6Z3ooj3xXc8Zxf0+rqFDm/+PCHa+6P5NpkeItqlcgnTXQN/YxxujmQDfXP3Bj7bKnRvueTO8Kzwg/Foa+8rKohI2Vf3t0BLuHl4C3CXyDXIHuGvFoTgwzaihYMjkss/AAQiR4BFFCgGpmtb3CV4fnQu6VG1yfXSSFBkwEpsQEixnEDAGoLgMPs/Ae2nCefvMQXTpP4YCQDmnyh1z98lwAyA/99AaLP0joPqE0H7Cy+jHfum/Mn157LIRYgQoUcBkEAABCBQbggBJ/SCoA8H+fP8wCdTk5YgAAAABJRU5ErkJggg==";
doc.createImgInLineWithBase64(base64);
```

- 方式二：不带 mimeType 前缀的纯 base64，需要通过第二个参数设置 mimeType

```javascript
doc.createImgInLineWithBase64(base64, {type: "png"});
```

可通过第二个参数设置图片 align、title、alt、css 样式

```javascript
doc.createImgInLineWithBase64(base64, {
    type: "png",
    title: "title",
    alt: "alt",
    align: "left",
    style: {
        width: "100px",
        height: "100px"
    }
});
```

#### 2) 通过图片 base64 创建浮动图片

默认样式：右浮动

- 方式一：带 mimeType 前缀的 base64

```javascript
doc.createImgFloatWithBase64(base64);
```

- 方式二：不带 mimeType 前缀的纯 base64，需要通过第二个参数设置 mimeType

```javascript
doc.createImgFloatWithBase64(base64, {type: "png"});
```

可通过第二个参数设置图片 title、alt、float、css 样式

```javascript
doc.createImgFloatWithBase64(base64, {
    type: "png",
    title: "title",
    alt: "alt",
    float: "left",
    style: {
        width: "100px",
        height: "100px"
    }
});
```

#### 3) 通过图片路径创建图片行

默认样式：居中

```javascript
let path = "images/img.png";
doc.createImgInLineWithPath(path);
```

可通过第二个参数设置图片 align、title、alt、css 样式

```javascript
doc.createImgInLineWithPath(path, {
    title: "title",
    alt: "alt",
    align: "left",
    style: {
        width: "100px",
        height: "100px"
    }
});
```

#### 4) 通过图片路径创建浮动图片

默认样式：右浮动

```javascript
doc.createImgFloatWithPath(path);
```

可通过第二个参数设置图片 title、alt、float、css 样式

```javascript
doc.createImgFloatWithPath(path, {
    title: "title",
    alt: "alt",
    float: "left",
    style: {
        width: "100px",
        height: "100px"
    }
});
```

### 6. 创建表格

#### 1) 创建默认样式表格

默认样式：根据窗口及内容自动调整宽度，文字居中，边框为 1px solid #000。

```javascript
doc.createTable([[1,2,3],[1,2,3],[1,2,3]]);
```

#### 2) 创建自定义样式表格

通过第二个参数定义样式。

```javascript
doc.createTable([[1,2,3],[1,2,3],[1,2,3]], {
    className: "docTable",
    style: {
        color: "#f00"
    }
});
```

#### 3) 自定义参数详解

1. className: {string|Array} 给 table 指定 css 类名。默认为 `"docTable"`。

2. style: {Object} 给 table 添加指定样式，遵循 jQuery 的 css 语法。默认为空对象 `{}`。

3. multipleLine: {boolean} 是否解析每个单元格内的多行文本。默认为 `true`。

4. multipleLineSplitSymbolRegExp: {string} 单元格内多行文本切割正则表达式字符串。默认为 `"\\n"`。

5. customCol: {Array} 指定的行应用特殊样式，数组内元素应为数字，表示行数，下标从 0 开始。默认为 `[]`。

6. customColStyle: {Object} 指定的行应用的特殊样式，遵循 jQuery 的 css 语法。默认为空对象 `{}`。

7. customRow: {Array} 指定的列应用特殊样式，数组内元素应为数字，表示列数，下标从 0 开始。默认为 `[]`。

8. customRowStyle: {Object} 指定的列应用的特殊样式，遵循 jQuery 的 css 语法。默认为空对象 `{}`。

9. topHeadNum: {number} 指定上表头行数，以应用上表头样式。默认为 `0`。

10. topHeadStyle: {Object} 上表头样式，遵循 jQuery 的 css 语法。默认为空对象 `{}`。

11. leftHeadNum: {number} 指定左表头列数，以应用左表头样式。默认为 `0`。

12. leftHeadStyle: {Object} 左表头样式，遵循 jQuery 的 css 语法。默认为空对象 `{}`。

13. rightHeadNum: {number} 指定右表头列数，以应用右表头样式。默认为 `0`。

14. rightHeadStyle: {Object} 右表头样式，遵循 jQuery 的 css 语法。默认为空对象 `{}`。

15. bottomHeadNum: {number} 指定下表头行数，以应用下表头样式。默认为 `0`。

16. bottomHeadStyle: {Object} 下表头样式，遵循 jQuery 的 css 语法。默认为空对象 `{}`。

17. contentStyle: {Object} 全部单元格 td 的样式，遵循 jQuery 的 css 语法。默认为空对象 `{}`。

18. contentStyles: {Array} 二维数组，与表格内容二维数组相对应，可指定任意单元格 td 的样式，遵循 jQuery 的 css 语法。如无需指定可传入 undefined 等非 Object 类型的值。默认为 `[]`。

19. contentStylesPrivilege: {Array} 二维数组，与表格内容二维数组相对应，可指定任意单元格 td 的样式，遵循 jQuery 的 css 语法。如无需指定可传入 undefined 等非 Object 类型的值。默认为 `[]`。

#### 4) 自定义参数优先级

权重从最低到最高（下面的会覆盖上面的冲突样式）的排序为：

1. contentStyle（优先级最低的单元格 td 样式）

2. contentStyles

3. customRowStyle

4. customColStyle

5. rightHeadStyle

6. bottomHeadStyle

7. leftHeadStyle

8. topHeadStyle

9. contentStylesPrivilege（优先级最高的单元格 td 样式）

以上样式全部应用于单元格 td。

---

未完待续 2020.03.30