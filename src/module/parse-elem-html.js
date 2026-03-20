function parseMathliveFormulaHtml(elem, children, editor) {
    const value = elem.getAttribute("data-value") || "";
  
    return {
      type: "mathlive-formula",
      value,
      children: [{ text: "" }],
    };
  }
  
  const parseHtmlConf = {
    selector: 'span[data-w-e-type="mathlive-formula"]',
    parseElemHtml: parseMathliveFormulaHtml,
  };
  
  export default parseHtmlConf;
  
