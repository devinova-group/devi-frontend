import { useState } from "react";

const useAccordion = () => {
  const [toggleAccordion, setToggleAccordion] = useState(false);

  function onClick() {
    setToggleAccordion(!toggleAccordion);
  }

  return { onClick, toggleAccordion };
};

export default useAccordion;
