import { useEffect, useRef, useState } from 'react';
import type { FilterOption } from '../../types';
import { Button, ButtonWrapper, Check, DropDown, DropDownItem } from './style';

interface DropDownButtonProps {
  onChange: (option: FilterOption) => void;
  options: FilterOption[];
  right?: string;
  selected: FilterOption;
  title: string;
}

const DropDownButton = ({
  onChange,
  options,
  right,
  selected,
  title,
}: DropDownButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <ButtonWrapper ref={wrapperRef}>
      <Button
        active={isOpen}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        style={{ marginRight: right }}
        type="button"
      >
        {`${title}: ${selected.label}`}
      </Button>

      <DropDown open={isOpen}>
        {options.map((option) => (
          <DropDownItem
            key={option.value}
            onClick={() => {
              onChange(option);
              setIsOpen(false);
            }}
            type="button"
          >
            <span>{option.label}</span>
            {selected.value === option.value && <Check>✓</Check>}
          </DropDownItem>
        ))}
      </DropDown>
    </ButtonWrapper>
  );
};

export default DropDownButton;
