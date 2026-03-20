import withMathliveFormula from "./plugin";
import renderElemConf from "./render-elem";
import elemToHtmlConf from "./elem-to-html";
import parseHtmlConf from "./parse-elem-html";
import {
  insertMathliveFormulaMenuConf,
  editMathliveFormulaMenuConf,
} from "./menu";

const moduleConf = {
  editorPlugin: withMathliveFormula,
  renderElems: [renderElemConf],
  elemsToHtml: [elemToHtmlConf],
  parseElemsHtml: [parseHtmlConf],
  menus: [insertMathliveFormulaMenuConf, editMathliveFormulaMenuConf],
};

export default moduleConf;
