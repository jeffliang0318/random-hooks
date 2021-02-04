export default function styleguide() {
  const COLORS = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "light",
    "dark",
  ];
  const colorsTile = COLORS.map((color) => {
    return (
      <div className="m-2">
        <div
          style={{ width: "100px", height: "100px" }}
          className={`border bg-${color}`}
        ></div>
        <div className="text-center mt-2">{color}</div>
      </div>
    );
  });
  return (
    <div>
      <h1 className="px-2">Colors</h1>
      <h2 className="px-2">Prime colors</h2>
      <div className="colors d-flex flex-wrap">{colorsTile}</div>
    </div>
  );
}
