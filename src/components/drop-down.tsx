import { useRef, useState } from "react";
import "./drop-down.scss";

const DropDown: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [selected, setSelected] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState<boolean>(true);

  const inputRef = useRef<HTMLInputElement>(null);

  const tags: string[] = [
    "Tutorial",
    "HowTo",
    "DIY",
    "Review",
    "Tech",
    "Gaming",
    "Travel",
    "Fitness",
    "Cooking",
    "Vlog",
  ];

  const filteredTags = tags.filter(
    (item) =>
      item.toLocaleLowerCase().includes(query.toLocaleLowerCase().trim()) &&
      !selected.includes(item)
  );

  const isDisable =
    !query.trim() ||
    selected.some(
      (item) =>
        item.toLocaleLowerCase().trim() === query.toLocaleLowerCase().trim()
    );

  return (
    <div className="container">
      <div className="relative w-80 h-96 text-sm">
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
        <div className="card">
          <DropDownInput
            ref={inputRef}
            query={query}
            setQuery={setQuery}
            isDisable={isDisable}
            setSelected={setSelected}
            setMenuOpen={setMenuOpen}
          />
        </div>
        {menuOpen && (
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
        )}
      </div>
    </div>
  );
};

export default DropDown;
