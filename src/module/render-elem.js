import { h } from "snabbdom";
import { DomEditor } from "@wangeditor/editor";

function renderMathliveFormula(elem, children, editor) {
  const selected = DomEditor.isNodeSelected(editor, elem);
  const value = elem.value || "";

  return h(
    "span",
    {
      props: {
        contentEditable: false,
      },
      style: {
        display: "inline-block",
        marginLeft: "3px",
        marginRight: "3px",
        padding: "3px 8px",
        borderRadius: "4px",
        background: "#f5f7fa",
        border: selected
          ? "2px solid var(--w-e-textarea-selected-border-color)"
          : "2px solid transparent",
      },
    },
    [
      h("w-e-mathlive-card", {
        attrs: {
          "data-value": value,
        },
      }),
    ]
  );
}

const renderElemConf = {
  type: "mathlive-formula",
  renderElem: renderMathliveFormula,
};

export default renderElemConf;
