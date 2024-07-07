import React, { useEffect, useState, useRef } from "react";

import DropdownButton from "../drop-down-button/drop-down-button";
import DropdownContent from "../drop-down-content/drop-down-content";
import "./drop-down.scss";

interface DropdownProps {
  buttonText: string;
  content: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ buttonText, content }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [dropdownTop, setDropdownTop] = useState<number | null>(50);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    if (!open) {
      const spaceRemaining =
        window.innerHeight -
        (buttonRef.current?.getBoundingClientRect().bottom || 0);
      const contentHeight = contentRef.current?.clientHeight || 0;

      const topPosition =
        spaceRemaining > contentHeight
          ? null
          : -(contentHeight - spaceRemaining);
      setDropdownTop(topPosition);
    }

    setOpen((open) => !open);
  };

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [dropdownRef]);

  return (
    <div ref={dropdownRef} className="dropdown">
      <DropdownButton ref={buttonRef} toggle={toggleDropdown} open={open}>
        {buttonText}
      </DropdownButton>
      {
        <DropdownContent top={dropdownTop} ref={contentRef} open={open}>
          {content}
        </DropdownContent>
      }
    </div>
  );
};

export default Dropdown;
