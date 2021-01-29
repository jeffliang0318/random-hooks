import { useTrees } from "./";

export default function Tree() {
  const result = useTrees();
  const trees = result?.trees.map((tree) => <li key={tree.id}>{tree.name}</li>);

  return (
    <>
      <h1>Trees here</h1>
      <ul>{trees}</ul>
    </>
  );
}
