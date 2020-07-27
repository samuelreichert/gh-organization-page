import React, { useState } from 'react';
import { Button, Check, DropDown, DropDownItem } from './style';

const DropDownButton = ({ onChange, options, right, selected, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button isActive={isOpen} onClick={() => setIsOpen(!isOpen)} right={right}>
        {`${title}${selected && ': ' + selected.label}`}

        <DropDown isOpen={isOpen}>
          {options.map((option, i) => (
            <DropDownItem
              key={i}
              onClick={() => onChange(option)}
            >
              <span>{option.label}</span>
              {selected.value === option.value && <Check>✓</Check>}
            </DropDownItem>
          ))}
        </DropDown>
      </Button>
    </>
  )
};

export default DropDownButton;
