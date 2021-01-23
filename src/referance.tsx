import React, { useState, useRef, useEffect } from "react";

let isCalled = false;
const grecaptcha = {
  render: function(element: HTMLDivElement, { callback }: { callback: Function}) {
    if (isCalled) throw new Error("You can only call me once");
    isCalled = true;
    element.innerText = "click me if you are not robot";
    element.addEventListener("click", function() {
      callback("you got token!");
    });
  }
};

const ReCAPTCHA = ({ onChange }: {onChange: Function}) => {
  const divRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const cbRef = useRef(onChange)
  
  const handleCallback = () => {
    cbRef.current();
  }

  useEffect(() => {
    cbRef.current = onChange
  }, [onChange])
  
  useEffect(() => {
    const handleLoad = () => {
      grecaptcha.render(divRef.current, {
        callback: handleCallback
      });
    };
    handleLoad();
  }, []);

  return <div ref={divRef} />;
};

export default function Referance() {
  const [isOld, setIsOld] = useState(true);
  const oldFunction = () => console.log("old function");
  const newFunction = () => console.log("new function");

  return (
    <div className="">
      <ReCAPTCHA onChange={isOld ? oldFunction : newFunction} />
      <button
        onClick={() => {
          console.log("Switch to new function");
          setIsOld(false);
        }}
      >
        change function
      </button>
    </div>
  );
}
