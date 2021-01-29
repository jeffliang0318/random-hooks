import { createContext, useContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
interface Tree {
  id: string;
  name: string;
}
interface Trees {
  trees: Tree[];
}
const TreeContext = createContext<Trees | undefined>(undefined);
export const useTrees = () => useContext(TreeContext);
export const trees = [
  { id: "1", name: "Oak" },
  { id: "2", name: "Maple" },
  { id: "3", name: "Red wood" },
  { id: "4", name: "Oaky" },
];

ReactDOM.render(
  <TreeContext.Provider value={{ trees }}>
    <App />
  </TreeContext.Provider>,
  document.getElementById("root")
);
