import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="Counter">
      <button className="plus" onClick={() => setCount(count + 1)}>
        Moins
      </button>
      <button className="moins" onClick={() => setCount(count - 1)}>
        Plus
      </button>
      <button className="Reset" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
