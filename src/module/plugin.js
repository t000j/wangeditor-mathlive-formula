import { DomEditor } from "@wangeditor/editor";

function withMathliveFormula(editor) {
  const { isInline, isVoid } = editor;
  const newEditor = editor;

  // 让 mathlive-formula 成为行内节点
  newEditor.isInline = (elem) => {
    const type = DomEditor.getNodeType(elem);
    if (type === "mathlive-formula") {
      return true;
    }

    return isInline(elem);
  };

  // 让 mathlive-formula 成为 void 节点
  newEditor.isVoid = (elem) => {
    const type = DomEditor.getNodeType(elem);
    if (type === "mathlive-formula") {
      return true;
    }

    return isVoid(elem);
  };

  return newEditor;
}

export default withMathliveFormula;

