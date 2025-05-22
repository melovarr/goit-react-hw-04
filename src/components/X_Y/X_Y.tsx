import { useState } from "react";

interface Values {
  x: number;
  y: number;
  z: number;
}

export default function XchangeY() {
  const [values, setValues] = useState<Values>({ x: 0, y: 0, z: 0 });

  //   const updateX = () => {
  //     setValues({
  //       ...values,
  //       x: values.x + 1,
  //     });
  //   };

  //   const updateY = () => {
  //     setValues({
  //       ...values,
  //       y: values.y + 1,
  //     });
  //   };

  const updateValue = (key: keyof Values) => {
    setValues({
      ...values,
      [key]: values[key] + 1,
    });
  };

  return (
    <div>
      <p>
        x: {values.x}, y: {values.y}, z: {values.z}
      </p>
      <button onClick={() => updateValue("x")}>Update x</button>
      <button onClick={() => updateValue("y")}>Update y</button>
      <button onClick={() => updateValue("z")}>Update y</button>
    </div>
  );
}
