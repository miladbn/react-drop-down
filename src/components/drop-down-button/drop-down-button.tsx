import { forwardRef, ReactNode, MouseEventHandler } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./drop-down-button.scss";
interface DropdownButtonProps {
  children: ReactNode;
  toggle: MouseEventHandler<HTMLDivElement>;
  open: boolean;
}

const DropdownButton = forwardRef<HTMLDivElement, DropdownButtonProps>(
  ({ children, toggle, open }, ref) => {
    return (
      <div
        onClick={toggle}
        className={`dropdown-btn ${open ? "button-open" : ""}`}
        ref={ref}
      >
        {children}
        <span className="toggle-icon">
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
    );
  }
);

export default DropdownButton;
