import { useContext } from "react";
import { TreeContext } from "./";

export default function Tree() {
  const result = useContext(TreeContext);
  const trees = result?.trees.map((tree) => <li key={tree.id}>{tree.name}</li>);

  return (
    <>
      <h1>Trees here</h1>
      <ul>{trees}</ul>
    </>
  );
}
