import highlight from "highlight.js";
import { createRef, useEffect } from "react";
import { findDOMNode } from "react-dom";

const HighLightCode = ({ children, language}) => {
  
  const code = createRef();
  useEffect(() => {
    // highlight.highlightElement(findDOMNode(code.current));
    highlight.highlightElement(code.childRef.current);
  }, []);

  return (
    <pre data-language={language}>
      <code ref={code} className={language}>
        {children}
      </code>
    </pre>
  );
};

export default HighLightCode;
