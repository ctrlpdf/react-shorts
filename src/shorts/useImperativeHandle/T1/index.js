/*
It would use forwardRef,
  for relatively simple tasks such as creating a reference to a DOM element.
It would use useImperativeHandle,
  for more complex tasks like creating instance methods or values.
*/
import React, { useRef, useImperativeHandle, forwardRef } from "react";

const ChildComponent = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    sayHello() {
      alert("Hello from ChildComponent");
    },
  }));

  return <div>I'm a child</div>;
});

function ParentComponent() {
  const childRef = useRef();

  const onClick = () => {
    if (childRef.current) {
      childRef.current.sayHello();
    }
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={onClick}>Call child method</button>
    </div>
  );
}

export default ParentComponent;
