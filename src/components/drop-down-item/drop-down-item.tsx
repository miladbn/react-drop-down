import React from "react";
import "./drop-down-item.scss";
interface DropdownItemProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ children, onClick }) => {
  return (
    <div className="dropdown-item" onClick={onClick}>
      {children}
    </div>
  );
};

export default DropdownItem;
