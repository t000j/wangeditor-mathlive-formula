export function createMathliveFormulaElement(value) {
    return {
      type: "mathlive-formula",
      value: value || "",
      children: [{ text: "" }],
    };
  }
  