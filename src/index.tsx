import { createContext } from "react";
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
export const TreeContext = createContext<Trees | undefined>(undefined);
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
