import React, { forwardRef, ForwardedRef } from "react";
import "./drop-down-content.scss";
interface DropdownContentProps {
  children: React.ReactNode;
  open: boolean;
  top?: number | null;
}

const DropdownContent = forwardRef(
  (
    { children, open, top }: DropdownContentProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        className={`dropdown-content ${open ? "content-open" : ""}`}
        style={{ top: top !== undefined ? `${top}px` : "100%" }}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

export default DropdownContent;
