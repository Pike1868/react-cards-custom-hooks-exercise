import { useState } from "react";

//Making a piece of state - starts as true or false
// Then make a function to toggle state from true to false or false to torue
const useFlip = () => {
  const [state, setState] = useState(true);
  const flip = () => {
    setState((state) => !state);
  };

  return [state, flip];
};

export default useFlip;
