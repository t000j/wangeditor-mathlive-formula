function mathliveFormulaToHtml(elem) {
    const value = elem.value || "";
  
    return `<span data-w-e-type="mathlive-formula" data-w-e-is-void data-w-e-is-inline data-value="${value}"></span>`;
  }
  
  const elemToHtmlConf = {
    type: "mathlive-formula",
    elemToHtml: mathliveFormulaToHtml,
  };
  
  export default elemToHtmlConf;
  
