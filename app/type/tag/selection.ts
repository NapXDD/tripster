import { TagSelection } from "./tag";

export interface handleSelection {
  value: TagSelection;
  handleFunc: handleSelectFunc;
}

export interface handleSelectFunc {
  setFunc: Function;
  rmFunc: Function;
}
