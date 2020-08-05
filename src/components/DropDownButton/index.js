import React, { useEffect, useRef, useState } from 'react';
import { Button, ButtonWrapper, Check, DropDown, DropDownItem } from './style';

const DropDownButton = ({ onChange, options, right, selected, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const handleDropdownClick = (option) => {
    onChange(option);
    setIsOpen(false);
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      const currentRef = wrapperRef.current;

      if (currentRef && !currentRef.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [wrapperRef]);

  return (
    <ButtonWrapper ref={wrapperRef}>
      <Button isActive={isOpen} onClick={() => setIsOpen(!isOpen)} right={right}>
        {`${title}${!!selected ? (': ' + selected.label) : ''}`}
      </Button>

      <DropDown isOpen={isOpen}>
        {options.map((option, i) => (
          <DropDownItem
            key={i}
            onClick={() => handleDropdownClick(option)}
          >
            <span>{option.label}</span>
            {selected?.value === option.value && <Check>✓</Check>}
          </DropDownItem>
        ))}
      </DropDown>
    </ButtonWrapper>
  )
};

export default DropDownButton;
