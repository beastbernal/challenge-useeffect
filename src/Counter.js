import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = `Counter con valor de: ${count} `;
    console.log(`El valor del Counter es: ${count} `);
  });

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    console.log("Counter Montado");

    return() => console.log("Counter Desmontado"); 
  }, []);

  // 1. Un mensaje por consola indicando que el componente ha sido montado en el DOM. Este mensaje debe mostrarse solo una vez.
  // 2. Un mensaje por consola indicando que se ha incrementado el valor.
  // 3. Un mensaje por consola indicando que el componente ha sido desmontado del DOM.

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
