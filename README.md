# wangeditor-mathlive-formula

一个基于 **MathLive** 的 **wangEditor v5 公式插件**，用于在编辑器中插入、编辑并渲染 LaTeX 公式。

## 功能特性

- 支持通过 MathLive 插入公式
- 支持通过 MathLive 编辑已有公式
- 支持在 wangEditor 内部直接渲染公式
- 支持将公式导出为 HTML，并把 LaTeX 保存到 `data-value` 中
- 支持后续在展示页中结合 MathJax 或 KaTeX 进行再次渲染

## 导出的 HTML 结构

插件导出的公式 HTML 如下：

```html
<span
  data-w-e-type="mathlive-formula"
  data-w-e-is-void
  data-w-e-is-inline
  data-value="\\sqrt{x}"
></span>
```


## 安装

```bash
npm install wangeditor-mathlive-formula
```

同时你还需要安装 wangEditor v5：

```bash
npm install @wangeditor/editor @wangeditor/editor-for-vue
```

## 使用方式

### 1. 注册插件模块

```js
import { Boot } from "@wangeditor/editor";
import mathliveFormulaModule from "wangeditor-mathlive-formula";

Boot.registerModule(mathliveFormulaModule);
```

### 2. 在工具栏中加入插入公式菜单

```js
const toolbarConfig = {
  insertKeys: {
    index: 0,
    keys: ["insertMathliveFormula"]
  }
};
```

### 3. 在 hoverbar 中加入编辑公式菜单

```js
const editorConfig = {
  hoverbarKeys: {
    "mathlive-formula": {
      menuKeys: ["editMathliveFormula"]
    }
  }
};
```

## Vue 2 使用示例

```js
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { Boot } from "@wangeditor/editor";
import mathliveFormulaModule from "wangeditor-mathlive-formula";

Boot.registerModule(mathliveFormulaModule);
```

```js
toolbarConfig: {
  insertKeys: {
    index: 0,
    keys: ["insertMathliveFormula"]
  }
},

editorConfig: {
  hoverbarKeys: {
    "mathlive-formula": {
      menuKeys: ["editMathliveFormula"]
    }
  }
}
```

## 工作原理

这个插件主要由以下几部分组成：

- **自定义节点**：定义 `mathlive-formula` 公式节点
- **节点行为扩展**：将公式节点声明为 `inline + void`
- **节点渲染**：在编辑器内部借助 MathLive 渲染公式
- **HTML 序列化**：将节点导出为带 `data-value` 的 HTML
- **HTML 反序列化**：将 HTML 重新解析回编辑器节点
- **插入菜单**：通过 MathLive 输入公式并插入节点
- **编辑菜单**：读取已有公式并通过 MathLive 再次编辑

## 适用范围

- 适用于 **wangEditor v5**
- 插件本身不是 Vue 专属插件，本质上是 wangEditor 模块
- 可用于 Vue2、Vue3、React 或原生 JS 项目，只要宿主使用的是 wangEditor v5

## 说明

- 插件内部渲染使用的是 **MathLive**
- 最终题库展示页建议使用 **MathJax** 或 **KaTeX** 对保存下来的 LaTeX 再次渲染
- 公式的源数据始终是 LaTeX，因此更方便后续二次编辑和跨页面复用

## License

MIT
