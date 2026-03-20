import { DomEditor, SlateRange, SlateTransforms } from "@wangeditor/editor";

class EditMathliveFormulaMenu {
  constructor() {
    this.title = "编辑公式";
    this.tag = "button";
    this.showModal = true;
    this.modalWidth = 360;
    this.$content = null;
  }

  getSelectedElem(editor) {
    const node = DomEditor.getSelectedNodeByType(editor, "mathlive-formula");
    return node || null;
  }

  getValue(editor) {
    const elem = this.getSelectedElem(editor);
    return elem ? elem.value || "" : "";
  }

  isActive() {
    return false;
  }

  exec() {}

  isDisabled(editor) {
    const { selection } = editor;
    if (selection == null) return true;
    if (SlateRange.isExpanded(selection)) return true;
    return !this.getSelectedElem(editor);
  }

  getModalPositionNode(editor) {
    return this.getSelectedElem(editor);
  }

  getModalContentElem(editor) {
    if (!this.$content) {
      const container = document.createElement("div");
      container.style.padding = "4px 0";

      const label = document.createElement("div");
      label.textContent = "公式";
      label.style.marginBottom = "8px";
      label.style.fontSize = "14px";
      label.style.color = "#606266";

      const mathField = document.createElement("math-field");
      mathField.setAttribute("virtual-keyboard-mode", "auto");
      mathField.setAttribute("smart-fence", "");
      mathField.style.display = "block";
      mathField.style.width = "100%";
      mathField.style.minHeight = "56px";
      mathField.style.padding = "8px 10px";
      mathField.style.border = "1px solid #dcdfe6";
      mathField.style.borderRadius = "4px";
      mathField.style.boxSizing = "border-box";
      mathField.style.fontSize = "22px";
      mathField.dataset.role = "math-field";

      const actions = document.createElement("div");
      actions.style.display = "flex";
      actions.style.justifyContent = "flex-end";
      actions.style.marginTop = "12px";

      const confirmBtn = document.createElement("button");
      confirmBtn.textContent = "确定";
      confirmBtn.type = "button";
      confirmBtn.style.height = "32px";
      confirmBtn.style.padding = "0 15px";
      confirmBtn.style.border = "1px solid #409eff";
      confirmBtn.style.borderRadius = "4px";
      confirmBtn.style.background = "#409eff";
      confirmBtn.style.color = "#fff";
      confirmBtn.style.cursor = "pointer";

      confirmBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const value = (mathField.value || "").trim();
        this.updateFormula(editor, value);
        editor.hidePanelOrModal();
      });

      actions.appendChild(confirmBtn);
      container.appendChild(label);
      container.appendChild(mathField);
      container.appendChild(actions);

      this.$content = container;
    }

    const mathField = this.$content.querySelector('[data-role="math-field"]');
    if (mathField) {
      mathField.value = this.getValue(editor) || "";
      setTimeout(() => {
        mathField.focus();
      });
    }

    return this.$content;
  }

  updateFormula(editor, value) {
    if (!value) return;

    editor.restoreSelection();
    if (this.isDisabled(editor)) return;

    const selectedElem = this.getSelectedElem(editor);
    if (!selectedElem) return;

    const path = DomEditor.findPath(editor, selectedElem);
    SlateTransforms.setNodes(
      editor,
      { value },
      { at: path }
    );
  }
}

export default EditMathliveFormulaMenu;

