import React, { useEffect, useRef, useState, useCallback } from "react";
import catImageUrl from "./cat.png";

/* 
   for more info see:
   https://medium.com/welldone-software/usecallback-might-be-what-you-meant-by-useref-useeffect-773bc0278ae
*/

export default function App() {
  const [count, setCount] = useState(1);
  const shouldShowImageOfCat = count % 3 === 0;

  const [catInfo, setCatInfo] = useState<DOMRect>();

  // notice how none of the deps of useEffect
  // manages to trigger the hook in time
  const catImageRef = useCallback((node) => {
    setCatInfo(node?.getBoundingClientRect());
  }, [])

  return (
    <div className="App">
      <h1>useEffect & useRef vs useCallback</h1>
      <p>
        An image of a cat would appear on every 3rd render.
        <br />
        <br />
        Would our hook be able to make the emoji see it?
        <br />
        <br />
        {catInfo ? "😂" : "😩"} - I {catInfo ? "" : "don't"} see the cat 🐈
        {catInfo ? `, it's height is ${catInfo.height}` : ""}!
      </p>
      <input disabled value={`render #${count}`} />
      <button onClick={() => setCount((c) => c + 1)}>next render</button>
      <br />
      {shouldShowImageOfCat ? (
        <img
          ref={catImageRef}
          src={catImageUrl}
          alt="cat"
          width="50%"
          style={{ padding: 10 }}
        />
      ) : (
        ""
      )}
    </div>
  );
}
