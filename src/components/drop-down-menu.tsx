import React from "react";

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
        {filteredTags.length > 0 ? (
          filteredTags.map((tag) => (
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
          ))
        ) : (
          <li className="no-options">No options available</li>
        )}
      </ul>
    </div>
  );
};

export default DropDownMeu;
