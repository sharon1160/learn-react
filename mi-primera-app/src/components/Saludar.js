import React from "react";

export default function Saludar(props) {
  console.log(props);

  return (
    <div>
      <h2>
        Hola {props.name}, tiene {props.age} años
      </h2>
    </div>
  );
}
