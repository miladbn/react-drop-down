import React from "react";

interface DropDownSelectProps {
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  inputRef: React.RefObject<HTMLInputElement>;
}

const DropDownSelect: React.FC<DropDownSelectProps> = ({
  selected,
  setSelected,
  inputRef,
}) => {
  return (
    <>
      {selected.length > 0 && (
        <div className="tag-container">
          {selected.map((tag) => (
            <div key={tag} className="tag">
              {tag}
              <div
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => setSelected(selected.filter((i) => i !== tag))}
              >
                {/* <Icons.Close /> */}
              </div>
            </div>
          ))}
          <div
            className="clear"
            onClick={() => {
              setSelected([]);
              inputRef.current?.focus();
            }}
          >
            Clear all
          </div>
        </div>
      )}
    </>
  );
};

export default DropDownSelect;
