import React from "react";
import {Flex} from "theme-ui";
import {sectionButtonProps} from "../../interfaces/types";
import Button from "../../library/Button";

const SectionButton = ({buttons}: sectionButtonProps) => {
  return (
    <Flex>
      {buttons?.map((item, i) => {
        return (
          <Button key={i} color={item.color} size={"large"}>
            {item.text}
          </Button>
        );
      })}
    </Flex>
  );
};

export default SectionButton;
