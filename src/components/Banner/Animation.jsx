// main.jsx
import React, { useEffect, useRef } from "react";

const TextAnimation = () => {
  const bannerRef = useRef(null);
  let i = 0;
  const speed = 50;
  const text = `Fed up with living out of a suitcase <br>
                  and waiting endlessly for home repairs?`;

  useEffect(() => {
    const typeWriter = () => {
      if (i < text.length) {
        if (text.charAt(i) === "<") {
          bannerRef.current.innerHTML += text.slice(i, i + 4);
          i += 4;
        } else {
          bannerRef.current.innerHTML += text.charAt(i);
          i++;
        }
        setTimeout(typeWriter, speed);
      }
    };

    typeWriter();
  }, []);

  return <div ref={bannerRef} className="banner-p-1"></div>;
};

export default TextAnimation;
