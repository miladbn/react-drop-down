import React from "react";
import Show from "../show";

interface DropDownMeuProps {
  filteredTags: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDownMeu: React.FC<DropDownMeuProps> = ({
  filteredTags,
  setSelected,
  setQuery,
  setMenuOpen,
}) => {
  return (
    <div className="menu">
      <ul className="w-full">
        <Show when={filteredTags.length > 0}>
          <>
            {filteredTags.map((tag) => (
              <li
                key={tag}
                className="menu-item"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  setMenuOpen(true);
                  setSelected((prev) => [...prev, tag]);
                  setQuery("");
                }}
              >
                {tag}
              </li>
            ))}
          </>
        </Show>
        <Show when={filteredTags.length >= 0}>
          <li className="no-options">No options available</li>
        </Show>
      </ul>
    </div>
  );
};

export default DropDownMeu;
