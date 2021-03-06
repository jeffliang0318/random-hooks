import React, { useState, useRef, useEffect } from "react";

let isCalled = false;
const grecaptcha = {
  render: function(element: HTMLDivElement, { callback }: { callback: Function}) {
    if (isCalled) throw new Error("You can only call me once");
    isCalled = true;
    element.innerText = "click to show current callback function";
    element.addEventListener("click", function() {
      callback("you got token!");
    });
  }
};

const ReCAPTCHA = ({ onChange }: {onChange: Function}) => {
  const divRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const cbRef = useRef(onChange)

  useEffect(() => {
    cbRef.current = onChange
  }, [onChange])
  
  const handleLoad = () => {
    grecaptcha.render(divRef.current, {
      callback: () => {
        cbRef.current();
      }
    });
  };
  useEffect(() => {
    handleLoad();
  }, []);

  return <div ref={divRef} />;
};

export default function Reference() {
  const [isOld, setIsOld] = useState(true);
  const pRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const oldFunction = () => {
    pRef.current.innerText = 'old function';
  };

  const newFunction = () => {
    pRef.current.innerText = 'new function';
  }

  return (
    <div className="container-md">
      <ReCAPTCHA onChange={isOld ? oldFunction : newFunction} />
      <p ref={pRef}>Current callback function</p>
      <button type="button" className="btn-primary"
        onClick={() => {
          console.log("Switch to new function");
          setIsOld(false);
        }}
      >
        Switch to new function
      </button>
      <pre><code className="hljs typescript">
        {
        `const divRef = useRef() as React.MutableRefObject<HTMLInputElement>;
const cbRef = useRef(onChange)

useEffect(() => {
  cbRef.current = onChange
}, [onChange])

const handleLoad = () => {
  grecaptcha.render(divRef.current, {
    callback: () => {
      cbRef.current();
    }
  });
};
useEffect(() => {
  handleLoad();
}, []);

return <div ref={divRef} />;`
        }
</code></pre>
    </div>
  );
}
