/**
 * @version 0.1
 * @author ssc
 */
class DocTool {
    constructor(id, init = true) {
        this.container = document.getElementById(id);
        this.$container = $("#" + id).addClass(["docContainer", "docPageA4"]).empty();
        this.pageSize = "A4";
        this.pageDefaultParameter = {
            width: 792,     // 页面宽度
            height: 1120,   // 页面高度
            paddingTop: 94,     // 页面上边距
            paddingRight: 118,  // 页面右边距
            paddingBottom: 94,  // 页面下边距
            paddingLeft: 118    // 页面左边距
        };

        this.width = "";    // 页面宽度
        this.height = "";   // 页面高度
        this.paddingTop = "";    // 页面上边距
        this.paddingRight = "";  // 页面右边距
        this.paddingBottom = ""; // 页面下边距
        this.paddingLeft = "";   // 页面左边距

        this.titleLineHeight = "";              // 标题行距
        this.titleParagraphPaddingTop = "";     // 标题段前
        this.titleParagraphPaddingBottom = "";  // 标题段后
        this.titleFontSize = "";   // 标题字号
        this.titleFontWeight = ""; // 标题字体粗细
        this.titleFontColor = "";  // 标题字体颜色
        this.titleTextAlign = "";  // 标题字体对齐方式
        this.titleStyle = {};      // 标题样式

        this.subTitleLineHeight = "";               // 副标题行距
        this.subTitleParagraphPaddingTop = "";      // 副标题段前
        this.subTitleParagraphPaddingBottom = "";   // 副标题段后
        this.subTitleFontSize = "";   // 副标题字号
        this.subTitleFontWeight = ""; // 副标题字体粗细
        this.subTitleFontColor = "";  // 副标题字体颜色
        this.subTitleTextAlign = "";  // 副标题字体对齐方式
        this.subTitleStyle = "";      // 副标题样式

        this.h1LineHeight = "";               // 一级标题行距
        this.h1ParagraphPaddingTop = "";      // 一级标题段前
        this.h1ParagraphPaddingBottom = "";   // 一级标题段后
        this.h1FontSize = "";   // 一级标题字号
        this.h1FontWeight = ""; // 一级标题字体粗细
        this.h1FontColor = "";  // 一级标题字体颜色
        this.h1TextAlign = "";  // 一级标题字体对齐方式
        this.h1Style = "";      // 一级标题样式

        this.h2LineHeight = "";               // 二级标题行距
        this.h2ParagraphPaddingTop = "";      // 二级标题段前
        this.h2ParagraphPaddingBottom = "";   // 二级标题段后
        this.h2FontSize = "";   // 二级标题字号
        this.h2FontWeight = ""; // 二级标题字体粗细
        this.h2FontColor = "";  // 二级标题字体颜色
        this.h2TextAlign = "";  // 二级标题字体对齐方式
        this.h2Style = "";      // 二级标题样式

        this.textLineHeight = "";               // 正文行距
        this.textParagraphPaddingTop = "";      // 正文段前
        this.textParagraphPaddingBottom = "";   // 正文段后
        this.textFontSize = "";   // 正文字号
        this.textFontWeight = ""; // 正文字体粗细
        this.textFontColor = "";  // 正文字体颜色
        this.textTextAlign = "";  // 正文字体对齐方式
        this.textStyle = "";      // 正文样式

        this.creating = false;
        this.taskQueue = [];

        if (init) this.addPage();
    }

    /**
     * 添加一个空页面
     *
     * @returns {jQuery} 添加的空页面 jQuery 元素
     */
    addPage() {
        let article = $("<article></article>")
            .css("width", this.width)
            .css("height", this.height)
            .css("padding-top", this.paddingTop)
            .css("padding-right", this.paddingRight)
            .css("padding-bottom", this.paddingBottom)
            .css("padding-left", this.paddingLeft);
        this.$container.append(article);
        return article;
    }

    /**
     * 修改页面大小
     *
     * @param size  {string} 页面大小，e.g. "A4"
     */
    changePageSize(size) {
        this.$container.removeClass(`docPage${this.pageSize}`).addClass(`docPage${size}`);
        this.pageSize = size;
    }

    /**
     * 删除第一个页面
     */
    deleteFirstPage() {
        this.$container.children("article:first-child").remove();
    }

    /**
     * 删除最后一个页面
     */
    deleteLastPage() {
        this.$container.children("article:last-child").remove();
    }

    /**
     * 删除指定页面或全部页面
     *
     * @param index {...number | undefined}
     */
    deletePage(index) {
        if (index === undefined)
            this.$container.children("article").remove();
        else
            this.$container.children("article").eq(index).remove();
    }

    /**
     * 指定标题文字字号，并对已添加的标题生效
     *
     * @param fontSize {string} css 样式
     */
    setTitleFontSize(fontSize) {
        this.titleFontSize = fontSize;
        this.$container.find(".docTitle").css("font-size", fontSize);
    }

    /**
     * 指定标题文字粗细，并对已添加的标题生效
     *
     * @param fontWeight {string} css 样式
     */
    setTitleFontWeight(fontWeight) {
        this.titleFontWeight = fontWeight;
        this.$container.find(".docTitle").css("font-weight", fontWeight);
    }

    /**
     * 指定标题文字颜色，并对已添加的标题生效
     *
     * @param fontColor {string} css 样式
     */
    setTitleFontColor(fontColor) {
        this.titleFontColor = fontColor;
        this.$container.find(".docTitle").css("font-color", fontColor);
    }

    /**
     * 指定标题文字对齐方式，并对已添加的标题生效
     *
     * @param align {string} css 样式
     */
    setTitleTextAlign(align) {
        this.titleTextAlign = align;
        this.$container.find(".docTitle").css("text-align", align);
    }

    /**
     * 指定标题文字行高，并对已添加的标题生效
     *
     * @param lineHeight {string} css 样式
     */
    setTitleLineHeight(lineHeight) {
        this.titleLineHeight = lineHeight;
        this.$container.find(".docTitle").css("line-height", lineHeight);
    }

    /**
     * 指定标题文字段前，并对已添加的标题生效
     *
     * @param paragraphPaddingTop {string} css 样式
     */
    setTitleParagraphPaddingTop(paragraphPaddingTop) {
        this.titleParagraphPaddingTop = paragraphPaddingTop;
        this.$container.find(".docTitle").css("padding-top", paragraphPaddingTop);
    }

    /**
     * 指定标题文字段后，并对已添加的标题生效
     *
     * @param paragraphPaddingBottom {string} css 样式
     */
    setTitleParagraphPaddingBottom(paragraphPaddingBottom) {
        this.titleParagraphPaddingBottom = paragraphPaddingBottom;
        this.$container.find(".docTitle").css("padding-bottom", paragraphPaddingBottom);
    }

    /**
     * 指定标题样式，并对已添加的标题生效
     *
     * @param style {Object} css 样式
     */
    setTitleStyle(style) {
        style = JSON.parse(JSON.stringify(style));
        DocTool.deleteProperties(style, "margin");
        this.titleStyle = style;
        this.$container.find(".docTitle").css(style);
    }

    /**
     * 添加标题行
     *
     * @param text {string} 文本内容
     */
    createTitle(text) {
        if (this.creating) {
            this.taskQueue[this.taskQueue.length] = {method: this.createTitle, argArray: Array.from(arguments)};
        } else {
            this.creating = true;
            setTimeout(() => {
                this.__createTitle(text);
                this.creating = false;
                this.__continueWork();
            });
        }
    }

    /**
     * 添加标题行核心代码
     *
     * @param text {string} 文本内容
     */
    __createTitle(text) {
        DocTool.addText({thisArg: this, text, className: "docTitle", fn: this.__createTitle}, function ($new) {
            if (Object.keys(this.titleStyle).length === 0) {
                $new.css("font-size", this.titleFontSize)
                    .css("font-weight", this.titleFontWeight)
                    .css("font-color", this.titleFontColor)
                    .css("text-align", this.titleTextAlign)
                    .css("line-height", this.titleLineHeight)
                    .css("padding-top", this.titleParagraphPaddingTop)
                    .css("padding-bottom", this.titleParagraphPaddingBottom);
            } else {
                $new.css(this.titleStyle);
            }
        });
    }

    /**
     * 指定副标题文字字号，并对已添加的副标题生效
     *
     * @param fontSize {string} css 样式
     */
    setSubTitleFontSize(fontSize) {
        this.subTitleFontSize = fontSize;
        this.$container.find(".docSubTitle").css("font-size", fontSize);
    }

    /**
     * 指定副标题文字粗细，并对已添加的副标题生效
     *
     * @param fontWeight {string} css 样式
     */
    setSubTitleFontWeight(fontWeight) {
        this.subTitleFontWeight = fontWeight;
        this.$container.find(".docSubTitle").css("font-weight", fontWeight);
    }

    /**
     * 指定副标题文字颜色，并对已添加的副标题生效
     *
     * @param fontColor {string} css 样式
     */
    setSubTitleFontColor(fontColor) {
        this.subTitleFontColor = fontColor;
        this.$container.find(".docSubTitle").css("font-color", fontColor);
    }

    /**
     * 指定副标题文字对齐方式，并对已添加的副标题生效
     *
     * @param align {string} css 样式
     */
    setSubTitleTextAlign(align) {
        this.subTitleTextAlign = align;
        this.$container.find(".docSubTitle").css("text-align", align);
    }

    /**
     * 指定副标题文字行高，并对已添加的副标题生效
     *
     * @param lineHeight {string} css 样式
     */
    setSubTitleLineHeight(lineHeight) {
        this.subTitleLineHeight = lineHeight;
        this.$container.find(".docSubTitle").css("line-height", lineHeight);
    }

    /**
     * 指定副标题文字段前，并对已添加的副标题生效
     *
     * @param paragraphPaddingTop {string} css 样式
     */
    setSubTitleParagraphPaddingTop(paragraphPaddingTop) {
        this.subTitleParagraphPaddingTop = paragraphPaddingTop;
        this.$container.find(".docSubTitle").css("padding-top", paragraphPaddingTop);
    }

    /**
     * 指定副标题文字段后，并对已添加的副标题生效
     *
     * @param paragraphPaddingBottom {string} css 样式
     */
    setSubTitleParagraphPaddingBottom(paragraphPaddingBottom) {
        this.subTitleParagraphPaddingBottom = paragraphPaddingBottom;
        this.$container.find(".docSubTitle").css("padding-bottom", paragraphPaddingBottom);
    }

    /**
     * 指定副标题样式，并对已添加的副标题生效
     *
     * @param style {Object} css 样式
     */
    setSubTitleStyle(style) {
        style = JSON.parse(JSON.stringify(style));
        DocTool.deleteProperties(style, "margin");
        this.subTitleStyle = style;
        this.$container.find(".docSubTitle").css(style);
    }

    /**
     * 创建副标题行
     *
     * @param text {string} 文本内容
     */
    createSubTitle(text) {
        if (this.creating) {
            this.taskQueue[this.taskQueue.length] = {method: this.createSubTitle, argArray: Array.from(arguments)};
        } else {
            this.creating = true;
            setTimeout(() => {
                this.__createSubTitle(text);
                this.creating = false;
                this.__continueWork();
            });
        }
    }

    /**
     * 创建副标题行核心代码
     *
     * @param text {string} 文本内容
     */
    __createSubTitle(text) {
        DocTool.addText({thisArg: this, text, className: "docSubTitle", fn: this.__createSubTitle}, function ($new) {
            if (Object.keys(this.subTitleStyle).length === 0) {
                $new.css("font-size", this.subTitleFontSize)
                    .css("font-weight", this.subTitleFontWeight)
                    .css("font-color", this.subTitleFontColor)
                    .css("text-align", this.subTitleTextAlign)
                    .css("line-height", this.subTitleLineHeight)
                    .css("padding-top", this.subTitleParagraphPaddingTop)
                    .css("padding-bottom", this.subTitleParagraphPaddingBottom);
            } else {
                $new.css(this.subTitleStyle);
            }
        });
    }

    /**
     * 指定一级标题文字字号，并对已添加的一级标题生效
     *
     * @param fontSize {string} css 样式
     */
    setH1FontSize(fontSize) {
        this.h1FontSize = fontSize;
        this.$container.find(".docH1").css("font-size", fontSize);
    }

    /**
     * 指定一级标题文字粗细，并对已添加的一级标题生效
     *
     * @param fontWeight {string} css 样式
     */
    setH1FontWeight(fontWeight) {
        this.h1FontWeight = fontWeight;
        this.$container.find(".docH1").css("font-weight", fontWeight);
    }

    /**
     * 指定一级标题文字颜色，并对已添加的一级标题生效
     *
     * @param fontColor {string} css 样式
     */
    setH1FontColor(fontColor) {
        this.h1FontColor = fontColor;
        this.$container.find(".docH1").css("font-color", fontColor);
    }

    /**
     * 指定一级标题文字对齐方式，并对已添加的一级标题生效
     *
     * @param align {string} css 样式
     */
    setH1TextAlign(align) {
        this.h1TextAlign = align;
        this.$container.find(".docH1").css("text-align", align);
    }

    /**
     * 指定一级标题文字行高，并对已添加的一级标题生效
     *
     * @param lineHeight {string} css 样式
     */
    setH1LineHeight(lineHeight) {
        this.h1LineHeight = lineHeight;
        this.$container.find(".docH1").css("line-height", lineHeight);
    }

    /**
     * 指定一级标题文字段前，并对已添加的一级标题生效
     *
     * @param paragraphPaddingTop {string} css 样式
     */
    setH1ParagraphPaddingTop(paragraphPaddingTop) {
        this.h1ParagraphPaddingTop = paragraphPaddingTop;
        this.$container.find(".docH1").css("padding-top", paragraphPaddingTop);
    }

    /**
     * 指定一级标题文字段后，并对已添加的一级标题生效
     *
     * @param paragraphPaddingBottom {string} css 样式
     */
    setH1ParagraphPaddingBottom(paragraphPaddingBottom) {
        this.h1ParagraphPaddingBottom = paragraphPaddingBottom;
        this.$container.find(".docH1").css("padding-bottom", paragraphPaddingBottom);
    }

    /**
     * 指定一级标题样式，并对已添加的一级标题生效
     *
     * @param style {Object} css 样式
     */
    setH1Style(style) {
        style = JSON.parse(JSON.stringify(style));
        DocTool.deleteProperties(style, "margin");
        this.h1Style = style;
        this.$container.find(".docH1").css(style);
    }

    /**
     * 创建一级标题行
     *
     * @param text {string} 文本内容
     */
    createH1(text) {
        if (this.creating) {
            this.taskQueue[this.taskQueue.length] = {method: this.createH1, argArray: Array.from(arguments)};
        } else {
            this.creating = true;
            setTimeout(() => {
                this.__createH1(text);
                this.creating = false;
                this.__continueWork();
            });
        }
    }

    /**
     * 创建一级标题行核心代码
     *
     * @param text {string} 文本内容
     */
    __createH1(text) {
        DocTool.addText({thisArg: this, text, className: "docH1", fn: this.__createH1}, function ($new) {
            if (Object.keys(this.h1Style).length === 0) {
                $new.css("font-size", this.h1FontSize)
                    .css("font-weight", this.h1FontWeight)
                    .css("font-color", this.h1FontColor)
                    .css("text-align", this.h1TextAlign)
                    .css("line-height", this.h1LineHeight)
                    .css("padding-top", this.h1ParagraphPaddingTop)
                    .css("padding-bottom", this.h1ParagraphPaddingBottom);
            } else {
                $new.css(this.h1Style);
            }
        });
    }

    /**
     * 指定二级标题文字字号，并对已添加的二级标题生效
     *
     * @param fontSize {string} css 样式
     */
    setH2FontSize(fontSize) {
        this.h2FontSize = fontSize;
        this.$container.find(".docH2").css("font-size", fontSize);
    }

    /**
     * 指定二级标题文字粗细，并对已添加的二级标题生效
     *
     * @param fontWeight {string} css 样式
     */
    setH2FontWeight(fontWeight) {
        this.h2FontWeight = fontWeight;
        this.$container.find(".docH2").css("font-weight", fontWeight);
    }

    /**
     * 指定二级标题文字颜色，并对已添加的二级标题生效
     *
     * @param fontColor {string} css 样式
     */
    setH2FontColor(fontColor) {
        this.h2FontColor = fontColor;
        this.$container.find(".docH2").css("font-color", fontColor);
    }

    /**
     * 指定二级标题文字对齐方式，并对已添加的二级标题生效
     *
     * @param align {string} css 样式
     */
    setH2TextAlign(align) {
        this.h2TextAlign = align;
        this.$container.find(".docH2").css("text-align", align);
    }

    /**
     * 指定二级标题文字行高，并对已添加的二级标题生效
     *
     * @param lineHeight {string} css 样式
     */
    setH2LineHeight(lineHeight) {
        this.h2LineHeight = lineHeight;
        this.$container.find(".docH2").css("line-height", lineHeight);
    }

    /**
     * 指定二级标题文字段前，并对已添加的二级标题生效
     *
     * @param paragraphPaddingTop {string} css 样式
     */
    setH2ParagraphPaddingTop(paragraphPaddingTop) {
        this.h2ParagraphPaddingTop = paragraphPaddingTop;
        this.$container.find(".docH2").css("padding-top", paragraphPaddingTop);
    }

    /**
     * 指定二级标题文字段后，并对已添加的二级标题生效
     *
     * @param paragraphPaddingBottom {string} css 样式
     */
    setH2ParagraphPaddingBottom(paragraphPaddingBottom) {
        this.h2ParagraphPaddingBottom = paragraphPaddingBottom;
        this.$container.find(".docH2").css("padding-bottom", paragraphPaddingBottom);
    }

    /**
     * 指定二级标题样式，并对已添加的二级标题生效
     *
     * @param style {Object} css 样式
     */
    setH2Style(style) {
        style = JSON.parse(JSON.stringify(style));
        DocTool.deleteProperties(style, "margin");
        this.h2Style = style;
        this.$container.find(".docH2").css("style", style);
    }

    /**
     * 创建二级标题行
     *
     * @param text {string} 文本内容
     */
    createH2(text) {
        if (this.creating) {
            this.taskQueue[this.taskQueue.length] = {method: this.createH2, argArray: Array.from(arguments)};
        } else {
            this.creating = true;
            setTimeout(() => {
                this.__createH2(text);
                this.creating = false;
                this.__continueWork();
            });
        }
    }

    /**
     * 创建二级标题行核心代码
     *
     * @param text {string} 文本内容
     */
    __createH2(text) {
        DocTool.addText({thisArg: this, text, className: "docH2", fn: this.__createH2}, function ($new) {
            if (Object.keys(this.h2Style).length === 0) {
                $new.css("font-size", this.h2FontSize)
                    .css("font-weight", this.h2FontWeight)
                    .css("font-color", this.h2FontColor)
                    .css("text-align", this.h2TextAlign)
                    .css("line-height", this.h2LineHeight)
                    .css("padding-top", this.h2ParagraphPaddingTop)
                    .css("padding-bottom", this.h2ParagraphPaddingBottom);
            } else {
                $new.css(this.h2Style);
            }
        });
    }

    /**
     * 指定正文文字字号，并对已添加的正文生效
     *
     * @param fontSize {string} css 样式
     */
    setTextFontSize(fontSize) {
        this.textFontSize = fontSize;
        this.$container.find(".docText").css("font-size", fontSize);
    }

    /**
     * 指定正文文字粗细，并对已添加的正文生效
     *
     * @param fontWeight {string} css 样式
     */
    setTextFontWeight(fontWeight) {
        this.textFontWeight = fontWeight;
        this.$container.find(".docText").css("font-weight", fontWeight);
    }

    /**
     * 指定正文文字颜色，并对已添加的正文生效
     *
     * @param fontColor {string} css 样式
     */
    setTextFontColor(fontColor) {
        this.textFontColor = fontColor;
        this.$container.find(".docText").css("font-color", fontColor);
    }

    /**
     * 指定正文文字对齐方式，并对已添加的正文生效
     *
     * @param align {string} css 样式
     */
    setTextTextAlign(align) {
        this.textTextAlign = align;
        this.$container.find(".docText").css("text-align", align);
    }

    /**
     * 指定正文文字行高，并对已添加的正文生效
     *
     * @param lineHeight {string} css 样式
     */
    setTextLineHeight(lineHeight) {
        this.textLineHeight = lineHeight;
        this.$container.find(".docText").css("line-height", lineHeight);
    }

    /**
     * 指定正文文字段前，并对已添加的正文生效
     *
     * @param paragraphPaddingTop {string} css 样式
     */
    setTextParagraphPaddingTop(paragraphPaddingTop) {
        this.textParagraphPaddingTop = paragraphPaddingTop;
        this.$container.find(".docText").css("padding-top", paragraphPaddingTop);
    }

    /**
     * 指定正文文字段后，并对已添加的正文生效
     *
     * @param paragraphPaddingBottom {string} css 样式
     */
    setTextParagraphPaddingBottom(paragraphPaddingBottom) {
        this.textParagraphPaddingBottom = paragraphPaddingBottom;
        this.$container.find(".docText").css("padding-bottom", paragraphPaddingBottom);
    }

    /**
     * 指定正文样式，并对已添加的正文生效
     *
     * @param style {Object} css 样式
     */
    setTextStyle(style) {
        style = JSON.parse(JSON.stringify(style));
        DocTool.deleteProperties(style, "margin");
        this.textStyle = style;
        this.$container.find(".docText").css(style);
    }

    /**
     * 创建正文行
     *
     * @param title {string} 文本内容或标题名
     * @param text {...string | undefined} 文本内容
     */
    createText(title, text) {
        if (this.creating) {
            this.taskQueue[this.taskQueue.length] = {method: this.createText, argArray: Array.from(arguments)};
        } else {
            this.creating = true;
            setTimeout(() => {
                this.__createText(title, text);
                this.creating = false;
                this.__continueWork();
            });
        }
    }

    /**
     * 创建正文行核心代码
     *
     * @param title {string} 文本内容或标题名
     * @param text {...string | undefined} 文本内容
     */
    __createText(title, text) {
        if (text === undefined) {
            text = title;
            title = undefined;
        }
        DocTool.addText({thisArg: this, title, text, className: "docText", fn: this.__createText}, function ($new) {
            if (Object.keys(this.textStyle).length === 0) {
                $new.css("font-size", this.textFontSize)
                    .css("font-weight", this.textFontWeight)
                    .css("font-color", this.textFontColor)
                    .css("text-align", this.textTextAlign)
                    .css("line-height", this.textLineHeight)
                    .css("padding-top", this.textParagraphPaddingTop)
                    .css("padding-bottom", this.textParagraphPaddingBottom);
            } else {
                $new.css(this.textStyle);
            }
        });
    }

    /**
     * 创建自定义文本行
     *
     * @param text {string} 文本内容
     * @param style {...object | undefined} jQuery 的 css 样式
     */
    createCustomText(text, style = {}) {
        if (this.creating) {
            this.taskQueue[this.taskQueue.length] = {method: this.createCustomText, argArray: Array.from(arguments)};
        } else {
            this.creating = true;
            setTimeout(() => {
                this.__createCustomText(text, style);
                this.creating = false;
                this.__continueWork();
            });
            this.__continueWork();
        }
    }

    /**
     * 创建自定义文本行
     *
     * @param text {string} 文本内容
     * @param style {Object} jQuery 的 css 样式
     */
    __createCustomText(text, style) {
        DocTool.addText({thisArg: this, text, className: "", fn: this.createCustomText}, function ($new) {
            $new.css(style)
        });
    }

    /**
     * 通过图片 base64 创建图片行
     *
     * @param base64 {string} 图片 base64 码
     * @param obj {...object | undefined} 包含图片格式、title、alt、jQuery 的 css 样式等信息的对象
     */
    createImgInLineWithBase64(base64, obj = {type: "png"}) {
        if (this.creating) {
            this.taskQueue[this.taskQueue.length] = {method: this.createImgInLineWithBase64, argArray: Array.from(arguments)};
        } else {
            this.creating = true;
            if (typeof obj !== "object" || obj === null) obj = {type: "png"};
            let article = this.__getLastPage();
            let h = this.__getContentHeight(article);
            if (!base64.startsWith("data:image/")) base64 = `data:image/${typeof obj.type === "string" ? obj.type : "png"};base64,${base64}`;
            let $new = $(`<div class="docImg" ${typeof obj.align === "string" ? `style="text-align: ${obj.align}"`: ""}><img src="${base64}" title="${typeof obj.title === "string" ? obj.title : ""}" alt="${typeof obj.alt === "string" ? obj.alt : ""}"></div>`);
            if (typeof obj.style === "object" && obj.style !== null) {
                let style = JSON.parse(JSON.stringify(obj.style));
                DocTool.deleteProperties(style, "float");
                $new.css(style);
            }

            article.append($new);

            let _this = this;
            setTimeout(() => {
                if (h + $new.outerHeight() > _this.__getPageHeightLimit()) {
                    $new.remove();
                    _this.addPage().append($new);
                }
                _this.creating = false;
                _this.__continueWork();
            });
        }
    }

    /**
     * 通过图片 base64 创建浮动图片
     *
     * @param base64 {string} 图片 base64 码
     * @param obj {...object | undefined} 包含 float 形式、图片格式、title、alt、jQuery 的 css 样式等信息的对象
     */
    createImgFloatWithBase64(base64, obj = {type: "png", float: "right"}) {
        if (this.creating) {
            this.taskQueue[this.taskQueue.length] = {method: this.createImgFloatWithBase64, argArray: Array.from(arguments)};
        } else {
            this.creating = true;
            if (typeof obj !== "object" || obj === null) obj = {type: "png", float: "right"};
            let article = this.__getLastPage();
            let h = this.__getContentHeight(article);
            if (!base64.startsWith("data:image/")) base64 = `data:image/${typeof obj.type === "string" ? obj.type : "png"};base64,${base64}`;
            let $new = $(`<div style="float: ${typeof obj.float === "string" ? obj.float : "right"};"><img src="${base64}" title="${typeof obj.title === "string" ? obj.title : ""}" alt="${typeof obj.alt === "string" ? obj.alt : ""}"></div>`);
            if (typeof obj.style === "object" && obj.style !== null) {
                let style = JSON.parse(JSON.stringify(obj.style));
                DocTool.deleteProperties(style, "float");
                $new.css(style);
            }

            article.append($new);

            let _this = this;
            setTimeout(() => {
                if (h + $new.outerHeight() > _this.__getPageHeightLimit()) {
                    $new.remove();
                    _this.addPage().append($new);
                }
                _this.creating = false;
                _this.__continueWork();
            });
        }
    }

    /**
     * 通过图片路径创建图片行
     *
     * @param path {string} 图片路径
     * @param obj {...object | undefined} 包含 title、alt、jQuery 的 css 样式等信息的对象
     */
    createImgInLineWithPath(path, obj = {}) {
        if (this.creating) {
            this.taskQueue[this.taskQueue.length] = {method: this.createImgInLineWithPath, argArray: Array.from(arguments)};
        } else {
            this.creating = true;
            if (typeof obj !== "object" || obj === null) obj = {};
            let article = this.__getLastPage();
            let h = this.__getContentHeight(article);
            let $new = $(`<div class="docImg" ${typeof obj.align === "string" ? `style="text-align: ${obj.align}"`: ""}><img src="${path}" title="${typeof obj.title === "string" ? obj.title : ""}" alt="${typeof obj.alt === "string" ? obj.alt : ""}"></div>`);
            if (typeof obj.style === "object" && obj.style !== null) {
                let style = JSON.parse(JSON.stringify(obj.style));
                DocTool.deleteProperties(style, "float");
                $new.css(style);
            }

            article.append($new);

            let _this = this;
            setTimeout(() => {
                if (h + $new.outerHeight() > _this.__getPageHeightLimit()) {
                    $new.remove();
                    _this.addPage().append($new);
                }
                _this.creating = false;
                _this.__continueWork();
            });
        }
    }

    /**
     * 通过图片路径创建浮动图片
     *
     * @param path {string} 图片路径
     * @param obj {...object | undefined} 包含 float 形式、title、alt、jQuery 的 css 样式等信息的对象
     */
    createImgFloatWithPath(path, obj = {float: "right"}) {
        if (this.creating) {
            this.taskQueue[this.taskQueue.length] = {method: this.createImgFloatWithPath, argArray: Array.from(arguments)};
        } else {
            this.creating = true;
            if (typeof obj !== "object" || obj === null) obj = {float: "right"};
            let article = this.__getLastPage();
            let h = this.__getContentHeight(article);
            let $new = $(`<div style="float: ${typeof obj.float === "string" ? obj.float : "right"};"><img src="${path}" title="${typeof obj.title === "string" ? obj.title : ""}" alt="${typeof obj.alt === "string" ? obj.alt : ""}"></div>`);
            if (typeof obj.style === "object" && obj.style !== null) {
                let style = JSON.parse(JSON.stringify(obj.style));
                DocTool.deleteProperties(style, "float");
                $new.css(style);
            }

            article.append($new);

            let _this = this;
            setTimeout(() => {
                if (h + $new.outerHeight() > _this.__getPageHeightLimit()) {
                    $new.remove();
                    _this.addPage().append($new);
                }
                _this.creating = false;
                _this.__continueWork();
            });
        }
    }

    /**
     * 执行任务队列
     */
    __continueWork() {
        if (this.taskQueue.length !== 0) {
            let task = this.taskQueue.splice(0, 1)[0];
            task.method.apply(this, task.argArray);
        }
    }

    /**
     * 获取页面内容限制高度
     *
     * @returns {number} 高度像素值
     */
    __getPageHeightLimit() {
        let height = this.height === "" ? this.pageDefaultParameter.height : parseFloat(this.height),
            paddingTop = this.paddingTop === "" ? this.pageDefaultParameter.paddingTop : parseFloat(this.paddingTop),
            paddingBottom = this.paddingBottom === "" ? this.pageDefaultParameter.paddingBottom : parseFloat(this.paddingBottom);
        return height - paddingTop - paddingBottom;
    }

    /**
     * 获取最后一个页面
     *
     * @returns {jQuery}
     */
    __getLastPage() {
        let $article = this.$container.children("article:last-child");
        if ($article.length === 0) $article = this.addPage();
        return $article;
    }

    /**
     * 获取指定页面内容高度
     *
     * @param article {jQuery}
     * @returns {number}
     */
    __getContentHeight(article) {
        let h = 0;
        article.children().each(function () {
            if ($(this).css("float") === "none")
                h += $(this).outerHeight();
        });
        return h;
    }

    /**
     * 将字符串文本转换成 html 语言
     *
     * @param text {string}
     * @returns {string}
     */
    static htmlEncode(text) {
        let temp = document.createElement("div");
        (temp.textContent !== undefined) ? (temp.textContent = text) : (temp.innerText = text);
        let output = temp.innerHTML;
        temp = null;
        return output;
    }

    /**
     * 将 html 语言转换成字符串文本
     *
     * @param html {string}
     * @returns {string}
     */
    static htmlDecode(html) {
        let temp = document.createElement("div");
        temp.innerHTML = html;
        let output = temp.innerText || temp.textContent;
        temp = null;
        return output;
    }

    /**
     * 删除包含指定字符串的属性
     *
     * @param obj {Object}
     * @param searchString {string} 指定字符串
     */
    static deleteProperties(obj, searchString) {
        for (let item in obj) {
            if (obj.hasOwnProperty(item) && item.includes(searchString)) {
                delete obj[item];
            }
        }
    }

    /**
     * 添加文本核心代码，
     *
     * @param obj {{thisArg: DocTool, title: ...string | undefined, text: string, className: string, fn: function}}
     * @param fn {function}
     */
    static addText(obj, fn = () => undefined) {
        let thisArg = obj.thisArg,
            $article = thisArg.__getLastPage(),
            contentHeight = thisArg.__getContentHeight($article),
            pageHeightLimit = thisArg.__getPageHeightLimit(),
            className = obj.className,
            title = obj.title,
            text = obj.text,
            $new = title === undefined ? $(`<div class="${className}">${DocTool.htmlEncode(text)}</div>`) : $(`<div class="${className}"><span style="font-weight: bold;">${DocTool.htmlEncode(title)}</span><span>${DocTool.htmlEncode(text)}</span></div>`);
        fn.call(thisArg, $new); // 创建 $new 后的回调函数
        $article.append($new);  // 直接添加

        let h = contentHeight + $new.outerHeight(); // 添加后内容高度
        if (h > pageHeightLimit) {   // 直接添加后高度超出
            $new.remove();  // 移除这个元素
            let i = 0;  // 统计分割字符串长度
            let $temp = $(`<div class="${className}">&nbsp;</div>`);    // 创建单行文本临时元素用来检测高度
            $article.append($temp);  // 添加后才能返回高度值
            if (contentHeight + $temp.outerHeight() <= pageHeightLimit) {   // 添加单行文本能容得下
                $temp.remove(); // 移除临时元素
                while (h > pageHeightLimit && i < text.length + (title === undefined ? 0 : title.length)) {   // 内容高度超出了限制
                    $new.remove();  // 首先移除
                    if (title === undefined) {
                        let str = text.substring(0, text.length - (++i));   // 切割字符串
                        $new = $(`<div class="${className}">${DocTool.htmlEncode(str)}</div>`);
                    } else if (i < text.length) {
                        let str = text.substring(0, text.length - (++i));   // 切割字符串
                        $new = $(`<div class="${className}"><span style="font-weight: bold;">${DocTool.htmlEncode(title)}</span><span>${DocTool.htmlEncode(str)}</span></div>`);
                    } else {
                        let str = title.substring(0, title.length + text.length - (++i));   // 切割字符串
                        $new = $(`<div class="${className}"><span style="font-weight: bold;">${DocTool.htmlEncode(str)}</span></div>`);
                    }
                    fn.call(thisArg, $new); // 创建 $new 后的回调函数
                    $article.append($new);  // 添加处理后的元素
                    h = contentHeight + $new.outerHeight(); // 添加后内容高度
                }
                thisArg.addPage();  // 添加新页面
                if (title === undefined) {
                    obj.fn.call(thisArg, text.substring(text.length - i));
                } else if (i < text.length) {
                    obj.fn.call(thisArg, title, text.substring(text.length - i));
                } else {
                    obj.fn.call(thisArg, title.substring(title.length + text.length - i), text);
                }
            } else {    // 单行文本已经容不下了
                $temp.remove(); // 移除临时元素
                thisArg.addPage();  // 添加新页面
                if (title === undefined) {
                    obj.fn.call(thisArg, text); // 重新添加
                } else {
                    obj.fn.call(thisArg, title, text); // 重新添加
                }
            }
        }
    }
}