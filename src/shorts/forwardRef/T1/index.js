import React, { useRef, forwardRef } from "react";

/*
The ref parameter is passed to the forwardRef function.
*/
const ChildComponent = forwardRef((props, ref) => (
  <input type="text" ref={ref} />
));

function ParentComponent() {
  const inputRef = useRef();

  const onClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <ChildComponent ref={inputRef} />
      <button onClick={onClick}>Focus the input</button>
    </div>
  );
}

export default ParentComponent;
