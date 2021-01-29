import { useContext } from "react";

export default function Tree() {
  const TREES = [
    { id: "1", name: "Oak" },
    { id: "2", name: "Maple" },
    { id: "3", name: "Red wood" },
    { id: "4", name: "Oaky" },
  ];
  const trees = TREES.map((tree) => <li key={tree.id}>{tree.name}</li>);
  return (
    <>
      <h1>Trees here</h1>
      <ul>{trees}</ul>
    </>
  );
}
