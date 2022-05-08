import { useEffect, useState } from "react";

const GetDim = (myRef) => {
  const [dimensions, setDimensions] = useState({ dWidth: 0, dHeight: 0 });
  useEffect(() => {
    const getDimensions = () => ({
      dWidth: myRef.current.offsetWidth,
      dHeight: myRef.current.offsetHeight,
    });
    const handleResize = () => {
      setDimensions(getDimensions());
    };

    if (myRef.current) {
      setDimensions(getDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef]);
  return dimensions;
};

export default GetDim;
