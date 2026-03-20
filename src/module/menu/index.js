import InsertMathliveFormulaMenu from "./InsertMathliveFormulaMenu";
import EditMathliveFormulaMenu from "./EditMathliveFormulaMenu";

export const insertMathliveFormulaMenuConf = {
  key: "insertMathliveFormula",
  factory() {
    return new InsertMathliveFormulaMenu();
  },
};

export const editMathliveFormulaMenuConf = {
  key: "editMathliveFormula",
  factory() {
    return new EditMathliveFormulaMenu();
  },
};
