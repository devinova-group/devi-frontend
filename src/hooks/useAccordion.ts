import React from "react";
import { useState } from "react";

const useAccordion = () => {
  const [toggleAccordion, setToggleAccordion] = useState(false);

  function onClickAccordion() {
    setToggleAccordion(!toggleAccordion);
  }

  return { onClickAccordion, toggleAccordion };
};

export default useAccordion;
