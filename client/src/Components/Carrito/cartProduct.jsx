import React from "react";

export default function cartProduct(props) {
  const [count, setCount] = useState(1);

  return (
    <div>
      <button onClick={}>X</button>
      <h3>{props.title}</h3>
      <h3>{props.price}</h3>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}
