import React, { forwardRef } from "react";

interface DropDownInputProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  isDisable: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDownInput = forwardRef<HTMLInputElement, DropDownInputProps>(
  ({ query, setQuery, isDisable, setSelected, setMenuOpen }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value.trimStart())}
        placeholder="Search or Create tags"
        className="input"
        onFocus={() => setMenuOpen(true)}
        onBlur={() => setMenuOpen(false)}
        onKeyDown={(e) => {
          if (!(e.key === "Enter" && !isDisable)) {
            return;
          }
          setSelected((prev) => [...prev, query]);
          setQuery("");
          setMenuOpen(true);
        }}
      />
    );
  }
);

export default DropDownInput;
