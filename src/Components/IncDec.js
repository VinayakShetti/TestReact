import React, { useState } from "react";

const IncDec = () => {
  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
  };

  const DecNum = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>
        <h1>{count}</h1>
      </div>

      <div>
        <button onClick={IncNum}>Add</button>
        <button onClick={DecNum}>Deduct</button>
      </div>
    </>
  );
};

export default IncDec;